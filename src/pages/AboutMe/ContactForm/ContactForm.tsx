import { FunctionComponent, useCallback, useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.tsx';
import { Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const formSchema = z.object({
	email: z.string().email({ message: i18next.t('aboutMe.contactForm.inputField.alert') }),
	message: z.string()
});

type FormSchemaType = z.infer<typeof formSchema>;

export const ContactForm: FunctionComponent = () => {
	const { t } = useTranslation();
	const [emailSent, setEmailSent] = useState<boolean>(false);
	const form = useForm<FormSchemaType>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			message: ''
		}
	});

	const onSubmit = useCallback(async (values: FormSchemaType) => {
		const controller = new AbortController();
		const jsonHeader = new Headers();
		jsonHeader.append('Content-Type', 'application/json');

		const request = new Request('http://localhost:3000/email/send', {
			method: 'POST',
			body: JSON.stringify(values),
			headers: jsonHeader,
			signal: controller.signal
		});

		try {
			const response = await fetch(request);

			if (!response.ok) {
				controller.abort();
				throw new Error(`Response status: ${response.status}`);
			}

			const result = await response.json();

			if (result.emailSent) {
				controller.abort();
				setEmailSent(true);
			}
		} catch (error) {
			controller.abort();
			console.error(error);
		}
	}, []);

	return (
		<div className="mt-16">
			{emailSent && (
				<Alert>
					<Terminal className="h-4 w-4" />
					<AlertTitle>{t('aboutMe.contactForm.successMessage.headline')}</AlertTitle>
					<AlertDescription>{t('aboutMe.contactForm.successMessage.text')}</AlertDescription>
				</Alert>
			)}
			{!emailSent && (
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t('aboutMe.contactForm.inputField.label')}</FormLabel>
									<FormControl>
										<Input
											placeholder={t('aboutMe.contactForm.inputField.placeholder')}
											{...field}
										/>
									</FormControl>
									<FormDescription>{t('aboutMe.contactForm.inputField.subtitle')}</FormDescription>
									{/*<FormMessage>{t(Error.message)}</FormMessage>*/}
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t('aboutMe.contactForm.textarea.label')}</FormLabel>
									<FormControl>
										<Textarea placeholder={t('aboutMe.contactForm.textarea.label')} {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">{t('aboutMe.contactForm.button.text')}</Button>
					</form>
				</Form>
			)}
		</div>
	);
};

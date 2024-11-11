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

const formSchema = z.object({
	email: z.string().email(),
	message: z.string()
});

type FormSchemaType = z.infer<typeof formSchema>;

export const ContactForm: FunctionComponent = () => {
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

	console.log('emailSent', emailSent);

	return (
		<div className="mt-16">
			{emailSent && (
				<Alert>
					<Terminal className="h-4 w-4" />
					<AlertTitle>Your Email is be sent</AlertTitle>
					<AlertDescription>
						Your Email is sent and you also get a copy of your email.
					</AlertDescription>
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
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder="Email" {...field} />
									</FormControl>
									<FormDescription>I'll never share your email.</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Your message</FormLabel>
									<FormControl>
										<Textarea placeholder="Your message" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">Submit</Button>
					</form>
				</Form>
			)}
		</div>
	);
};

// src/actions/index.ts
import {defineAction, z} from 'astro:actions';

export const server = {
	contactForm: defineAction({
		accept: 'form',
		input: z.object({
			firstName: z.string().min(1, {message: 'First name is required'}),
			lastName: z.string().min(1, {message: 'First name is required'}),
			phoneNumber: z.string().min(1, {message: 'Phone number is required'}),
			email: z.string().email({message: 'Email is required'}),
			message: z.string().min(1, {message: 'Message is required'}),
			location: z.enum(['first', 'second', 'third'], {
				message: 'Location is required',
			}),
		}),
		handler: async (data) => {
			// Send email, save to database, etc.
			console.log(data);
			return {status: 200, body: 'Success'};
		},
	}),
};

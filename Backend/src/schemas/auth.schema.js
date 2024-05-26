import {z} from "zod";

export const registerSchema = z.object({
    firstName: z.string({
        required_error: "firstname is required",
    }),
    lastName: z.string({
        required_error: "lastname is required",
    }),
    username: z.string({
       required_error: "Username is required",
    }),email: z.string({
      required_error: "Email is required",
    }).email({
      message: "Invalid email",
    }),
    password: z.string({
      required_error: "Password is required",
    }).min(6, {
      message: "Password must be at least 6 characters",
    }),
    address: z.string({
        required_error: "Address is required",
    }),
});

export const loginSchema = z.object({
  email: z.string({
    required_error: "Email is required",
  }).email({
    message: "Invalid email",
  }),
  password: z.string({
    required_error: "Password is required",
  }).min(6,{
    message: "Password must be at least 6 characters",
  }),
});

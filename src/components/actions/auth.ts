"use server";

import { z } from "zod";

// move this to another file
const SignUpSchema = z.object({
  firstName: z.string().min(2).max(20),
  lastName: z.string().min(2).max(40),
  email: z.string().email(),
});

export default async function signupAction(prevState: any, formData: FormData) {
  const validatedFields = SignUpSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validatedFields.data),
  });

  if (!response.ok) {
    throw new Error("Failed to sign up");
  }

  return {
    message: "Please enter a valid email",
  };
}

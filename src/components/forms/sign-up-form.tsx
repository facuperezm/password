"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { useFormState, useFormStatus } from "react-dom";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import api from "@/app/api";
import signupAction from "../actions/auth";
import { ToastAction } from "../ui/toast";

const authSchema = z.object({
  firstName: z.string().min(2).max(20),
  lastName: z.string().min(2).max(20),
  email: z.string().email(),
});

const initialState = {
  message: "",
};

export default function SignUpForm() {
  // const [state, formAction] = useFormState(signupAction, initialState);

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });
  const { toast } = useToast();

  function onSubmit(data: z.infer<typeof authSchema>) {
    try {
      api.auth.signup(data).then(
        (response) => {
          toast({
            title: "Check your email! ",
            description: `A “magic link” has been emailed to you at ${data.email}, containing a link you can click to sign up. It should show up in your inbox within 30 seconds or so.`,
            action: <ToastAction altText="Close">Close</ToastAction>,
          });
        },
        (error) => {
          toast({
            title: "Error",
            description: "Please enter a valid email",
            action: <ToastAction altText="Close">Close</ToastAction>,
          });
        }
      );
    } catch (error) {
      toast({
        title: "Error",
        description: "Please enter a valid email",
        action: <ToastAction altText="Close">Close</ToastAction>,
      });
    }
  }

  return (
    <Form {...form}>
      <form
        // action={formAction}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input placeholder="Josecito" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input placeholder="Szycho" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="email@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="*****" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        {/* <FormField
          control={form.control}
          name="repeatedPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Repeat password</FormLabel>
              <FormControl>
                <Input placeholder="*****" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

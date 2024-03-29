import { Metadata } from "next";
import Link from "next/link";

import { UserAuthForm } from "@/components/forms/user-auth-form";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to PassKey",
};

export default function SignInPage() {
  return (
    <>
      <div className="p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Sign in to PassKey
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to sign in
            </p>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </>
  );
}

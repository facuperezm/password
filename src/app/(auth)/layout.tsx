import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Sign up to PassKey",
  description: "Create an account to manage your passwords securely.",
};

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="container px-6 relative h-[800px] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/signin"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-screen flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <Link href="/">
            <div className="relative z-20 flex items-center text-2xl font-bold">
              KeyPass
            </div>
          </Link>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                Password management has never been easier.
              </p>
              <footer className="text-sm">@joseszycho</footer>
            </blockquote>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}

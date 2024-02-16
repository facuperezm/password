import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check your email",
  description: "Check your email for a link to sign in.",
};

export default function CheckEmailPage() {
  return (
    <>
      <div className="p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Please check your email
            </h1>
            <p className="text-sm text-muted-foreground text-pretty">
              If your email address is correct, you will receive a link to sign
              in.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

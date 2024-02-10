"use client";

import { Container } from "@/components/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import VerifyEmailForm from "@/components/verify-email-form";

export default function VerifyEmailPage() {
  return (
    <Container className="max-w-lg">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Confirm your email address</CardTitle>
          <CardDescription>
            Please provide the 6-digit code sent to your email address.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <VerifyEmailForm />
        </CardContent>
      </Card>
    </Container>
  );
}

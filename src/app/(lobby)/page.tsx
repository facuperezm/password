import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Container className="max-w-5xl">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 py-24 text-center md:py-32">
        <h1 className="text-balance text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
          Absolutely easy password management
        </h1>
        <p className="max-w-[42rem] text-pretty leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          We help you manage your passwords securely and easily. No more
          forgotten passwords or insecure password storage.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="outline" asChild>
            <Link href="/">
              Create your account
              <span className="sr-only">Create your account</span>
            </Link>
          </Button>
        </div>
      </section>
    </Container>
  );
}

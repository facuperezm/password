import CardSpotlight from "@/components/animated-card";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <Container className="max-w-5xl">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 pt-24 pb-20 text-center md:pt-32 md:pb-20">
        <h1 className="text-balance text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
          Absolutely easy password management
        </h1>
        <p className="max-w-[42rem] text-pretty leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          We help you manage your passwords securely and easily. No more
          forgotten passwords or insecure password storage.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="outline" asChild>
            <Link href="/signup">I want my passwords secure</Link>
          </Button>
        </div>
      </section>
      <section className="grid grid-cols-1 grid-rows-[repeat(6,minmax(0,1fr))] gap-2 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-4">
        <CardSpotlight
          title="Secure"
          description=" We help you manage your passwords securely and easily. No more
              forgotten passwords or insecure password storage."
        />
        <CardSpotlight
          title="Easy"
          description="We help you manage your passwords securely and easily. No more
              forgotten passwords or insecure password storage."
        />
        <CardSpotlight
          title="Fast"
          description="We help you manage your passwords securely and easily. No more
              forgotten passwords or insecure password storage."
        />
        <CardSpotlight
          title="Reliable"
          description="We help you manage your passwords securely and easily. No more
              forgotten passwords or insecure password storage."
        />
      </section>
    </Container>
  );
}

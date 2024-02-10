import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function VerifyEmailForm() {
  return (
    <form>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="code">
            Email
          </Label>
          <Input id="number" placeholder="******" />
        </div>
        <Button>Verify email</Button>
      </div>
    </form>
  );
}

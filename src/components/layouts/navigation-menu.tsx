import Link from "next/link";
import { Button } from "../ui/button";

export default function NavigationMenu() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <nav className="container flex items-center justify-between h-16 mx-auto">
        <a href="/" className="flex items-center">
          <span className="ml-2 text-2xl font-bold text-balance">KeyPass</span>
        </a>
        <ul className="flex items-center gap-4">
          <li>
            <Button variant="outline" asChild>
              <Link href="/" className="text-balance">
                Start now
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" asChild>
              <Link href="/" className="text-balance">
                Login
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

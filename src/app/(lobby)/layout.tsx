import NavigationMenu from "@/components/layouts/navigation-menu";

export default async function LobyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <NavigationMenu />
      <main className="flex-1">{children}</main>
    </div>
  );
}

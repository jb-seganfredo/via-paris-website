import { Button } from "./ui/button";

export default function Header() {
  return (
    <div>
      <header className="flex items-center justify-between bg-primary">
        <h1 className="text-2xl font-bold text-primary-foreground">
          Via Paris
        </h1>
      </header>

      <Button variant="outline">Sign up</Button>
    </div>
  );
}

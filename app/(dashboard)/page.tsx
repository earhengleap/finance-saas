import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <p>
      This is an authenticated page.{" "}
      <UserButton afterSignOutUrl="/" />
    </p>
  );
}

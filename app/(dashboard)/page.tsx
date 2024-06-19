"use client";

import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/features/accounts/use-new-account";

export default function Home() {
  const { onOpen } = useNewAccount();

  return (
    <p>
      <Button onClick={onOpen}>Add an account</Button>
    </p>
  );
}

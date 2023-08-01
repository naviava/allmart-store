"use client";

// React and Next.
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// External packages.
import { ShoppingBag } from "lucide-react";

// Custom hooks.
import useCart from "@/hooks/use-cart";

// Components.
import Button from "@/components/ui/button";

export default function NavbarActions() {
  const cart = useCart();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
}

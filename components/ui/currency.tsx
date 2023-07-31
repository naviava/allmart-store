"use client";

// React and Next.
import { useEffect, useState } from "react";

// Lib and utils.
import { priceFormatter } from "@/lib/utils";

interface CurrencyProps {
  value?: string | number;
}

export default function Currency({ value }: CurrencyProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="font-semibold">{priceFormatter.format(Number(value))}</div>
  );
}

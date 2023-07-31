"use client";

// React and Next.
import { useEffect, useState } from "react";

// Components.
import PreviewModal from "@/components/preview-modal";

export default function ModalProvider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <PreviewModal />
    </>
  );
}

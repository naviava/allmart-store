"use client";

// React and Next.
import Image from "next/image";
import { useRouter } from "next/navigation";

// External packages.
import { Expand, ShoppingCart } from "lucide-react";

// Types.
import { Product } from "@/types";

// Custom hooks.
import usePreviewModal from "@/hooks/use-preview-modal";

// Components.
import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";

interface ProductCardProps {
  data: Product;
}

export default function ProductCard({ data }: ProductCardProps) {
  const router = useRouter();
  const previewModal = usePreviewModal();

  function handleClick() {
    router.push(`/product/${data?.id}`);
  }

  function handlePreview(evt: React.MouseEvent<HTMLButtonElement>) {
    evt.stopPropagation();
    previewModal.onOpen(data);
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Product image and actions. */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          fill
          src={data?.images?.[0]?.url}
          alt="Product image"
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              icon={<Expand size={20} className="text-gray-600" />}
              onClick={handlePreview}
            />
            <IconButton
              icon={<ShoppingCart size={20} className="text-gray-600" />}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
      {/* Description. */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price. */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
}

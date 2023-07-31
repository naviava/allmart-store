"use client";

// React and Next.
import { useState } from "react";

// External packages.
import { Plus, X } from "lucide-react";

// Types.
import { Size, Color } from "@/types";

// Components.
import Button from "@/components/ui/button";
import { Dialog } from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";
import Filter from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

export default function MobileFilters({ sizes, colors }: MobileFiltersProps) {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        open={open}
        as="div"
        onClose={onClose}
        className="relative z-40 lg:hidden"
      >
        {/* Backdrop. */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        {/* Dialog box. */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 px-2 shadow-xl">
            {/* Close button. */}
            <div className="flex items-center justify-end">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            {/* Filters. */}
            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

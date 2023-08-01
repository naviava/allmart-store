// External packages.
import { create } from "zustand";
import toast from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

// Types.
import { Product } from "@/types";

interface CartStore {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) return toast("Item already in cart");

        set({ items: [...get().items, data] });
        toast.success("Item added to cart");
      },
      removeItem: (id: String) => {
        set({ items: get().items.filter((item) => item.id !== id) });
        toast.success("Item removed from cart");
      },
      clearCart: () => set({ items: [] }),
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) }
  )
);

export default useCart;

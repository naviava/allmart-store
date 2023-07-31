"use client";

// React and Next.
import { useRouter, useSearchParams } from "next/navigation";

// External packages.
import qs from "query-string";

// Types.
import { Color, Size } from "@/types";

// Components.
import Button from "@/components/ui/button";

// Lib and utils.
import { cn } from "@/lib/utils";

interface FilterProps {
  valueKey: string;
  name: string;
  data: (Size | Color)[];
}

export default function Filter({ valueKey, name, data }: FilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedValue = searchParams.get(valueKey);

  function onClick(id: string) {
    const current = qs.parse(searchParams.toString());
    const query = { ...current, [valueKey]: id };

    if (current[valueKey] === id) query[valueKey] = null;

    const url = qs.stringifyUrl(
      { url: window.location.href, query },
      { skipNull: true }
    );

    router.push(url);
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              onClick={() => onClick(filter.id)}
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                selectedValue === filter.id && "bg-black text-white"
              )}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

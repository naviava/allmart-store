// Types.
import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export default async function getBillboard(id: string): Promise<Billboard> {
  const res = await fetch(`${URL}/${id}`);
  const data = await res.json();

  return data as Billboard;
}

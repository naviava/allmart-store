// Components.
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

// Lib and utils.
import getProducts from "@/services/get-products";
import getBillboard from "@/services/get-billboard";
import ProductList from "@/components/product-list";

export const revalidate = 0;

interface HomePageProps {}

export default async function HomePage({}: HomePageProps) {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("674df82e-92d7-4eb0-8ce2-2e112505e9c4");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}

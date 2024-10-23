import * as React from "react";
import Layout from "../../components/Layouts/Layout";
import ProductGrid from "../../components/ProductGrid";
import { useParams } from "react-router-dom";
import { Products, SubProducts } from "../../defaultData";

const SubProductsPage: React.FC = () => {
  const { id } = useParams();
  const productId = id ? Number(id) : undefined;
  let product = Products?.filter((e) => e?.id === productId);
  let subProduct = SubProducts?.filter((e) => e?.productId === productId);

  return (
    <Layout>
      {product?.length > 0 ? (
        <>
          <div className="flex flex-col text-center gap-5 p-5 items-center justify-center ">
            <h1 className="text-3xl font-bold">{product[0]?.name}</h1>
          </div>
          <ProductGrid itemPathTo="product" products={subProduct} />
        </>
      ) : (
        <h1 className="text-3xl font-bold">Product not found.</h1>
      )}
    </Layout>
  );
};

export default SubProductsPage;

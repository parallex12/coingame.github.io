import * as React from "react";
import Layout from "../../components/Layouts/Layout";
import { useParams } from "react-router-dom";
import { SubProducts } from "../../defaultData";
import CustomCarousel from "../../components/CustomCarousel";

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const productId = id ? Number(id) : undefined;
  const [productData, setProductData] = React.useState<any>(null);

  React.useEffect(() => {
    // Check if productId is valid before filtering
    if (productId !== undefined) {
      const product = SubProducts?.find((e) => e.id === productId);
      setProductData(product);
    }
  }, [productId]); // Add productId to dependencies

  if (!productData) {
    return <div>Loading...</div>; // Optional loading state
  }

  return (
    <>
      <Layout>
        <div className="flex flex-col gap-4 p-5 items-start justify-center ">
          <div>
            <h1 className="text-3xl font-bold">{productData.name}</h1>
            <div className="flex w-full items-center justify-between">
              <p className="text-base font-normal">{productData.description}</p>
              <p className="text-xl text-green font-bold">
                ${productData.price}
              </p>
            </div>
          </div>
          {productData && <CustomCarousel images={productData.images} />}
        </div>
      </Layout>
    </>
  );
};

export default ProductDetail;

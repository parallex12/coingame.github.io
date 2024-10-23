import { ProductGridProps } from "../../Interfaces";
import ProductCard from "../ProductCard";

const ProductGrid: React.FC<ProductGridProps> = ({ products, itemPathTo }) => {

  return (
    <div className="product-grid justify-items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-4 px-4 sm:px-10">
      {products?.map((item, index) => {
        return <ProductCard key={index} {...item} itemPathTo={itemPathTo} />;
      })}
    </div>
  );
};

export default ProductGrid;

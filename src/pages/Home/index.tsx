import * as React from "react";
import Layout from "../../components/Layouts/Layout";
import ProductGrid from "../../components/ProductGrid";
import { Products } from "../../defaultData";

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col text-center gap-5 p-5 items-center justify-center ">
        <h1 className="text-3xl font-bold">¿Cuál será tu creación?</h1>
        <p className="text-base font-normal">
          Selecciona tus fotografías y elige un estilo.
          <br />
          Jiffy se encarga del resto.
        </p>
        <p className="text-base font-normal"></p>
      </div>
      <ProductGrid itemPathTo="sub_products" products={Products} />
    </Layout>
  );
};

export default Home;

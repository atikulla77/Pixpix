import { React } from "react";
import Products from "./Products";
import Brand from "./Brand";

function ProductsBrand() {
  return (
    <div className="my-[20px] screen1:w-[1300px] screen7:w-[94%] w-[100%] mx-auto screen1:flex block justify-between">
      <Products />
      <Brand />
    </div>
  );
}

export default ProductsBrand;

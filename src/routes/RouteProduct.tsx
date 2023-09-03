// import Test from "@/components/Test";
import Lazy from "@/utils/lazies/Lazy";
import { Route } from "react-router-dom";

export default
  <Route>
    <Route path="/products" element={Lazy(() => import("@pages/products/Product"))()}> </Route>
    <Route path="detail" element={Lazy(() => import("@pages/products/productDetails/ProductDetail"))()}></Route>
  </Route>

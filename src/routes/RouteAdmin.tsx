import ProductManager from "@/pages/admin/adminManager/ProductManager";
import UserManager from "@/pages/admin/adminManager/UserManager";
import Lazy from "@/utils/lazies/Lazy";
import { Route } from "react-router-dom";

export default
    <Route path="/admin" element={Lazy(() => import("@pages/admin/Admin"))()}>
        <Route path="productManager" element={<ProductManager />} />
        <Route path="userManager" element={<UserManager />} />
    </Route>
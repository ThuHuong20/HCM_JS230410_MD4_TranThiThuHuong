import axios from "axios";

export default {
    create: async function (formData: FormData) {
        return await axios.post(import.meta.env.VITE_SV_HOST + "products", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    findProductById: async (id: string) => {
        return await axios.get(
            `${import.meta.env.VITE_SV_HOST}/products/${id}`,
        );
    },
    findMany: async function (maxItemPage: number, skipItem: number) {
        return await axios.get(`${import.meta.env.VITE_SV_HOST}/products?maxItemPage=${maxItemPage}&skipItem=${skipItem}`);
    },
    findProductByCategory: async (id: string) => {
        return await axios.get(
            `${import.meta.env.VITE_SV_HOST}/categories/` + id
        );
    }
}
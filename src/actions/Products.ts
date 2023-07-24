import { instance } from "../axios/config";
import { pause } from "../utlis/pause";

export const fetchProducts = () => async (dispatch: any) => {
    dispatch({ type: "product/fetching"})
    try {
        await pause(2000)
        const data = await instance.get("/products");
        dispatch({ type: "product/fetchingSuccess", payload: data });
    } catch (error: any) {
        dispatch({ type: "product/fetchingSFailed", payload: error.message });
    } finally {
        dispatch({ type: "product/fetchingFinally"});
    }
};
export const addProduct = (product: any) => async (dispatch: any) => {
try {
    const data = await instance.post("/products", product);
    dispatch({ type: "product/addProduct", payload: data });
} catch (error: any) {
} finally {
}
};
export const removeProduct = (id: any) => async (dispatch: any) => {
try {
    await instance.delete(`/products/${id}`);
    dispatch({ type: "product/deleteProduct", payload: id });
} catch (error: any) {
} finally {
}
};
export const updateProduct = (product: any) => async (dispatch: any) => {
try {
    const data = await instance.put(`/products/${product.id}`, product);

    console.log(data);
    dispatch({ type: "product/updateProduct", payload: data });
} catch (error: any) {
} finally {
}
};
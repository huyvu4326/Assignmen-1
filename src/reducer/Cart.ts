import { produce } from "immer";

const intialState = {
    items: []
} as { items: any[] };

const cartReducer = (state = intialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            case "cart/add":
                const product = action.payload
                const existProductIndex = draftState.items.findIndex((item: any) => item.id === product.id)
                if (existProductIndex < 0) {
                    draftState.items.push(product);
                } else {
                    draftState.items[existProductIndex].quantity++;
                }
                break;
            case "cart/increase":
                draftState.items.find(item => item.id === action.payload).quantity++;
                break
            case "cart/decrease":
                const currentProduct = draftState.items.find(item => item.id === action.payload);
                currentProduct.quantity--;
                if (currentProduct.quantity < 1) {
                    const confirm = window.confirm('Bạn có muốn xóa sản phẩm này không?')
                    if (confirm) draftState.items = draftState.items.filter(item => item.id !== currentProduct.id)
                }
                break;
            default:
                return state
        }
    })
}
export default cartReducer
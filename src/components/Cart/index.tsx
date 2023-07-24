import { useDispatch, useSelector } from "react-redux";
import { Button } from "..";
import { AiOutlineLine, AiOutlinePlus } from "react-icons/ai";

const Cart = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.cart);
    return (
        <div>
            {items?.map((item) => (
                <div key={item.id}>
                    {item.name}
                    <Button
                        type="primary"
                        onClick={() => dispatch({ type: "cart/decrease", payload: item.id })}
                        icon={<AiOutlineLine />}
                    />
                    <Button
                        type="primary"
                        onClick={() => dispatch({ type: "cart/increase", payload: item.id })}
                        icon={<AiOutlinePlus />}
                    />
                </div>
            ))}
            Total:
            {items.reduce((sum, item) => {
                return sum + item.price * item.quantity;
            }, 0)}
        </div>
    );
};

export default Cart;
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
    return (
        <div>
            <hr className="my-4" />
            <h2 className="font-bold text-2xl">Product List</h2>
            <ProductList />
            <hr className="my-4" />
            <h2 className="font-bold text-2xl">Cart</h2>
            <Cart />
        </div>
    );
}

export default App;
import { MyCartContext } from "../management/Context";
import CartItems from "./CartItems";

const Cart = () => {
  const { cart } = MyCartContext();
  return (
    <div className="shopping-cart">
      <div className="title">สินค้าในตะกร้า</div>
      {cart.map((data) => {
        return <CartItems key={data.id} {...data} />;
      })}

      <div className="footer">ยอดรวม 100 บาท</div>
    </div>
  );
};
export default Cart;

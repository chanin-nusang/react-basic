import CartData from "../data/CartData";
import CartItems from "./CartItems";

const Cart = () => {
  return (
    <div className="shopping-cart">
      <div className="title">สินค้าในตะกร้า</div>
      {CartData.map((data) => {
        return <CartItems key={data.id} {...data} />;
      })}
      <div className="footer">ยอดรวม 100 บาท</div>
    </div>
  );
};
export default Cart;

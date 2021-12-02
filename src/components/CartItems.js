import plus from "../image/plus.svg";
import minus from "../image/minus.svg";
import del from "../image/delete-icn.svg";
import { MyCartContext } from "../management/Context";
const CartItems = ({ id, name, image_url, price, quantity }) => {
  const { removeItem, toggleQuantity, formatNumber } = MyCartContext();
  return (
    <div className="items">
      <div className="product-image">
        <img src={image_url} alt={name} />
      </div>
      <div className="description">
        <span>{name}</span>
        <span>ราคา {formatNumber(price)} บาท</span>
      </div>
      <div className="quantity">
        <button
          className="plus-btn"
          onClick={() => toggleQuantity(id, "increment")}
        >
          <img src={plus} alt=""></img>
        </button>
        <input type="text" value={quantity} disabled></input>
        <button
          className="minus-btn"
          onClick={() => toggleQuantity(id, "decrement")}
        >
          <img src={minus} alt=""></img>
        </button>
      </div>
      <div className="total-price">{formatNumber(quantity * price)}</div>
      <div className="remove">
        <img src={del} alt="" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};
export default CartItems;

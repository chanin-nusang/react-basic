import plus from "../image/plus.svg";
import minus from "../image/minus.svg";
import del from "../image/delete-icn.svg";
const CartItems = ({ id, name, image_url, price, quantity }) => {
  return (
    <div className="items">
      <div className="product-image">
        <img src={image_url} alt={name} />
      </div>
      <div className="description">
        <span>{name}</span>
        <span>ราคา {price} บาท</span>
      </div>
      <div className="quantity">
        <button className="plus-btn">
          <img src={plus} alt=""></img>
        </button>
        <input type="text" value={quantity} disabled></input>
        <button className="minus-btn">
          <img src={minus} alt=""></img>
        </button>
      </div>
      <div className="total-price">{quantity * price}</div>
      <div className="remove">
        <img src={del} alt="" />
      </div>
    </div>
  );
};
export default CartItems;

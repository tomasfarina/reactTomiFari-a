
import './CartWidget.css';

function CartWidget ()  {
  return (
    <div className="cart-widget">
      <img src='../assets/cart.png' width='37px' height='37px'/>
      <div className="qty-display">2</div>
    </div>
  );
};

export default CartWidget;
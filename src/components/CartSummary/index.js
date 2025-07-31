// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const cartTotal = cartList.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.quantity,
        0,
      )
      const totalItems = cartList.length
      return (
        <div className="cart-summary-container">
          <h1 className="order-total-text">
            Order Total: <span className="total-amount">Rs {cartTotal}/-</span>
          </h1>
          <p className="total-items">{totalItems} Items in cart</p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

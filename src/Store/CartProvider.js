import CartContext from './cart-context';

const CartProvider = props => {

    const addItemToCartHandler = item => {}

    const removeItemFromCartHandler = id => {}

const CartContext={
    items:[],
    totalAmount:0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
}

return(<CartProvider value={CartContext}>
    {props.children}
</CartProvider>)

};
export default CartProvider;
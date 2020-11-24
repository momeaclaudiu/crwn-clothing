export const addItemToCart = (cartItems, cartItemsToAdd) => {
   const exisitingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemsToAdd.id
   );

   if(exisitingCartItem) {
      return cartItems.map(cartItem => 
         cartItem.id === cartItemsToAdd.id
         ? {...cartItem, quantity: cartItem.quantity + 1}
         : cartItem   
      )
   }

   return [...cartItems, {...cartItemsToAdd, quantity: 1}];
};
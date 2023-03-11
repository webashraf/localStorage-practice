const addProduct = () =>{
      const pName = document.getElementById('pName');
      const pQty = document.getElementById('pQty');
      showProductInUI(pName.value, pQty.value);
      setStoredShoppingCart(pName.value, pQty.value);
      pName.value = '';
      pQty.value = '';
}

const showProductInUI = (name, value) =>{
      const prodactUl = document.getElementById('display-product');
      const li = document.createElement('li');
      li.innerText = `${name} : ${value}`;
      prodactUl.appendChild(li);
}

const getStoredShoppingCart = () =>{
      let shoppingCart = {};
      const storedCart = localStorage.getItem('shoppingCart');
      return storedCart ?  shoppingCart = JSON.parse(storedCart) : shoppingCart;
}

const setStoredShoppingCart = (product, qty) =>{
      const cart = getStoredShoppingCart();
      cart[product] = qty;
      const cartStringifyed = JSON.stringify(cart);
      localStorage.setItem('shoppingCart', cartStringifyed);
}

const displayStoredCart = () =>{
      const cart = getStoredShoppingCart();
      for (const cartItem in cart) {
            const quantity = cart[cartItem]
            showProductInUI(cartItem, quantity)
      }
}
displayStoredCart();

let count = localStorage.getItem('count');
const countFunc = () =>{
      // countBtn.innerText = count++;
      localStorage.setItem('count', count++);
      setCount()
}
const setCount = () => {
      const countBtn = document.getElementById('countBtn');
      countBtn.innerText = localStorage.getItem('count');
}
setCount()
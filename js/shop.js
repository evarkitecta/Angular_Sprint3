
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];
//Añado función para limpiar los valores iniciales del carrito que vienen por defecto
cleanCart();
var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    let aLen = products.length;
    let found = false;
    for (let i = 0; i < aLen && !found; i++) {
        if (id === products[i].id) {
            cartList.push(products[i]);
            found = true;
        }
    }
    document.getElementById("count_product").innerHTML = cartList.length;
    total = calculateTotal();
    document.getElementById("total_price").innerHTML = total.toFixed(2);
   
    console.log("Ex:1 cartList:", cartList);
   }

// Exercise 2
function cleanCart() {
    cartList.length = 0;
    cart.length = 0;
    total = calculateTotal();
    document.getElementById("cart_list").innerHTML = "";
    document.getElementById("total_price").innerHTML = total.toFixed(2);
    document.getElementById("count_product").innerHTML = cartList.length;

    console.log("Ex:2 cartList cleanCart()", cartList);
    console.log("Ex:2 cart cleanCart()", cartList);
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total = 0;
    let aLen = cartList.length;
    for (let i = 0; i < aLen; i++) {
        total += cartList[i].price;
    }

    console.log("Ex:3 calculateTotal():", Number(total.toFixed(2)));
    return total;
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    let aLen = cartList.length;
    cart.length = 0;

    for (let i = 0; i < aLen; i++) {
        let found = false;

        // Si el producto ya existe en el carrito (cart)
        for (let j = 0; j < cart.length && !found; j++) {
            if (cartList[i].id === cart[j].id) {
                cart[j].quantity++;
                cart[j].subtotal = cart[j].quantity * cart[j].price;
                found = true;
            }
        }
        
        // Si el producto no existe en el carrito (cart);
        if (!found) {
            cartList[i].quantity = 1;
            cartList[i].subtotal = cartList[i].quantity * cartList[i].price;
            cart.push(cartList[i]);
        }
    }

    console.log("Ex:4 generateCart():", cart);

}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}
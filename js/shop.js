//Resetear los valores iniciales del carrito que vienen por defecto
// document.getElementById("cart_list").innerHTML = "";
// document.getElementById("total_price").innerHTML = "";
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];
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
//Resetear propiedades
function deleteProperties() {
    let aLen = cart.length;
    for (let i = 0; i < aLen; i++) {
        delete cart[i].subtotal;
        delete cart[i].subtotalWithDiscount;
        delete cart[i].priceWithDiscount;
        delete cart[i].quantity
    }
}

function cleanCart() {
    deleteProperties();
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
// function calculateTotal() {
//     // Calculate total price of the cart using the "cartList" array
//     total = 0;
//     let aLen = cartList.length;
//     for (let i = 0; i < aLen; i++) {
//         total += cartList[i].price;
//     }

//     console.log("Ex:3 calculateTotal():", Number(total.toFixed(2)));
//     return total;
// }

function calculateTotal() {
    // Calculate total price of the cart using the "cart" array
    total = 0;
    let aLen = cart.length;
    for (let i = 0; i < aLen; i++) {
        total += cart[i].subtotalWithDiscount !== undefined ? cart[i].subtotalWithDiscount : cart[i].subtotal;
    }
    console.log("Ex:6 calculateTotal():", Number(total.toFixed(2)));
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
    applyPromotionsCart();
    printCart();
}

// Exercise 5
//Resetear atributos de cart específicos para la aplicación de promociones
function resetPromotionsCart(){
    let aLen = cart.length;
    for (let i = 0; i < aLen; i++) {
        delete cart[i].subtotalWithDiscount;
        delete cart[i].priceWithDiscount;
    }
 }
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    resetPromotionsCart()

    for (let i = 0; i < cart.length; i++) {
        let product = cart[i];
        
        //Product with discount= Cooking oil
        if (product.id === 1 && product.quantity >= product.offer.number) {
            product.priceWithDiscount = 10;
            product.subtotalWithDiscount = product.priceWithDiscount * product.quantity;
            //Product with discount= instant cupcake mixture
        } else if (product.id === 3 && product.quantity >= product.offer.number) {
            product.priceWithDiscount = product.price * (2 / 3);
            product.subtotalWithDiscount = product.priceWithDiscount * product.quantity;
        } 
    }
    // console.log("Ex:5 applyPromotionsCart():", cart);
}

// Exercise 6

function setUpCounterCart() {
    let aLen = cart.length;
    let counterCart = 0;
    for (let i = 0; i < aLen; i++) {
        counterCart += cart[i].quantity;
    }
    document.getElementById('count_product').innerHTML = counterCart;
}

function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    //Reset 
    document.getElementById("cart_list").innerHTML = "";
    document.getElementById("total_price").innerHTML = total.toFixed(2);

    applyPromotionsCart();
    total = calculateTotal();
    let aLen = cart.length;
    let result = "";

    if (aLen > 0) {

        for (let i = 0; i < aLen; i++) {
            let product = cart[i];
            result = ""
            result += `<tr> <th scope="row">${product.name}</th>`;
            result += `<td>${product.priceWithDiscount !== undefined ? (product.priceWithDiscount).toFixed(2) : (product.price).toFixed(2)} </td>`;
            result += `<td>${product.quantity}</td>`;
            result += `<td>$${product.subtotalWithDiscount !== undefined ? (product.subtotalWithDiscount).toFixed(2) : (product.subtotal).toFixed(2)} </td>`;

            // Exercise 9
            result += `<td><button type="button" onclick="addToCart(${product.id})" class="btn btn-dark p-0 mx-1" style="width: 2rem">+</button>`
            result += `<button type="button" onclick="removeFromCart(${product.id})" class="btn btn-dark p-0 mx-1" style="width: 2rem">-</button></td> </tr> `

            document.getElementById("cart_list").innerHTML += result;
        }
        document.getElementById("total_price").innerHTML = total.toFixed(2);
    }
   
    setUpCounterCart();
}


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

    //Buscar si existe el id en cart
    let product;
    let found = false;
    for (let i = 0; i < cart.length; i++) {
        if (id === cart[i].id) {
            found = true;
            product = cart[i];
        }
    }
    //si existe: 
    if (found) {
        product.quantity++;
        product.subtotal = product.quantity * product.price;
    } else {
        //Buscar dentro del array productos el id seleccionado para entrarlo en cart
        for (let j = 0; j < products.length; j++) {
            if (id === products[j].id) {
                products[j].quantity = 1;
                products[j].subtotal = products[j].quantity * products[j].price;
                cart.push(products[j]);
            }
        }
    }
    console.log("Ex:8 cart:", cart);
    printCart();
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    //Buscar dentro del array cart el id del producto recibido
    let substract = cart.find(product => product.id === id);
    console.log("cart:", cart);
    if (substract.quantity === 1) {
        cart.splice(substract, 1);
        // calculateTotal()
    } else {
        substract.quantity--;
        substract.subtotal = substract.quantity * substract.price;
    }
    printCart();
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}
const itemName = "Lamp";
let itemPrice = 20;
let quantity = 2;
const taxRate = 0.075;

subtotal = itemPrice * quantity;
tax = subtotal * taxRate;
finalTotal = subtotal + tax;

console.log(`You are buying ${quantity} ${itemName}(s). Your final total including tax is: $${finalTotal} `)
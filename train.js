let realName = prompt("Insert your Name and Surname");
let age = parseInt(prompt("Insert your age"));

if (isNaN(age)) {
    alert("You must prompt a valid number value.");
    age = prompt("Insert your age");
}

let distance = parseInt(prompt("Insert distance to travel in Km"));

if (isNaN(distance)) {
    alert("You must prompt a valid number value.");
    distance = prompt("Insert distance to travel in Km");
}


// Sanitize Prompt Boxes

const ticketPrice = 0.21;
let totalPrice;
let discountPrice;



function insertHtml (id, value) {
    document.getElementById(id).innerHTML = value;
}

totalPrice = ticketPrice * distance;

// Apply 20% Discount if <18
if (age < 18) {
   discountPrice = totalPrice - (totalPrice * 20 / 100);
   insertHtml("discount", "<b>Discounted Price:</b> " + discountPrice);
}

// Apply 40% Discount if >=18
if (age >= 65) {
    discountPrice = totalPrice - (totalPrice * 40 / 100);
    insertHtml("discount", "<b>Discounted Price:</b> " + discountPrice);
}

// If none of the Above return normal Price
if (!(age < 18 || age >= 65)) {
    discountPrice = totalPrice;
}

insertHtml("name", realName);
insertHtml("age", age);
insertHtml("distance", distance);
insertHtml("price", discountPrice.toFixed(2) + "€");

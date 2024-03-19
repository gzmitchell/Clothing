// let add = document.querySelector(".add");
let image = document.querySelector(".imgInput");
let clothingName = document.querySelector(".clothingInput");
let price = document.querySelector(".priceInput");
let webLink = document.querySelector(".webInput");

console.log("Hello");

let display = document.querySelector(".display");

let piece1 = {
  image:
    "https://d2fxao6r6rh9a0.cloudfront.net/media/catalog/product/cache/230da35529b8f597c7780d149b47f4f5/s/c/screen_shot_2017-03-12_at_2.43.25_pm.png",

  clothing_name: "Black Pants",
  web_link: "https://www.youtube.com/watch?v=Zs5D8qc15ec",
  price: "$20",
};

let piece2 = {
  image:
    "https://www.dapperboi.com/cdn/shop/products/dapper-boi-shirts-grey-melange-zip-hoodie-31045050335405.png?v=1637784592",

  clothing_name: "Gray Hoodie",

  web_link: "https://www.youtube.com/watch?v=Zs5D8qc15ec",
  price: "$12",
};

let piece3 = {
  image:
    "https://www.klarna.com/sac/product/640x640/3009895218/Converse-Chuck-70-High-Top-Utility-Green-Egret-Black.jpg?ph=true ",

  clothing_name: "Brown Chuck 70's",

  web_link: "https://www.youtube.com/watch?v=Zs5D8qc15ec",
  price: "$70",
};

let outfit = [piece1, piece2, piece3];
console.log(outfit);

function addFitInfo() {
  let imageValue = image.value;
  let nameValue = clothingName.value;
  let linkValue = webLink.value;
  let priceValue = price.value;
  console.log(imageValue);
  console.log(linkValue);
  console.log(priceValue);

  let newFit = {
    image: imageValue,
    clothing_name: nameValue,
    web_link: linkValue,
    price: priceValue,
  };
  outfit.push(newFit);
  console.log(outfit);
}

function emptyDisplay() {
  display.innerHTML = "";
}

function displayFitInfo() {
  outfit.forEach(function (item) {
    display.insertAdjacentHTML(
      "beforeend",
      `
      <div>
      <img src=${item.image}>
     <p> ${item.clothing_name}</p>
     <a href =${item.web_link}target="_blank">Click</a>
      <p>${item.price}</p>
      </div>    `
    );
  });
}

let addButton = document.querySelector(".add");
addButton.onclick = function () {
  emptyDisplay();
  addFitInfo();
  displayFitInfo();
 
};

displayFitInfo();

/* Add any JavaScript you need to this file. */

/* 
I'm sorry, professor.
I just didn't have enough time to implement this portion of the website.
I am half-way done. I'm just having trouble getting my flexboxes to disappear.
I will leave the partial codes I have done here.
*/

var products = [
  {
    "Name": "ESPRESSO",
    "Country": "LATIN AMERICA",
    "Description": "This medium-light roast is a seasonal blend of Latin American and African coffees. A deeply layered modern espresso, with sparkling acidity and fresh fruit sweetness",
    "Price": "$22.00",
    "Category": "Coffee"
  },
  {
    "Name": "DECAF ESPRESSO",
    "Country": "LATIN AMERICA",
    "Description": "The Swiss Water process produces 99.9% caffeine-free coffee with no chemical additives, leaving the flavour of the coffee intact. ",
    "Price": "$22.00",
    "Category": "Coffee"
  },
  {
    "Name": "SWISS WATER DECAF",
    "Country": "LATIN AMERICA",
    "Description": "This medium roast is the decaf version of the seasonal blend of Latin American and African coffees. A deeply layered modern espresso, with sparkling acidity and fresh fruit sweetness",
    "Price": "$22.00",
    "Category": "Coffee"
  },
  {
    "Name": "KONA",
    "Country": "HAWAII",
    "Description": "It takes lush rains, intense sun, volcanic soils and a lot of aloha to create the distinctive characteristics of Kona coffee. This Kona coffee is one of the most prized world wide for their rich aromas, mild, delicate taste, and thick body.",
    "Price": "$22.00",
    "Category": "Coffee"
  },
  {
    "Name": "LAS BRIAS",
    "Country": "COLOMBIA",
    "Description": "Las Brisas is a blend of small coffee growers from the Rioblanco Municipality in the Department of Tolima. The cup is complex and rich with layers of fruit, chocolate depth, and a sweet finish.",
    "Price": "$22.00",
    "Category": "Coffee"
  },
  {
    "Name": "KIUNYU",
    "Country": "KENYA",
    "Description": "This medium roast coffee was produced by various smallholder farmers of the Karithathi Farmers Cooperative Society.",
    "Price": "$22.00",
    "Category": "Coffee"
  },
  {
    "Name": "EL QUIZARRA",
    "Country": "COSTA RICA",
    "Description": "This medium roast coffee always receive an extremely high level of care and have known to be consistent fan favourites for their consistency and unique flavour profiles.",
    "Price": "$22.00",
    "Category": "Coffee"
  },
  {
    "Name": "EL RETIRO",
    "Country": "EL SALVADOR",
    "Description": "El Retiro is a beautifully aromatic and flavourful cup with interesting notes of citrus and baking spices.",
    "Price": "$22.00",
    "Category": "Coffee"
  },
  {
    "Name": "KABIRIZI",
    "Country": "RWANDA",
    "Description": "",
    "Price": "$20.00",
    "Category": "Coffee"
  },
  {
    "Name": "ENGLISH BREAKFAST",
    "Country": "",
    "Description": "This breakfast tea is a blend of organic Assam and Ceylon black teas and has the perfect balance of full- bodied flavours and subtle sweetness.",
    "Price": "$18.00",
    "Category": "Tea"
  },
  {
    "Name": "SENCHA GREEN TEA",
    "Country": "JAPAN",
    "Description": "This sencha green tea tastes rich, refreshing and crisp.Whether you love it for its antioxidants or just plain love it, our organic Japanese Sencha has your back.",
    "Price": "$21.00",
    "Category": "Tea"
  },
  {
    "Name": "MATCHA GREEN TEA",
    "Country": "JAPAN",
    "Description": "Delicately smooth and velvety, with a bright green colour and refreshing taste, this is one of the highest grade matchas on earth.",
    "Price": "$32.00",
    "Category": "Tea"
  }
];

function generateText(text) {
  var p = document.createElement("p");
  var txt = document.createTextNode(text);
  p.appendChild(txt);
  return p;
}

function generateDesc(i) {
  var div = document.createElement("div");
  div.appendChild(generateText(products[i].Name));
  div.appendChild(generateText(products[i].Country));
  div.appendChild(generateText(products[i].Description));
  div.appendChild(generateText(products[i].Price));
  return div;
}

function generateList(i) {
  var myfruits = document.querySelector(`#product-${i}`);
  var orderlist = document.createElement("ol");
  var li_it = document.createElement("li");
  var fruitText = document.createTextNode(fruits);
  li_it.appendChild(fruitText);
  orderlist.appendChild(li_it);
  myfruits.appendChild(orderlist);
}

function generateImage(i) {
  var img = document.createElement("img");
  var svg = `images/product-${i}.svg`;
  img.src = svg;
  return img;
}

function generateProduct(mode) {
  var product = document.querySelector(".flex-item");
  var productDesc = document.querySelector(".product-desc");

  for (var i = 0; i < products.length; i++) {
    if (mode == "main") {
      productDesc.appendChild(generateDesc(i));
    } else if (mode == "coffee") {
      if (products[i].category == "cofee")
        productDesc.appendChild(generateDesc(i));
    } else if (mode == "tea") {
      if (products[i].category == "tea")
        productDesc.appendChild(generateDesc(i));
    }
    product.appendChild(productDesc);
  }
}

window.onload = function () {
  // generateProduct("main");
  document.getElementById("main").onclick = function () { generateProduct("main"); };
  document.getElementById("coffee").onclick = function () { generateProduct("coffee"); };
  document.getElementById("tea").onclick = function () { generateProduct("tea"); };
}



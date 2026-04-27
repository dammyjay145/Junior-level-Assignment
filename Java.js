const products = [" "];
document.getElementById("ListOfProducts").innerHTML = products.join("<br>");

//2. when user clicks add product
function addProduct() {
  const productName = document.getElementById("productName").value;
  products.push(productName);
  document.getElementById("ListOfProducts").innerHTML = products.join("<br>");
  if (productName === "") {
    document.getElementById("ListOfProducts").innerHTML =
      "Please enter a product name";
  }
}

//3. when user clicks remove last product
function removeLastProduct() {
  products.pop();
  document.getElementById("ListOfProducts").innerHTML = products.join("<br>");
}

//4. display all product Using loop
for (let i = 0; i < products.length; i++) {
  document.getElementById("ListOfProducts").innerHTML += products[i] + "<br>";
}

//5.if input is empty show

//6. if array is empty show
const emptyArray = [];
if (emptyArray.length === 0) {
  document.getElementById("ListOfProducts").innerHTML = "No products available";
}

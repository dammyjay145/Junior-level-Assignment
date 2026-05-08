//sorting
const prices = [100, 250, 75, 300, 50];
prices.sort((a, b) => a - b);
document.getElementById("Ascending").innerHTML =
  "Ascending Order: " + prices.join(", ");
prices.reverse();
document.getElementById("Descending").innerHTML =
  "Descending Order: " + prices.join(", ");

//Condition
if (prices.length < 100) {
  const hundreds = prices.filter((price) => price > 100);
  document.getElementById("Hundreds").innerHTML =
    "Prices above 100: " + hundreds;
}

if (prices.length < 100) {
  const hundreds = prices.filter((price) => price <= 100);
  document.getElementById("BelowHundred").innerHTML =
    "Prices below or equal to 100: " + hundreds;
}

//Use Ternary
{
  const prices = [100, 250, 75, 300, 50];
  let text = prices[0] <= 100 ? "Affordable" : "Expensive";
  document.getElementById("PriceStatus").innerHTML = text;
}

//Use logical
{
  const prices = [100, 250, 75, 300, 50, 10];
  const isAffordable = prices[5] < 200 && "Affordable";
  const isExpensive = prices[5] >= 50 && "Expensive";
  document.getElementById("PriceStatus2").innerHTML =
    isExpensive || isAffordable;
}

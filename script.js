"use strict";
exports.__esModule = true;
var mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
function FindTallestMountain(mountains) {
    var maximum = 0;
    var result = "";
    mountains.forEach(function (m) {
        if (m.height > maximum) {
            maximum = m.height;
            result = m.name;
        }
    });
    return result;
}
// -------array method fundtion 
function SortThenTallest(mountains) {
    mountains = mountains.sort(compareNumericDescending);
    var tallGuy = mountains[0].name;
    return tallGuy;
}
var tester = SortThenTallest(mountains);
console.log(tester); // omg it works 
var tallest = FindTallestMountain(mountains);
console.log(tallest);
var products = [
    { name: "Sprite", price: 2.79 },
    { name: "KitKat", price: 1.49 },
    { name: "Banana", price: 1.09 }
];
function calcAverageProductPrice(products) {
    var total = 0;
    products.forEach(function (p) {
        total += p.price;
    });
    var average = (total / (products.length));
    return Number(average.toFixed(2));
}
var avgPrice = (calcAverageProductPrice(products));
console.log(avgPrice);
var inventory = [
    { product: { name: "Motor", price: 10.00 }, quantity: 10 },
    { product: { name: "Sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 },
];
function calcInventoryValue(inventory) {
    var total = 0;
    inventory.forEach(function (i) {
        total += ((i.product.price) * (i.quantity));
    });
    return total;
}
var inventoryTotal = calcInventoryValue(inventory);
console.log(inventoryTotal);
/* SORT METHODS */
function compareNumericAscending(x, y) {
    if (x.height > y.height) {
        return 1;
    }
    if (x.height < y.height) {
        return -1;
    }
    return 0;
}
;
function compareNumericDescending(x, y) {
    if (x.height > y.height) {
        return -1;
    }
    if (x.height < y.height) {
        return 1;
    }
    return 0;
}
;

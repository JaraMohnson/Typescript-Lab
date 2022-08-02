export{} 

/* Tallest Mountain */ 
interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[] = [
    {name: "Kilimanjaro", height: 19341},
    {name: "Everest", height: 29029},
    {name: "Denali", height: 20310}
]

function FindTallestMountain(mountains: Mountain[]):string {

    let maximum = 0; 
    let result = "";
    mountains.forEach((m:Mountain) => {
        if (m.height > maximum) {
            maximum = m.height;
            result = m.name
        }
    });
    return result;
}

// -------array method fundtion 
function SortThenTallest (mountains: Mountain[]):string {
   mountains= mountains.sort(compareNumericDescending)
    let tallGuy = mountains[0].name;
    return tallGuy;
}

let tester = SortThenTallest(mountains)
console.log(tester); // omg it works 

let tallest:string = FindTallestMountain(mountains);
console.log(tallest);


/* Products */ 
interface Product {
    name: string;
    price: number;
}

let products: Product[] = [
    {name: "Sprite", price: 2.79},
    {name: "KitKat", price: 1.49}, 
    {name: "Banana", price: 1.09 }
]
function calcAverageProductPrice(products: Product[]): number {
    let total = 0;
    products.forEach((p: Product) => {
        total += p.price;
    })
    let average:number = (total / (products.length))
    return Number(average.toFixed(2));
}

let avgPrice:number = (calcAverageProductPrice(products));
console.log(avgPrice);



/* Inventory */ 
interface InventoryItem { 
    product: Product,
    quantity: number;
}

let inventory: InventoryItem[] = [
    {product: {name: "Motor", price: 10.00}, quantity: 10}, 
    {product: {name: "Sensor", price: 12.50}, quantity: 4}, 
    {product: {name: "LED", price: 1.00}, quantity: 20}, 
]

function calcInventoryValue(inventory: InventoryItem[]): number {
    let total: number = 0;
    inventory.forEach((i: InventoryItem) => {
        total += ((i.product.price) * (i.quantity))
    })
    return total;
}

let inventoryTotal = calcInventoryValue(inventory);
console.log(inventoryTotal);

/* SORT METHODS */ 
function compareNumericAscending (x,y) {
    if (x.height > y.height) {
        return 1;
    }

    if (x.height < y.height) {
        return -1;
    }
    return 0;
};

function compareNumericDescending (x,y) {
    if (x.height > y.height) {
        return -1;
    }

    if (x.height < y.height) {
        return 1;
    }
    return 0;
}; 
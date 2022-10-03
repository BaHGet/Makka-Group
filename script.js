

let mainContainer;
let itemsContainer = [];
const itemsDb = 
    [
        {
            id :0,
            name: 'Brilliant Touch Shower Gel With Moisturizer And BLUEBERRY Scent 1000ml',
            src:"https://m.media-amazon.com/images/I/61BfdZUOKdL._AC_UL320_.jpg",
            price:39,
            currency:'EGP'
        },
        {
            id :1,
            name: 'Raw African Pinacolada Shower Gel,500ml',
            src:"https://m.media-amazon.com/images/I/41KWBWGP0WL._AC_UL320_.jpg",
            price:80,
            currency:'EGP'
        },
        {
            id :2,
            name: 'NIVEA MEN DEEP Shower Gel 3in1, Micro-Fine Clay, Woody Scent, 250ml',
            src:"https://m.media-amazon.com/images/I/71jOFbwquUL._AC_UL320_.jpg",
            price:29,
            currency:'EGP'
        },
        {
            id :3,
            name: 'Shower Gel Twist Berry 500 ML',
            src:"https://m.media-amazon.com/images/I/51Ay1BVQXkL._AC_UL320_.jpg",
            price:29,
            currency:'EGP'
        }
    ]  

const makeItmes = () =>{
    mainContainer = document.querySelector('.main-container');

    itemsDb.map(item =>{
        const itemDiv = document.createElement('div');
        itemDiv.classList.add("item");
        itemDiv.id = item.id;
        mainContainer.appendChild(itemDiv);

        const img = document.createElement('img');
        img.className = "item-image"
        img.src = item.src
        itemDiv.appendChild(img);

        const itemName = document.createElement('h2');
        itemName.className = "item-name"
        itemName.textContent = item.name;
        itemDiv.appendChild(itemName);
        
        const itemPrice = document.createElement('h2');
        itemPrice.className = "item-price"
        itemPrice.textContent = item.price;
        itemDiv.appendChild(itemPrice);
    })
}


const body = document.querySelector('body');
body.onload = makeItmes()
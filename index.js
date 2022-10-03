let header;
let mainContainer;
let footer;
const itemsDb =
[
    {
        id :0,
        name: 'أمان مطهر ارضيات',
        src:"./images/images-src/AMAn.png",
        price:110,
        currency:'EGP'
    },
    {
        id :1,
        name: 'Beauty Hand Wash',
        src:"./images/images-src/beaity hand wish.png",
        price:80,
        currency:'EGP'
    },
    {
        id :2,
        name: 'silver mac',
        src:"./images/images-src/silver mac (باعربي).png",
        price:29,
        currency:'EGP'
    },
    {
        id :3,
        name: 'فِنيك',
        src:"./images/images-src/جركن اسود.png",
        price:29,
        currency:'EGP'
    },
    {
        id :4,
        name: 'كلورماك',
        src:"./images/images-src/كلورماك.png",
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



window.onload = () => {
    makeItmes()
    header = document.querySelector('nav');
    header.style ='opacity: 1;visibility: visible;'
    mainContainer = document.querySelector('.main-container');
    mainContainer.style ='opacity: 1;visibility: visible;'
    footer =  document.querySelector('footer');
    footer.style ='opacity: 1;visibility: visible;'
}
let header;
let mainContainer;
let footer;
const itemsDb = 
    [
        {
            id :0,
            name: 'Laptops',
            src: "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/BAU/xcm_banners_186x116-zu7b8-5oc5y_372x232_eg-ar._SY116_CB630519313_.jpg",
            price:39,
            currency:'EGP'
        },
        {
            id :1,
            name: 'Monitors',
            src: "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/BAU/xcm_banners_186x116-zu7b8-1zcv3-9a69m_372x232_eg-ar._SY116_CB630519533_.jpg",
            price:80,
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
body.onload = () => {
    makeItmes()
    header = document.querySelector('nav');
    header.style ='opacity: 1;visibility: visible;'
    mainContainer = document.querySelector('.main-container');
    mainContainer.style ='opacity: 1;visibility: visible;'
    footer =  document.querySelector('footer');
    footer.style ='opacity: 1;visibility: visible;'
}
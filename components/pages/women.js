const createItemMarkup = (item) => {
    return `
    <li class="listItem">
    <h2 class="listItemTitle">${item.title}</h2>
    <div class="listItemImgContainer">
        <img src=${item.src} alt="${item.title}" class="listItemImg">
    </div>
    <p class="listItemDescription">Explore now</p>
    <div class="order">
        <p class="listItemPrice"><b>Price: </b>${item.price} $</p>
        <div class="listItemCart">
            <img src="../../assets/cart-3.png" alt="cartIcon" data-image="cart"  data-category=${item.category} data-id=${item.id} class="listItemCartIMG">
        </div>
    </div>
    </li>
    `
}

export const createMarkup = (data) => {
    let markup = '';
    for (const item of data) {
        markup += createItemMarkup(item);
    }
    return markup;
}
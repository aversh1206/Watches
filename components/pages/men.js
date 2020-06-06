const createItemMarkup = (item) => {
    return `
    <li class="listItem">
    <div class="conta">
        <div class="listItemImgContainer">
            <img src=${item.url} alt="${item.title}" class="listItemImg">
        </div>
        <h2 class="listItemTitle">${item.title}</h2>
        <p class="listItemDescription">Explore now</p>
        <div class="order">
                <p class="listItemPrice"><b>Price: </b>${item.price} $</p>
            <div class="listItemCart">
                <img src="../../assets/cart-2.png" alt="cartIcon" data-image="cart"  data-category=${item.category} data-id=${item.id} class="listItemCartIMG">
            </div>
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
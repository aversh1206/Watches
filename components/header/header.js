import { createMarkup } from '../pages/men.js';
import { men, women, sale } from '../../data.js';
import { addProduct } from '../cart/cart.js';
import { openCart } from '../modal/modal.js'


const header = () => {
    const navigationList = document.querySelector('.navigationList'); //ul
    const listItems = document.querySelector('.listItems'); //ul
    const user = document.querySelector('.user');
    console.log(listItems)
    const headerCart = document.querySelector('.modalCart');
    headerCart.addEventListener('click', openCart);

    const currentActivePage = document.querySelector('.activeLink'); //a
    const currentPageName = document.querySelector('.currentPageName'); //p
    listItems.innerHTML = createMarkup(men);


    const setActiveLink = (event) => {
        if (event.target === event.currentTarget) {
            return
        }
        const currentActiveLink = document.querySelector('.activeLink');
        currentActiveLink && currentActiveLink.classList.remove('activeLink');
        event.target.classList.add('activeLink');

        switch (event.target.dataset.page) {
            case 'men':
                listItems.innerHTML = createMarkup(men);
                break;
            case 'women':
                listItems.innerHTML = createMarkup(women)
                break;
            case 'sale':
                listItems.innerHTML = createMarkup(sale)
                break;
            default:
                break;
        }
    }

    const setUser = (event) => {
        event.currentTarget.classList.toggle('activeUser');
    }

    const addToCart = (event) => {
        console.log(event.target)
        if (event.target.dataset.category) {
            const category = event.target.dataset.category;
            const id = event.target.dataset.id;
            if (category === "men") {
                for (const item of men) {
                    if (item.id === id) {
                        addProduct(item);
                    }
                }
            }
            if (category === "women") {
                for (const item of women) {
                    if (item.id === id) {
                        addProduct(item);
                    }
                }
            }
            if (category === "sale") {
                for (const item of sale) {
                    if (item.id === id) {
                        addProduct(item);
                    }
                }
            }
        } else return
    }

    navigationList.addEventListener('click', setActiveLink); //ul 
    // user.addEventListener('click', setUser);

    
    listItems.addEventListener('click', addToCart);
}

export default header;


















// const navigationList = document.querySelector('.navigationList');
// // console.log(navigationList);

// // ============= styled elements ===================

// // navigationList.style.backgroundColor = 'green';
// // navigationList.classList.add('backgroundStyle');
// // navigationList.classList.remove('backgroundStyle');
// // navigationList.classList.toggle('navigationList');

// // const stylesToggle = document.querySelector('.stylesToggle');
// // stylesToggle.addEventListener('click', () => navigationList.classList.toggle('navigationList'))


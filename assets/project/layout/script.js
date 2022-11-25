(function clickBurg() {
    let burgerIcon = document.getElementsByClassName('burger_icon')[0];
    let mainMenu = document.getElementsByClassName('main_menu')[0];
    function onClickBurger() {
        mainMenu.classList.toggle('top');
        burgerIcon.classList.toggle('active');
    } 
    burgerIcon.addEventListener('click', onClickBurger);
})();








class Slider {
    constructor(classItemBox, classArrLeft, classArrRight, classFirstSlide, classLastSlide, classCurrentItem, classAddSlideNumber, classAddSlide) {
        this.classItemBox = document.getElementsByClassName(`${classItemBox}`)[0];
        this.classArrLeft = document.getElementsByClassName(`${classArrLeft}`)[0];
        this.classArrRight = document.getElementsByClassName(`${classArrRight}`)[0];
        this.classFirstSlide = document.getElementsByClassName(`${classFirstSlide}`)[0];
        this.classLastSlide = document.getElementsByClassName(`${classLastSlide}`)[0];
        this.classCurrentItem = document.getElementsByClassName(`${classCurrentItem}`)[0];
        this.classAddSlideNumber = document.getElementsByClassName(`${classAddSlideNumber}`)[0];
        this.classAddSlide = document.getElementsByClassName(`${classAddSlide}`)[0];
        this.translate = 0;
    };
    currentItemBorRad() {
        for (let i = 0; i < this.classCurrentItem.children.length; i++) {
            if (192 * i === this.translate) {
                this.classCurrentItem.children[i].style.borderRadius = '100%';
            } else {
                this.classCurrentItem.children[i].style.borderRadius = '0%';
            };
        }
    }
    nextSlide(e) {
        this.currentItemBorRad();
        let onClickRightArr = () => {
            if (this.translate === (this.classItemBox.children.length - 4) * 192) {
                this.translate = 0;
                this.classItemBox.style.transform = `translateX(-${this.translate * 0}px)`;
                this.currentItemBorRad();
            } else {
                this.translate = this.translate + 192;
                this.classItemBox.style.transform = `translateX(-${this.translate}px)`;
                this.currentItemBorRad();
            }
        }
        this.classArrRight.addEventListener('click', onClickRightArr);
    }
    prevSlide(e) {
        this.currentItemBorRad();
        let onClickLefttArr = () => {
            if (this.translate === 0) {
                this.translate = (this.classItemBox.children.length - 4) * 192;
                this.classItemBox.style.transform = `translateX(-${this.translate}px)`;
                this.currentItemBorRad();
            } else {
                this.translate = this.translate - 192;
                this.classItemBox.style.transform = `translateX(-${this.translate}px)`;
                this.currentItemBorRad();
            }
        }
        this.classArrLeft.addEventListener('click', onClickLefttArr);
    }
    openSlideByIndex() {
        this.currentItemBorRad();
        let onClickCurrentBut = (e) => {
            for (let i = 0; i < this.classCurrentItem.children.length; i++) {
                if (e.target === this.classCurrentItem.children[i]) {
                    this.translate = 192 * i;
                    this.classItemBox.style.transform = `translateX(-${this.translate}px)`;
                    this.currentItemBorRad();
                }
            }
        }
        this.classCurrentItem.addEventListener('click', onClickCurrentBut);
    };
};


const slider = new Slider('prices_menu', 'slider_arrow_l' ,'slider_arrow_r', 'first_slide', 'last_slide', 'switcher', 'add_slide_number', 'add_slide');
slider.nextSlide();
slider.prevSlide();
slider.openSlideByIndex();

(function clickBurg() {
    let burgerIcon = document.querySelector('.burger_icon');
    let mainMenu = document.querySelector('.main_menu');
    let wrapBlackout = document.querySelector('.wrap_blackout');
    let iterator = 0;
    burgerIcon.addEventListener('click', () => {
        burgerIcon.classList.toggle('active');
        mainMenu.classList.toggle('active');
        wrapBlackout.style.display = 'block';
        ++iterator;
        if (iterator % 2 == 0) {
            wrapBlackout.style.display = 'none';
        };
    });
    wrapBlackout.addEventListener('click', () => {
        ++iterator;
        wrapBlackout.style.display = 'none';
        burgerIcon.classList.remove('active');
        mainMenu.classList.remove('active');
    });
})();
if (document.URL.includes('online_zoo/index.html')) {
    (function clickArrowChooseFavorite() {
        let arrowRight = document.querySelector('.arrow_right');
        let arrowLeft = document.querySelector('.arrow_left');
        let topSlider = document.querySelector('.choosefavoriteslider_top');
        let bottomSlider = document.querySelector('.choosefavoriteslider_bottom');
        let iterSlider = -1170;
        let oneSlide = document.querySelector('.container_choosefavorite ul').children.length / 3;
        if (window.matchMedia("(max-width: 999px)").matches) {
            iterSlider = -607;
            oneSlide = document.querySelector('.container_choosefavorite ul').children.length / 2;
        } else if (window.matchMedia("(max-width: 1599px)").matches) {
            iterSlider = -956;
        }
        let increase = 0;
        let i = 0;
        function onClickRight() {
            if (increase == 0) {
                i = 0;
            }
            if (i == oneSlide - 1) {
                return;
            } else {
                ++i;
            }
            topSlider.style.left = (increase += iterSlider) + 'px';
            bottomSlider.style.left = (increase) + 'px';
            topSlider.addEventListener('transitionstart', handle, false);
            function handle() {
                arrowRight.removeEventListener('click', onClickRight);
                arrowLeft.removeEventListener('click', onClickLeft);
            }
        }
        function onClickLeft() {
            if (increase == 0) {
                i = 0;
            }
            --i;
            if (i < 0) {
                return;
            } else {
                topSlider.style.left = (increase -= iterSlider) + 'px';
                bottomSlider.style.left = (increase) + 'px';
            }
        }
        arrowRight.addEventListener('click', onClickRight);
        arrowLeft.addEventListener('click', onClickLeft);
        topSlider.addEventListener('transitionend', handle, false);
        function handle() {
            arrowRight.addEventListener('click', onClickRight);
            arrowLeft.addEventListener('click', onClickLeft);
        }
    })();
    (function addReviewTestimonials() {
        let butLeaveFeedback = document.querySelector('.container_testimonials .donate_volunteers');
        let popupTestimonials = document.querySelector('.popup_testimonials');
        let closePopup = document.querySelector('.close_popup');
        let butGetReview = document.querySelector('.but_get_review');
        let sliderTestimonials = document.querySelector('.container_testimonials>.slider>.slider_content');
        let inputFullName = document.querySelector('.popup_form>.full_name');
        let descriptionReview = document.querySelector('.popup_form>.desc');
        let emailReview = document.querySelector('.popup_form>.email')
        function onPopupTestimonialsSwitch(e) {
            if (e.target === butLeaveFeedback || e.target === popupTestimonials || e.target === closePopup) {
                if (popupTestimonials.style.visibility == 'visible') {
                    popupTestimonials.style.visibility = 'hidden';
                } else {
                    popupTestimonials.style.visibility = 'visible';
                }
            }
        }
        function getDate() {
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            today = dd + '.' + mm + '.' + yyyy;
            return today
        }
        function onGetReview() {
            let getReview = document.createElement('div');
            getReview.classList.add('slider_review_block');
            let getNameReview = document.createElement('h6');
            getNameReview.innerText = inputFullName.value;
            inputFullName.value = '';
            let getWrapInfoReview = document.createElement('div');
            let localReview = document.createElement('p');
            localReview.innerText = 'Local Austria';
            let dateReview = document.createElement('p');
            dateReview.innerText = getDate();
            let getDescriptionReview = document.createElement('p');
            getDescriptionReview.innerText = descriptionReview.value;
            descriptionReview.value = '';
            getWrapInfoReview.prepend(localReview, dateReview);
            getReview.prepend(getNameReview, getWrapInfoReview, getDescriptionReview)
            sliderTestimonials.prepend(getReview);
            popupTestimonials.style.visibility = 'hidden';
            emailReview.value = '';
        }
        butLeaveFeedback.addEventListener('click', onPopupTestimonialsSwitch);
        popupTestimonials.addEventListener('click', onPopupTestimonialsSwitch);
        butGetReview.addEventListener('click', onGetReview);
    })();
    (function sliderToTestimonials() {
        let rangeTestimonials = document.getElementsByClassName('style_range')[0];
        let sliderTestimonials = document.getElementsByClassName('slider_content')[0];
    
        sliderTestimonials.addEventListener('click', () => {
            console.dir(sliderTestimonials);
        });
        rangeTestimonials.addEventListener('input', onSlide);
        function onSlide() {
            if (sliderTestimonials.children.length > 4) {
                rangeTestimonials.max = sliderTestimonials.scrollWidth - sliderTestimonials.offsetWidth;
                sliderTestimonials.style.left = '-' + rangeTestimonials.value + 'px';
            }
        };
    })();
} else if (document.URL.includes('online_zoo/donate.html')) {
    let rangeAnotherAmount = document.querySelector('.range');
    let rangeInput = document.querySelectorAll('.range>p>input');
    let anotherAmo = document.querySelector('.another_amount_range_donate');
    function onAddToAnotherAmo(e) {
        for (let el of rangeInput) {
        
            if (e.target === el) {
                anotherAmo.value = e.target.parentElement.innerText.slice(1, e.target.parentElement.innerText.length);
            };
        }
    }
    function onAddAnotherAmoToRange(e) {
        let rangeItem = e.view.document.querySelectorAll('.range>p');
        for (let item of rangeItem) {
            if (anotherAmo.value === item.innerText.slice(1, item.innerText.length)) {
                item.children[0].checked = true;
            };
        };
    }
    anotherAmo.addEventListener('keyup', onAddAnotherAmoToRange);
    anotherAmo.addEventListener('blur', onAddAnotherAmoToRange);
    rangeAnotherAmount.addEventListener('click', onAddToAnotherAmo);
}





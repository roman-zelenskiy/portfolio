(function clickBurg() {
    let burgerIcon = document.getElementsByClassName('burger_icon')[0];
    let burgerCollapse = document.getElementsByClassName('burg_collapse')[0];
    burgerIcon.addEventListener('click', onClickBurgerBtn);
    function onClickBurgerBtn() {
        burgerIcon.classList.toggle('active');
        burgerIcon.children[0].classList.toggle('active'); 
        burgerCollapse.classList.toggle('active');
    }
})()
let burgerIconEl = document.getElementById('burgerIcon');
let navItemsEl = document.getElementById('navItems');

burgerIconEl.addEventListener('click',()=>{
    navItemsEl.style.display = navItemsEl.style.display === 'flex'? 'none' : 'flex';
    burgerIconEl.classList.toggle('fa-xmark');
});
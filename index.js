let addShoppingButton=document.getElementById('addShopping');
let ShoppingContainer=document.getElementById('ShoppingContainer');
let inputField=document.getElementById('inputField');

addShoppingButton.addEventListener('click',function(){
    var paragraph=document.createElement('p');
    paragraph.classList.add();
    paragraph.innerText=inputField.value;
    ShoppingContainer.appendChild(paragraph);
    addShoppingButton.addEventListener('click',function(
});
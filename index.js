let addShoppingButton=document.getElementById('addShopping');
let shoppingContainer=document.getElementById('shoppingContainer');
let inputField=document.getElementById('inputField');

addShoppingButton.addEventListener('click',function(){
    var paragraph=document.createElement('p');
    paragraph.classList.add();
    paragraph.innerText=inputField.value;
    shoppingContainer.appendChild(paragraph);
});
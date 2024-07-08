let addShoppingButton=document.getElementById('addShopping');
let ShoppingContainer=document.getElementById('ShoppingContainer');
let inputField=document.getElementById('inputField');

addShoppingButton.addEventListener('click',function(){
    var paragraph=document.createElement('p');

    paragraph.innerText=inputField.value;
    ShoppingContainer.appendChild(paragraph);
    
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";

        paragraph.addEventListener('dblclick',function(){
            paragraph.removeChild="paragraph";
        })  
    })
});
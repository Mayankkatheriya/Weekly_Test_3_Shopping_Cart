let addButton = [...document.querySelectorAll('.add')];
let removeButton = [...document.querySelectorAll(".remove")]
let products = [...document.querySelectorAll('.numbers')]
let count = [...document.querySelectorAll('.count')]
let cartContent = document.querySelector('.cart-content')
let pName = [...document.querySelectorAll('.productName')]
let price = [...document.querySelectorAll('.price')]
let removeEle = document.querySelector("#noEle")
let total = document.querySelector('.last')
let totalAmount = document.querySelector('.total');
//? Chnages in Product
for(let i=0; i<products.length; i++){
    removeButton[i].addEventListener('click', function(){
        if(count[i].innerText>'0'){
            count[i].innerText=Number(count[i].innerText)-1+'';
        }
        else{
            count[i].innerText='0';
        }
    })
    addButton[i].addEventListener('click', function(){
            count[i].innerText=Number(count[i].innerText)+1+'';
    })
}

//? chnages in cart
let amount= 0;
function createChild(pName, count, price, i){
    let cartElement = document.createElement('div');
    cartElement.classList.add('product')
    if(i==0){
        cartElement.classList.add('first')
    }
    else if(i==1){
        cartElement.classList.add('second')
    }
    else{
        cartElement.classList.add('third')
    }
    cartElement.innerHTML =
    `<h4>${pName[i].innerText}</h4>
    <p>${count[i].innerText} X ${price[i].innerText}</p>`;
    return cartElement
}
for(let i=0; i<products.length; i++){
    removeButton[i].addEventListener('click', function(){
        
        if(count[i].innerText<=0){

            //? check weather particular class element present or not

            if(i==0 && cartContent.querySelector(`.first`)){
                let removeIt = cartContent.querySelector(`.first`);
                cartContent.removeChild(removeIt)
            }
            else if(i==1 && cartContent.querySelector(`.second`)){
                let removeIt = cartContent.querySelector(`.second`);
                cartContent.removeChild(removeIt)
            }
            else if(i==2 && cartContent.querySelector(`.third`)) {
                let removeIt = cartContent.querySelector(`.third`);
                cartContent.removeChild(removeIt)
            }
            
            //* Check class is present or not?

            if(!cartContent.querySelector(`.product`)){
                removeEle.style.display = "block"
                total.style.visibility = "hidden"
            }
        }
        else  {
            if(i==0){
                let decrease = cartContent.querySelector(`.first p`);
                decrease.innerText = `${count[i].innerText} X 650`
            }
            else if(i==1){
                let decrease = cartContent.querySelector(`.second p`);
                decrease.innerText = `${count[i].innerText} X 400`
            }
            else{
                let decrease = cartContent.querySelector(`.third p`);
                decrease.innerText = `${count[i].innerText} X 800`
            }
        }
        if(amount>0){
            amount -=parseInt(price[i].innerText);
            totalAmount.innerText = `₹ ${amount}`
        }
    })
    addButton[i].addEventListener('click', function(){
        removeEle.style.display = "none"
        total.style.visibility = "visible"
        if(count[i].innerText==1){
            cartContent.appendChild(createChild(pName, count, price, i));
        }
        else  {
            if(i==0){
                let increase = cartContent.querySelector(`.first p`);
                increase.innerText = `${count[i].innerText} X 650`
            }
            else if(i==1){
                let increase = cartContent.querySelector(`.second p`);
                increase.innerText = `${count[i].innerText} X 400`
            }
            else{
                let increase = cartContent.querySelector(`.third p`);
                increase.innerText = `${count[i].innerText} X 800`
            }
        }
        amount += parseInt(price[i].innerText);
        totalAmount.innerText =  `₹ ${amount}`

    })
}
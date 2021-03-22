var breadType = ['Yupqa', `O'rtacha`, 'Qalin']
var breadSize = [25, 30, 35]
var toppingList = ['Pomidor', `Kurka go'shti`, 'Zaytun', 'Tuzlangan bodring', `Qo'ziqorin`, 'Qazi']
var ingredientsList = ['Achchiq', 'Sosiskali']

// yangi arraylar
var newBoxOfToppings = [];
var newIngredients = [];

// elementlarni chaqirib olish
var elPizzaForm = document.querySelector('.js-pizza-form');
var elBreadSelect = elPizzaForm.querySelector('.js-bread-select');
var elSizeRadio = elPizzaForm.querySelector('.js-size-radio');
var elToppingCheckbox = elPizzaForm.querySelector('.js-topping-checkbox');
var elAddlIngredients = elPizzaForm.querySelector('.js-addl-ingredients');


var elOrderState = document.querySelector('.order-state');
var elOrderBread = document.querySelector('.js-order-bread');
var elOrderSize = document.querySelector('.js-order-size');
var elOrderToppings = document.querySelector('.js-order-toppings');
var elAddIngredients = document.querySelector('.js-order-addl');



for (var i = 0; i < breadType.length; i++) {
    var newElBreadSelect = document.createElement('option');
    newElBreadSelect.textContent = breadType[i];
    elBreadSelect.appendChild(newElBreadSelect)
     

    elBreadSelect.addEventListener('change', function(){
        elOrderBread.textContent = this.value   
    })

}
     


for (var i = 0; i < breadSize.length; i++) {

    var newElBreadSizeLabel = document.createElement('label');
    var newElBreadSizeInput = document.createElement('input');
    var newElBreadSizeSpan = document.createElement('span');
    
    newElBreadSizeInput.type = 'radio';
    newElBreadSizeInput.name = 'size';
    newElBreadSizeInput.value = breadSize[i];
    newElBreadSizeSpan.textContent = ` ${breadSize[i]} cm`;
    
    newElBreadSizeInput.textContent = breadSize[i];

    newElBreadSizeLabel.append(newElBreadSizeInput, newElBreadSizeSpan);
    elSizeRadio.appendChild(newElBreadSizeLabel);

    newElBreadSizeInput.addEventListener('change', function(){
        elOrderSize.textContent = this.value;
    })

}



var showOrderToppings = function() {

    elOrderToppings.innerHTML = '';

    for (var i = 0; i < newBoxOfToppings.length; i++) {
        
        var elOrderToppingsli = document.createElement('li');
        elOrderToppingsli.textContent = newBoxOfToppings[i];


        elOrderToppings.appendChild(elOrderToppingsli);

        
    }

}


for (var i = 0; i < toppingList.length; i++) {

    var newElToppingListLabel = document.createElement('label');
    var newElToppingListInput = document.createElement('input');
    var newElToppingListSpan = document.createElement('span')

    newElToppingListInput.value = toppingList[i]
    newElToppingListInput.type = 'checkbox';
    newElToppingListSpan.textContent = toppingList[i]


    newElToppingListLabel.append(newElToppingListInput, newElToppingListSpan);
    elToppingCheckbox.appendChild(newElToppingListLabel);

    newElToppingListInput.addEventListener('change', function(){

        if(newBoxOfToppings.includes(this.value)){
            var topIndex = newBoxOfToppings.indexOf(this.value);
            newBoxOfToppings.splice(topIndex, 1);
           
        } else {
            newBoxOfToppings.push(this.value)
        }
        showOrderToppings()
    })


 
}



var showIngredients = function () {
     
    elAddIngredients.innerHTML = '';

    for (var i = 0; i < newIngredients.length; i++) {
        var elAddIngredientsLi = document.createElement('li');

        elAddIngredientsLi.textContent = newIngredients[i];

        elAddIngredients.appendChild(elAddIngredientsLi);
    }

}


for (var i = 0; i < ingredientsList.length; i++) {
    var newELIngredientListLabel = document.createElement('label');
    var newELIngredientListInput = document.createElement('input');
    var newELIngredientListSpan = document.createElement('span')

    newELIngredientListInput.value = ingredientsList[i]
    newELIngredientListInput.type = 'checkbox';
    newELIngredientListSpan.textContent = ingredientsList[i]


    newELIngredientListLabel.append(newELIngredientListInput, newELIngredientListSpan);
    elAddlIngredients.appendChild(newELIngredientListLabel);

    newELIngredientListInput.addEventListener('change', function(){

        if (newIngredients.includes(this.value)) {
            var ingredientIndex = newIngredients.indexOf(this.value);
            newIngredients.splice(ingredientIndex, 1);
        } else {
            newIngredients.push(this.value)
        }

        showIngredients()

    })
}
    

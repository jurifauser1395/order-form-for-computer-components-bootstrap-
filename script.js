
// Declare and initialize select from elements
let firstSelect = document.getElementById('computerPartsAndAccessory');
let secondSelect = document.getElementById('secondSelect');
let productPictureChange = document.getElementById('productPicture1');
let addToCartButton = document.getElementById('addToCartButton');
let cartButtonNavBar = document.getElementById('cartButton');
let clearOrderButton =document.getElementById('clearOrderButtonShoppingCart');
let emptyShoppingCartHeadLine = document.getElementById('shoppingCartHeadLine');
let emptyShoppingCartContent = document.getElementById('shoppingCartContent');
let emptyOrderSummeryContent = document.getElementById('shoppingCartOrderSummery');
let shoppingBasketId = document.getElementById('shoppingBasket');

// Declare options object
let options = {
    'cases': { options: ['Corsair Case', 'NZXT Case', 'Thermaltake Case', 'Cooler Master Case', 'Fractal Design Case'], image:'Pictures/cases.jfif'},
    'MainBoard': { options:['Asus Motherboard', 'Gigabyte Motherboard', 'MSI Motherboard', 'ASRock Motherboard', 'EVGA Motherboard'], image:'Pictures/motherboard.jfif'},
    'cpus': { options: ['Intel Core i7', 'AMD Ryzen 7', 'Intel Core i5', 'AMD Ryzen 5', 'Intel Core i9'], image:'Pictures/CPU.jfif'},
    'coolingSystems': { options: ['Noctua Cooler', 'be quiet! Cooler', 'Corsair Cooler', 'Cooler Master Cooler', 'NZXT Cooler'], image:'Pictures/cooling.jfif'},
    'ram': { options: ['Corsair RAM', 'G.Skill RAM', 'Kingston RAM', 'Crucial RAM', 'HyperX RAM'], image:'Pictures/ram.jfif'},
    'ssdAndHdd': { options: ['Samsung SSD', 'Western Digital HDD', 'Seagate HDD', 'Kingston SSD', 'SanDisk SSD'], image:'Pictures/HDD.jfif'},
    'gpu': { options: ['Nvidia GeForce RTX 3080', 'AMD Radeon RX 6800 XT', 'Nvidia GeForce RTX 3070', 'AMD Radeon RX 6700 XT', 'Nvidia GeForce RTX 3090'], image:'Pictures/GPU.jfif'},
    'powerSupply': {options : ['Corsair RMx Series', 'EVGA SuperNOVA', 'Seasonic FOCUS Plus', 'Thermaltake Toughpower', 'Cooler Master MWE Gold'], image:'Pictures/powerSupply.jfif'},
    'monitor': { options: ['Dell Monitor', 'Asus Monitor', 'Acer Monitor', 'LG Monitor', 'BenQ Monitor'], image:'Pictures/monitors.jfif'},
    'accessory': { options: ['Logitech Mouse', 'Razer Keyboard', 'SteelSeries Headset', 'Corsair Mouse Pad', 'HyperX Keyboard'], image:'Pictures/accessory.jfif'}
};

// Add an event listener to the first select element
firstSelect.addEventListener('change', function () {

    // Get the selected option
    let selectedOption = this.value;

    // Clear the second select element
    secondSelect.innerHTML = '';

    // Check if the selected option exists in the options object
    if (options[selectedOption]) {

        // If it does, loop through the options and add them to the second select element
        options[selectedOption].options.forEach(function(choice) {
            let newOption = document.createElement('option');
            newOption.text = choice;
            newOption.value = choice;
            secondSelect.add(newOption);
        });

        // Add a label to the second dropdown
        document.getElementById('choiceLabel').innerText = 'Select a product:'

        // Show the second select element
        secondSelect.style.display = 'block';

        // Change the product image
        productPictureChange.src = options[selectedOption].image;

    } else {
        // If the selected option does not exist in the options object, hide the second select element and display the default picture
        secondSelect.style.display = 'none';
        productPictureChange.src = 'Pictures/BackgroundPicPC.jfif';
        document.getElementById('choiceLabel').innerText = ''
    }
});

// Item count
let itemCount = 0;

// Add chosen items to the shopping cart and the order summery
addToCartButton.addEventListener('click', function() {

    // Add a custom blinking for the cart button when an item was added and iIncrease the item count in on the cart
    itemCount += 1;
    shoppingBasketId.classList.add( 'fas', 'fa-shopping-cart');
    shoppingBasketId.innerText = '(' + itemCount + ')' +' Shopping-Basket';
    cartButtonNavBar.classList.add('blink');
    setTimeout(function () {
        cartButtonNavBar.classList.remove('blink');
    }, 500);


    if(emptyShoppingCartHeadLine.innerHTML === 'Your Shopping Cart is empty!' && emptyShoppingCartContent.innerHTML === '') {

        // Clear the empty shopping cart headline
        emptyShoppingCartHeadLine.innerText = 'Your Items:'
        emptyShoppingCartHeadLine.classList.add('text-decoration-underline');
    }


        // Get the select element
        let chosenItem = document.getElementById('secondSelect');

        // Get the selected options
        let chosenOptions = Array.from(chosenItem.selectedOptions);

        // Loop through the chosen options
        chosenOptions.forEach(function (option) {
            let addedProduct = option.text;

            // Append the selected option to a previous tag in the shopping cart
            let currentShoppingCart = document.getElementById('shoppingCartContent');
            let newElement = document.createElement('p');
            newElement.textContent = addedProduct;
            currentShoppingCart.appendChild(newElement);

            // Append the selected option to a previous tag in the order summery
            let currentShoppingCartOrder = document.getElementById('shoppingCartOrderSummery')
            let newElementOrder = document.createElement('p');
            newElementOrder.textContent = addedProduct;
            currentShoppingCartOrder.appendChild(newElementOrder);
        });
});

// Clear shopping Cart modal
clearOrderButton.addEventListener('click', function() {
    emptyShoppingCartHeadLine.innerText = 'Your Shopping Cart is empty!';
    emptyShoppingCartHeadLine.classList.remove('text-decoration-underline');
    emptyShoppingCartContent.innerText = '';
    emptyOrderSummeryContent.innerText = '';
    shoppingBasketId.innerText = " Shopping-Basket";
    shoppingBasketId.classList.add( "fas", "fa-shopping-cart");
    itemCount = 0;
});



// Personal data section handling
window.onload = function () {
    'use strict'

    // // Declare and initialize the form and other necessary elements
    let personalDataForm = document.querySelector('.needs-validation');
    let myOderSummeryModalEl = document.getElementById('orderSummeryModal');
    let orderNowButtonShoppingCart = document.getElementById('OrderNowButtonShoppingCart');
    let myShoppingCartModalEl= document.getElementById('shoppingCartModal');
    let myShoppingCartModal = new bootstrap.Modal(myShoppingCartModalEl);
    let myOderSummeryModal = new bootstrap.Modal(myOderSummeryModalEl);
    let wasClosedByOrderNowButton = false;


    // Function to validate the form data on submission
    function validateForm(event) {
        if (!personalDataForm.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();

                // If the shopping cart is not empty fetch and pass the values from the personal data from
                if(!(emptyShoppingCartHeadLine.innerHTML === 'Your Shopping Cart is empty!')) {

                    // Fetch the entered data
                    let firstName = document.getElementById('InputFirstName').value;
                    let lastName = document.getElementById('InputLastName').value;
                    let email = document.getElementById('InputEmail').value;
                    let address = document.getElementById('inputAddress').value;
                    let city = document.getElementById('inputCity').value;
                    let state = document.getElementById('inputState').value;
                    let zip = document.getElementById('inputZip').value;
                    let bankAccount = document.getElementById('inputBankAccount').value;

                    // Pass the entered data into the modal
                    document.getElementById('modalFirstName').innerText = ' ' + firstName;
                    document.getElementById('modalLastName').innerText = ' ' + lastName;
                    document.getElementById('modalEmail').innerText = ' ' + email;
                    document.getElementById('modalAddress').innerText = ' ' + address;
                    document.getElementById('modalCity').innerText = ' ' + city;
                    document.getElementById('modalState').innerText = ' ' + state;
                    document.getElementById('modalZip').innerText = ' ' + zip;
                    document.getElementById('modalBankAccount').innerText = ' ' + bankAccount;

                    // Display modal with passed values
                    myOderSummeryModal.show();
                } else {

                    // Shopping cart empty
                    document.getElementById('oderSummeryBody').innerHTML = 'Your Shopping Cart is empty, please add at least one item!'

                    // Display empty modal
                    myOderSummeryModal.show();

                }
        }
        personalDataForm.classList.add('was-validated'); // Mark the form as validated
    }

   // Function to set the flag when the Order Now button in the shopping cart is clicked and hide the shopping cart after pressing the Order Now button
    function setFlagByOrderNowButton() {
        if (!(emptyShoppingCartHeadLine.innerHTML === 'Your Shopping Cart is empty!')) {
            myShoppingCartModal.hide();
            wasClosedByOrderNowButton = true;
        }
    }

    // Function to scroll to the form and validate it after the shopping cart modal is hidden
    function scrollToForm(event) {
        if(wasClosedByOrderNowButton && !(emptyShoppingCartHeadLine.innerHTML === 'Your Shopping Cart is empty!')) {
            event.preventDefault();
            personalDataForm.scrollIntoView({behavior: "smooth"});
            validateForm(event);
            wasClosedByOrderNowButton = false;

        }
    }

    // Event listeners
    personalDataForm.addEventListener('submit', validateForm);
    orderNowButtonShoppingCart.addEventListener('click',  setFlagByOrderNowButton);
    myShoppingCartModalEl.addEventListener('hidden.bs.modal', scrollToForm);
}








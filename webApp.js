
// Declare and initialize select from elements and global variables
let firstSelect = document.getElementById('computerPartsAndAccessory');
let secondSelect = document.getElementById('secondSelectInput');
let productPictureChange = document.getElementById('productPicture1');
let addToCartButton = document.getElementById('addToCartButton');
let cartButtonNavBar = document.getElementById('cartButton');
let clearOrderButton =document.getElementById('clearOrderButtonShoppingCart');
let emptyShoppingCartHeadLine = document.getElementById('shoppingCartHeadLine');
let currentShoppingCartContent = document.getElementById('shoppingCartContent');
let currentOrderSummeryContent = document.getElementById('shoppingCartOrderSummery');
let shoppingBasket = document.getElementById('shoppingBasketInput');
let choiceLabel = document.getElementById('choiceLabelInput');
let closeOrderSummery = document.getElementById('closeOrderSummeryInput');
let shoppingCartFinalPrice = document.getElementById('finalPrice');
let orderSummeryFinalPrice = document.getElementById('finalPriceOrderSummery');
let personalDataForm = document.querySelector('.needs-validation');
let itemQuantityLabel = document.getElementById('itemQuantityLabelInput');
let itemQuantity = document.getElementById('itemQuantityInput');
let finaAddedProductCost = 0;
let finalItemCount = 0;



// Define blinking and item count function
function blinkAndCountShoppingCart(){

    // Add  up the total number of items in the basket
    let itemQuantityValue = Number(itemQuantity.value);
    finalItemCount += itemQuantityValue;

    // Change the appearance of the basket button
    shoppingBasket.classList.add('fas', 'fa-shopping-cart');
    shoppingBasket.innerText = ' (' + finalItemCount + ') ' + 'items';

    // Start blinking
    cartButtonNavBar.classList.add('blink');

    // Scroll up to show the blink effect
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    // Stop blinking after a timeout
    setTimeout(function () {
        cartButtonNavBar.classList.remove('blink');
    }, 700);
}

// Declare options object (alternatively one could use a database)
let options = {
    'cases': { options: ['Corsair Case (120$ each)', 'NZXT Case (130$ each)', 'Thermaltake Case (140$ each)', 'Cooler Master Case (150$ each)', 'Fractal Design Case (160$ each)'], image:'Pictures/cases.jfif'},
    'MainBoard': { options:['Asus Motherboard (170$ each)', 'Gigabyte Motherboard (180$ each)', 'MSI Motherboard (190$ each)', 'ASRock Motherboard (200$ each)', 'EVGA Motherboard (210$ each)'], image:'Pictures/motherboard.jfif'},
    'cpus': { options: ['Intel Core i7 (220$ each)', 'AMD Ryzen 7 (230$ each)', 'Intel Core i5 (240$ each)', 'AMD Ryzen 5 (250$ each)', 'Intel Core i9 (260$ each)'], image:'Pictures/CPU.jfif'},
    'coolingSystems': { options: ['Noctua Cooler (270$ each)', 'be quiet! Cooler (280$ each)', 'Corsair Cooler (290$ each)', 'Cooler Master Cooler (300$ each)', 'NZXT Cooler (310$ each)'], image:'Pictures/cooling.jfif'},
    'ram': { options: ['Corsair RAM (320$ each)', 'G.Skill RAM (330$ each)', 'Kingston RAM (340$ each)', 'Crucial RAM (350$ each)', 'HyperX RAM (360$ each)'], image:'Pictures/ram.jfif'},
    'ssdAndHdd': { options: ['Samsung SSD (370$ each)', 'Western Digital HDD (380$ each)', 'Seagate HDD (390$ each)', 'Kingston SSD (400$ each)', 'SanDisk SSD (410$ each)'], image:'Pictures/HDD.jfif'},
    'gpu': { options: ['Nvidia GeForce RTX 3080 (420$ each)', 'AMD Radeon RX 6800 XT (430$ each)', 'Nvidia GeForce RTX 3070 (440$ each)', 'AMD Radeon RX 6700 XT (450$ each)', 'Nvidia GeForce RTX 3090 (460$ each)'], image:'Pictures/GPU.jfif'},
    'powerSupply': {options : ['Corsair RMx Series (470$ each)', 'EVGA SuperNOVA (480$ each)', 'Seasonic FOCUS Plus (490$ each)', 'Thermaltake Toughpower (500$ each)', 'Cooler Master MWE Gold (510$ each)'], image:'Pictures/powerSupply.jfif'},
    'monitor': { options: ['Dell Monitor (520$ each)', 'Asus Monitor (530$ each)', 'Acer Monitor (540$ each)', 'LG Monitor (550$ each)', 'BenQ Monitor (560$ each)'], image:'Pictures/monitors.jfif'},
    'accessory': { options: ['Logitech Mouse (570$ each)', 'Razer Keyboard (580$ each)', 'SteelSeries Headset (590$ each)', 'Corsair Mouse Pad (600$ each)', 'HyperX Keyboard (610$ each)'], image:'Pictures/accessory.jfif'}
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
        choiceLabel.innerText = 'Select a product:'
        itemQuantityLabel.innerText = 'Enter quantity:'

        // Show the second select element
        secondSelect.style.display = 'block';
        addToCartButton.style.display = 'block';
        itemQuantity.style.display = 'block';

        // Change the product image
        productPictureChange.src = options[selectedOption].image;

    } else {
        // If the selected option does not exist in the options object, hide the second select element and display the default picture
        secondSelect.style.display = 'none';
        addToCartButton.style.display = 'none';
        itemQuantity.style.display = 'none';
        productPictureChange.src = 'Pictures/BackgroundPicPC.jfif';
        choiceLabel.innerText = ''
    }
});


// Add chosen items to the shopping cart and the order summery
addToCartButton.addEventListener('click', function() {

    // Check if the shopping cart is empty and no items were added and no items were selected
    if(emptyShoppingCartHeadLine.innerHTML === 'Your Shopping Cart is empty!' && currentShoppingCartContent.innerHTML === '' && choiceLabel.innerText === 'Select a product:') {

        // Clear the empty shopping cart headline
        emptyShoppingCartHeadLine.innerText = 'Your Items:'
        emptyShoppingCartHeadLine.classList.add('text-decoration-underline');
    }

    // If a product is selected and the add to basked button was pressed add item
    if(choiceLabel.innerText === 'Select a product:') {

        // Call blinkAndCountShoppingCart function
        blinkAndCountShoppingCart();

        // Get the current item quantity
        let currentItemQuantity = Number(itemQuantity.value);


        // Get the selected options
        let chosenOptions = Array.from(secondSelect.selectedOptions);

        // Loop through the chosen options
        chosenOptions.forEach(function (option) {
            let addedProduct = option.text;

            // Calculate final order price
            let addedProductCost = addedProduct.match(/\((\d+)\$/);
            finaAddedProductCost += Number(addedProductCost[1]);

            // Append the selected option to a previous tag in the shopping cart and add subtotal
            let newProduct = document.createElement('p');
            newProduct.textContent =  + currentItemQuantity + 'x ' + addedProduct;
            currentShoppingCartContent.appendChild(newProduct);
            shoppingCartFinalPrice.innerText = 'Subtotal (' + finalItemCount + ' items): ' + finaAddedProductCost + ' $';

            // Append the selected option to a previous tag in the order summery and add final price
            let newProductOrder = document.createElement('p');
            newProductOrder.textContent = currentItemQuantity + 'x ' + addedProduct;
            currentOrderSummeryContent.appendChild(newProductOrder);
            orderSummeryFinalPrice.innerText = 'Final Price (' + finalItemCount + ' items): ' + finaAddedProductCost + ' $';
        });
    }
});

// Clear shopping Cart and order summery modal and the basket button
clearOrderButton.addEventListener('click', function() {
    emptyShoppingCartHeadLine.innerText = 'Your Shopping Cart is empty!';
    emptyShoppingCartHeadLine.classList.remove('text-decoration-underline');
    shoppingCartFinalPrice.innerText = '';
    currentShoppingCartContent.innerText = '';
    currentOrderSummeryContent.innerText = '';
    orderSummeryFinalPrice.innerText = '';
    shoppingBasket.innerText = " Shopping-Basket";
    shoppingBasket.classList.add( "fas", "fa-shopping-cart");
    finalItemCount = 0;
    finaAddedProductCost = 0;
});


// Personal data section handling
window.onload = function () {
    'use strict'

    // Declare and initialize  other necessary elements
    let orderNowButtonShoppingCart = document.getElementById('OrderNowButtonShoppingCartInput');
    let oderSummeryModalEl = document.getElementById('orderSummeryModalInput');
    let shoppingCartModalEl= document.getElementById('shoppingCartModalInput');

    // Declare and initialize forms
    let newShoppingCartModal = new bootstrap.Modal(shoppingCartModalEl);
    let newOderSummeryModal = new bootstrap.Modal(oderSummeryModalEl);

    // Declare and initialize flag variable
    let wasClosedByOrderNowButton = false;

    // Function to validate the personal data form data on submission
    function validatePersonalDataForm(event) {

        // Check validity first to initialize animation
        personalDataForm.checkValidity();

        // Show required fields for form submission
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
                    newOderSummeryModal.show();
                } else {

                    // Shopping cart empty
                    document.getElementById('oderSummeryBody').innerHTML = 'Your Shopping Cart is empty, please add at least one item!'

                    // Display empty modal
                    newOderSummeryModal.show();
                }
        }
        personalDataForm.classList.add('was-validated'); // Mark the form as validated
    }

   // Function to set the flag when the Order Now button in the shopping cart is clicked and hide the shopping cart after pressing the Order Now button
    function setFlagByOrderNowButton() {

        // Check if the cart has any items
        if (!(emptyShoppingCartHeadLine.innerHTML === 'Your Shopping Cart is empty!')) {

            // If it has, close the shopping cart modal and set the flag variable true
            newShoppingCartModal.hide();
            wasClosedByOrderNowButton = true;
        }
    }

    // Function to scroll to the form and validate it after the shopping cart modal is hidden
    function scrollToPersonalDataForm(event) {
        if(wasClosedByOrderNowButton && !(emptyShoppingCartHeadLine.innerHTML === 'Your Shopping Cart is empty!')) {

            // Scroll into view to and call validatePersonalDataForm function
            event.preventDefault();
            personalDataForm.scrollIntoView({behavior: "smooth"});
            validatePersonalDataForm(event);

            // Set flag variable false for the next cycle
            wasClosedByOrderNowButton = false;
        }
    }
    // Event listeners
    personalDataForm.addEventListener('submit', validatePersonalDataForm);
    orderNowButtonShoppingCart.addEventListener('click',  setFlagByOrderNowButton);
    shoppingCartModalEl.addEventListener('hidden.bs.modal', scrollToPersonalDataForm);
}


//Make the ads disappear when there is not enough space
window.addEventListener('resize', function (){
let adDivs = document.querySelectorAll('.resizeDiv');

    // Loop through the div elements
    for (let i = 0; i < adDivs.length; i++) {

        // If the window width is less than a certain value, hide the ads
        if (window.innerWidth < 500) {
            adDivs[i].style.display = 'none';
        } else {
            // Otherwise, show the ads
            adDivs[i].style.display = 'block';
        }
    }
});

// Refresh the web page after the order was completed
closeOrderSummery.addEventListener('click', function (){

    // Check if the shopping cart is empty
    if(!(emptyShoppingCartHeadLine.innerHTML === 'Your Shopping Cart is empty!')) {

        // Scroll up
        window.scrollTo(0,0);

        // Refresh the website
        setTimeout(function() {
            location.reload();
        }, 600)
    } else {
        // Scroll up
        window.scrollTo(0,0);
    }
});






// Get references to the select elements
let firstSelect = document.getElementById('computerPartsAndAccessory');
let secondSelect = document.getElementById('secondSelect');
let productPictureChange = document.getElementById('productPicture1');

// Declare options object
let options = {
    'cases': { choices: ['Corsair Case', 'NZXT Case', 'Thermaltake Case', 'Cooler Master Case', 'Fractal Design Case'], image:'Pictures/cases.jfif'},
    'MainBoard': { choices:['Asus Motherboard', 'Gigabyte Motherboard', 'MSI Motherboard', 'ASRock Motherboard', 'EVGA Motherboard'], image:'Pictures/motherboard.jfif'},
    'cpus': { choices: ['Intel Core i7', 'AMD Ryzen 7', 'Intel Core i5', 'AMD Ryzen 5', 'Intel Core i9'], image:'Pictures/CPU.jfif'},
    'coolingSystems': { choices: ['Noctua Cooler', 'be quiet! Cooler', 'Corsair Cooler', 'Cooler Master Cooler', 'NZXT Cooler'], image:'Pictures/cooling.jfif'},
    'ram': { choices: ['Corsair RAM', 'G.Skill RAM', 'Kingston RAM', 'Crucial RAM', 'HyperX RAM'], image:'Pictures/ram.jfif'},
    'ssdAndHdd': { choices: ['Samsung SSD', 'Western Digital HDD', 'Seagate HDD', 'Kingston SSD', 'SanDisk SSD'], image:'Pictures/HDD.jfif'},
    'gpu': { choices: ['Nvidia GeForce RTX 3080', 'AMD Radeon RX 6800 XT', 'Nvidia GeForce RTX 3070', 'AMD Radeon RX 6700 XT', 'Nvidia GeForce RTX 3090'], image:'Pictures/GPU.jfif'},
    'powerSupply': { choices : ['Corsair RMx Series', 'EVGA SuperNOVA', 'Seasonic FOCUS Plus', 'Thermaltake Toughpower', 'Cooler Master MWE Gold'], image:'Pictures/powerSupply.jfif'},
    'monitor': { choices: ['Dell Monitor', 'Asus Monitor', 'Acer Monitor', 'LG Monitor', 'BenQ Monitor'], image:'Pictures/monitors.jfif'},
    'accessory': { choices: ['Logitech Mouse', 'Razer Keyboard', 'SteelSeries Headset', 'Corsair Mouse Pad', 'HyperX Keyboard'], image:'Pictures/accessory.jfif'}
};


// Add an event listener to the first select element
firstSelect.addEventListener('change', handleOptions);

function handleOptions() {
    // Get the selected option
    let selectedOption = this.value;

    // Clear the second select element
    secondSelect.innerHTML = '';

    // Check if the selected option exists in the options object
    if (options[selectedOption]) {
        // If it does, loop through the options and add them to the second select element
        options[selectedOption].choices.forEach(function(choice) {
            let newOption = document.createElement('option');
            newOption.text = choice;
            newOption.value = choice;
            secondSelect.add(newOption);
        });

        // Show the second select element
        secondSelect.style.display = 'block';

        // Change the image
        productPictureChange.src = options[selectedOption].image;

    } else {
        // If the selected option does not exist in the options object, hide the second select element and display the default picture
        secondSelect.style.display = 'none';
        productPictureChange.src = 'Pictures/BackgroundPicPC.jfif';
    }
}

// Personal data section handling
window.onload = function () {
    'use strict'

    let forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    } else {
                        event.preventDefault()

                        // Fetch the entered data
                        let firstName = document.getElementById('InputFirstName').value;
                        let lastName = document.getElementById('InputLastName').value;
                        let email = document.getElementById('InputEmail').value;
                        let address = document.getElementById('inputAddress').value;
                        let city = document.getElementById('inputCity').value;
                        let state = document.getElementById('inputState').value;
                        let zip = document.getElementById('inputZip').value;

                        // Pass the entered data into the modal
                        document.getElementById('modalFirstName').innerText = " " + firstName;
                        document.getElementById('modalLastName').innerText = " " + lastName;
                        document.getElementById('modalEmail').innerText = " " + email;
                        document.getElementById('modalAddress').innerText = " " + address;
                        document.getElementById('modalCity').innerText = " " + city;
                        document.getElementById('modalState').innerText = " " + state;
                        document.getElementById('modalZip').innerText = " " + zip;

                        // Display modal
                        let myModalEl = document.getElementById('orderSummeryModal');
                        let myModal = new bootstrap.Modal(myModalEl);
                        myModal.show();
                    }

                    form.classList.add('was-validated')
                }, false)
            }
        );
}




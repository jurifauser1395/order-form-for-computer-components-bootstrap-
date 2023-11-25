

// Get references to the select elements
let firstSelect = document.getElementById('computerPartsAndAccessory');
let secondSelect = document.getElementById('secondSelect');
let productPictureChange = document.getElementById('productPicture1');

// Define your options
let options = {
    'products': {options: ['option0.1', 'option0.2', 'option0.3'], image:'Pictures/BackgroundPicPC.jfif'},
    'cases': { options: ['option1.1', 'option1.2', 'option1.3'], image:'Pictures/cases.jfif'},
    'MainBoard': { options:['option2.1', 'option2.2', 'option2.3'], image:'Pictures/motherboard.jfif'},
    'CPUs': { options: ['option3.1', 'option3.2', 'option3.3'], image:'Pictures/CPU.jfif'},
    'coolingSystems': { options: ['option4.1', 'option4.2', 'option4.3'], image:'Pictures/cooling.jfif'},
    'ram': { options: ['option5.1', 'option5.2', 'option5.3'], image:'Pictures/ram.jfif'},
    'ssdAndHdd': { options: ['option6.1', 'option6.2', 'option6.3'], image:'Pictures/HDD.jfif'},
    'gpu': { options: ['option7.1', 'option7.2', 'option7.3'], image:'Pictures/GPU.jfif'},
    'monitor': { options: ['option8.1', 'option8.2', 'option8.3'], image:'Pictures/monitors.jfif'},
    'accessory': { options: ['option9.1', 'option9.2', 'option9.3'], image:'Pictures/accessory.jfif'}
};

// Add an event listener to the first select element
firstSelect.addEventListener('change', handleOptions);

function handleOptions() {
    // Get the selected option
    let selectedOption = this.value;

    // Clear the second select element
    secondSelect.innerHTML = '';

    // Check if the selected option exists in your options object
    if (options[selectedOption]) {
        // If it does, loop through the options and add them to the second select element
        options[selectedOption].options.forEach(function(option) {
            let newOption = document.createElement('option');
            newOption.text = option;
            newOption.value = option;
            secondSelect.add(newOption);
        });

        // Show the second select element
        secondSelect.style.display = 'block';

        // Change the image
        productPictureChange.src = options[selectedOption].image;

    } else {
        // If the selected option does not exist in your options object, hide the second select element
        secondSelect.style.display = 'none';
    }
}




//Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()
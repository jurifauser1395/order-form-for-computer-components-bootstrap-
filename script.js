// script.js

// Vue instance for handling form data
/*var app = new Vue({
    el: '#orderForm',
    data: {
        formData: {
            cases: '',
            // Add other form fields here
            // Example: coolingSystems: '',
            // Add more as needed
        }
    },
    methods: {
        scrollToPersonalData: function () {
            document.getElementById('personalDataSection').scrollIntoView({ behavior: 'smooth' });
        },
        showOrderSummary: function () {
            // You can customize this function to gather the form data and display it in the modal
            // For now, let's open the modal
            $('#orderSummaryModal').modal('show');
        }
    }
});*/
// Example starter JavaScript for disabling form submissions if there are invalid fields
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
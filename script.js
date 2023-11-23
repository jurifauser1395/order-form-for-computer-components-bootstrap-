// script.js

// Vue instance for handling form data
var app = new Vue({
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
});

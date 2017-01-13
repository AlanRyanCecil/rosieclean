(function ($, window, document) {
    $(function () {

        var basePrice = 132,
            serviceCharge = 0,
            discount = 0,
            total = 0,
            priceDisplay = $('#priceDisplay'),

    // the key names in the objects here match the id's of their respective radio button or checkbox

            prices = {
                couch: 15,
                bathroom: 20,
                kitchen: 30
            },

            discounts = {
                biWeekly: 20,
                weekly: 15,
                monthly: 0
            };


    // the base price is hard coded in the html but if you wanted to change it this will update to that change

        priceDisplay.html('$' + basePrice);


    // the service and frequency variables each refer to a full set of selections
    // I'm just listening for a change event in each set

        var service = $('#service');
        service.on('change', event => {
            if (event.target.checked) {
                serviceCharge += prices[event.target.id];
            } else {
                serviceCharge -= prices[event.target.id];
            }
            total = basePrice + serviceCharge - discount;
            priceDisplay.html('$' + total);
        });


        var frequency = $('#frequency');
        frequency.on('change', event => {
            discount = discounts[event.target.id];
            total = basePrice + serviceCharge - discount;
            priceDisplay.html('$' + total);
        });

    });
})(window.jQuery, window, document);

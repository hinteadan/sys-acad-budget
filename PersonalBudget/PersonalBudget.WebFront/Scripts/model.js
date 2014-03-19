(function (undefined) {
    'use strict';

    //We define our application model
    function Income(amount, date, info) {
        this.amount = amount;
        this.date = date || new Date();
        this.info = info || null;
    }

    function Spending(amount, date, info) {
        this.amount = amount;
        this.date = date || new Date();
        this.info = info || null;
    }


    //Now we expose what we want, how we want, to the "outside world"
    this.model = {
        Income: Income,
        Spending: Spending
    };

}).call(this);
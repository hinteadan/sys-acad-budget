(function (undefined) {
    'use strict';

    //We define our application model
    function Income(amount, date, info) {
        this.amount = amount;
        this.date = date || new Date();
        this.info = info || null;
        this.aggregateWith = function (amount) {
            return amount + this.amount;
        };
    }
    Income.fromDto = function (dto) {
        var data = new Income();
        data.amount = dto['amount'];
        data.date = new Date(dto['date']);
        data.info = dto['info'];
        return data;
    };

    function Spending(amount, date, info) {
        this.amount = amount;
        this.date = date || new Date();
        this.info = info || null;
        this.aggregateWith = function (amount) {
            return amount - this.amount;
        };
    }
    Spending.fromDto = function (dto) {
        var data = new Spending();
        data.amount = dto['amount'];
        data.date = new Date(dto['date']);
        data.info = dto['info'];
        return data;
    };


    //Now we expose what we want, how we want, to the "outside world"
    this.model = {
        Income: Income,
        Spending: Spending
    };

}).call(this);
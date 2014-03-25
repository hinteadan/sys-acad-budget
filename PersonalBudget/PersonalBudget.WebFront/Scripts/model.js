(function (undefined) {
    'use strict';

    function Income() {
        var privateAmount;//equiv. pt. private int abcd = 0;
        this.amount = 0;//equiv pt. public int defg = 0;
        this.timestamp = new Date();
        this.notes = null;
        this.category = null;
    }

    function Spending() {
        this.amount = 0;
        this.timestamp = new Date();
        this.notes = null;
        this.category = null;
    }

    function Category() {
        this.name = null;
        this.iconUrl = null;
    }

    //This is how we expose stuff in JS
    this.model = {
        Income: Income,
        Spending: Spending,
        Category: Category
    };

}).call(this);
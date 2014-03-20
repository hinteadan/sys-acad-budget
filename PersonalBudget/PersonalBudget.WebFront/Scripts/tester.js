(function (s, m, undefined) {
    'use strict';
    
    var incomeStore = new s.LocalStore('Incomes', m.Income.fromDto),
        spendingStore = new s.LocalStore('Spendings', m.Spending.fromDto);

    incomeStore.query().then(function (data) {
        /// <param name='data' type='Array' elementType='m.Income' />
        console.log(data[0]);
        data[0].amount = Math.round(Math.random() * 100);
        console.log(data[0]);
        incomeStore.save();
    });

}).call(this, this.storage, this.model);
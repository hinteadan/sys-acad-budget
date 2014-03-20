(function (s, m, undefined) {
    'use strict';
    
    var incomeStore = new s.LocalStore('Incomes', m.Income.fromDto),
        spendingStore = new s.LocalStore('Spendings', m.Spending.fromDto);

    incomeStore.add(new m.Income(23, new Date(), 'test')).then(function (entity) { console.log(entity); });
    incomeStore.query().then(function (data) {
        console.log(data);
    });

}).call(this, this.storage, this.model);
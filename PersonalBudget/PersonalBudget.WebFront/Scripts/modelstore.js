(function (s, m, undefined) {
    'use strict';

    var incomeStore = new s.LocalStore('Incomes', m.Income.fromDto),
        spendingStore = new s.LocalStore('Spendings', m.Spending.fromDto);

    this.storage = this.storage || {};
    this.storage.Incomes = incomeStore;
    this.storage.Spendings = spendingStore;

}).call(this, this.storage, this.model);
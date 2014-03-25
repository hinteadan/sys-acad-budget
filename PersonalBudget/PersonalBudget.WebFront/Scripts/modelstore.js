(function (s, m, undefined) {
    'use strict';

    var incomeStore = new s.LocalStore('Incomes'),
        spendingStore = new s.LocalStore('Spendings'),
        categoryStore = new s.LocalStore('Category');

    this.storage = this.storage || {};
    this.storage.Incomes = incomeStore;
    this.storage.Spendings = spendingStore;
    this.storage.Category = categoryStore;

}).call(this, this.storage, this.model);
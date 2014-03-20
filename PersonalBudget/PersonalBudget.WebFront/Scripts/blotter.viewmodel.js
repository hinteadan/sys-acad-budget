﻿(function (ko, s, undefined) {
    'use strict';

    function BudgetEntry(amount, description, timestamp) {
        this.amount = amount || 0;
        this.description = description || '';
        this.timestamp = timestamp || null;
    }
    BudgetEntry.fromIncome = function (income) {
        /// <param name='income' type='model.Income' />
        return new BudgetEntry(income.amount, income.info, income.date.toString());
    };
    BudgetEntry.fromSpending = function (spending) {
        /// <param name='spending' type='model.Spending' />
        return new BudgetEntry(-spending.amount, spending.info, spending.date.toString());
    };

    function ViewModel() {
        var entries = ko.observableArray([]);

        function initialize() {
            s.Incomes.query()
                .then(function (incomes) {
                    /// <param name='incomes' type='Array' elementType='model.Income' />
                    if (!incomes) {
                        return;
                    }
                    for (var index in incomes) {
                        entries.push(BudgetEntry.fromIncome(incomes[index]));
                    }
                });
            s.Spendings.query()
                .then(function (spendings) {
                    /// <param name='spendings' type='Array' elementType='model.Spending' />
                    if (!spendings) {
                        return;
                    }
                    for (var index in spendings) {
                        entries.push(BudgetEntry.fromSpending(spendings[index]));
                    }
                });
        }
        initialize();

        this.entries = entries;
    }

    this.viewModels = this.viewModels || {};
    this.viewModels.blotter = ViewModel;

}).call(this, this.ko, this.storage);
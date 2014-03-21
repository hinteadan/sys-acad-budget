(function (ko, s, loc, undefined) {
    'use strict';

    function formatDateDisplay(date) {
        /// <param name='date' type='Date' />
        if (!date) {
            return '';
        }
        return date.getDate() + '/' + (date.getMonth() + 1)  + '/' + date.getFullYear();
    }

    function BudgetEntry(amount, description, timestamp, date) {
        this.amount = amount || 0;
        this.description = description || '';
        this.date = date;
        this.timestamp = timestamp || null;
    }
    BudgetEntry.fromIncome = function (income) {
        /// <param name='income' type='model.Income' />
        return new BudgetEntry(income.amount, income.info, formatDateDisplay(income.date), income.date);
    };
    BudgetEntry.fromSpending = function (spending) {
        /// <param name='spending' type='model.Spending' />
        return new BudgetEntry(-spending.amount, spending.info, formatDateDisplay(spending.date), spending.date);
    };
    BudgetEntry.sortByDate = function (a, b) {
        /// <param name='a' type='BudgetEntry' />
        /// <param name='b' type='BudgetEntry' />
        return a.date < b.date ? -1 :
            a.date > b.date ? 1 :
            0;
    }

    function ViewModel() {
        var entries = ko.observableArray([]),
            total = ko.computed(calculateTotal);

        function calculateTotal() {
            var totalSoFar = 0;
            if (!entries() || !entries().length) {
                return totalSoFar;
            }
            for (var index in entries()) {
                totalSoFar += entries()[index].amount;
            }
            return totalSoFar;
        }

        function goToAddView() {
            loc.href = 'add.html';
        }

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
                    entries.sort(BudgetEntry.sortByDate);
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
                    entries.sort(BudgetEntry.sortByDate);
                });
        }
        initialize();

        this.entries = entries;
        this.total = total;
        this.add = goToAddView;
    }

    this.viewModels = this.viewModels || {};
    this.viewModels.blotter = ViewModel;

}).call(this, this.ko, this.storage, this.location);
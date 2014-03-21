(function (ko, s, m, loc, undefined) {
    'use strict';

    function ViewModel() {

        var entryType = ko.observable(m.Income),
            amount = ko.observable(0),
            note = ko.observable();

        function validateEntry() {
            var isValid = true,
                message = '';
            if (amount() <= 0) {
                isValid = isValid && false;
                message += 'Amount must be positive\r\n';
            }
            if (!note() || note() === '') {
                if (!confirm('Are you sure you don\'t want to write any notes for this entry?')) {
                    isValid = false;
                }
            }
            if (!isValid && message !== '') {
                alert(message);
            }
            return isValid;
        }

        function entryStore() {
            /// <returns type="storage.LocalStore" />
            switch (entryType()) {
                case m.Income: return s.Incomes;
                case m.Spending: return s.Spendings;
                default: throw new Error('Invalid entry type');
            };
        }

        function constructModelEntry() {
            /// <returns type="model.Spending" />
            return new (entryType())(amount(), new Date(), note());
        }

        function addEntry() {
            if (!validateEntry()) {
                return;
            }

            entryStore()
                .add(constructModelEntry())
                .then(function (data) {
                    loc.href = 'index.html';
                });
        }

        //Public API
        this.entryType = entryType;
        this.amount = amount;
        this.note = note;
        this.add = addEntry;
    }

    this.viewModels = this.viewModels || {};
    this.viewModels.add = ViewModel;

}).call(this, this.ko, this.storage, this.model, this.location);
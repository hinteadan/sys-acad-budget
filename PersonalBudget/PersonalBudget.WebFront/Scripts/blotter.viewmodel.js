(function (ko, s, undefined) {
    'use strict';

    function BlotterViewModel() {

        var entries = ko.observableArray([]);

        function initialize() {

            s.Incomes.query().then(function (incomes) {
                for (var index in incomes) {
                    entries.push(incomes[index]);
                }
            });

            s.Spendings.query().then(function (spendings) {
                for (var index in spendings) {
                    entries.push(spendings[index]);
                }
            });

            entries.sort(function (a, b) {
                if (a.amount < b.amount) return 1;
                else if (a.amount == b.amount) return 0;
                else return -1;
            });
        }

        initialize();

        this.entries = entries;
    }

    ko.applyBindings(new BlotterViewModel());

}).call(this, this.ko, this.storage);
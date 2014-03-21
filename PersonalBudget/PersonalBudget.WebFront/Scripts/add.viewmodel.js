(function (ko, s, m, undefined) {
    'use strict';

    function ViewModel() {

        var entryType = ko.observable(m.Income),
            amount = ko.observable(0),
            note = ko.observable();

        function addEntry() {

            console.log('add entry');

        }

        this.entryType = entryType;
        this.amount = amount;
        this.note = note;
        this.add = addEntry;
    }

    this.viewModels = this.viewModels || {};
    this.viewModels.add = ViewModel;

}).call(this, this.ko, this.storage, this.model);
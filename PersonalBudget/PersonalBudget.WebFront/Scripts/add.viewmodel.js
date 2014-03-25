(function (m, ko, s, undefined) {
	'use strict';

	function AddViewModel() {

		this.type = ko.observable(m.Income);
		this.amount = ko.observable(0);
		this.notes = ko.observable('');
		this.add = function () {
		    if (this.type() === m.Income) {
		        var income = new m.Income();
		        income.amount = this.amount();
		        income.notes = this.notes();
		        s.Incomes.add(income);
		    }
		    else if (this.type() === m.Spending) {
		        var spending = new m.Spending();
		        spending.amount = this.amount();
		        spending.notes = this.notes();
		        s.Spendings.add(spending);
		    }
		}

	}

	ko.applyBindings(new AddViewModel());

}).call(this, this.model, this.ko, this.storage);
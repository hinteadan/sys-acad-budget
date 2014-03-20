(function (s, m, undefined) {
    'use strict';

    s.Incomes.query().then(function (data) {
        /// <param name='data' type='Array' elementType='m.Income' />
        console.log(data[0]);
        data[0].amount = Math.round(Math.random() * 100);
        console.log(data[0]);
        s.Incomes.save();
    });

}).call(this, this.storage, this.model);
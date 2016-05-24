/**
 * Created by xavier on 5/24/16.
 */
(function () {
    'use strict';

    function testFunction(arg1, arg2) {
        return arg1 + arg2;
    }

    console.log(testFunction.length);

    var person = {
        name: 'xavier',
        job: 'developer'
    };

    function introduce(inductee) {
        console.log('Hey ' + inductee + ' my name is ' + this.name + ', and I\'m a ' + this.job);
    }

    introduce.call(person, 'Bob');

    function chat(respondent, subject){
        console.log('So '+respondent+', what about the '+subject+
            ' huh? pretty good for a '+this.job);
    }

    function engage(mode, object, args){
        mode.apply(object, args);
    }
    engage(introduce, person, ['fred']);

    engage(chat, person, ['Al', 'new IDE']);

    function addToCart(fee, price) {
        if (!this.total) {
            this.total = 0 += fee || 0;
        }
        console.log(fee);
        this.total += price;
        return this.name + '\'s cart total is $' + this.total;
    }

    var xaviersCart = addToCart.bind(person, 1);
    console.log(xaviersCart(50));
    console.log(xaviersCart(50));
}());
/**
 * Created by xavier on 5/24/16.
 */


//how to use timers
(function () {
    'use strict';
    setTimeout('console.log("bad!")', 1000);
}());


//below is a better method for using timers because you aren't passing live code
//but instead a function expression
(function () {
    'use strict';

    function log(){
        console.log('better!');
    }
    setTimeout(log, 1000);
}());

(function () {
    'use strict';

    function log(message){
        console.log(message);
    }
    setTimeout(function(){
        log('woo!');
    }, 1000);

    function pulse(){
        console.log('boom, boom');
        counter += 1;

        if(counter === 5){
            clearInterval(interval);
        }
    }
    var interval = setInterval(pulse, 1000),
    counter = 0;
}());


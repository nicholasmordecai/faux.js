import { Suite } from 'benchmark';

import {  } from '../../src/generators/internet/authentication';

const suite = new Suite;

// add tests
suite
    .add('Substring', function () {

    })
    .add('Generative Lowercase prototype', function () {

    })

    .add('Generative', function () {

    })
    // add listeners
    .on('cycle', function (event: any) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + suite.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });
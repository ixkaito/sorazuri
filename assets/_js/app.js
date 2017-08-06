const jQuery = require('jquery');
const $ = jQuery;
const env = {
  'osaka':  require('../../data/20170703_osaka.json'),
  'halkas': require('../../data/halkas.json'),
};
const assets = './assets/images/';

console.log(env.osaka[0]);
console.log(env.halkas[0]);

$(function() {

let num = 1;
let fish;

for (var i = 1; i <= num; i++) {

  fish = assets + 'ray.png';
  $('#fish').append('<li class="fish-' + i + '"><img src="' + fish + '" /></li>');

}

});

const jQuery = require('jquery');
const $ = jQuery;
const env = {
  osaka:  require('../../data/20170703_osaka.json'),
  halkas: require('../../data/halkas.json'),
};
const assets = './assets/images/';

console.log(env.osaka[0]);
console.log(env.halkas[0]);

$(function() {

const now = 16;
const current = {
  pressure: env.osaka[now - 1].localPressure,
  temperature: env.osaka[now - 1].temperature,
  windspeed: env.osaka[now - 1].windSpeed,
}

$('#env .pressure').append(current.pressure + 'hPa');
$('#env .temperature').append(current.temperature + '℃');
$('#env .windspeed').append(current.windspeed + 'm/s');

let num = 1;
let fish;

for (var i = 1; i <= num; i++) {

  fish = assets + 'ray.png';
  $('#fish').append('<li class="fish-' + i + '"><img src="' + fish + '" /></li>');

}

});

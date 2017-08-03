var secretData = require('../.env');
var CryptoJS = require("crypto-js");
var ak = secretData.marvel_pubkey;
var pk = secretData.marvel_prikey;


//BUSINESS logic
function Marvel(){
  console.log(secretData.marvel_pubkey);
}

Marvel.prototype.getCharInfo = function(heroId, passedUIFunction){
  var ts = new Date().getTime();
  var hash = CryptoJS.MD5(ts+pk+ak).toString();

  console.log('https://gateway.marvel.com:443/v1/public/characters/'+heroId+'?apikey='+ak+'&ts='+ts+'&hash='+hash);


  $.get('https://gateway.marvel.com:443/v1/public/characters/'+heroId+'?apikey='+ak+'&ts='+ts+'&hash='+hash)
    .then(function(apiResponse){
      passedUIFunction(apiResponse.data.results[0]);
    });
};

Marvel.prototype.getAllCharacters = function(passedUIFunction){
  // var ak = secretData.marvel_pubkey;
  // var pk = secretData.marvel_prikey;
  var ts = new Date().getTime();
  var hash = CryptoJS.MD5(ts+pk+ak).toString();
  console.log('https://gateway.marvel.com:443/v1/public/characters?apikey='+ak+'&ts='+ts+'&hash='+hash);


  $.get('https://gateway.marvel.com:443/v1/public/characters?apikey='+ak+'&ts='+ts+'&hash='+hash)
    .then(function(apiResponse){
      passedUIFunction(apiResponse);
    });
};


module.exports = Marvel;

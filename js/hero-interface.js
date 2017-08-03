//Include our Back end logic
var Marvel = require('./../js/marvel.js');

///////////////////////////////////
//UI LOGIC

// UI callback function for dropdown
var loadHeroDropDown = function(allData) {

  var characters = allData.data.results;
  $.each(characters, function() {
    $('.heroes').append(
        '<option value="'+this.id+'">'+this.name+'</option>'
    );
  });
};

// UI callback function for character info data dump
var showCharacterInfo = function(character) {
  //var specificcharacter = CharInfo.data.results;
  console.log(character);
  $('.chrName').html(character.name);
  $('.chrThumb').html('<img src="'+character.thumbnail.path+"."+character.thumbnail.extension+'" height="200">');
  $("a[href='#']").attr('href', character.urls[1].url);
};

//the document ready method
$(document).ready(function() {
  //load heros into the dropdown
  var hero = new Marvel();
  hero.getAllCharacters(loadHeroDropDown);

  // Hero dropdown event listener
  $( ".heroes" ).change(function() {
    var id = parseInt($(".heroes").val());
    var hero2 = new Marvel();
    hero2.getCharInfo(id,showCharacterInfo)
  });
});

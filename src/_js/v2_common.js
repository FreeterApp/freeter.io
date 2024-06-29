require('bootstrap/js/dist/collapse');

$(function () {
  setTimeout(function () {
    $.get( "/sponsors.json", function( sponsors ) {
      if(sponsors.length>0) {
        var sponsor = sponsors[Math.floor(Math.random() * sponsors.length)]
        $('.sponsor-tooltip').text('Thanks to ' + sponsor + ' & others...').removeClass('is-loading');
      }
    });
  }, 100)
})

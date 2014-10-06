$(document).ready(function () {
  $('div.tags').melange('button');
});

(function ($) {
  $.fn.melange = function (elementAMelanger) {
    return this.each(function () {
      var that = $(this);
      var elementsAMelanger = that.children(elementAMelanger);

      melangeLesElements();
      supprimeLesElements();
      ajouteLesElementsDansLeNouvelOrdre();

      function melangeLesElements() {
        elementsAMelanger.sort(function () {
          return (Math.round(Math.random()) - 0.5);
        });
      }

      function supprimeLesElements() {
        that.remove(elementAMelanger);
      }

      function ajouteLesElementsDansLeNouvelOrdre() {
        for (var i = 0; i < elementsAMelanger.length; i++) {
          that.append(elementsAMelanger[i]);
        }
      }
    });
  }
})(jQuery);
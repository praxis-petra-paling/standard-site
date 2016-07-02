(function() {
  function createPraxisGallery() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    var praxisItems = [
      {
        src: 'images/praxis/small/Erstes.jpg',
        w: 750,
        h: 1000,
        title: 'Motiv der Praxistür'
      },
      {
        src: 'images/praxis/small/Zweites.jpg',
        w: 1000,
        h: 1000,
        title: 'Fenster im Wartezimmer'
      },
      {
        src: 'images/praxis/small/Drittes.jpg',
        w: 1000,
        h: 750,
        title: 'Wartezimmer'
      },
      {
        src: 'images/praxis/small/Viertes.jpg',
        w: 1000,
        h: 750,
        title: 'Spielecke'
      },
      {
        src: 'images/praxis/small/Fuenftes.jpg',
        w: 750,
        h: 1000,
        title: 'Anmeldung'
      },
      {
        src: 'images/praxis/small/Sechstes.jpg',
        w: 1000,
        h: 750,
        title: 'Frau Hansel an der Anmeldung'
      },
      {
        src: 'images/praxis/small/Siebtes.jpg',
        w: 750,
        h: 1000,
        title: 'Sprechzimmer'
      },
      {
        src: 'images/praxis/small/Achtes.jpg',
        w: 1000,
        h: 666,
        title: 'Sprechzimmer'
      },
      {
        src: 'images/praxis/small/Neuntes.jpg',
        w: 1000,
        h: 750,
        title: 'Sprechzimmer'
      },
      {
        src: 'images/praxis/small/Zehntes.jpg',
        w: 750,
        h: 1000,
        title: 'Kindgerechte Ausstattung'
      }
    ];

    var options = {
      showAnimationDuration: 0
    };

    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, praxisItems, options);
    gallery.init();
  }

  function createTdotGallery() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    var tdotItems = [
      {
        src: 'images/tdot/small/Erstes.jpg',
        w: 1000,
        h: 666,
        title: 'Sabine Eckert - Uschi Hartberger - Dr.Petra Paling - Karin Lenz'
      },
      {
        src: 'images/tdot/small/Zweites.jpg',
        w: 666,
        h: 1000,
        title: 'Uschi Hartberger erklärt die Alexander-Technik'
      },
      {
        src: 'images/tdot/small/Drittes.jpg',
        w: 1000,
        h: 666,
        title: 'Karin Lenz im Gespräch'
      },
      {
        src: 'images/tdot/small/Viertes.jpg',
        w: 666,
        h: 1000,
        title: 'Sabine Eckert erläutert Techniken der Lerntherapie'
      },
      {
        src: 'images/tdot/small/Fuenftes.jpg',
        w: 1000,
        h: 666,
        title: 'Anna Mavrommatis (Violine), Rosa Färber (Gitarre)'
      },
      {
        src: 'images/tdot/small/Sechstes.jpg',
        w: 1000,
        h: 666,
        title: 'Anna Mavrommatis (Violine), Rosa Färber (Gitarre)'
      },
      {
        src: 'images/tdot/small/Siebtes.jpg',
        w: 1000,
        h: 666,
        title: 'Anna Mavrommatis (Violine), Rosa Färber (Gitarre)'
      },
      {
        src: 'images/tdot/small/Achtes.jpg',
        w: 1000,
        h: 666,
        title: 'Erik Jirsak (Akkordeon)'
      },
      {
        src: 'images/tdot/small/Neuntes.jpg',
        w: 666,
        h: 1000,
        title: 'Erik Jirsak (Akkordeon)'
      },
      {
        src: 'images/tdot/small/Zehntes.jpg',
        w: 1000,
        h: 666,
        title: 'Gespräche im Wartezimmer'
      },
      {
        src: 'images/tdot/small/Elftes.jpg',
        w: 1000,
        h: 666,
        title: 'Anna Mavrommatis und Uschi Hartberger'
      },
      {
        src: 'images/tdot/small/Zwoelftes.jpg',
        w: 666,
        h: 1000,
        title: 'Dr.Petra Paling'
      },
      {
        src: 'images/tdot/small/Dreizehntes.jpg',
        w: 1000,
        h: 666,
        title: 'Dr.Petra Paling'
      },
      {
        src: 'images/tdot/small/Vierzehntes.jpg',
        w: 1000,
        h: 666,
        title: 'Dr.Paling erläutert das homöopathische Erstgespräch'
      },
      {
        src: 'images/tdot/small/Fuenfzehntes.jpg',
        w: 1000,
        h: 563,
        title: 'Dr.Paling erläutert das homöopathische Erstgespräch'
      },
      {
        src: 'images/tdot/small/Sechszehntes.jpg',
        w: 2790,
        h: 750
      },
      {
        src: 'images/tdot/small/Siebzehntes.jpg',
        w: 1000,
        h: 666,
        title: 'Erleichtert am Ende des Tages: Sabine Eckert und Ehemann'
      }
    ];

    var options = {
      showAnimationDuration: 0
    };

    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, tdotItems, options);
    gallery.init();
  }

  document.getElementById('praxis').addEventListener('click', createPraxisGallery);
  document.getElementById('tdot').addEventListener('click', createTdotGallery);
})();

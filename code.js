$(document).on('scroll', function() {         //nasłuchiwanie na scrolla
    const windowHeight = $(window).height();   // pobieranie wysokości okna przeglądarki
    const scrollValue = $(this).scrollTop()   //określenie pozycji scrolla od góry

    //Pierwsza sekcja

    const $art2 = $('.art2');                 //pobranie art2
    const art2FromTop = $art2.offset().top   //odległość ar2 od początku
    const art2Height = $art2.outerHeight()    //wysokość atr2

    const $art3 = $('.art3');                 //pobranie art3
    const art3FromTop = $art3.offset().top   //odległość ar3 od początku
    const art3Height = $art3.outerHeight()    //wysokość atr3

    const $art4 = $('.art4');                 //pobranie art4
    const art4FromTop = $art4.offset().top   //odległość ar4 od początku
    const art4Height = $art4.outerHeight()    //wysokość atr4
    
    if(scrollValue> art2FromTop + art2Height - windowHeight) {
        $art2.addClass('active');             //dopisanie klasy "active" do art2
     }

    if(scrollValue> art3FromTop + art3Height - windowHeight) {
        $art3.addClass('active');             //dopisanie klasy "active" do art3
     }

     if(scrollValue> art4FromTop + art4Height - windowHeight) {
        $art4.addClass('active');             //dopisanie klasy "active" do art4
     }

    //Druga sekcja

    const $op1 = $('.op1');                  // pobranie op1
    const $op2 = $('.op2');                  // pobranie op2
    const op1FromTop = $op1.offset().top     //odległość op1 od początku
    const op2FromTop = $op2.offset().top     //odległość op2 od początku
    const op1Height = $op1.outerHeight()    //wysokość op1
    const op2Height = $op2.outerHeight()    //wysokość op2




    //Czyściciel

    if(scrollValue < 100) {
        $('article').removeClass('active');    // zabranie wszystkim article klasy "Active" kiedy skroll jest miejszy niż 100px
    }
})

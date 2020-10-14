$(document).ready(function() {

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    getCopyrightFullYear();
    scrollDownOnClick();
    owlcarousel();
    navbarAppear();

    //allo scroll down la navbar appare cambiando colore
    function navbarAppear() {
        $(function () {
            $(window).on('scroll', function () {
                if ( $(window).scrollTop() > 10 ) {
                    $('.navbar').addClass('active');
                } else {
                    $('.navbar').removeClass('active');
                }
            });
        });
    }

    //regola il funzionamento del carousel (attivo solo da mobile)
    function owlcarousel() {
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                575:{
                    items:3
                }
            }
        })
    }

    //al click sulla freccia lampeggiante c'è scroll down
    function scrollDownOnClick() {
        $(".arrow").click(function() {
            $('html, body').animate({
                //posiziona la pag all'inizio (top) della sez "come funziona"
                scrollTop: $("#come-funziona").offset().top
            }, 800);
        });
    }


    //bottone back to the top
    if ($('#back-to-top').length) {
        var scrollTrigger = 700, //dopo quanti px si attiva la freccia

        backToTop = function() {
            //ritorna la posizione della scrollbar e la salva in var
            var scrollTop = $(window).scrollTop();
            //se la pos della scrollbar è maggiore del valore che ho impostato come trigger (in questo caso 700)
            if (scrollTop > scrollTrigger) {
            $('#back-to-top').addClass('appear');
            } else {
            $('#back-to-top').removeClass('appear');
            }
        };
        backToTop();
        //allo scroll fai scattare la funzione
        $(window).on('scroll', function() {
            backToTop();
        });
        //al clic sul bottone riporta a 0 la scrollbar con velocità di 800 millisecondi
        $('#back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
            scrollTop: 0
            }, 800);
        });
    }

    // data copyright del footer
    function getCopyrightFullYear() {
        var d = new Date(); //fornisce la data attuale
        var n = d.getFullYear(); //prende solo l'anno di quella data precedentemente fornita
        document.getElementById("copyright-full-year").innerHTML = n;
    }

});


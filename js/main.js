

$(document).ready(function(){

    //owl carousel fire function
    $('.second-owl').owlCarousel({
        nav: false,
        dots: false,
        autoplay: true,
        loop: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        responsive:{
            600:{
                items:5
            },
            800:{
                items:6
            },
            1000:{
                items:9
            }
        }
    })

});

    //cloes alert
$('.close-btn').click(function() {
    $('.alert').fadeOut(150);
});

    //view sub-menus 
for (var i = 1; i <= $('header .navbar .nav-link').length; i++) {
    const x = i;
    $(`#menu_${x}`).mouseenter(function() {
        $(`.sub-menu`).removeClass('show')

        $(`#sub-menu_${x}`).addClass('show')

        $(`#sub-menu_${x}`).mouseleave(function() {
            $(`#sub-menu_${x}`).removeClass('show')
        })
    })
}

$('.sm-menu .menu-btn').click(function() {
    $('.sm-menu ul').toggleClass('show');
})

$('.sm-menu li.parent-li a.dropdown-toggle').click(function() {
    let smSubMenu = ($('.sm-menu li.parent-li').find('.sm-sub-menu'));
    if ($(this).parent().find('.sm-sub-menu').css('display') != 'none') {
        smSubMenu.slideUp(500);
    } else {
        smSubMenu.slideUp(500);
        $(this).parent().find('.sm-sub-menu').slideDown(500);
    }
})

function clickThis(btn) {
    console.log(btn);
    btn.click();
}

$('#v-pills-tab a.nav-link').on('mouseenter', function() {
    $(this).siblings('a.nav-link.active').removeClass('active');
    $(this).addClass('active');
    $('.news-tabs .tab-pane.active').removeClass('active show');
    $($(this).attr('href')).addClass('active show');
});



function countup() {
    var options = {
      useEasing: true,
      useGrouping: true,
      separator: '',
      decimal: '',
    };

    var demo = new CountUp('targetId_1', 0, $("#targetId_1").text(), 0, 2.5, options);
    if (!demo.error) {
      demo.start();
    } else {
      console.error(demo.error);
    }

    var demo2 = new CountUp('targetId_2', 0, $("#targetId_2").text(), 0, 2.5, options);
    if (!demo2.error) {
      demo2.start();
    } else {
      console.error(demo.error);
    }

    var demo3 = new CountUp('targetId_3', 0, $("#targetId_3").text(), 0, 2.5, options);
    if (!demo3.error) {
      demo3.start();
    } else {
      console.error(demo.error);
    }

    var demo4 = new CountUp('targetId_4', 0, $("#targetId_4").text(), 0, 2.5, options);
    if (!demo4.error) {
      demo4.start();
    } else {
      console.error(demo.error);
    }
}


$(window).scroll(function() {
    let scrollTop = $(window).scrollTop(),
        counterOffset = $('.statistics').offset().top;

    if (scrollTop > counterOffset - 300 && $('.statistics').attr('data-counted') == 'false') {
        countup();
        $('.statistics').eq(0).attr('data-counted', true);
    }
})


    //fixed navbar
$(window).scroll(function() {
    let scrollTop = $(window).scrollTop();

        if (scrollTop > 100) {
            $(`header`).css({
                'position': 'fixed',
                'top': 0,
                'left': 0,
                'right': 0
            });
        } else {
            $(`header`).css('position', 'relative');
        }
})


            /*        CHARTS          */
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'august', 'september', 'october', 'november', 'december'],
        datasets: [{
            label: 'First data statistics',
            backgroundColor: 'rgba(54, 162, 235, 0.3)',
            borderColor:  'rgba(54, 162, 235, 1)',
            data: [0, 10, 5, 20, 39, 9, 30, 6, 33, 21, 17, 24]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'august', 'september', 'october', 'november', 'december'],
        datasets: [{
            label: 'Second data statistics',
            backgroundColor: 'rgba(224, 197, 57,6)',
            borderColor: 'rgba(237, 212, 91, 0.6)',
            fill: false,
            data: [0, 10, 5, 14, 3, 24, 20, 32, 21, 27, 17, 24]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'august', 'september', 'october', 'november', 'december'],
        datasets: [{
            label: 'Second data statistics',
            backgroundColor: 'rgba(224, 197, 57,6)',
            borderColor: 'rgba(237, 212, 91, 0.6)',
            fill: false,
            data: [12, 8, 3, 9, 15, 4, 14, 18, 21, 12, 16, 7]
        }]
    },

    // Configuration options go here
    options: {}
});


var ctx = document.getElementById('myChart4').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'august', 'september', 'october', 'november', 'december'],
        datasets: [{
            label: 'Second data statistics',
            backgroundColor: 'rgba(224, 197, 57,6)',
            borderColor: 'rgba(237, 212, 91, 0.6)',
            fill: false,
            data: [0, 10, 5, 14, 3, 24, 20, 32, 21, 27, 17, 24]
        }]
    },

    // Configuration options go here
    options: {}
});







window.addEventListener('load', function () {
	function go() {
		i = i < width ? i + step : 1;
		m.style.marginLeft = -i + 'px';
	}
	var i = 0,
		step = 3,
		space = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	var m = document.getElementById('marquee');
	var t = m.innerHTML; //text
	m.innerHTML = t + space;
	m.style.position = 'absolute'; // http://stackoverflow.com/questions/2057682/determine-pixel-length-of-string-in-javascript-jquery/2057789#2057789
    var width = (m.clientWidth + 1);
	m.style.position = '';
	m.innerHTML = t + space + t + space + t + space + t + space + t + space + t + space + t + space;
	m.addEventListener('mouseenter', function () {
		step = 0;
	}, true);
	m.addEventListener('mouseleave', function () {
		step = 3;
	}, true);
	var x = setInterval(go, 50);
}, true);
jQuery(document).ready(function(s){function e(){a(s(".cd-headline.letters").find("b")),n(s(".cd-headline"))}function a(e){e.each(function(){var e=s(this),a=e.text().split(""),n=e.hasClass("is-visible");for(i in a)e.parents(".rotate-2").length>0&&(a[i]="<em>"+a[i]+"</em>"),a[i]=n?'<i class="in">'+a[i]+"</i>":"<i>"+a[i]+"</i>";var t=a.join("");e.html(t).css("opacity",1)})}function n(i){var e=h;i.each(function(){var i=s(this);if(i.hasClass("loading-bar"))e=u,setTimeout(function(){i.find(".cd-words-wrapper").addClass("is-loading")},p);else if(i.hasClass("clip")){var a=i.find(".cd-words-wrapper"),n=a.width()+10;a.css("width",n)}else if(!i.hasClass("type")){var d=i.find(".cd-words-wrapper b"),l=0;d.each(function(){var i=s(this).width();i>l&&(l=i)}),i.find(".cd-words-wrapper").css("width",l)}setTimeout(function(){t(i.find(".is-visible").eq(0))},e)})}function t(s){var i=o(s);if(s.parents(".cd-headline").hasClass("type")){var e=s.parent(".cd-words-wrapper");e.addClass("selected").removeClass("waiting"),setTimeout(function(){e.removeClass("selected"),s.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")},m),setTimeout(function(){d(i,C)},w)}else if(s.parents(".cd-headline").hasClass("letters")){var a=s.children("i").length>=i.children("i").length?!0:!1;l(s.find("i").eq(0),s,a,f),r(i.find("i").eq(0),i,a,f)}else s.parents(".cd-headline").hasClass("clip")?s.parents(".cd-words-wrapper").animate({width:"2px"},v,function(){c(s,i),d(i)}):s.parents(".cd-headline").hasClass("loading-bar")?(s.parents(".cd-words-wrapper").removeClass("is-loading"),c(s,i),setTimeout(function(){t(i)},u),setTimeout(function(){s.parents(".cd-words-wrapper").addClass("is-loading")},p)):(c(s,i),setTimeout(function(){t(i)},h))}function d(s,i){s.parents(".cd-headline").hasClass("type")?(r(s.find("i").eq(0),s,!1,i),s.addClass("is-visible").removeClass("is-hidden")):s.parents(".cd-headline").hasClass("clip")&&s.parents(".cd-words-wrapper").animate({width:s.width()+10},v,function(){setTimeout(function(){t(s)},T)})}function l(i,e,a,n){if(i.removeClass("in").addClass("out"),i.is(":last-child")?a&&setTimeout(function(){t(o(e))},h):setTimeout(function(){l(i.next(),e,a,n)},n),i.is(":last-child")&&s("html").hasClass("no-csstransitions")){var d=o(e);c(e,d)}}function r(s,i,e,a){s.addClass("in").removeClass("out"),s.is(":last-child")?(i.parents(".cd-headline").hasClass("type")&&setTimeout(function(){i.parents(".cd-words-wrapper").addClass("waiting")},200),e||setTimeout(function(){t(i)},h)):setTimeout(function(){r(s.next(),i,e,a)},a)}function o(s){return s.is(":last-child")?s.parent().children().eq(0):s.next()}function c(s,i){s.removeClass("is-visible").addClass("is-hidden"),i.removeClass("is-hidden").addClass("is-visible")}var h=2500,u=3500,p=u-3e3,f=25,C=100,m=300,w=m+200,v=500,T=1200;  $('.sticky-menu').addClass('original').clone().insertAfter('.sticky-menu').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();e()});


Port = {
    initialize: function () {
        Port.Animate();

        $('.link').on('click', function() {
            $('.link').removeClass('selected');
            $(this).addClass('selected');
        });

        $('#logo').on('click', function(){
            $('.link').removeClass('selected');
        });

        $('.footer-link').on('click', function(){
            $('.link').removeClass('selected');
        });
         // use parallax effect for mobile
        var ismobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        if (ismobile){
            $(".intro-header").css({"background": "url(./img/home-mobile.jpg) no-repeat center center"});
            $(".portfolio").css({"background": "url(./img/portfolio-mobile.jpg) no-repeat center center" });
            $(".contact").css({"background": "url(./img/contact-mobile.jpg) no-repeat center center"})
        }
    },

    Animate: function(){
    $('a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
    });
    }
}

$(document).ready(Port.initialize);



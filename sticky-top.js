$(function(){if($("#HTML1").length){var o=$("#HTML1"),t=$("#HTML1").offset().top,i=$("#HTML1").height();$(window).scroll(function(){var s=$("#banner728-bottom").offset().top-i-20,n=$(window).scrollTop(),f=$(window).width();if(n>t&&f>759?o.css({position:"fixed",top:50}):o.css("position","static"),n>s){var c=s-n;o.css({top:c})}})}});

//Back Top
if($(".smoothscroll-top").length){var scrollTrigger=100,backToTop=function(){var o=$(window).scrollTop();o>scrollTrigger?$(".smoothscroll-top").addClass("show"):$(".smoothscroll-top").removeClass("show")};backToTop(),$(window).on("scroll",function(){backToTop()}),$(".smoothscroll-top").on("click",function(o){o.preventDefault(),$("html,body").animate({scrollTop:0},700)})};

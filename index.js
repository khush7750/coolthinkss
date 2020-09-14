
let navbar = $(".navbar")

$(window).scroll(function(){
    let otop = $(".section-2").offset().top-window.innerHeight;
    console.log(otop);
    if($(window).scrollTop()>otop){
        navbar.addClass("stickey");
    }
    else{
        navbar.removeClass("stickey");
    }
});

// counter annimation
let nCount = function(selector){
    $(selector).each(function(){
        $(this).animate({
            Counter:$(this).text()
        },{
            duration:4000,
            easing:"swing",
            step:function(value){
                $(this).text(Math.ceil(value));
            }
        });
    });
};

let a = 0;
$(window).scroll(function(){
    let otop = $(".numbers").offset().top-window.innerHeight;
    if(a==0 && $(window).scrollTop()>= otop){
        a++;
        nCount(".numbers .rect>h1");
    }
})




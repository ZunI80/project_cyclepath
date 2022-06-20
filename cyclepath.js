

// let x = 0;

// $(".main-more ").mouseenter(function(){
//     // console.log('hi',$(this).index()*800)
//     // console.log('transform:translateX(',$(this).index()* -800,'px);')
//     x++;
//     console.log(x)
//     if (x >=3) {
//         x=0
//     }
//     $('.introduce-wrap li').css('transform',`translateX(${x * -100}%)`);
//     moveRight();
// })

// 首頁輪播
var index_img = 0;

 function pageUpdata_index() {
     $('.introduce-wrap li').css('transition','.5s').css('transform',`translateX(${index_img * -100}%)`)
 }
 function pageUpdataWithoutTransition_indedx() {
    $('.introduce-wrap li').css('transition','none').css('transform',`translateX(${index_img * -100}%)`)
 }
 function moveRight_index() {
    index_img++;
     pageUpdata_index();
     if (index_img >= 3) {
         $('.introduce-wrap li').one('transitionend', function(){
            index_img = 0
             pageUpdataWithoutTransition_indedx();
         })
     }
 }


// setInterval(moveRight, 3000);
let indexInterval = null;
function startInterval_index (){
    indexInterval = setInterval(moveRight_index, 2000);
}
startInterval_index();

// style輪播
// 
// let style_img = 0;
//  function pageUpdata_style() {
//      $('.style-train li').css('transition','.5s').css('transform',`translateX(${style_img * -100}%)`)
//  }
//  function pageUpdataWithoutTransition_style() {
//     $('.style-train li').css('transition','none').css('transform',`translateX(${style_img * -100}%)`)
//  }
//  function moveRight_style (){
//     style_img++;
//      pageUpdata_style ();
//      if (style_img >= 3) {
//          $('.style-train li').one('transitionend', function(){
//             style_img = 0
//              pageUpdataWithoutTransition_style();
//          })
//      }
//  }
//  let styleInterval = null;
//  function startInterval_style (){
//      styleInterval = setInterval(moveRight_style, 2000);
//  }
//  startInterval_style();
// 
const clickImg = $(".style-img");
let style_img = 0;

 clickImg.click(function(){
    style_img++;
    $(this).children().children('.style-train li').css('transition','.5s').css('transform',`translateX(${style_img * -100}%)`)
    console.log($(this));
     if (style_img >= 3) {
        $(this).children().children('.style-train li').one('transitionend', function(){
            // console.log($(this);
            style_img = 0
            // $(this).css('transition','none').css('transform',`translateX(${style_img * -100}%)`)
            $(this).css('transition','none').css('transform',`translateX(0%)`)
         })
     }
 })




//  let styleInterval = null;
//  function startInterval_style (){
//      styleInterval = setInterval(moveRight_style, 2000);
//  }
//  startInterval_style();


// console.log($('section').offset().top);


$(".main-more").click(function(){
   $('.hidden-text').toggleClass('show')
})
$(".dgr-text-area").click(function(){
   $('.dgr-text-area').toggleClass('click')
})

// // 重點彈出
let sectionHight = $('section').offset().top
console.log(sectionHight);
console.log($('.video-wrap').height());
// let selfNav = $('nav').height()
// $('nav').css('top',- selfNav +5)

// console.log(navFixed);

$(window).scroll(function() {
    // console.log($(window).scrollTop());
    if ( $(window).scrollTop() >= $('.video-wrap').height()) {
        // console.log('hi');

    //     $('.mainpage').css({'display':'block'})
    // } else
    // $('.mainpage').css({'display':'none'});

        $('.mainpage').css({'transform': 'translateY(0%)'})
    } else
        $('.mainpage').css({'transform': 'translateY(-100%)'})



    //         

    const scrollT = $(window).scrollTop();
    // const windowH = $(window).height();
    // const bH = $('body').height();


    console.log($('.feature').offset().top);
    const sloganHight = Number($('.feature').offset().top) - 200  ;
    console.log(sloganHight);
    if (scrollT > sloganHight ) {
        $('.feature-card').css('transform', 'translateY(0)')
    }
    else {
        $('.feature-card').css('transform', 'translateY(300px)')
    }
})

// 商品img

$('.item-wrap img').click(function(){
    console.log('hi', $(this).attr('src'));
    
    const chanageImg =  $(this).attr('src')

    $('.main-item img').attr('src', chanageImg)
})
$('.item-wrap img').mouseenter(function(){
    console.log('hi', $(this).attr('src'));
    const chanageImg =  $(this).attr('src')
    $('.main-item img').attr('src', chanageImg)
})
// table 表單點擊
let btn = $('.alltype-btn-group span');
$(btn).click(function(){
    // console.log('hi',$(this).text().toLocaleLowerCase());
    let lower = $(this).text().toLocaleLowerCase()
    console.log(lower.replace(/\s/g,""));
    let idselecter = '#' + lower.replace(/\s/g,"")
    console.log(idselecter);
    // console.log($(idselecter).parent().children());
    $(idselecter).css('visibility','visible').css('background','black').siblings().css('visibility','hidden').css('transition','0').removeAttr("style")
});



function rePosition(){
  var width = document.documentElement.clientWidth || document.body.clientWidth;
  var ratio = width/750;
  if(width<=750){
      document.getElementsByTagName('html')[0].style.fontSize=100*ratio+"px";
  }else{
      document.getElementsByTagName('html')[0].style.fontSize="100px";
  }
}
rePosition();
window.onresize = function(){
  rePosition();
};


// $(document).ready(
//   function () { 
//        $('.slide2').css({'height':$(window).innerHeight()})
// }
// )


          

$(function () {

// IOS和安卓切换
 $('.register_select div').click(function(){
    $('.register_select div').children().removeClass('active');
    $(this).addClass('active');
    $(this).siblings('div').removeClass('active');
  })

  // 注册框里面获取焦点
//  $(".text_content1").focus(function(){
//   if($(this).val()=='휴대폰 번호를 입력 （-없이 입력)'){
//     $(this).val("")
//     }
//   });
//   $(".text_content1").blur(function(){
//   if($(this).val()==''){
//     $(this).val("휴대폰 번호를 입력 （-없이 입력)")
//   }
//   })




// //点击menu弹出菜单栏
// $('body').on("click", '.common_menu', function () {
//   $('.sidebar_box').toggleClass('active')
// });
// $('body').on("click", '.sidebar_box .closed', function () {
//   $('.sidebar_box').removeClass('active')
// });








 /*part8--花灵*/ 
var flowerswiper = new Swiper('.part8_swiper',{
    loop:true, initialSlide: 8,
    slideToClickedSlide: true,
    slidesPerView: 4,
    freeMode: true,watchSlidesProgress: true,
    navigation: {
      nextEl: '.part8_menu  .swiper-button-next',
      prevEl: '.part8_menu .swiper-button-prev',
},
on: {
  resize: function () {
          setTimeout(function(){
            flowerswiper.update()
          },500)
          
    },
  slideChangeTransitionEnd:function(flowerswiper){ 
        var index = this.realIndex;
          //role.slideTo(swiper1.realIndex);
        $('.role .content_tro dd').eq(index).fadeIn().siblings().hide();
          var dd = $('.role .content_tro dd').eq(index);
        //  console.log(dd.length)
            $('.role .content_tro dd').hide()
            dd.show();
          //  dd.find('.role_name').addClass('animated fadeInDown');
          //  dd.find('.role_people').addClass('animated fadeInUp');
          //  dd.find('.note').addClass('animated fadeInRight');
        },
      },
});


// 角色特色
var swiper = new Swiper('.page7_swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    loop : true,
    initialSlide :1,
    navigation: {
        nextEl: '.page7_swiper .swiper-button-next',
        prevEl: '.page7_swiper .swiper-button-prev',
        },
    nextEl: '.page7_swiper .swiper-button-next',
    prevEl: '.page7_swiper .swiper-button-prev',
});

})




$(function () {
  // IOS和安卓切换
   $('.register_select div').click(function(){
      $('.register_select div').children().removeClass('active');
      $(this).addClass('active');
      $(this).siblings('div').removeClass('active');
    })
  	// 注册框里面获取焦点
	 $(".text_content1").focus(function(){
		if($(this).val()=='휴대폰 번호를 입력 （-없이 입력)'){
			$(this).val("")
	  	}
	  });
	  $(".text_content1").blur(function(){
		if($(this).val()==''){
			$(this).val("휴대폰 번호를 입력 （-없이 입력)")
	  }
	  })
// 点击首屏email
$('.part1_email_link').click(function(){
  $(' .masked').css('display','block');
  $('.part1_tc_email').css('display','block');
})
$('.part1_tc_email .closed').click(function(){
    $(this).parent().parent().css('display','none');
    $('.masked').css('display','none');
})
// 点击応募する
$('.register_btn').click(function(){
  $(' .masked').css('display','block');
  $('.part3_tc_success').css('display','block');
})
$('.part3_tc_success .closed').click(function(){
  $(this).parent().parent().css('display','none');
  $('.masked').css('display','none');
})
// 点击footer下
$('.footer_tc_link').click(function(){
  $(' .masked').css('display','block');
$('.footer_tc_tip').css('display','block');
})
$('.footer_tc_tip .closed').click(function(){
  $(this).parent().parent().css('display','none');
  $('.masked').css('display','none');
})


$('.email_btn').click(function(){
  $(' .masked').css('display','block');
  $('.part1_tc_denglu').css('display','block');
  $('.part1_tc_email').css('display','none');
})
$('.part1_tc_denglu .closed').click(function(){
  $(this).parent().parent().css('display','none');
  $('.masked').css('display','none');
})

    // function play_v1(v){
    //   v.play()
    //   }
    //   function stop_v1(v){
    //       v.pause();
    //   }


$(function () {


   

    // $('body').on("click", '.part1_video_play', function () {
    //   // $('.part1_wrap').css('display','none');
    //   // $('.part1_closed').css('display','block');
    //  $('#video')[0].play();
    //   // $('.#video1').css('display','none');

    // });
 
        //点关闭符号关闭
        // $('.part1_closed').on("click", function () {
        //     $('#video')[0].pause();
        //   $('.part1_wrap').css('display','block');
        //   $('.part1_closed').css('display','none');
       
        // });




  })


      
  });


  //点击menu弹出菜单栏
$('body').on("click", ".part1_menu,.list_menu", function () {
  $('.nav_box').toggleClass('active');
});
$('body').on("click", '.nav_box .closed', function () {
		$('.nav_box').removeClass('active');
});
$(document).ready(function(){

    let currentZoom = 1; 
    let percentZoom = 100;
    $('#zoom_in').click(function() { 
        if(currentZoom.toFixed(2)!=1.20){
            currentZoom += 0.05; 
            percentZoom += 5;
        $('#wrap').css({ zoom: currentZoom, '-moz-transform': 'scale(' + currentZoom + ')' });
        $("#zoom_per>p").remove()
        $("#zoom_per").prepend("<p>"+percentZoom+"%</p>") 
        }else{
            alert("더 이상 확대 할수 없습니다.")
            return false;
        }
        
    });
    $('#zoom_out').click(function() { 
        if(currentZoom.toFixed(2)!=0.90){
            currentZoom -= 0.05; 
            percentZoom -= 5;
        $('#wrap').css({ zoom: currentZoom, '-moz-transform': 'scale(' + currentZoom + ')' });
        $("#zoom_per>p").remove()
        $("#zoom_per").prepend("<p>"+percentZoom+"%</p>") 
        }else{
            alert("더 이상 축소 할수 없습니다.")
            return false;
        }
    });

    $('#zoom_per').click(function() {
        $('#wrap').css({ zoom: 1, '-moz-transform': 'scale(' + 1 + ')' });
        $("#zoom_per>p").remove()
        $("#zoom_per").prepend("<p>100%</p>") 
    });

    // 외국인 번역 슬라이드 다운
    $("#foreigner").click(function(){
        if(!$(".foreigners_menu").is(":visible")){
            $(".down").css("display","none");
            $(".up").css("display","block");
            $(".foreigners_menu").slideDown();
        }else{
            $(".down").css("display","block");
            $(".up").css("display","none");
            $(".foreigners_menu").slideUp();
        }
    })

    // 메뉴 hover하면 메뉴 box나오는 것
    $(".menu>li").mouseover(function(){
        $("nav").addClass("show_nav");
        $(".nav_inner_box").css("display","block")
        let idx = $(".menu>li").index(this);
        $(".nav_box").eq(idx).css("display","block");
      });
      $(".nav_inner_box").mouseleave(function(){
        $("nav").removeClass("show_nav")
        $(".nav_inner_box").css("display","none");
        $(".nav_box").css("display","none");
      });


    // 메인 화면 슬라이더 swiper 사용
    let mySwiper = new Swiper ('.swiper-container', {
        sliderPerView:'1',
        speed: 500,
        crossEffect: { crossFade: true },
        autoplay:{
            dealy:2500,
            autoplayDisableOnInteraction: false,
        },
        loop: true,
        navigation: {

            nextEl: '.slide_next',
    
            prevEl: '.slide_prev',
    
          },
          pagination: {

            el: '.swiper-pagination',
            type:'fraction',
          },
    });
    $(".swiper_stop").click(function(){
        mySwiper.autoplay.stop();
        $(".swiper_play").css("display","block");
        $(".swiper_stop").css("display","none");
        return false;
    });

    $(".swiper_play").click(function(){
        mySwiper.autoplay.start();
        $(".swiper_stop").css("display","block");
        $(".swiper_play").css("display","none");
        return false;
    });

        // 검색 슬라이더 swiper 사용
        let search = new Swiper ('.swiper', {
            sliderPerView:'1',
            speed: 500,
            crossEffect: { crossFade: true },
            autoplay:true,
            loop: true,
        });


    // 검색 실시간 리스트 누르면 아래 메뉴 나오게
    $("#search_down").click(function(){
        $(".hidden_search_list").css("display","block");
        $("#search_down").css("display","none");
        $("#search_up").css("display","block");
    })
    $("#search_up").click(function(){
        $(".hidden_search_list").css("display","none");
        $("#search_down").css("display","block");
        $("#search_up").css("display","none");
    })

    
    // 자주찾는 서비스 슬라이드
    let service = new Swiper ('.service_slide', {
        slidesPerView: 8,
        spaceBetween: 1,
        slidesPerGroup:8,
        autoplay:false,
        loop: false,
        navigation : {
            nextEl : '.service_next_arrow',
            prevEl : '.service_prev_arrow', 
        },
        pagination : { 
            el : '.service_dot',
            clickable : true,
        },
    });
    // 원스톱 서비스 슬라이드
    let onestop = new Swiper ('.one_stop_swiper', {
        slidesPerView: 7,
        spaceBetween: 1,
        slidesPerGroup:7,
        autoplay:false,
        loop: false,
        navigation : {
            nextEl : '.one_stop_next',
            prevEl : '.one_stop_prev', 
        },
        pagination : { 
            el : '.one_stop_dot',
            clickable : true,
        },
    });
    // 보조금 24 슬라이드
    let bojo = new Swiper ('.bojo-swiper-container', {
        autoplay:false,
        loop: false,
        navigation : {
            nextEl : '.bojo_next',
            prevEl : '.bojo_prev', 
        },
        pagination : { 
            el : '.bojo_dot',
            type:'fraction',
        },
    });

    // 새로운 영상 슬라이드 
    let videoSlide = new Swiper ('.newvideo_inner_container', {
        sliderPerView:'1',
        autoplay:false,
        loop: false,
        navigation: {

            nextEl: '.video_next',
    
            prevEl: '.video_prev',
    
          },
    });

    // 게시판 탭 

    $(".tab_menu>a").click(function(){
        let i = $(".tab_menu>a").index(this);
        $(".tab_menu>a").eq(i).click(function(){
            $(".board_box>ul").eq(i).css("display","block")
            $(".board_box>ul").eq(i).siblings().css("display","none")
            $(".tab_menu>a").eq(i).css("border-bottom","2px solid #333")
            $(".tab_menu>a").eq(i).siblings().css("border-bottom","none")
        })
    })

    // 배너 슬라이드

    let banner = new Swiper ('.banner-container', {
        sliderPerView:'1',
        speed: 500,
        crossEffect: { crossFade: true },
        autoplay:{
            dealy:2500,
            autoplayDisableOnInteraction: false,
        },
        loop: true,
        navigation: {

            nextEl: '.banner_next',
    
            prevEl: '.banner_prev',
    
          },
          pagination: {

            el: '.banner_page',
            type:'fraction',
          },
    });
    $(".banner_stop").click(function(){
        banner.autoplay.stop();
        $(".banner_play").css("display","block");
        $(".banner_stop").css("display","none");
        return false;
    });

    $(".banner_play").click(function(){
        banner.autoplay.start();
        $(".banner_stop").css("display","block");
        $(".banner_play").css("display","none");
        return false;
    });

    // 국민소통재널 슬라이드

    let channerSwiper = new Swiper ('.channer_slide_container', {
        slidesPerView: 5,
        spaceBetween: 1,
        slidesPerGroup:5,
        speed: 500,
        autoplay:false,
        loop: false,
        navigation : {
            nextEl : '.channer_next',
            prevEl : '.channer_prev', 
        },
        
    });
    //bojo.html
    let bojoslide = new Swiper('.bojo_container', {
        slidesPerView: 3,
        spaceBetween: 27,
        slidesPerGroup:1,
        centeredSlides: true,
        autoplay:{
            dealy:500,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {

            nextEl: '.bojo_slide_next',
    
            prevEl: '.bojo_slide_prev',
    
          },
          pagination: {

            el: '.bojo_pagination',
            type:'fraction',
          },
      });
    //  mouseover하면 슬라이드 멈춤  
      $('.bojo_slide_inner').hover(function(){
        bojoslide.autoplay.stop();
      }, function(){
        bojoslide.autoplay.start();
      });

      $(".bojo_slide_stop").click(function(){
        bojoslide.autoplay.stop();
        $(".bojo_slide_play").css("display","block");
        $(".bojo_slide_stop").css("display","none");
        return false;
    });

    $(".bojo_slide_play").click(function(){
        bojoslide.autoplay.start();
        $(".bojo_slide_stop").css("display","block");
        $(".bojo_slide_play").css("display","none");
        return false;
    });
    
      $(".bojo_slide_inner").mouseover(function(){
        let bi = $(".bojo_slide_inner").index(this)
        $(".bojo_slide_inner").eq(bi).children(".bojo_hover").fadeIn(50);
      })
      $(".bojo_slide_inner").mouseleave(function(){
        let bi = $(".bojo_slide_inner").index(this)
        $(".bojo_slide_inner").eq(bi).children(".bojo_hover").fadeOut(50);
      })

    //   보조금 24 간편찾기
      $(".tab_list").click(function(){
        let ti = $(this).index();
        $(".tab_list").eq(ti).addClass("tab_active");
        $(".tab_list").eq(ti).siblings().removeClass("tab_active");
        $(".tab_pannel").css("display","block");
        if($(".tab_list").eq(ti).hasClass("tab_active")){
            $(".tab_content").eq(ti).css("display","block");
            $(".tab_content").eq(ti).siblings().css("display","none");
        }
      })

    // 소상공인
      $(".radio_box2").click(function(){
        const ids = ["a", "b", "c"];
        const ri = $(this).index();
        $(`#${ids[ri]}:radio`).prop("checked", true);
    });

    // 법인 라디오 버튼
    $(".radio_box3").click(function(){
        const iids = ["e", "f", "g"];
        const rri = $(this).index();
        $(`#${iids[rri]}:radio`).prop("checked", true);
    });

    // 영상으로보는 보조금 24 
    let youtube = new Swiper ('.youtube-conainer', {
        slidesPerView: 1,
        speed: 500,
        autoplay:false,
        loop: false,
        navigation : {
            nextEl : '.youtube-next',
            prevEl : '.youtube-prev', 
        },
        pagination: {

            el: '.youtube-pagination',
            type:'fraction',
          },
        
    });
    // 영상으로보는 보조금 24 
    let bojobanner = new Swiper ('.bojo-banner-container', {
        slidesPerView: 1,
        speed: 500,
        autoplay:true,
        loop: true,
        navigation : {
            nextEl : '.youtube-next',
            prevEl : '.youtube-prev', 
        },
        pagination: {

            el: '.youtube-pagination',
            type:'fraction',
          },
        
    });
});
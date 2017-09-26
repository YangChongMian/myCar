/****************微信显示隐藏*********************************/
(()=>{

    $('.title .ul .wx_hide').on('mouseover',function(){
        $('.title .ul .wx_hide .hide').css('display','block');
    });

    $('.title .ul .wx_hide').on('mouseout',function(){
        $('.title .ul .wx_hide .hide').css('display','none');
    });

})();

//*****************二级导航的显示隐藏***************
(()=>{

    $('#nav .nav1').on('mouseover',function(){
        $('#nav .nav1 ul').css('display','block');
    });
    $('#nav .nav1').on('mouseout',function(){
        $('#nav .nav1 ul').css('display','none');
    });
    $('#nav .nav2').on('mouseover',function(){
        $('#nav .nav2 ul').css('display','block');
    });
    $('#nav .nav2').on('mouseout',function(){
        $('#nav .nav2 ul').css('display','none');
    });
    $('#nav .nav3').on('mouseover',function(){
        $('#nav .nav3 ul').css('display','block');
    });
    $('#nav .nav3').on('mouseout',function(){
        $('#nav .nav3 ul').css('display','none');
    });
    $('#nav .nav4').on('mouseover',function(){
        $('#nav .nav4 ul').css('display','block');
    });
    $('#nav .nav4').on('mouseout',function(){
        $('#nav .nav4 ul').css('display','none');
    });
    $('#nav .nav5').on('mouseover',function(){
        $('#nav .nav5 ul').css('display','block');
    });
    $('#nav .nav5').on('mouseout',function(){
        $('#nav .nav5 ul').css('display','none');
    });
    $('#nav .nav6').on('mouseover',function(){
        $('#nav .nav6 ul').css('display','block');
    });
    $('#nav .nav6').on('mouseout',function(){
        $('#nav .nav6 ul').css('display','none');
    });

})();





/*****************图片轮播***************************/
$(function () {
    /*图片位置数据*/
    var datas = [
        {'z-index': 6, opacity: 1, width: 760, height: 330, top: 40, left: 0},
        {'z-index': 4, opacity: 0.6, width: 560, height: 243, top:80, left: -225},
        {'z-index': 3, opacity: 0.4, width: 480, height: 203, top: -10, left: -170},
        {'z-index': 2, opacity: 0.2, width: 620, height: 269, top: -60, left: 110},
        {'z-index': 3, opacity: 0.4, width: 480, height: 203,  top: -10, left: 430},
        {'z-index': 4, opacity: 0.6, width: 560, height: 243, top: 80, left: 420}
    ];
    move();

    function move() {
        /*图片分布*/
        for (var i = 0; i < datas.length; i++) {
            var data = datas[i];
            $('#slide ul li').eq(i).css('z-index',data['z-index']);
            $('#slide ul li').eq(i).stop().animate(data, 1200);
        }
    }

    /*左箭头事件*/
    $('.prev').on('click', function () {
        var last = datas.pop();
        datas.unshift(last);

        move();
    });

    /*右箭头事件处理函数*/
    function nextYewu(){
        var first = datas.shift();
        datas.push(first);
        move();
    }
    /*右箭头事件*/
    $('.next').on('click', nextYewu);

    /*自动播放*/
    var timer = setInterval(function(){
        nextYewu();
    },5000);
    /*鼠标进入slide显示箭头,清除自动播放*/
    $('#slide').on({
        mouseenter: function () {
            $('.arrow').css('display', 'block');
            clearInterval(timer);
        }, mouseleave: function () {
            $('.arrow').css('display', 'none');
            /*鼠标离开时自动播放*/
            clearInterval(timer);
            timer = setInterval(function(){
                nextYewu();
            },5000)
        }
    })
});



//**************楼层点亮******************
$(function() {
    // @ 给窗口加滚动条事件
    $(window).scroll(function () {
        // 获得窗口滚动上去的距离
        var ling = $(document).scrollTop();
        // 在标题栏显示滚动的距离
        //console.log(ling);
        // 如果滚动距离大于1534的时候让滚动框出来
        if (ling > 500) {
            $('#box').show();
        }
            if(500<=ling && ling<1510){
                //劳斯莱斯   500--1510
                // 让第一层的数字隐藏，文字显示，让其他兄弟元素的li数字显示，文字隐藏
                $('#box ul li').eq(0).find('.num').hide().siblings('.word').css('display','block');
                $('#box ul li').eq(0).siblings('li').find('.num').css('display','block').siblings('.word').hide();
            }
            //奔驰   1510---2200
            else if(1510<=ling && ling<2200){
                $('#box ul li').eq(1).find('.num').hide().siblings('.word').css('display','block');
                $('#box ul li').eq(1).siblings('li').find('.num').css('display','block').siblings('.word').hide();
            }
            //保时捷  2200--3160
         else if(2200<=ling && ling<3160){
                $('#box ul li').eq(2).find('.num').hide().siblings('.word').css('display','block');
                $('#box ul li').eq(2).siblings('li').find('.num').css('display','block').siblings('.word').hide();
            }
        //宝马    3160---4100
         else if(3160<ling && ling<4080){
                $('#box ul li').eq(3).find('.num').hide().siblings('.word').css('display','block');
                $('#box ul li').eq(3).siblings('li').find('.num').css('display','block').siblings('.word').hide();
            }
         else if(4080<=ling && ling<4580){
                $('#box ul li').eq(4).find('.num').hide().siblings('.word').css('display','block');
                $('#box ul li').eq(4).siblings('li').find('.num').css('display','block').siblings('.word').hide();
            }

            if(ling>4580 || ling<600){
                // $('#box').css('display','none');  // @ 这一句和下一句效果一样。
                $('#box').hide();
            }

        })

    });

    $(function () {
        $('#box ul li').hover(function () {
            $(this).find('.num').hide().siblings('.word').css({
                'display': 'block',
                'background': '#0c60ee',
                'color': 'white'
            });
        }, function () {
            $(this).find('.num').css({
                'display': 'block',
                'background': '#fff',
                'color': '#0c60ee'
            }).siblings('.word').hide().css({'display': 'none', 'background': '#0c60ee', 'color': '#fff'});
        })
    });

/**********************登录***********************/

//(()=>{
//
//    var btn = document.querySelector('.title .ul .login_btn');
//    btn.onclick = function(e){
//        e.preventDefault();
//      $("#login").css("display","block");
//
//
//    };
//
//
//   $("#clear").click=function(){
//        $("#login").css("display","none");
//
//    }
//})();
(()=>{
var btn1=document.getElementById("a");
var login=document.getElementById("login");
var clear=document.getElementById("clear");
a.onclick=function(e){
    e.preventDefault();
    if(login.style.display="none"){
        login.style.display="block"
    }
};
clear.onclick=function(){
    login.style.display="none";
};
})();





















/****************微信显示隐藏*********************************/
(()=>{

    $('.title .ul .wx_hide').on('mouseover',function(){
        $('.title .ul .wx_hide .hide').css('display','block');
    });

    $('.title .ul .wx_hide').on('mouseout',function(){
        $('.title .ul .wx_hide .hide').css('display','none');
    });

})();

(()=>{
    $('#table .btn').on('click',function(e){
        e.preventDefault();
        var u = document.querySelector('#uname').value;
        var p = document.querySelector('#upwd').value;
        var s = document.querySelector('#sex').value;
        var a = document.querySelector('#age').value;
        var c = document.querySelector('#car').value;

        $.ajax({
            url:"data/register.php",
            data:{uname:u,upwd:p,sex:s,age:a,car:c},
            success:function(data){
                console.log(data);
                if(data.code>0){
                    alert(data.msg);
                }else{
                    alert(data.msg);
                }
            }
        });

    });


})();


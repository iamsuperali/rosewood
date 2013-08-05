// JavaScript Document
$(window).load(function(){
    //右侧产品菜单焦点图
    $("#ip_float li").hover(function(){
        $(".i_p_masks", this).css({
            "opacity": "0"
        });
        $(".i_p_masks_icon", this).css({
            "opacity": "0"
        });
        $(".i_p_masks", this).show()
        $(".i_p_masks_icon", this).show()
        $(".i_p_masks_icon", this).stop(true).animate({
            "opacity": "0.9"
        }, 500, "easeOutQuart");
        $(".i_p_masks", this).stop(true).animate({
            "opacity": "0.5"
        }, 500, "easeOutQuart");
    }, function(){
        $(".i_p_masks", this).hide()
        $(".i_p_masks_icon", this).hide()
        $(".i_p_masks_icon", this).stop(true).animate({
            "opacity": "0"
        }, 500, "easeOutQuart");
        $(".i_p_masks", this).stop(true).animate({
            "opacity": "0"
        }, 500, "easeOutQuart");
    });
    
    $(".i_plist_p li").click(function(){
        var i_t = $(this).attr("pic");
        //$(".i_banner_p").stop(true).fadeTo(500,0);
        //$(".i_banner_p").stop(true).fadeTo(500,1);
        $(".i_banner_p").stop(true).animate({
            left: -760 * (i_t - 1)
        }, 2500, "easeInOutQuart");
        
        
    });
    
    
    var ipl_con = $(".i_plist_p li").length;
    $(".i_banner_p").width(ipl_con * 760);
    
    //首页产品列表
    
    $(".list_hrul li").hover(function(){
        $(".item", this).css({
            "color": "#24bcea"
        });
    }, function(){
        $(".item", this).css({
            "color": "#838383"
        });
    });
    
    $("#plist_ctrl").toggle(function(){
        $(".list_hrul").slideUp(500);
        $(".newslist").stop(true).animate({
            width: 200
        }, 300, "easeInOutQuart");
        $(".list_hr").stop(true).animate({
            top: 120
        }, 500, "easeInOutQuart");
        $(this).addClass("lhl");
    }, function(){
        $(".list_hr").stop(true).animate({
            top: 5
        }, 500, "easeInOutQuart");
        $(".newslist").stop(true).animate({
            width: 620
        }, 300, "easeInOutQuart");
        $(".list_hrul").slideDown(300);
        $(this).removeClass("lhl");
    });
    
    //自适应底部高度-auto-lheight
    
    $(".i_cvshow").show();
    $(".i_plist").show();
    
    $(".p_lmain").css({
        "background-image": "none"
    });
    
    $("#nav li").css({
        "opacity": "0"
    });
    $("#nav .nactive").css({
        "opacity": "1"
    });
    //首页菜单
    $("#nav li").hover(function(){
        $(this).stop(true).animate({
            "opacity": "1"
        }, 1000, "easeOutQuart");
    }, function(){
    
        if ($(this).hasClass("nactive")) {
        }
        else {
            $(this).stop(true).animate({
                "opacity": "0"
            }, 1000, "easeOutQuart")
        }
    });
    
    
    
    
    $(".ip_tips_cp").hover(function(){
        $(".ip_tips").css({
            "opacity": "0"
        });
        $(".ip_tips", this).show();
        $(".ip_tips", this).stop(true).animate({
            "opacity": "1",
            top: "-50px"
        }, 1000, "easeOutQuart");
    }, function(){
    
    });
    
    
});
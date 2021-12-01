/**
 * 乐购商城首页js
 * 2021-10-30 by
 */
//当页面加载完毕
$(function() {
    /*首页大图轮播 */
    $("#banner").tyslide({
        boxh: 460, //盒子的高度
        w: 1000, //盒子的宽度
        h: 390, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 40, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 20, //控制按钮高度
        radius: 10, //控制按钮圆角度数
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
        isShowNum: true //是否显示数字

    });

    /* 图书电子书小轮播 */
    $("#ebooks-banner").tyslide({
        boxh: 223, //盒子的高度
        w: 332, //盒子的宽度
        h: 223, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色

    });
    /* 电子书table切换 */
    $('.ebooks-nav > li').mouseenter(function() {
        //导航高亮颜色切换
        $(this).addClass('active').siblings('li').removeClass('active');
        //获取索引
        var index = $(this).index();
        //内容切换
        $('ebooks-list').eq(index).show().siblings('.ebooks-list').hide();
    });
    /* 服装tab切换 */
    $('.clothes-nav li').mouseenter(function() {
        // 导航切换
        $(this).addClass('active').siblings('li').removeClass('active')
            // 获取索引
        var index = $(this).index();
        $('.clothes-content > .clothes-list').eq(index).show().siblings('.clothes-list').hide()
    })


    /* 户外运动table切换 */
    $('.sport-nav > li').mouseenter(function() {
        //导航高亮颜色切换
        $(this).addClass('active').siblings('li').removeClass('active');
        //获取索引
        var index = $(this).index();
        //内容切换
        $('ebooks-list').eq(index).show().siblings('.ebooks-list').hide();
    });
    /* 儿童服装table切换 */
    $('.children-clothes-nav > li').mouseenter(function() {
        //导航高亮颜色切换
        $(this).addClass('active').siblings('li').removeClass('active');
        //获取索引
        var index = $(this).index();
        //内容切换
        $('ebooks-list').eq(index).show().siblings('.ebooks-list').hide();
    });
    /* 服装小轮播 */
    $("#clothes-banner").tyslide({
        boxh: 340, //盒子的高度
        w: 427, //盒子的宽度
        h: 340, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色

    });
    /* 户外运动小轮播 */
    $("#sport-banner").tyslide({
        boxh: 340, //盒子的高度
        w: 427, //盒子的宽度
        h: 340, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色

    });
    /* 儿童服装小轮播 */
    $("#children-clothes-banner").tyslide({
        boxh: 340, //盒子的高度
        w: 427, //盒子的宽度
        h: 340, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色

    });
    $(".ebooks .left-box .top ul li.active.ul li").each(function() {
            var index = $(this).index();
            // 初始化
            $(".ebooks .left-box .top ul li.active.ul li").eq(0).addClass("active");
            $(this).click(function() {
                // 点击某个元素时，给这个元素添加active类，其余兄弟元素的active类都取消
                $(this).addClass("active").siblings().removeClass("active");
                $(".container>div").eq(index).stop(true).show().siblings().stop(true).hide();
            })
        })
        /* 新书列表手风琴效果 */
    $('.ebooks .right-box ul > li').mouseenter(function() {
        // 所有兄弟：隐藏详情 显示标题
        $(this).siblings().find('.desc').hide(); //隐藏详情
        $(this).siblings().find('.ebooks-title').show(); //显示详情

        // 当前：隐藏标题 显示详情
        $(this).find('.ebooks-title').hide(); //隐藏标题
        $(this).find('.desc').show(); //显示详情
    });
    /* 推广商品切换 */
    $('.promotion .promotion-title ul li').mouseenter(function() {
            //导航激活类的切换
            $(this).addClass('active').siblings().removeClass('active');
            //内容切换
            //获取对应索引
            var index = $(this).index();
            //左右移动
            $('.promotion .promotion-content .inner-box').animate({
                'left': -index * 1170
            }, 300)
        })
        /* 二维码滑出效果 */
    $('.qr-code .ticket').hover(function() {
            //让二维码滑出来
            $('.qr-code div').stop(true).animate({
                left: '-100px'
            })
        }, function() {
            //让二维码收出来
            $('.qr-code div').stop(true).animate({
                left: 0
            })
        })
        /* 顶部搜索框交互 */
    $(document).scroll(function() {
            //获取到顶部的距离
            var topDistance = $('html,body').scrollTop();
            //判断
            if (topDistance > 500) {
                //如果滚动大于500 滑下来
                $('.top-search-box').slideDown(300)
            } else {
                //否则收回
                $('.top-search-box').slideUp(300)
            }
        })
        /* 楼层滚动 */
    $('.floor li').click(function() {
        //获取索引
        var index = $(this).index();
        //选中每一个板块到顶部的偏移
        var topOffset = $('.floorBox').eq(index).offset().top;
        //让滚动条滚到这个位置
        $('html,body').animate({
            scrollTop: topOffset - 50
        })
    })
})
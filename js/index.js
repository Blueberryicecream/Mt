$(function () {
    var $open_menu = $(".open-menu")    // 菜单按钮
    var $show_menu = $(".show-menu")    // 隐藏的菜单
    var $close_menu = $(".close-menu")  // 关闭隐藏菜单
    var $show = $('.show')  // 二级菜单背景
    var $a = $("a") // 所有的超链接

    $a.attr('href', "javascript:alert('敬请期待!');")

    /* 点击打开左侧二级窗口 */
    $open_menu.click(function () {
        $show.css('display', 'block')    // 打开二级菜单背景
        $show_menu.addClass('wrap').animate({ width: 272 }, 300).css('display', 'block')
        $("html,body").css({
            "position": "fixed",
        })
    })
    /* 点击二级窗口外面关闭二级窗口 */
    $show.click(function () {
        $show.css('display', 'none')
        $show_menu.animate({ width: 0 }, 300, function () {
            $show_menu.css('display', 'none').removeAttr('style')
        })
        $("html,body").css({
            "position": "static",
        })
    })
    /* 点击关闭右侧二级窗口 */
    $close_menu.click(function () {
        $show.css('display', 'none')
        $show_menu.animate({ width: 0 }, 300, function () {
            $show_menu.css('display', 'none').removeAttr('style')
        })
        $("html,body").css({
            "position": "static",
        })
    })

    var $submenu_ul = $("#submenu") // 导航ul
    var $submenu = $(".menu-top > ul > li") // 导航栏li
    var $submenu_background = $(".submenu_background")  // 导航栏背景
    var $menu_ul = $(".menu-top > ul > li > ul")    // 所有隐藏二级菜单ul
    var $body = $("body").innerWidth()  // 获取当前页面宽度
    console.log("页面=" + $body)

    var $join = $(".join_us > div") // 加入我们
    var $join_ul = $(".join_us > ul")   // ul

    /* 如果当前body宽度大于1050调用函数 */
    if ($body > 1050) {
        submenu()
    } else {
        open()
    }

    /* 导航效果 */
    function submenu() {
        /* 遍历导航栏li */
        $submenu.each(function (index) {
            $(this).mouseenter(function () {
                $submenu.eq(index).find("ul").slideDown(300).css('display', 'block')
                $submenu.eq(index).find('a:first').addClass("liNew2")
            })
            $(this).mouseleave(function () {
                $submenu.eq(index).find("ul").slideUp(300).css('display', 'none')
                $submenu.eq(index).find('a:first').removeClass("liNew2")
            })
        })
        /* 鼠标移入导航,显示二级菜单 */
        $submenu_ul.mouseenter(function () {
            $submenu_background.slideDown(300)/* .css('display', 'block') */
            $submenu.find('a:first').addClass("liNew")
        })
        /* 鼠标移出导航,隐藏二级菜单 */
        $submenu_ul.mouseleave(function () {
            $submenu_background.slideUp(300)/* .css('display', 'none') */
            $submenu.find('a:first').removeClass("liNew")
        })
        $menu_ul.find('li').css('display', 'block')
    }

    /* 底部手风琴 */
    function open() {
        /* 手风琴效果 */
        $join.each(function (index) {
            $join.eq(index).click(function () {
                if ($join_ul.eq(index).css('display') == 'none') {
                    $join_ul.eq(index).slideDown()
                    $join_ul.not($join_ul.eq(index)).slideUp()
                } else {
                    $join_ul.eq(index).slideUp()
                }
            })
        })
    }

    /* 当页面高度/宽度发生变化时 */
    window.onresize = function () {
        var $body_width = $("body").innerWidth()    // 动态获取页面宽度
        console.log($body_width)
        if ($body_width > 1050) {
            submenu()
            $join_ul.css('display', 'block')
            $join.off('click')
        } else {
            $menu_ul.find('li').css('display', 'none')
            $submenu.children('a').removeClass('liNew2')
            $join_ul.css('display', 'none')
            open()
        }
    }

    /* 点击tab切换对应信息 */
    var $Tab_li = $(".MT_tab_menu > ul > li")
    var $tab_content = $(".tab_content")

    $Tab_li.each(function (index) {
        $Tab_li.eq(index).click(function () {
            $Tab_li.eq(index).addClass('liNew3').siblings('li').removeClass('liNew3')
            $tab_content.eq(index).css('display', 'block').siblings($tab_content).css('display', 'none')
        })
    })




})
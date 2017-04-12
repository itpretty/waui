/**
 * Created by liuyingshi on 16/11/15.
 */
$(document).ready(function(){
    $(".tnTab li a").click(function(){
        var n=$(".tnTab li a").index($(this));
        $(".tnTabContent").eq(n).addClass("current").siblings().removeClass("current"),
            $(".tnTab li").eq(n).addClass("now").siblings().removeClass("now")}),
        $(".tips").hover(function(){$(this).next(".tips-shadow").show()
            }
        );
});

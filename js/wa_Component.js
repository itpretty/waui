/**
 * Created by Administrator on 2017/4/6.
 */
/*顶部搜索的组件 weui 默认的样式  没有搜索按钮的*/
Vue.component('wa-searchbar', {
    template: '<div class="weui-search-bar" id="searchBar"><form class="weui-search-bar__form"><div class="weui-search-bar__box"><i class="weui-icon-search" @click="searchInput()"></i><input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="" v-model="search"><a href="javascript:" class="weui-icon-clear" id="searchClear"></a></div><label class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"><i class="weui-icon-search"></i><span>搜索</span></label></form><a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a></div>',
    data: function () {//组件里面的data必须为函数
        search:""
    },
    methods: {
        //搜索
        searchInput: function () {
            alert('hello worlds' + this.search);
        },
    }

})
/*顶部搜索的组件 大麦场使用的搜索 有搜索按钮的*/
Vue.component('wa-search-msg', {
    template: '<div class="frame" style="top: 0px; position: absolute;">\
    <a href="search.html">\
    <form >\
    <input name="textfield" type="text" id="textfield" placeholder="搜索你想找的商品名称"  class="hd_search_txt" v-model="search">\
    </form></a>\
    <div class="hd_me"> <a :href="searchUrl" @click="searchInput()"><span></span></a> </div>\
    </div>',
    data: function () {
        return {
            search: "",
            searchUrl: "msg.html"
        }
    },
    methods: {
        //清除内容
        clearInput: function () {
            this.search = '';
            //this.get();
        },
        //搜索
        searchInput: function () {
            if (this.searchUrl.indexOf("html") != -1) {//如果搜索是跳转页面的话
                window.open(this.searchUrl);
            } else {//不跳转页面在下面处理
                alert('hello worlds' + this.search);
            }
        },
    }

})
/*顶部搜索的组件 大麦场使用的搜索 有搜索按钮的*/
Vue.component('wa-search-default', {
    template: '<div class="weui_navbar he-search">\
    <div class="frame frameScroll">\
    <form >\
    <input name="textfield" type="text" id="textfield" :placeholder="text"  class="hd_search_txt" v-model="search">\
    <a class="hd_search_clear icon-ico27" href="javascript:;"  @click="clearInput()"></a>\
    </form>\
    <div class="hd_button"><a href="javascript:;" class="hd_search_btn_blue" @click="searchInput()">搜索</a></div>\
    </div>\
    </div>',
    data: function () {
        return {
            search: "",
        }
    },
    props: ["text","goPage","callBack"],
    methods: {
        //清除内容
        clearInput: function () {
            this.search = '';
            //this.get();
        },
        //搜索
        searchInput: function () {
            //alert( this.goPage == "null")
            if (this.goPage!="null") {//如果搜索是跳转页面的话
                if(!window.localStorage){
                    console.log("浏览器不支持localstorage");
                    return false;
                }else{
                    var storage=window.localStorage;
                    storage["searchContent"]=this.search;//保存搜索字段，在下个页面获取
                    console.log(storage["searchContent"]);

                }
                window.open(this.goPage);
            } else {//不跳转页面就去执行@click.native绑定的原生方法
                console.log('Execution native method!');
            }
        },
    }

})


/*底部导航的组件*/
Vue.component('wa-footer-nav', {
    template: '<div class="weui_tabbar bottom-menu" id="todo-list-item"><ul><li v-for="(index,todo) in navList"><a href="javascript:;" :class="{now: index==0}" @click="goPage(index)"><span class="titleico" :class="todo.class"></span><p>{{todo.navName}}</p></a></li></ul></div>',
    props: ["navList"],
    methods: {
        goPage:function (index) {
            console.log(this.navList[index].href)
            if(this.navList[index].href!="null"){//如果有跳转地址
                window.open(this.navList[index].href);
            }else{//如果不跳转执行原生方法
                console.log("Execution native method")
               // add(index);
            }
        }
    }
})

/*海报*/
Vue.component('wa-img', {
    template: '<div class="poster"><a :href="href"><img :src="src" alt=""/></a></div>',
    props: ["src","href"]
})
/*创建根实例*/
new Vue({
    el: '#waui',
    data: {
        footerData: [],//底部导航的数据
        tId:0,
        imgurl: wa.path.root() + "images/dmc-banner.jpg",
        goPage:"page.html"
    },
    methods:{
        waNativeSearch:function () {//定义搜索按钮的原生方法
            console.log("doSomething  content");
        },
        waFooterNavGo:function () {//底部导航不跳转的原生方法
            console.log("do something ...");
        }
    },
    created: function () {
        var self=this;
        $.ajax({
            type: 'GET',
            url: wa.path.root() + 'data/footerNavData.json',//底部导航的数据文件地址
            dataType: 'json',
            success: function (requestdata) {
                console.log(requestdata.todoList)
                self.footerData= requestdata.todoList;
            },
            error: function (xhr, type) {
                $.alert(this.url+'<br/>'+'Ajax error!')
            }
        })
    }
})



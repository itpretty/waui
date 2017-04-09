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
Vue.component('wa-search-default', {
    template: '<div class="weui_navbar he-search">\
    <div class="frame frameScroll">\
    <form >\
    <input name="textfield" type="text" id="textfield" :placeholder="text"  class="hd_search_txt" v-model="search">\
    <a class="hd_search_clear icon-ico27" href="javascript:;"  @click="clearInput()"></a>\
    </form>\
    <div class="hd_button"><a :href="searchUrl" class="hd_search_btn_blue" @click="searchInput()">搜索</a></div>\
    </div>\
    </div>',
    data: function () {
        return {
            search: "",
            searchUrl: "search2.html"
        }
    },
    props: ["text"],
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

/*底部导航的组件*/
Vue.component('wa-footer-nav', {
    template: '<div class="weui_tabbar bottom-menu" id="todo-list-item"><ul><li v-for="(todo,index) in navList"><a :href="todo.href" :class="{now: index==0}"><span class="titleico" :class="todo.class"></span><p>{{todo.navName}}</p></a></li></ul></div>',
    props: ["navList"],
    methods: {}
})


//getData();
/*创建根实例*/
new Vue({
    el: '#waui',
    data: {
        todos: []
    },
    created: function () {
        var self=this;
        $.ajax({
            type: 'GET',
            url: '../data/tsconfig.json',
            dataType: 'json',
            success: function (requestdata) {
                console.log(requestdata.todoList)
                self.todos= requestdata.todoList;
            },
            error: function (xhr, type) {
                alert('Ajax error!')
            }
        })
    }
})

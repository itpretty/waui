/**
 * Created by Administrator on 2017/4/6.
 */
/*顶部搜索的组件 weui 默认的样式  没有搜索按钮的*/
Vue.component('wa-searchbar', {
    template: '<div class="weui-search-bar" id="searchBar"><form class="weui-search-bar__form"><div class="weui-search-bar__box"><i class="weui-icon-search" @click="searchInput()"></i><input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="" v-model="search"><a href="javascript:" class="weui-icon-clear" id="searchClear"></a></div><label class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"><i class="weui-icon-search"></i><span>搜索</span></label></form><a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a></div>',
    data:function () {//组件里面的data必须为函数
        search:""
    },
    methods:{
        //搜索
        searchInput: function() {
            //alert(this.flag)
            //window.open(this.logoData[this.flag].searchSrc+this.search);
            alert('hello worlds'+this.search);
        },
    }

})

/*顶部搜索的组件 大麦场使用的搜索 有搜索按钮的*/
Vue.component('wa-search-default', {
    template: '<div class="weui_navbar he-search">\
    <div class="frame frameScroll">\
    <form >\
    <input name="textfield" type="text" id="textfield" placeholder="搜索你想找的商品名称"  class="hd_search_txt" v-model="searchContent">\
    <a class="hd_search_clear icon-ico27" href="javascript:;"  @click="clearInput()"></a>\
    </form>\
    <div class="hd_button"><a href="search2.html" class="hd_search_btn_blue" >搜索</a></div>\
    </div>\
    </div>',
    data:function () {
        searchContent:""
    },
    methods:{
        //清除内容
        clearInput: function() {
            alert( this.searchContent)
            this.searchContent = '';
            //this.get();
        },
        //搜索
        searchInput: function() {
            //alert(this.flag)
            //window.open(this.logoData[this.flag].searchSrc+this.search);
            alert('hello worlds'+this.search);
        },
    }

})
/*底部导航的组件*/
Vue.component('wa-footer-nav', {
    template: '<div class="weui_tabbar bottom-menu" id="todo-list-item"><ul><li v-for="(todo,index) in todos"><a :href="todo.href" :class="{now: index==0}"><span class="titleico" :class="todo.class"></span><p>{{todo.navName}}</p></a></li></ul></div>',
    data:function () {
        return {
            todos: [
                {href: 'index.html', class: 'icon-ico8', navName: '首页'},
                {href: 'classification.html', class: 'icon-ico9', navName: '分类'},
                {href: 'http://www.baidu.com', class: 'icon-ico10', navName: '大麦场'},
                {href: 'shoppingCar.html', class: 'icon-ico11', navName: '购物车'},
                {href: 'login.html', class: 'icon-ico12', navName: '我的'}
            ]
        }
    }
})

/*创建根实例*/
new Vue({
    el:'#waUi'
})

## 项目总结

### 一、项目名称
        商品后台管理系统
### 二、技术栈
    框架：vue框架
    UI组件：
        Element UI组件库
        作用：通过使用Element UI组件库帮助进行页面布局，简化操作流程，清晰明确需要实现的要求；
        安装：npm i element-ui -S
        项目中使用到的部分组件：
        1、Layout：通过基础的 24 分栏，迅速简便地创建布局，相似bootstrap栅格系统；
        2、Container：项目页面所采用的主要布局容器，将页面分为左侧aside导航栏、上侧header顶栏、main主容器；单页面应用的切换实际上是组件的切换，在进行跳转时，分别在aside，header，main容器中跳转到指定的组件。
        3、Icon：直接通过设置类名为 el-icon-iconName 来使用element的Icon图标库；
        4、Button：引入一些按钮，实现页面中主要的跳转及url改变的切换的功能。
        5、Form：这个系统中表单模块是最复杂的一个模块，我们引入了大量的组件:Radio单选框、Input输入框、Select选择器、Cascader级联选择器、Switch开关、TimePicker时间选择器、DatePicker日期选择器、Upload上传、Transfer穿梭框，Table表格、Pagination 分页等，共同实现了表单功能，完成商品展示模块及商品上传模块；
        6、Table 表格:用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。
        7、Pagination 分页：当添加的商品的数量过多时，使用分页分解数据，可以根据需求设置不同的属性，实现需求的分页效果。
        8、Calendar calendar：用于选择显示日期；
        9、Image 图片：图片容器，在保留原生img的特性下，实现懒加载，自定义占位、加载失败等...
    路由：
        1、安装：npm install vur-router -S
        2、路由布置：
            在main.js中引入并使用
            import Vue from 'vue'
            import  VueRouter from 'vue-router'
            Vue.use(VueRouter)
            let routes = []
            arr.map(ele=>{
            routes = [...routes, ...ele.arr]
            })
            export default new VueRouter({
                mode: 'hash',
                routes: [
                ...routes,
                { path: '/login', components: { login: Login } },
                { path: '/*', redirect: '/' }
                ]
            })
        3、路由规则：
            将路由表封装成数组，在页面跳转时根据指定的路径进行跳转。
        4、视图显示
        router-view //视图容器,未命名容器,把URL匹配成功的显示出来
        声明式路由导航：
        router-link //相当于a标签，默认被渲染成a标签，可以通过tag更改
        属性：
        to="路径"
        tag="标签名称"
        active-class = " 类名" //被激活时添加类名中设置的样式
    axios:同源策略，设置拦截器
    vuex：
        状态管理模式，采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。在本项目中使用的不多，通过store模式(opens new window)完成了大部分的需求。
    sass：
        在本项目中，我们采用了世界上最成熟、最稳定、最强大的专业级CSS扩展语言sass进行编译。
### 三、团队组成
    前端2人
    后端2人
    项目开发周期三个月
### 四、功能模块
    商品添加模块：
        用于在数据库中添加商品，在c端页面中展示出来；
    商品显示模块：
        在页面中展示添加的商品，用户可以根据需求进行商品的筛选展示；
    商品管理模块：
        对已经添加的商品实现编辑功能；
    广告管理模块：
        对c端展示的广告进行更新管理；
    登入登出模块：
        实现用户的登录登出功能；
    用户管理模块：
        对用户个人的信息进行管理。
### 五、性能优化
    1、项目运行一段时间会出现缓存过多，处理办法： this.$destroy();在销毁的时候处理：
        destroyed(){
            this.$destroy();
        }
    2、button按钮不让用户连续点击，点击完后等待2秒，才可以再次点击：
        <Button v-preventReClick @click="loadListData" type="primary" icon="md-search">查询</Button>
    3、图片优化：
        设置图片懒加载、压缩图片，减小图片的体积，将大的图片保存在public目录中，并进行cdn加速。
### 六、项目亮点
    操作便捷，易上手，功能清晰。
### 七、项目难点
    表单表格很复杂，业务复杂（表单多、表格筛选条件多），后端接口多、不稳定，产品需求不稳定。小团队加强沟通。

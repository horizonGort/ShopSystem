<template>
<div>
  <h1>首页</h1>
  <button @click='skipToUser'>编程式：跳转到个人中心</button>

  <!-- 【声明式路由跳转的三种写法】 -->
  <!-- <router-link to='/useroiwioewoieoioiewoiewoiewoiewi'>声明式：跳转到个人中心</router-link> -->
  <!-- <router-link to='/u'>声明式：跳转到个人中心</router-link> -->
  <router-link :to='{name:"me"}'>声明式：跳转到个人中心</router-link>
  <hr>


  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>




</div>
</template>

<script>
export default {
  mounted() {
    console.log('$route', this.$route)
    console.log('$router', this.$router)
  },
  methods: {
    skipToUser() {
      // 【编程式路由跳转的三种写法】
      // 1、使用path来跳转
      // this.$router.push('/useroiwioewoieoioiewoiewoiewoiewi')
      // 2、使用路由别名
      // this.$router.push('/u')
      // 3、命名路由命名
      this.$router.push({name:'me'})
    }
  }
}
</script>

<style lang="css" scoped>

</style>

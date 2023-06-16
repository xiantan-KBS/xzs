<template>
  <el-container class="is-vertical">
    <MyHeader />
    <el-main class="student-main">
      <router-view/>
    </el-main>
    <MyFooter />
    <div class="foot-copyright">
      <span>Copyright ©2021-2022 Lorem ipsum dolor, sit amet 有限公司 版权所有</span>
    </div>
  </el-container>
</template>

<script>
import MyHeader from './MyHeader'
import MyFooter from './MyFooter'
export default {
  name: 'Layout',
  data () {
    return {
    }
  },
  components:{
    MyHeader,
    MyFooter,
  },
  
}
</script>


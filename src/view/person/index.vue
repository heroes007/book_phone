<template>
    <div>
      <img class="img" :src="head" alt="">
      <div class="login" @click="login">未登录，请进行登陆</div>
    </div>
</template>

<script>
  import head from '../../Icon/head.png'
  import { Toast } from 'mint-ui'
    export default {
        name: "index",
      data(){
          return{
            head,
            Toast
          }
      },
      methods:{
          login(){
            let close = this.Toast({
              message: '并没有登录接口',
              piconClass: 'icon icon-success'
            });
            setTimeout(() => {close.close()}, 1000)
          }
      }
    }
</script>

<style scoped>
  .login{
    font-size: 0.6rem;
    margin-top: 1rem;
  }
  .img{
    margin-top: 2rem;
    height: 1rem;
    width: 1rem;
  }
</style>

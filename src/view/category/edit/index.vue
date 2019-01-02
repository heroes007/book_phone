<template>
  <div>
    <mt-header style="width: 100%;" title="修改分类">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div>
      <img class="img" :src="category.image" alt="">
      <mt-field label="题目" placeholder="请输入用户名" v-model="category.title"></mt-field>
      <mt-button class="btn" type="primary" @click="sure">确认</mt-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        category:{},
      }
    },
    methods:{
      sure(){
        let {title, _id} = this.category
        this.$axios.post("/category/change", {title, _id}).then( res =>  {
          console.log(res)
          if(res.data.code === 200){
            this.$router.back()
          }
        })
      }
    },
    created(){
      this.category = this.$route.query
    },
  }
</script>

<style scoped>
  .btn{
    width: 3rem;
    margin-top: 3rem;
  }
  .img{
    margin-top: 0.2rem;
    width: 2rem;
    height: 1rem;
  }
</style>

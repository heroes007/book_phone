<template>
  <div>
    <mt-header style="width: 100%;" title="修改图书">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div>
      <img :src="book.image" alt="">
      <mt-field label="题目" placeholder="请输入题目" v-model="book.title"></mt-field>
      <mt-field label="作者" placeholder="请输入作者" v-model="book.author"></mt-field>
      <mt-button class="btn" type="primary" @click="sure">确认</mt-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        book:{},
      }
    },
    methods:{
      sure(){
        console.log(this.book)
        var {title, author, _id} = this.book
        this.$axios.post('/book/change',{title, author, _id}).then( res => {
          console.log(res)
          if(res.data.code === 200){
            this.$router.back()
          }
        })
      }
    },
    created(){
      this.book = this.$route.query
    },
  }
</script>

<style scoped>
 .btn{
   width: 3rem;
   margin-top: 3rem;
 }
</style>

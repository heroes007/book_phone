<template>
  <div class="content">
    <table class="table">
      <tr>
        <th>分类</th>
        <th>标题</th>
        <th>数量</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item, index) in category" :key="index">
        <td class="td-img">
          <img class="content-img" :src="item.image" alt="">
        </td>
        <td class="td-title">
          <div class="content-title">{{item.title}}</div>
        </td>
        <td class="td-author">
          <div class="content-author">{{item.number}}</div>
        </td>
        <td class="td-btn">
          <mt-button class="content-btn" type="primary" @click="edit(item)">编辑</mt-button>
          <mt-button class="content-btn" type="danger" @click="deleteCAte(item)">删除</mt-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        selected: '',
        category: []
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData(){
        this.$axios.get('/category').then(res => {
          this.category = res.data.data
        })
      },
      edit(item) {
        this.$router.push({
          path: '/editCategory',
          query: item
        })
      },
      deleteCAte(item){
        this.$axios.post('/category/delete',{_id: item._id}).then( res => {
          console.log(res)
          if(res.data.code === 200){
            this.getData()
          }
        })
      }
    }
  }
</script>

<style scoped>
  .table {
    font-size: 0.4rem;
    width: 100%;
  }

  .td-img {
    width: 1rem;
  }

  .td-title {
    width: 2rem;
  }

  .td-author {
    width: 1rem;
  }

  .td-btn {
    width: 3rem;
  }

  .content-img {
    height: 0.7rem;
    width: 0.5rem;
  }

  .content-title {
    font-size: 0.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 2.4rem;
  }

  .content-author {
    font-size: 0.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 1rem;
  }

  .content-btn {
    font-size: 0.26rem;
    height: 0.6rem;
  }
</style>

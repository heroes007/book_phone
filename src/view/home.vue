<template>
    <div>
      <mt-header fixed :title="selected"></mt-header>
      <div>
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="图书">
            <book style="margin-top: 1rem;"/>
          </mt-tab-container-item>
          <mt-tab-container-item id="分类">
            <category style="margin-top: 1rem;"/>
          </mt-tab-container-item>
          <mt-tab-container-item id="我的">
            <person style="margin-top: 1rem;"/>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
      <mt-tabbar v-model="selected">
        <mt-tab-item id="图书">
          图书
        </mt-tab-item>
        <mt-tab-item id="分类">
          分类
        </mt-tab-item>
        <mt-tab-item id="我的">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
</template>

<script>
    import book from './book'
    import category from './category'
    import person from './person'
    export default {
      name: "home",
      components:{ book, category, person },
      data(){
          return{
            selected: '图书',
          }
      }
    }
</script>

<style scoped>

</style>

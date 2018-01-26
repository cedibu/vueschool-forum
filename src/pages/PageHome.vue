<template>
  <div class="col-full">
    <h1>Welcome to the Forum !</h1>
    <ForumList :forums="forums"/>
  </div>
</template>

<script>
  import dataJson from '@/data'
  import ForumList from '@/components/ForumList.vue'

  console.log(dataJson)
  export default {
    components: {
      ForumList
    },
    data () {
      return {
        forums: Object.values(dataJson.forums),
        posts: dataJson.posts,
        users: dataJson.users
      }
    }
  }
</script>


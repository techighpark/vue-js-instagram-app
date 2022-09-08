<template lang="">
  <div v-for="(post, i) in posts" :key="i">
    <Post :post="post" />
  </div>
</template>
<script>
import Post from '@/components/Post.vue';
export default {
  components: {
    Post,
  },
  props: {
    posts: Array,
  },
};
</script>
<style lang=""></style>

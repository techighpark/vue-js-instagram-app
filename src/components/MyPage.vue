<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="🔎" />
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">사용자명</span>
      <span>{{ follower }}</span>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';

export default {
  setup() {
    let follower = ref([]);
    onMounted(() => {
      axios.get('/follower.json').then(res => {
        follower.value = res.data;
      });
    });
    return { follower };
  },
  data() {
    return {};
  },
};
</script>
<style lang=""></style>

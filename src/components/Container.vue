<template lang="">
  <div>
    <div v-if="currentTab === 0">
      <Post :post="post" v-for="(post, i) in posts" :key="i" />
    </div>
    <div
      :class="clickedFilter"
      class="upload-image"
      :style="uploadImgUrlObject"
    ></div>
    <div class="filters" v-if="currentTab === 1">
      <FilterBoxVue
        :filter="filter"
        :image="uploadImgUrlObject"
        v-for="filter in filters"
        :key="filter"
        >{{ filter }}</FilterBoxVue
      >
    </div>
    <!-- 글작성페이지 -->
    <div class="write" v-if="currentTab === 2">
      <textarea
        class="write-box"
        placeholder="write!"
        @input="$emit('write', $event.target.value)"
      ></textarea>
    </div>
  </div>
</template>
<script>
import Post from '@/components/Post.vue';
import FilterBoxVue from './FilterBox.vue';
export default {
  components: {
    Post,
    FilterBoxVue,
  },
  props: {
    posts: Array,
    currentTab: Number,
    uploadImgUrl: String,
    clickedFilter: String,
  },
  data() {
    return {
      filters: [
        'aden',
        '_1977',
        'brannan',
        'brooklyn',
        'clarendon',
        'earlybird',
        'gingham',
        'hudson',
        'inkwell',
        'kelvin',
        'lark',
        'lofi',
        'maven',
        'mayfair',
        'moon',
        'nashville',
        'perpetua',
        'reyes',
        'rise',
        'slumber',
        'stinson',
        'toaster',
        'valencia',
        'walden',
        'willow',
        'xpro2',
      ],
    };
  },
  computed: {
    uploadImgUrlObject() {
      return { backgroundImage: ` url(${this.uploadImgUrl})` };
    },
  },
};
</script>
<style>
.upload-image {
  border: 2px solid #888;
  border-radius: 15px;
  width: 100%;
  height: 450px;
  background: darkgray;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>

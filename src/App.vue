<template>
  <h1>{{ $store.state.lastName }}</h1>
  <button @click="$store.commit('modifyLastName')">modify</button>
  <h3>{{ $store.state.age }}</h3>
  <button @click="$store.commit('minusAge')">-</button>
  <button>reset</button>
  <button @click="$store.commit('plusAge', 10)">+</button>
  <p>{{ $store.state.morePost }}</p>
  <button @click="$store.dispatch('getData')">More +++++</button>
  <Button>
    <template v-slot:slot-a> 123</template>
    <template v-slot:default="props"> {{ props.componentProps }}</template>
  </Button>

  <div class="header">
    <ul class="header-button-left">
      <li @click="currentTab--">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="currentTab === 1" @click="currentTab++">Next</li>
      <li v-if="currentTab === 2" @click="publish">Post</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <p>{{ nowTwo }}{{ counter }}</p>
  <p>{{ nowOne() }}{{ counter }}</p>
  <button @click="counter++">now one</button>

  <Container
    :clickedFilter="clickedFilter"
    :posts="posts"
    :current-tab="currentTab"
    :upload-img-url="uploadImgUrl"
    @write="writeContent = $event"
  />
  <button @click="showMore">show more</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input
        type="file"
        accept="image/*"
        id="file"
        class="input-file"
        @change="uploadImg"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <div>{{ tabs[currentTab] }}</div>
  <button v-for="(tab, i) in tabs" :key="i" @click="clickTab(i)">
    {{ tab }}
  </button>
</template>

<script>
import Container from '@/components/Container.vue';
import posts from '@/assets/posts';
import axios from 'axios';
import Button from './components/Button.vue';
import { mapMutations, mapState } from 'vuex';
export default {
  name: 'App',
  components: {
    Container,
    Button,
  },
  data() {
    return {
      counter: 0,
      posts,
      currentTab: 0,
      tabs: ['Post', 'Filters', 'Write'],
      uploadImgUrl: '',
      writeContent: '',
      clickedFilter: '',
    };
  },
  mounted() {
    this.emitter.on('clickFilter', data => (this.clickedFilter = data));
  },
  computed: {
    nowTwo() {
      return new Date();
    },
    lastName() {
      return this.$store.state.lastName;
    },
    ...mapState(['lastName', 'age', 'likes']),
  },
  methods: {
    ...mapMutations(['setMore']),
    nowOne() {
      return new Date();
    },
    showMore() {
      axios
        .get('https://codingapple1.github.io/vue/more0.json')
        .then(res => {
          this.posts.push(res.data);
        })
        .catch(err => console.log(err));
    },
    clickTab(tab) {
      this.currentTab = tab;
    },
    uploadImg(e) {
      const uploadImg = e.target.files[0];
      this.currentTab = 1;
      this.uploadImgUrl = URL.createObjectURL(uploadImg);
    },
    publish() {
      const newPost = {
        name: 'Kim Hyun',
        userImage: 'https://placeimg.com/100/100/arch',
        postImage: this.uploadImgUrl,
        likes: 36,
        date: 'May 15',
        liked: false,
        content: this.writeContent,
        filter: this.clickedFilter,
      };
      console.log(this.clickedFilter);
      this.posts.unshift(newPost);
      this.currentTab = 0;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.input-file {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: 'consolas';
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>

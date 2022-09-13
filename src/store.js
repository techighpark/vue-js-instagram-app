import axios from 'axios';
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      lastName: 'kim',
      age: 20,
      likes: 30,
      isLiked: false,
      morePost: {},
    };
  },
  mutations: {
    modifyLastName(state) {
      state.lastName = 'park';
    },
    plusAge(state, payload) {
      state.age += payload;
    },
    minusAge(state) {
      state.age--;
    },
    toggleLike(state) {
      if (!state.isLiked) {
        state.likes++;
        state.isLiked = true;
      } else {
        state.likes--;
        state.isLiked = false;
      }
    },
    setMore(state, data) {
      state.morePost = data;
    },
  },
  actions: {
    getData(context) {
      axios.get('https://codingapple1.github.io/vue/more0.json').then(a => {
        context.commit('setMore', a.data);
      });
    },
  },
});

export default store;

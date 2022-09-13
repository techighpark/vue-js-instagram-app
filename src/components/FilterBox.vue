<template lang="">
  <div @click="fire" class="filter-item" :class="filter" :style="image">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    image: Object,
    filter: String,
  },
  methods: {
    fire() {
      this.emitter.emit('clickFilter', this.filter);
    },
  },
};
</script>
<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>

<template lang="">
  <div>Button</div>
  <slot name="slot-a"></slot>
  <slot :componentProps="componentProps"></slot>
  <button @click="fire">emit</button>
</template>
<script>
export default {
  data() {
    return {
      componentProps: 'componentProps',
      emitdata: 'emitter',
    };
  },
  methods: {
    fire() {
      this.emitter.emit('name', this.emitdata);
    },
  },
};
</script>
<style lang=""></style>

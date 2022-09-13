<template lang="">
  <div>Button</div>
  <slot name="slot-a"></slot>
  <slot :componentProps="componentProps"></slot>
  <slot></slot>
</template>
<script>
export default {
  data() {
    return {
      componentProps: 'componentProps',
    };
  },
};
</script>
<style lang=""></style>

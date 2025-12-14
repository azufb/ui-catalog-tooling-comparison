<template>
  <div>
    <p>aaa</p>
    <Button label="Click Me" :variant="BUTTON_VARIANTS.SUCCESS" :onClick="() => alert('Button Clicked!')" />
  </div>
</template>

<script>
  import Button from '@/components/Button.vue';
  import { BUTTON_VARIANTS } from '@/const/buttonVariants.js';

  export default {
    name: 'App',
    components: {
      Button
    },
    data() {
      return {
        BUTTON_VARIANTS
      };
    }
  };
</script>

<style scoped>

</style>

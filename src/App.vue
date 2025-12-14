<template>
  <div>
    <p>aaa</p>
    <Button label="Click Me" :variant="BUTTON_VARIANTS.SUCCESS" :onClick="() => alert('Button Clicked!')" />

    <RadioButton 
      v-for="radioButtonOption in radioButtonOptions"
      :label="radioButtonOption.label"
      :value="radioButtonOption.value"
      :key="radioButtonOption.value"
      v-model="selectedOption"
    />
  </div>
</template>

<script>
  import Button from '@/components/Button.vue';
  import RadioButton from '@/components/RadioButton.vue';
  import { BUTTON_VARIANTS } from '@/const/buttonVariants.js';

  export default {
    name: 'App',
    components: {
      Button,
      RadioButton
    },
    data() {
      return {
        BUTTON_VARIANTS,
        radioButtonOptions: [
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' }
        ],
        selectedOption: ""
      };
    }
  };
</script>

<style scoped>

</style>

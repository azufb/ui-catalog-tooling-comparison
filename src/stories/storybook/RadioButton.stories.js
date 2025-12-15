import RadioButton from "@/components/RadioButton.vue";

export default {
  title: "Example/RadioButton",
  component: RadioButton,
};

const Story = (args) => ({
  components: { RadioButton },
  setup() {
    return { args };
  },
  template: `<RadioButton v-bind="args" />`,
});

export const Default = Story.bind({});
Default.args = {
  label: "Option 1",
  value: "option1",
};

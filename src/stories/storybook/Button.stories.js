import Button from "@/components/Button.vue";
import { BUTTON_VARIANTS } from "../../const/buttonVariants";

export default {
  title: "Example/Button",
  component: Button,
};

const Story = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `<Button v-bind="args" />`,
});

export const SuccessButton = Story.bind({});
SuccessButton.args = {
  label: "Success Button",
  variant: BUTTON_VARIANTS.SUCCESS,
  onClick: () => {
    console.log("Success button clicked");
  },
};

export const DangerButton = Story.bind({});
DangerButton.args = {
  label: "Danger Button",
  variant: BUTTON_VARIANTS.DANGER,
  onClick: () => {
    console.log("Danger button clicked");
  },
};

export const DefaultButton = Story.bind({});
DefaultButton.args = {
  label: "Default Button",
  variant: BUTTON_VARIANTS.DEFAULT,
  onClick: () => {
    console.log("Default button clicked");
  },
};

<template>
    <div>
        <button :class="switchVariant" @click="handleClick">{{ label }}</button>
    </div>
</template>

<script>
import { BUTTON_VARIANTS } from '@/const/buttonVariants';

export default {
    name: 'Button',
    props: {
        label: {
            type: String,
            required: true
        },
        onClick: {
            type: Function,
            required: false
        },
        variant: {
            type: String,
            required: false,
            default: BUTTON_VARIANTS.DEFAULT
        }
    },
    computed: {
        switchVariant() {
            switch (this.variant) {
                case BUTTON_VARIANTS.SUCCESS:
                    return "btn-success";
                case BUTTON_VARIANTS.DANGER:
                    return "btn-danger";
                default:
                    return "btn-default";
            }
        }
    },
    methods: {
        handleClick() {
            this.onClick && this.onClick();
        }
    }
}
</script>

<style scoped>
    .btn-success {
        background-color: #4CAF50;
        color: white;
    }

    .btn-danger {
        background-color: #f44336;
        color: white;
    }

    .btn-default {
        background-color: #e7e7e7;
        color: black;
    }
</style>
<script setup>
    import Button from '@/components/Button.vue';
    import { BUTTON_VARIANTS } from '@/const/buttonVariants.js';
</script>

<template>
    <Story title="Button">
        <Variant title="success">
            <Button label="Success Button" :variant="BUTTON_VARIANTS.SUCCESS" :onClick="() => alert('Success button clicked')" />
        </Variant>
        
        <Variant title="danger">
            <Button label="Danger Button" :variant="BUTTON_VARIANTS.DANGER" :onClick="() => alert('Danger button clicked')" />
        </Variant>

        <Variant title="default">
            <Button label="Default Button" :variant="BUTTON_VARIANTS.DEFAULT" :onClick="() => alert('Default button clicked')" />
        </Variant>
    </Story>
</template>
<template>
    <div>
        <input type="radio" :value="value" name="radio-button" />
        <label :for="value">{{ label }}</label>
    </div>
</template>

<script>
    export default {
        name: 'RadioButton',
        props: {
            label: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: true
            }
        }
    }
</script>
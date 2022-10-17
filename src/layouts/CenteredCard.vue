<script setup></script>

<template>
    <el-card class="centered-card" size="large">
        <slot>Centered Card</slot>
    </el-card>
</template>

<style scoped>
.centered-card {
    margin-top: 220px;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    padding: 20px;

    justify-content: center;
}
</style>

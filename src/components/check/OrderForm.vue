<script setup></script>
<template>
    <div class="content">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
.content {
    :deep(>*) {
        margin-bottom: 20px;
    }
}
</style>

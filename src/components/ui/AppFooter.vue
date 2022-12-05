<template>
    <footer>Copyright © <slot /></footer>
</template>
<style lang="scss" scoped>
footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    color: var(--el-text-color-secondary);
    text-align: center;

    backdrop-filter: blur(10px);
}
</style>
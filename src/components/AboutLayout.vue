<script setup>
import { ArrowDownBold } from "@element-plus/icons-vue"

const scrollTo = () => {
    /* console.log(window) */
    const target = 910
    let current = window.scrollY

    const scroll = setInterval(() => {
        let add = (target - current) / 25
        if (add < 0.01) {
            add = 0.01
        }

        current += add
        window.scroll(0, current)

        if (target - current <= 1) {
            /* console.log('clear') */
            clearInterval(scroll)
        }

        /* console.log(target, current, target - current) */
    }, 10)
}
</script>

<template>
    <el-card class="content-card">
        <el-button class="draw-down-btn" text @click="scrollTo()">
            瞭解更多
            <div style="width: 1vw"></div>
            <el-icon><ArrowDownBold /></el-icon>
        </el-button>
        <div style="height: 35px" />
        <h1>您小舖的好夥伴</h1>
        <div style="height: 50px" />
        <el-row :gutter="30">
            <el-col :xs="24" :md="8">
                <el-card>
                    <div class="clearfix">
                        <span> 學生製作 </span>
                    </div>
                    <div class="card-body">
                        <p>描述描述</p>
                    </div>
                </el-card>
            </el-col>
            <el-col :xs="24" :md="8">
                <el-card>
                    <div class="clearfix">
                        <span> 免費開源 </span>
                    </div>
                    <div class="card-body">
                        <p>小舖描述</p>
                    </div>
                </el-card>
            </el-col>
            <el-col :xs="24" :md="8">
                <el-card>
                    <div class="clearfix">
                        <span> 隨辦即用 </span>
                    </div>
                    <div class="card-body">
                        <p>小舖描述</p>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </el-card>
</template>

<style scoped>
.el-card {
    border-radius: 20px;
}
.draw-down-btn {
    margin: auto;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}
.content-card {
    max-width: 1280px;
    height: 980px;
    margin-top: 170px;
    margin-left: auto;
    margin-right: auto;
}
.content-card h1 {
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    color: #333;
}
.clearfix {
    text-align: center;
    overflow: auto;
    padding: 30px 40px;
}
.clearfix > span {
    font-size: 32px;
    font-weight: bold;
    color: #333;
}
</style>

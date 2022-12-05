<script setup>
import { signIn } from "@/api/user"
</script>
<template>
    <div class="home-hero">
        <el-row class="home-hero-content" :gutter="80">
            <el-col class="home-hero-content__body" :xs="24" :md="12">
                <h1>跟工蜂一樣重要</h1>
                <h3>
                    一般來說，拉羅什福科曾經告訴世人，我們唯一不會改正的缺點是軟弱。這句話語雖然很短，但令我浮想聯翩。伏契克有一句座右銘，為了爭取將來的美好而犧牲了的人，都是一尊石質的雕像。這似乎非常的有道理，對吧？為什麼先有蜂還是先有蛋對我們來說這麼重要？
                </h3>
                <el-button class="start-btn" @click="signIn">
                    <span> 開始使用！</span>
                </el-button>
            </el-col>
            <el-col class="home-hero-content__image" :xs="24" :md="12">
                <div class="marvel-device macbook">
                    <div class="top-bar"></div>
                    <div class="camera"></div>
                    <div style="z-index: 0" class="screen">
                        <h1 style="color: black">別急~還在開發...</h1>
                        <el-skeleton :rows="10" animated />
                    </div>
                    <div class="bottom-bar"></div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
@import "@/assets/device.min.css";
.home-hero {
    padding-top: 100px;
    margin-left: 10vw;
    margin-right: 10vw;
    height: 650px;
    max-width: 1080px;
}
.home-hero h1 {
    font-size: 64px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 20px;
}
.home-hero h3 {
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 20px;
}
.start-btn {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    color: var(--el-color-primary);
    margin-bottom: 20px;
}
.start-btn > span > span {
    font-size: x-large;
    font-weight: bold;
}
.home-hero-content {
    padding: 20px;
}
.home-hero-content__body {
    z-index: 1;
}
.home-hero-content__image {
    padding: 20px;
}
.marvel-device {
    top: -120px;
    position: absolute;
}
@media (max-width: 960px) {
    .marvel-device {
        display: none;
    }
}
</style>

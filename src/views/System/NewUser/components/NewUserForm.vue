<template>
    <el-form>
        <h1>填寫資料以完成註冊</h1>
        <p>請確認您的資料是否正確，若有錯誤請修正後再重新填寫。</p>
        <el-form-item label="您的姓名">
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-input v-model="form.firstName" placeholder="姓氏" />
                </el-col>
                <el-col :span="12">
                    <el-input v-model="form.lastName" placeholder="名字" />
                </el-col>
            </el-row>
        </el-form-item>
        <el-form-item label="聯絡電話">
            <el-input v-model="form.phoneNumber" placeholder="0912123123" />
        </el-form-item>
        <el-form-item label="怎麼知道這個服務？">
            <el-radio-group v-model="form.howToKnowUs">
                <el-radio v-for="item in options" :key="item.value" :label="item.label" />
            </el-radio-group>
        </el-form-item>
        <el-button type="primary" @click="submit">進入系統！</el-button>
    </el-form>
</template>

<script setup>
import { reactive } from "vue"
import { signUp } from "@/apis/user"

const form = reactive({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    howToKnowUs: "",
})

const submit = () => {
    console.log(form)
    signUp(form)
}

const options = [
    {
        value: "網路查到",
        label: "網路查到",
    },
    {
        value: "看到廣告",
        label: "看到廣告",
    },
    {
        value: "學生交流版",
        label: "學生交流版",
    },
    {
        value: "其他交流版",
        label: "其他交流版",
    },
    {
        value: "他人介紹",
        label: "他人介紹",
    },
    {
        value: "其他",
        label: "其他",
    },
]
</script>

<style scoped>
h1 {
    margin-bottom: 20px;
    font-size: 32px;
    font-weight: bold;
}
p {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: normal;
}
</style>

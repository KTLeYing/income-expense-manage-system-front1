<template>
  <el-row :gutter="7">
    <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
      <el-col :span="24">
        <el-form-item label="用户名" prop="mobile">
          <el-input v-model="formData.mobile" placeholder="请输入用户名" show-word-limit clearable
                    prefix-icon='el-icon-user-solid' :style="{width: '100%'}"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="密码" prop="field115">
          <el-input v-model="formData.field115" placeholder="请输入密码" clearable prefix-icon='el-icon-lock'
                    show-password :style="{width: '100%'}"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="20">
        <el-form-item label="验证码" prop="field103">
          <el-input v-model="formData.field103" placeholder="请输入验证码" clearable
                    prefix-icon='el-icon-c-scale-to-original' :style="{width: '100%'}"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label-width="0" prop="field118">
          <el-button type="primary" size="medium"> 获取验证码 </el-button>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="编辑器" prop="field112">
          <tinymce v-model="formData.field112" placeholder="请输入编辑器" :height="300"></tinymce>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item size="large">
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-col>
    </el-form>
  </el-row>
</template>

<script>
  export default {
    components: {},
    props: [],
    data() {
      return {
        formData: {
          mobile: undefined,
          field115: "",
          field103: "",
          field118: "",
          field112: "",
        },
        rules: {
          mobile: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }, {
            pattern: /^1(3|4|5|7|8|9)\d{9}$/,
            message: '手机号格式错误',
            trigger: 'blur'
          }],
          field115: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }],
          field103: [{
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
          }],
          field112: [{
            required: true,
            message: '请输入编辑器',
            trigger: 'blur'
          }],
        },
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {
      submitForm() {
        this.$refs['elForm'].validate(valid => {
          if (!valid) return
          // TODO 提交表单
        })
      },
      resetForm() {
        this.$refs['elForm'].resetFields()
      },
    }
  }
</script>

<style scoped>

</style>

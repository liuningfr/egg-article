<template>
  <div>
    <van-uploader v-model="fileList" :max-count="1" :after-read="afterRead" />
    <van-cell-group>
      <van-field label="文章标题" placeholder="文章标题" v-model="title" />
      <van-field
        label="文章内容"
        placeholder="文章内容"
        v-model="content"
        type="textarea"
        autosize
      />
    </van-cell-group>
    <van-button type="primary" @click="submit" class="add-btn">提交</van-button>
  </div>
</template>

<script>
import { Uploader, CellGroup, Field, Button, Toast } from 'vant';

export default {
  components: {
    [Uploader.name]: Uploader,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button,
  },
  data() {
    return {
      fileList: [],
      title: '',
      content: '',
      img: '',
    };
  },
  methods: {
    afterRead(info) {
      this.img = info.content;
    },
    submit() {
      const data = {
        title: this.title,
        content: this.content,
        img: this.img,
      };
      fetch('/article/create', {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(res => {
          if (res.status === 200) {
            Toast.success('发布成功');
          } else {
            Toast.fail(res.errMsg);
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.add-btn {
  position: absolute;
  left: 0;
  bottom: 80px;
  width: 100%;
}
</style>

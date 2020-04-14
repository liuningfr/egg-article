<template>
  <div class="detail">
    <div class="title">{{ detail.title }}</div>
    <div class="content">{{ detail.content }}</div>
    <div class="create-time">{{ detail.createTime }}</div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import moment from 'moment';

export default {
  created() {
    fetch(`/article/detail/${this.$route.query.id}`)
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          this.detail = res.data;
          this.detail.createTime = this.detail.createTime
            ? moment(this.detail.createTime).format('YYYY-MM-DD HH:mm:ss')
            : '';
        } else {
          Toast.fail(res.errMsg);
        }
      });
  },
  data() {
    return {
      detail: {},
    };
  },
};
</script>
<style lang="scss" scoped>
.detail {
  padding: 20px;
  font-size: 25px;
  .content {
    text-indent: 2em;
    line-height: 200%;
  }
  .create-time {
    text-align: right;
    color: #9e9e9e;
  }
}
</style>

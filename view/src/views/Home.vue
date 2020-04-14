<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item.id" @click="goDetail(item.id)">
        <div class="article">
          <div class="left">
            <img :src="item.img" alt />
          </div>
          <div class="right">
            <div class="title">{{ item.title }}</div>
            <div class="create-time">{{ item.createTime }}</div>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { List, Cell, Toast } from 'vant';
import moment from 'moment';

export default {
  name: 'Home',
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
  },
  data() {
    return {
      loading: false,
      finished: false,
      list: [],
    };
  },
  methods: {
    onLoad() {
      fetch('/article/list')
        .then(res => res.json())
        .then(res => {
          if (res.status === 200) {
            this.list = res.data.map(item => {
              if (item.createTime) {
                item.createTime = moment(item.createTime).format(
                  'YYYY-MM-DD HH:mm:ss'
                );
              }
              return item;
            });
            this.loading = false;
            this.finished = true;
          } else {
            Toast.fail(res.errMsg);
          }
        });
    },
    goDetail(id) {
      this.$router.push({
        path: '/detail',
        query: {
          id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.article {
  display: flex;
  font-size: 18px;

  .right {
    width: 150px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 15px;
  }

  .left {
    width: 150px;
    height: 100px;
  }

  .img {
    width: 150px;
    height: 100px;
    border-radius: 10px;
  }

  .create-time {
    font-size: 12px;
    color: #9e9e9e;
  }
}
</style>

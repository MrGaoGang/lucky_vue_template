<template>
  <div class="main">
    <div class="header">
      <h1>客户端</h1>
      <a href="admin.html">管理员</a>
    </div>

    <Tabs>
      <TabPane label="github info">
        <div>{{githubData}}</div>
      </TabPane>

      <TabPane label="demo">
        <div>demo2</div>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import { Tabs, TabPane } from "iview";

export default {
  components: { Tabs, TabPane },
  data() {
    return {
      githubData: ""
    };
  },
  mounted() {
    this.$store
      .dispatch("home/getUserInfo", { name: "gaogang" })
      .then(data => {
        this.githubData = data;
      })
      .catch(error => {
        this.githubData = "get data error";
      });
  }
};
</script>


<style scoped>
.main {
  margin: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
}
</style>

<template>
  <div class="main">
    <h1>Get Persoanl Github info</h1>
    <Tabs>
      <TabPane label="github info">
        <div>demo1</div>
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
</style>

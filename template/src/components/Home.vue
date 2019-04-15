<template>
  <div class="main">
    <h1>购物车案例</h1>
    <Tabs>
      <TabPane label="商品列表">
        <div>demo1</div>
      </TabPane>

      <TabPane label="购物车">
        <div>demo2</div>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import { Tabs, TabPane } from "iview";
export default {
  components: { Tabs, TabPane }
};
</script>


<style scoped>
.main {
  margin: 20px;
}
</style>

<template>
  <div class="root-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>麺の量・硬さの指定</span>
        <el-button style="float: right; padding: 3px 0" type="text">着席した！</el-button>
      </div>
      <div class="text">
        食券を購入し列に並んでいると、店員さんに食券の色を聞かれます。<br>
        麺の量を減らしたり固めにしたりしてもらうときは、このタイミングでお願いしましょう。<br>
        席に着いたら、"着席した! "を押してください。
      </div>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.root-container {
  padding: 2.5em;
}
</style>

<template>
  <section class="container">
    <div>
      <div class="hero-image">
        <img src="~/assets/logo.svg" class="logo">
      </div>
      <div class="top-body">
        <nuxt-link to="/call/noodle" tag="div" class="toNoodleBtn">
          <el-button type="danger" plain>入店する</el-button>
        </nuxt-link>
        <div class="card-wrapper">
          <el-card class="box-card">
            <div class="text item">
              <h2>はじめての人にも、常連さんにも嬉しいラーメン二郎のWebサービス</h2>
              <p class="service-description">「二郎へ行ってみたいけれど、食べきれなかったらどうしよう」「食券を見せるときに麺の量を伝えるって、どういうこと？」「トッピングが複雑でよくわからない」という人にも、「今回の注文を次回も使いたいけれど、たまに言い忘れるんだよな」「あの店で頼んだトッピング、何だっけ」という常連さんにもオススメの便利なツールです。</p>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 70px;
  background: #fefefe;
}

.toNoodleBtn {
  margin: 30px 0;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.hero-image {
  width: 100vw;
  background-image: url('../assets/jiro-hero.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 240px;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-wrapper {
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
}

h2 {
  font-size: 17px;
  text-align: left;
  margin-bottom: 15px;
  letter-spacing: -1px;
}

.service-description {
  font-size: 14px;
  text-align: left;
}

.logo {
  width: 300px;
  height: 100%;
  display: block;
}


.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

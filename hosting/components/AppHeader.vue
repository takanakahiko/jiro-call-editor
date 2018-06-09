<template>
  <header>
    <div class="header-content">
      <div class="header-logo">
        <nuxt-link to="/">
          <AppHeaderLogo style="width: 100px;" />
        </nuxt-link>
      </div>
      <div class="header-menu">
        <nuxt-link to="/call/mode" class="enter-shop">
          入店
        </nuxt-link>
        <div class="login">
          ログイン
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import AppHeaderLogo from '~/components/AppHeaderLogo.vue'

export default {
  components: {
    AppHeaderLogo
  }
}
</script>

<style scoped lang="scss">
header {
  width: 100%;
  height: 70px;
  padding: 15px;
  background-color: #FEFF06;
  -webkit-box-shadow: 0 1px 3px #c5c5c5;
  box-shadow: 0 1px 3px #c5c5c5;
  position: fixed;
  left: 0;
  top: 0;
}

.header-content {
  width: 100%;
  max-width: 940px;
  height: 100%;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.header-menu {
  display: flex;
  align-items: center;
}

.enter-shop {
  margin-right: 10px;
}

.login {
  margin-left: 10px;
}
</style>

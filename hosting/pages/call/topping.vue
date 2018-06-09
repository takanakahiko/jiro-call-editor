<template>
  <div class="root-container">
    <div style="margin-top: 30px; text-align: left;">
      <h1>トッピングを選ぼう！</h1>
      <div>
        <p>野菜</p>
        <el-radio-group v-model="yasai">
          <el-radio-button label="なし"></el-radio-button>
          <el-radio-button label="マシ"></el-radio-button>
          <el-radio-button label="マシマシ"></el-radio-button>
        </el-radio-group>
      </div>
      <div>
        <p>ニンニク</p>
        <el-radio-group v-model="ninniku">
          <el-radio-button label="なし"></el-radio-button>
          <el-radio-button label="マシ"></el-radio-button>
          <el-radio-button label="マシマシ"></el-radio-button>
        </el-radio-group>
      </div>
      <div>
        <p>アブラ</p>
        <el-radio-group v-model="abura">
          <el-radio-button label="なし"></el-radio-button>
          <el-radio-button label="マシ"></el-radio-button>
          <el-radio-button label="マシマシ"></el-radio-button>
        </el-radio-group>
      </div>
      <div>
        <p>カラメ</p>
        <el-radio-group v-model="karame">
          <el-radio-button label="する"></el-radio-button>
          <el-radio-button label="しない"></el-radio-button>
        </el-radio-group>
      </div>
      <div v-if="showTopping" style="margin-top: 30px;">
        {{ showText }}
      </div>
      <div style="text-align: center; margin-top: 50px;">
        <el-button @click="onClickShowText" round>トッピングを見る</el-button>
        <el-button type="danger" @click="onClick" round>読み上げる</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      speaking: false,
      yasai: "マシ",
      ninniku: "なし",
      abura: "マシ",
      karame: "する",
      showTopping: false,
      showText: ''
    };
  },
  components: {},
  methods: {
    onClickShowText () {
      if (speechSynthesis.speaking) return
      const y = this.yasai === "なし" ? "" : this.yasai
      const n = this.ninniku === "なし" ? "" : this.ninniku
      const a = this.abura === "なし" ? "" : this.abura
      const k = this.karame === "しない" ? "" : "カラメ"

      const speech = new SpeechSynthesisUtterance()
      speech.text = `ヤサイ${y}ニンニク${n}アブラ${a}${k}`

      this.showText = speech.text
      this.showTopping = true
    },
    onClick (event) {
      if (speechSynthesis.speaking) return
      const y = this.yasai === "なし" ? "" : 'ヤサイ' + this.yasai
      const n = this.ninniku === "なし" ? "" : 'ニンニク' + this.ninniku
      const a = this.abura === "なし" ? "" : 'アブラ' + this.abura
      const k = this.karame === "しない" ? "" : "カラメ"

      const speech = new SpeechSynthesisUtterance()
      speech.text = `${y}${n}${a}${k}`
      speech.lang = "ja-JP"
      speech.rate = 0.7
      speechSynthesis.speak(speech)
    }
  }
};
</script>

<style scoped>
.root-container {
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 70px;
  background: #fefefe;
}

p {
  margin-top: 15px;
  margin-bottom: 5px;
  font-weight: bold;
}
</style>

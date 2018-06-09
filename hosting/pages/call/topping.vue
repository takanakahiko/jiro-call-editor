<template>
  <div class="root-container">
    <p>トッピングを選ぼう！</p>
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
    <el-button type="default" v-on:click="onClick">読み上げる</el-button>
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
      karame: "する"
    };
  },
  components: {},
  methods: {
    onClick: function(event) {
      if (speechSynthesis.speaking) return;
      const y = this.yasai === "なし" ? "" : this.yasai;
      const n = this.ninniku === "なし" ? "" : this.ninniku;
      const a = this.abura === "なし" ? "" : "アブラ";
      const k = this.karame === "しない" ? "" : "カラメ";

      const speech = new SpeechSynthesisUtterance();
      speech.text = `ヤサイ${y}ニンニク${n}${a}${k}`;
      speech.lang = "ja-JP";
      speech.pitch = 1;
      speechSynthesis.speak(speech);
    }
  }
};
</script>

<style>
</style>

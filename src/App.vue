<template>
  <div id="app">
    <div class="box" v-touchall="touchOption">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      text: "touch",
      touchOption: {
        tap: e => this.vueTouch("点击", e),
        doubletap: e => this.vueTouch("双击", e),
        longtap: e => this.vueTouch("长按", e),
        swipeleft: e => this.vueTouch("左滑", e),
        swiperight: e => this.vueTouch("右滑", e),
        swipeup: e => this.vueTouch("上滑", e),
        swipedown: e => this.vueTouch("下滑", e),
        doubletapDelay: 300,
        longtapDelay: 600
      }
    };
  },
  methods: {
    vueTouch: function(txt, e) {
      this.text = txt;
    }
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box {
  width: 300px;
  height: 300px;
  background-color: red;
  color: #ffffff;
  text-align: center;
  line-height: 300px;
  font-size: 100px;
}
</style>
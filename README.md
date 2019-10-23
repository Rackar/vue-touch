# kim-vue-touch

### Installation

```
npm install kim-vue-touch
```

### Usage

```
import vueTouch from 'kim-vue-touch'

Vue.use(vueTouch)

```

- kim-vue-touch 提供了点击、长按、左滑、右滑、上滑、下滑等事件，
- 指令 v-touchall='touchOption'
- touchOption 可分别配置启用哪些操作（如点击、长按、滑动,及其回调函数），以及长按延时，见 demo
- 当指令搭配 v-for 使用时，一定要确保 key 值的唯一性，否则不能保证数据刷新之后事件被重新绑定（参考 vue 就地复用机制）
- 尽量避免对数组、对象的直接赋值操作，可能会导致参数不更新

```
<template>
  <div id="app">
    <div class="box" v-touchall="touchOption">{{ name }}</div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      name: "touch",
      touchOption: {
        tap: e => this.vueTouch("点击", e),
        longtap: e => this.vueTouch("长按", e),
        swipeleft: e => this.vueTouch("左滑", e),
        swiperight: e => this.vueTouch("右滑", e),
        swipeup: e => this.vueTouch("上滑", e),
        swipedown: e => this.vueTouch("下滑", e),

        longtapDelay: 500
      }
    };
  },
  methods: {
    vueTouch: function(txt, e) {
      this.name = txt;
    }
  }
};
</script>
```

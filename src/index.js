function vueTouch(el, binding) {
  this.activeMetheds = binding.value
  this.delay = binding.value.longtapDelay ? binding.value.longtapDelay : 1000
  this.obj = el
  this.binding = binding
  this.vueTouches = { x: 0, y: 0 }

  this.ifTouchStandby = true
  this.callbacks = {}

  this.obj.addEventListener(
    'touchstart',
    e => {
      this.start(e)
    },
    false
  )
  this.obj.addEventListener(
    'touchend',
    e => {
      this.end(e)
    },
    false
  )
}

vueTouch.prototype = {
  start: function(e) {
    this.ifTouchStandby = true
    this.vueTouches = {
      x: e.changedTouches[0].pageX,
      y: e.changedTouches[0].pageY
    }
    if (this.activeMetheds.longtap) {
      this.time = setTimeout(
        function() {
          if (this.ifTouchStandby) {
            this.activeMetheds.longtap()
            this.ifTouchStandby = false
          }
        }.bind(this),
        this.delay
      )
    }
  },
  end: function(e) {
    var disX = e.changedTouches[0].pageX - this.vueTouches.x
    var disY = e.changedTouches[0].pageY - this.vueTouches.y
    if (this.time) clearTimeout(this.time)
    if (this.ifTouchStandby) {
      if (Math.abs(disX) > 10 || Math.abs(disY) > 10) {
        if (Math.abs(disX) > Math.abs(disY)) {
          if (disX > 10 && this.activeMetheds.swiperight) {
            this.activeMetheds.swiperight()
          }
          if (disX < -10 && this.activeMetheds.swipeleft) {
            this.activeMetheds.swipeleft()
          }
        } else {
          if (disY > 10 && this.activeMetheds.swipedown) {
            this.activeMetheds.swipedown()
          }
          if (disY < -10 && this.activeMetheds.swipeup) {
            this.activeMetheds.swipeup()
          }
        }
      } else if (this.activeMetheds.tap) {
        this.activeMetheds.tap()
      }
    }
  }
}
export default {
  install: function(Vue, options) {
    Vue.directive('touchall', {
      bind: function(el, binding) {
        new vueTouch(el, binding)
      }
    })
  }
}

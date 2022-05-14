<template>
  <div class="home">


  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  ref,
  reactive
} from "vue"

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  setup() {
    let num = ref(1)
    let info = reactive({
      name: "zjh",
      age: 18,
      id: 1
    })
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    onErrorCaptured(err => {
      console.log(err)
    })

    onRenderTracked(obj => {
      console.log(obj)
    })
    onRenderTriggered(obj => {
      console.log(obj)
    })
    console.log("setup执行了")
    let addFun = () => {
      num.value++
      info.age++
    }
    return {
      num,
      addFun,
      info
    }
  },
}
</script>

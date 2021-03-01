<template>
  <div class="index">
      
  </div>
</template>

<script>
import { getManual } from '@/apis/product';
import { onMounted, ref } from 'vue';
export default {
  name: '',
components:{},
setup(){
    let product=ref([])
    let count=ref(0)
    count.value++
    const loadProduct=(number)=>{
        getManual(number).then(res=>{
            product.value=res.data
        })
    }
    onMounted(()=>{
        loadProduct(2)
        count.value++
    })
    
    return {
        product,
        loadProduct,
        count
    }
},
  data () {
   return {
   }
  },
  methods:{

  }
}
</script>

<style lang='less' scoped>

</style>
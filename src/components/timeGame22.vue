<template>

 <ul>
 <li v-for="(item,index) in arr" :key="index" :class="{red:index==indexPrev}"         
 v-on:click="changeColor(index)">{{item}}</li></ul>   
</template>
<script>
export default {
      data(){
        return {
            arr:['0','1','3'],
            indexPrev:1
        }
      },
    methods:{ 
        changeColor(index){this.indexPrev=index}
        }
}
</script>
<style>
.red{color:red}
</style>

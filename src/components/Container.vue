<template>
  <div>
    <Post/>
    <Post/>
    <Post/>
  </div>
</template>

<script>
import Post from './Post.vue';
export default {
    name : 'container',
    components :{
        Post,
    },
    props : {
        Insta: Array,
    }
}
</script>

<style>

</style>
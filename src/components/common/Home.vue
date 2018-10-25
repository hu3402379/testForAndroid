<template>
    <div class="wrapper">
            <header>
                <v-head></v-head>
            </header>
              <div class="content">
                  <transition name="move" mode="out-in"><router-view></router-view></transition>
              </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    export default {
        components:{
            vHead
        }
    }
</script>

<style scoped>
.content{
    background: none repeat scroll 0 0 #fff;
    position: absolute;
    left: 0px;
    right: 0;
    top: 70px;
    bottom:0;
    width: auto;
    box-sizing: border-box;
}
</style>


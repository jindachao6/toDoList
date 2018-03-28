<template>
  <div id="app">
    <div class="cover"></div>
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './to/header';
import Footer from './to/footer.jsx';
import Todo from './to/todo';

export default {
  components: {
    Header,
    Footer,
    Todo,
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
  #app{
    position absolute
    left 0
    right 0
    top 0
    bottom 0
  }
  .cover{
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    background-color #999
    opacity .6
    z-index -1
  }
</style>

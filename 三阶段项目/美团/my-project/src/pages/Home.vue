<template>
  <div>
    <Search />
    <Grid />
    <Card />
  </div>
</template>
<script>
import Search from "../components/Search.vue";
import Grid from "../components/Grid.vue";
import Card from "../components/Card.vue";
export default {
  components: {
    Search,
    Grid,
    Card
  }
};
</script>
<template>
  <div class="home">
    <div class="home__body">
      <router-view @nav="navigate"></router-view>
    </div>
    <div class="home__footer">
      <v-img
        v-if="img === 'tree'"
        class="home__footer-image"
        src="../assets/christmas-tree.png"
        max-height="256"
        max-width="256"
      ></v-img>
      <v-img
        v-if="img === 'santa'"
        class="home__footer-image"
        src="../assets/santa-claus.png"
        max-height="256"
        max-width="256"
      ></v-img>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "Home",
  components: {},
  data: () => ({
    id: undefined,
    img: "tree",
  }),
  methods: {
    navigate({ name, params, props, img = "tree" }) {
      this.img = img;
      this.$router.push({ name, params, props });
    },
  },
  mounted: function () {
    axios
      .get("/test", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
.home {
  font-family: Satisfy, cursive;
}

.home__footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.home__footer-image {
  margin: 0 auto;
  z-index: 0;
}
</style>

<template>
  <div class="home">
    <div class="home__body">
      <router-view @nav="navigate" @create="createParty"></router-view>
    </div>
    <div class="home__footer">
      <v-img
        class="home-footer__img"
        src="../assets/christmas-tree.png"
        max-width="256"
        max-height="256"
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
  }),
  methods: {
    navigate({ name, params, props }) {
      this.$router.push({ name, params, props });
    },
    createParty(participants) {
      console.log(participants);
    },
  },
  mounted: function () {
    axios
      .get("https://santaserver-dev.herokuapp.com/test", {
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
.home__body {
  margin: auto 0;
}
.home__footer {
  margin: 0 auto;
}
</style>

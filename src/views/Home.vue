<template>
  <div class="home">
    <div class="home__header"></div>
    <div class="home__body">
      <p v-if="id">Votre partie à l'id: {{ id }}</p>
      <router-view @nav="navigate" @create="createParty"></router-view>
    </div>
    <div class="home__footer"></div>
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
      //TODO REST call to create party
      console.log(participants);
      this.id = "qmldkjfqmldjfmq";
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
<style>
.home__body {
  margin: auto;
  top: 50%;
}
</style>

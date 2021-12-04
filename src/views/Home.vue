<template>
  <div class="home">
    <div class="home__header">
      <h1>Secret Santa</h1>
    </div>
    <div class="home__body">
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
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
.home {
  font-family: Satisfy, cursive;
  margin: auto;
  top: 50%;
}

.home__header {
  background-color: #e53e3e;
  color: #ffff;
  height: 50px;
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-end-start-radius: 10px;
  border-end-end-radius: 10px;
}

.home__header > h1 {
  font-weight: 100;
}
</style>

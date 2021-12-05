<template>
  <div class="santa">
    <div class="santa__text">
      {{ name }}, tu devra offrir un cadeau à:
      <transition name="fade">
        <span style="font-weight: 600">{{ to }}</span>
      </transition>
    </div>
    <h1 class="merry-xmas">Joyeux Noël ! 🎁</h1>
  </div>
</template>
<script>
export default {
  props: {},
  data: () => ({
    name: "",
    id: undefined,
    to: "",
  }),
  methods: {
    async fetchTo() {
      const { data } = await this.$axios.get(
        `/api/${this.id}/participant/${this.name}`
      );
      this.to = data.name;
    },
  },
  mounted: async function () {
    this.id = this.$route.params.id;
    this.name = this.$route.params.name;
    await this.fetchTo();
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.santa__text {
  font-size: 1.5rem;
  font-weight: 100;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
}
.merry-xmas {
  font-size: 3rem;
  font-weight: 600;
  width: 100%;
  text-align: center;
}
</style>

<template>
  <div class="santa">
    <div>
      {{ name }}, tu devra offrir un cadeau à:
      <span style="font-weight: 600">{{ to }}</span>
    </div>
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

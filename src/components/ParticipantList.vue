<template>
  <div class="participants-list">
    <h3>Qui êtes vous?</h3>
    <v-list>
      <v-list-item
        class="participants-list__item"
        v-for="(name, index) in participants"
        :key="index"
        @click="selectParticipant(name)"
        color="secondary"
        light
      >
        <v-list-item-content>{{ name }}</v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  name: "ParticipantList",
  props: {},
  data() {
    return {
      participants: [],
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    async fetchParticipants() {
      const { data } = await this.$axios.get(`/api/${this.id}`);
      console.log(data.participants);
      this.participants = data.participants;
    },
    selectParticipant(name) {
      this.$emit("nav", {
        name: "Santa",
        params: { id: this.id, name },
        img: "santa",
      });
    },
  },

  mounted: async function () {
    await this.fetchParticipants();
  },
};
</script>
<style scoped lang="scss">
.participants-list {
  margin-left: 2em;
  h3 {
    font-size: 24pt;
  }
}
</style>

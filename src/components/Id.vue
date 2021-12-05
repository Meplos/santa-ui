<template>
  <div class="id">
    <v-row>
      <v-col sm="12" md="6" lg="6">
        <div class="mb-4 mx-4">L'identifiant de votre tirage est:</div>
      </v-col>
      <v-col cols="12 " md="6" lg="6">
        <span class="mb-2 mx-2 id__code"
          >{{ id }}
          <v-icon v-if="!isCopy" @click="copyToClipboard"
            >mdi-clipboard-edit-outline</v-icon
          >
          <v-icon v-else>mdi-clipboard-check-outline</v-icon>
        </span>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Id",
  props: {},
  data: () => ({
    isCopy: false,
  }),
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.id);
      this.isCopy = true;
    },
  },
};
</script>
<style>
.id {
  margin: auto;
  font-size: 24pt;
}

.id__code {
  font-size: 12pt;
  padding: 10px;
  margin: 0 auto;
  background-color: #fc8181;
  color: #fff;
  font-weight: 100;
  border-radius: 15px;
}
</style>

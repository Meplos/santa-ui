<template>
  <div>
    <div>
      <div>
        L'identifiant de votre tirage est
        <span style="font-weight: bold"
          >{{ id }}
          <v-icon v-if="!isCopy" @click="copyToClipboard"
            >mdi-clipboard-edit-outline</v-icon
          >
          <v-icon v-else>mdi-clipboard-check-outline</v-icon>
        </span>
      </div>
    </div>
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

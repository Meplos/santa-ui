<template>
  <div>
    <div>
      <div>
        L'identifiant de votre tirage est
        <span style="font-weight: bold">{{ id }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Id",
  props: {},
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
};
</script>

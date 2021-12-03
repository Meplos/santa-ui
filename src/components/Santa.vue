<template>
    <div class="santa">
        <div>
            {{ name }}, tu devra offrir un cadeau à:
            <span style="font-weight: 600;">{{ to }}</span>
            {{ }}
        </div>
    </div>
</template>
<script>
export default {
    props: {},
    data: () => ({
        name: "",
        id: undefined,
        to: ""
    }),
    methods: {
        fetchTo() {
            //TODO REST request        
            this.to = "Cloé"
        },


    },
    mounted: function () {
        this.id = this.$route.params.id;
        this.name = this.$route.params.name;
        this.fetchTo();
    },
}
</script>
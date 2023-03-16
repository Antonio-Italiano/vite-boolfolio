<script>
const apiBaseUrl = 'http://127.0.0.1:8000/api/';
import axios from 'axios';
import ProjectCard from '../components/projects/ProjectCard.vue';
export default {
    name: 'ProjectDetailPage',
    components: { ProjectCard },
    data: () => ({
        project: null,
        isLoading: false,

    }),
    methods: {
        getProject() {
            this.isLoading = true;
            const endpoint = apiBaseUrl + 'projects/' + this.$route.params.slug;
            axios.get(endpoint).then(res => {
                this.project = res.data;
            }).catch(() => {
                this.$router.push({ name: 'not-fount' })
            }).then(() => {
                this.isLoading = false;
            });
        }
    },
    created() {
        this.getProject();
    }
};
</script>

<template>
    <app-loader v-if="isLoading"></app-loader>
    <project-card v-else :project="project" :isDetail="true"></project-card>
</template>

<style lang="">
    
</style>
<script>
import axios from 'axios';
import ProjectList from '../components/projects/ProjectList.vue';
const apiBaseUrl = 'http://127.0.0.1:8000/api/';

export default {
    name: 'HomePage',
    components: { ProjectList },
    data: () => ({
        projects: [],
        isLoading: false,
    }),
    methods: {
        fetchProjects() {
            this.isLoading = true;
            axios.get(apiBaseUrl + 'projects').then(res => {
                this.projects = res.data;
            }).catch((err) => {
                console.error(err);
            }).then(() => {
                this.isLoading = false;
            });
        }
    },
    created() {
        this.fetchProjects();
    },
}
</script>

<template lang="">
        <app-loader v-if="isLoading"></app-loader>
        <project-list v-else :projects="projects"></project-list>
</template>

<style></style>
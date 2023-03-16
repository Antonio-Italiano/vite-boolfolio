<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import ProjectList from './components/projects/ProjectList.vue';
const apiBaseUrl = 'http://127.0.0.1:8000/api/';
export default {
  name: 'App',
  components: { AppHeader, ProjectList },
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

};
</script>

<template>
  <app-header></app-header>
  <main>
    <app-loader v-if="isLoading"></app-loader>
    <project-list v-else :projects="projects"></project-list>
  </main>
</template>

<style></style>
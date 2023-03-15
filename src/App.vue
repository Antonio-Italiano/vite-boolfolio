<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import ProjectList from './components/projects/ProjectList.vue';
const apiBaseUrl = 'http://127.0.0.1:8000/api/';
export default {
  name: 'App',
  components: { AppHeader, ProjectList },
  data: () => ({
    projects: []
  }),
  methods: {
    fetchProjects() {
      axios.get(apiBaseUrl + 'projects').then(res => {
        this.projects = res.data;
      })
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
    <project-list :projects="projects"></project-list>
  </main>
</template>

<style></style>
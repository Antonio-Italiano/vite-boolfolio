<script>
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'ProjectList',
    components: { ProjectCard },
    props: { projects: Array },

};
</script>

<template>
    <section id="projects-list">
        <div v-if="projects.length">
            <project-card v-for="project in projects" :key="project.id" :project="project"></project-card>
        </div>
        <h4 v-else class="text-center">Non ci sono progetti</h4>
    </section>
</template>

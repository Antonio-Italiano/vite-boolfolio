<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object,
        isDetail: Boolean,
    },
    computed: {
        formatDate() {
            const date = new Date(this.project.updated_at);
            let day = date.getDay();
            let month = date.getMonth();
            const year = date.getFullYear();
            const hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            if (day < 10) day = "0" + day;
            if (month < 10) month = "0" + month;
            if (minutes < 10) minutes = "0" + minutes;
            if (seconds < 10) seconds = "0" + seconds;

            return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
        },
        abstract() {

            const abstract = this.project.description.slice(0, 200)
            return abstract + '...';
        }
    }
}
</script>

<template lang="">

    <div class="card m-5">
        <div class="card-header d-flex justify-content-between">
            <h2>{{project.title}}</h2>
        </div>

        <div class="card-body">
            <p>{{ isDetail ? project.description : abstract}}</p>
        </div>
        <div class="card-footer d-flex align-items-center justify-content-between">
            <div>

                <p>{{project.slug}}</p>
                <time>{{formatDate}}</time>
            </div>
            <router-link v-if="!isDetail" class="btn btn-primary" :to="{name: 'project-detail', params: {slug: project.slug}}">Vedi</router-link>
        </div>
    </div>
</template>

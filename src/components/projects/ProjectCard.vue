<script>
export default {
    name: 'ProjectCard',
    props: { project: Object },
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
        <div class="card-header">
            <h2>{{project.title}}</h2>
        </div>
        <div class="card-body">
            <p>{{abstract}}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
            <p>{{project.slug}}</p>
            <time>{{formatDate}}</time>
        </div>
    </div>
</template>

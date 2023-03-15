<script>
export default {
    name: 'ProjectCard',
    props: { project: Object },
    computed: {
        // formatDate() {
        //     const date = new Date(this.project.update_at);
        //     const day = date.getDay();
        //     const month = date.getMonth();
        //     const year = date.getYear();
        //     const hours = date.getHours();
        //     const minutes = date.getMinutes();
        //     const seconds = date.getSeconds();

        //     // if (day < 10) day = "0" + day;
        //     // if (month < 10) month = "0" + month;

        //     return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
        // }
    }
}
</script>

<template lang="">

    <div class="card m-5">
        <div class="card-header">
            <h2>{{project.title}}</h2>
        </div>
        <div class="card-body">
            <p>{{project.description}}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
            <p>{{project.slug}}</p>
            <p>{{project.updated_at}}</p>
        </div>
    </div>
</template>

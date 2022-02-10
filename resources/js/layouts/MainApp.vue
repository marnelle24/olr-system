<template>
    <div>
        <navigation></navigation>
        <router-view></router-view>
        <page-footer></page-footer>
    </div>
</template>
<script>
import Navigation from './Navigation.vue';
import PageFooter from './Footer.vue';

export default {
    components: {
        Navigation,
        PageFooter
    },
    name: 'main-app',
}
</script>
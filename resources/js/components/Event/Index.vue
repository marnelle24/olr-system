<template>

    <div class="masthead">
        <div class="container px-5">
            <template v-if="events.length">
                <div class="row">
                    <EventCard v-for="event in events" :key="event.id" :event='event'></EventCard>
                </div>
            </template>
            <div v-else class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import EventCard from './EventCard.vue';

export default {
    components: {
        EventCard
    },
    computed: {

      events() {
          return this.$store.state.app.events;
      }
        
    },
    mounted() {
        this.getEvents()
    },

    methods: {
        ...mapActions({
            getEvents: 'app/getEvents'
        })
    }
}
</script>

<template>
  <v-app>
    <v-content>
       
      <calendar/>
    </v-content>
  </v-app>
</template>

<script>

import Calendar from './components/Calendar.vue';

export default {
  name: 'App',

  components: {
    Calendar
  },

  data: () => ({
    //
  }),
};
</script>

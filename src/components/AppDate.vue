<template>
  <span
    :title="timestamp | humanFriendlyDate"
  >
    {{timestamp | diffFromHuman}}
  </span>
</template>

<script>
  import moment from 'moment'

  export default {
    props: {
      timestamp: {
        required: true,
        type: Number
      }
    },
    filters: {
      humanFriendlyDate (date) {
        return moment.unix(date).locale('fr').format('Do MMMM YYYY, H:mm:ss')
      },
      diffFromHuman (date) {
        return moment.unix(date).fromNow()
      }
    }
  }
</script>

<style scoped>

</style>

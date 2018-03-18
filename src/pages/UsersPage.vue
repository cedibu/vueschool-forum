<template>
  <div>
    Users:
    <table border="0">
      <tr>
        <th></th>
        <th colspan="2">/search</th>
        <th colspan="2">/detail</th>
      </tr>
      <tr>
        <td></td>
        <td>read</td>
        <td>write</td>
        <td>read</td>
        <td>write</td>
      </tr>
      <tr>
        <td>jenov2</td>
        <td><input type="checkbox" /></td>
        <td><input type="checkbox" /></td>
        <td><input type="checkbox" /></td>
        <td><input type="checkbox" /></td>
      </tr>
      <tr>
        <td>jenov3</td>
        <td><input type="checkbox" /></td>
        <td><input type="checkbox" /></td>
        <td><input type="checkbox" /></td>
        <td><input type="checkbox" /></td>
      </tr>
    </table>
    <div v-for="user in users">

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        users: [
          {
            nom: 'jenov2',
            droits: [
              {
                lecture: true,
                lectureEciture: true,
                ressource: {
                  type: 'URL',
                  nom: '/'
                }
              },
              {
                lecture: true,
                lectureEciture: true,
                ressource: {
                  type: 'URL',
                  nom: '/search-registre'
                }
              }
            ]
          },
          {
            nom: 'jenov3',
            droits: [
              {
                lecture: false,
                lectureEciture: false,
                ressource: {
                  type: 'URL',
                  nom: '/'
                }
              },
              {
                lecture: false,
                lectureEciture: false,
                ressource: {
                  type: 'URL',
                  nom: '/search-registre'
                }
              }
            ]
          }
        ]
      }
    },
    mounted () {
      console.log(this.users)
    }
  }
</script>

<style scoped>

</style>

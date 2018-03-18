<template>
  <div>
    Users:
    <table border="1">
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
        <td><input type="checkbox"/></td>
        <td><input type="checkbox"/></td>
        <td><input type="checkbox"/></td>
        <td><input type="checkbox"/></td>
      </tr>
      <tr>
        <td>jenov3</td>
        <td><input type="checkbox"/></td>
        <td><input type="checkbox"/></td>
        <td><input type="checkbox"/></td>
        <td><input type="checkbox"/></td>
      </tr>
    </table>
    <table border="1">
      <tr>
        <th></th>
        <th colspan="2" v-for="page in pages">{{page}}</th>
      </tr>
      <tr>
        <td v-for="index in (pages.length * 2)  + 1">
          <span v-if="index === 1"></span>
          <span v-else>
            <span v-if="index % 2 === 0">read</span>
            <span v-if="index % 2 > 0">write</span>
          </span>
        </td>
      </tr>
      <tr v-for="user in users">
        <td>{{user.nom}}</td>

        <td v-for="index in (pages.length * 2)">
          <input type="checkbox" :name="index % 2 === 0 ? 'write_' : 'read_'"/>
        </td>
      </tr>
    </table>
    {{pagesAndusers}}
  </div>
</template>

<script>
  export default {
    computed: {
      pagesAndusers () {
        let arr = this.pages.map(page => {
          return this.users.map(user => {
            return user.droits.filter(droit => {
              return droit.ressource.nom === page
            })
          })
        })
        console.log(arr)
        return arr
      }
    },
    data () {
      return {
        pages: ['/', '/search-registre', '/detail'],
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
    }
  }
</script>

<style scoped>

</style>

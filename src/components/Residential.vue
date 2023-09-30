<template>
    <div class="container">
        <h1 class="text-center">Residential List</h1>
        <table class="table table-striped">
            <thead>
                <th>Id</th>
                <th>street</th>
                <th>city</th>
                <th>surburb</th>
                <th>state</th>
                <th>postal code</th>
                <th>country</th>
            </thead>
            <tbody>
                <tr v-for="residential in residentials" v-bind:key="residential.id">
                    <td>{{ residential.id }}</td>
                    <td>{{ residential.street_Address }}</td>
                    <td>{{ residential.baseAddress.city }}</td>
                    <td>{{ residential.baseAddress.suburb }}</td>
                    <td>{{ residential.baseAddress.state }}</td>
                    <td>{{ residential.baseAddress.postalCode }}</td>
                    <td>{{ residential.baseAddress.country }}</td>
                </tr>
            </tbody>

        </table>
    </div>


</template>

<script>
import ResidentialService from '@/services/ResidentialService';

export default {
  name: 'Residentials',
  data() {
    return {
      residentials: [],
    };
  },
  methods: {
    getResidentials() {
      ResidentialService.getResidentials().then((response) => {
        this.residentials = response.data;
      });
    },

  },
  created()  {
    this.getResidentials()

  }

}


</script>
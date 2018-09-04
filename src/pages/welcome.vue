<template>
<f7-app>
  <f7-view v-show = "isLoggedIn" url="/"></f7-view>
  <f7-view v-show = "!isLoggedIn" url="/login/"></f7-view>
</f7-app>
</template>

 <script>
// Import Routes
import routes from '../routes.js'
import helper from '../services/helper'

 export default {
    data() {
    return {
      isLoggedIn : this.$root.$data.isLoggedIn,
    }
    },
    methods: {
    check() {
      return helper.check().then(response => {
            if(response){
              this.isLoggedIn = true;
            } else {
              this.isLoggedIn= false;
            }
        })
    }
  },

  mounted() {
  this.check();
  }
}
 </script>

<template>
<f7-page>
  <f7-page>
    <f7-navbar>
      <f7-nav-title>Welcome to Rubik</f7-nav-title>
    </f7-navbar>
  <f7-button fill raised login-screen-open="#forgot-screen">Forgot Password Screen</f7-button>
  </f7-page>
   <!-- Login Screen -->
    <f7-login-screen id="forgot-screen">
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>Forgot Password?</f7-login-screen-title>
          <f7-list form>
            <f7-list-item>
              <f7-label>Email</f7-label>
              <f7-input name="email" placeholder="Email" type="text" @input="passwordForm.email = $event.target.value" ></f7-input>
            </f7-list-item>
          </f7-list>
          <f7-list>
            <f7-list-button  @click="signIn" title="Reset Password"></f7-list-button>
             <f7-list-button @click="loginScreen" title="or Go back to login"></f7-list-button>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>
</f7-page>
</template>
<script>
import Framework7 from 'framework7/framework7.esm.bundle.js'
var app = new Framework7();
export default {
  data() {
            return {
                passwordForm: {
                    email: ''
                }
            }
        },
   methods: {
            signIn(e){
                app.dialog.preloader();
                setTimeout(function () {
                  app.dialog.close();
                }, 3000);
                axios.post('http://rubik.site/api/auth/password', this.passwordForm).then(response =>  {
                    app.dialog.alert(response.data.message);
                    app.loginScreen.close();
                    this.$f7router.navigate('/login/');
                }).catch(error => {
                    app.dialog.alert(error.response.data.message);
                });
            },
            loginScreen(e){
              app.dialog.preloader();
              setTimeout(function () {
                  app.dialog.close();
                }, 3000);
              this.$f7router.navigate('/login/');
               app.loginScreen.close();
            },
        }
}
</script>

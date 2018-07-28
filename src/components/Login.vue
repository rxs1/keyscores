<template>

<div class="page-container">
    <header>
        <h1>Change Request Application</h1>
    </header>
      <main>
        <img src="../assets/logo.png" alt="Sera">
    </main>
    <md-content>
        <div>
            <div class="md-layout md-alignment-top-center">
                <div class="md-layout md-alignment-top-center">
                <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100 ">
                    <md-field>
                        <md-icon>account_box</md-icon>
                        <label>User Active Directory</label>
                        <md-input id='username'></md-input>
                    </md-field>  
                </div>
                </div>
            </div>
            <div class="md-layout md-alignment-top-center">
                <div class="md-layout md-alignment-top-center">
                <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100 ">
                    <md-field>
                        <md-icon>https</md-icon>
                        
                        <label>Password</label>
                        <md-input id='password' type='password'></md-input>
                    </md-field>  
                </div>
                </div>
            </div>
        </div>
    <md-button class="md-raised md-primary" v-on:click="login()">Login</md-button>

    
    </md-content>
    <div id="loading" v-if="loading">

        <md-progress-spinner  :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
        
    </div>
    
 <md-dialog-alert
      :md-active.sync="login_success"
      md-title="Login Success!"
      md-content="Login Success" />
    <md-dialog-alert id="failed"
      :md-active.sync="login_failed"
      md-title="Login Failed!"
      md-content="Please Check Username And Password" />    
</div>

</template>

<script>
export default {
  name: 'login',
 data: () => ({
      login_success: false,
      login_failed: false,
      loading:false
      
    }),

   methods: {
            login() {
                
                var  username =  $('#username').val();
                var password =  $('#password').val();
                this.loading=true;
                if(username != "" && password != "") {
                    this.$http.post('api/Token/Post',{"username":username,"password":password}).then(function (response) {
                        if (response.status === 200) {
                        this.$session.start()
                        this.$session.set('token', response.body.Data)
                        console.log('login success')
                        console.log(this.$session.getAll())
                        
                        this.login_success=true
                        this.$router.push("/Home")

                       
                        }
                    }, function (err) {
                        this.loading=false;
                        this.login_failed=true
                        console.log('err', err)
                    })
                } else {
                    this.loading=false
                    this.login_failed=true
                    console.log("A username and password must be present")
                }
            }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-container{
   padding:50px;
}
#failed{
    color:red;
}
main img{
    height: 150px;
}

#loading{
    margin-top:5px;
}
</style>

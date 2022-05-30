<template>
  <v-app id="login">

    <!-- login container -->
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12" min-width="330px">
              <v-toolbar dark color="primary" class="mb-5">
                <v-toolbar-title>Login PainelGov</v-toolbar-title>
              </v-toolbar>
              <v-card-text class="px-5">
                <v-form>
                  <v-text-field
                    name="login"
                    label="Email"
                    type="text"
                    outlined
                  />
                  <v-text-field
                    name="password"
                    label="Senha"
                    type="password"
                    outlined
                  />
                  <v-switch label="Lembrar-me" class="mt-0 pt-0" />
                  <v-card-actions class="mx-n2">
                    <v-btn ref="send" to="/14219489" color="primary" rounded>Entrar</v-btn>
                    <v-spacer />
                    <v-btn
                      color="primary"
                      rounded outlined><!-- eslint-disable-line -->
                      Esqueci minha senha
                    </v-btn>
                  </v-card-actions>
                  <!-- LOGIN COM GOOGLE OU FACEBOOK
                    -------------------------------
                  <v-divider class="my-3"></v-divider>
                  <v-card-actions class="mx-n2">
                    <h3 class="font-regular">Ou logar com:</h3>
                    <v-spacer />
                    <v-btn @click="login({ email, pass, google: true })" color="red lighten-1" class="white--text px-4" rounded>Google</v-btn>
                    <v-btn @click="login({ email, pass, facebook: true })" color="blue darken-1" class="white--text px-4" rounded>Facebook</v-btn>
                  </v-card-actions> -->
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
    <!-- /login container -->

  </v-app>
</template>

<script>
import BaseView from '@/mixins/BaseView.js'
export default ({
  name: 'Login',
  layout: 'default',
  mixins: [BaseView]
})

</script>

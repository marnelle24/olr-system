import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import app from './systemStore'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins:[
    ],
    modules:{
        auth,
        app
    }
})
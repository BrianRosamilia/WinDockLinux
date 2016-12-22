
const Vue = require('vue');
const Vuex = require('vuex');

Vue.use(Vuex)

const state = {
    notes: [],
    activeNote: {},
    message : 'test',
    counter : 0
}

const mutations = {
    incCounter (state) {
        state.counter++;
    },
    decCounter (state) {
        state.counter--;
    }
}

let store = new Vuex.Store({
    state,
    mutations
})



new Vue({
    store, // inject store to all children
    el: '.container',
    computed : {
        message : () => store.state.message,
        counter : () => store.state.counter
    },
    methods : {
        inc : () => store.commit('incCounter'),
        dec : () => store.commit('decCounter')
    }
    //components: { App }
})
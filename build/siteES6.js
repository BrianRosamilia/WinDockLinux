hljs.initHighlightingOnLoad();

var Vue = require('vue');
var Vuex = require('vuex');

Vue.use(Vuex)

var state = {
    notes: [],
    activeNote: {},
    message : 'test',
    counter : 0
}

var mutations = {
    incCounter: function incCounter (state) {
        state.counter++;
    },
    decCounter: function decCounter (state) {
        state.counter--;
    }
}

var store = new Vuex.Store({
    state: state,
    mutations: mutations
})



new Vue({
    store: store, // inject store to all children
    el: '.container',
    computed : {
        message : function () { return store.state.message; },
        counter : function () { return store.state.counter; }
    },
    methods : {
        inc : function () { return store.commit('incCounter'); },
        dec : function () { return store.commit('decCounter'); }
    }
    //components: { App }
})

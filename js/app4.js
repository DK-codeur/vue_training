Vue.directive('salut',{
    //salut est le nom de notre directive; 
    bind: function (el, binding, vnode) {
        // console.log(el, binding)
        el.value = binding.value
    },
    //si on souhaite voir les modif en temp reel on peut juste passer une fonction a notre directive puis supp la method update

    update: function (el, binding, vnode) {
        console.log(update)
    }
})

//propriete bind: lorsque notre attribut sera ajouter est une fonct qui prend 3 arg: el: elemnt, binding: recup les different modifiers, vnode: gerer par vue;

let vm = new Vue({
    el: '#app',

    data: {
        message: 'hiee'
    },

    methods: {
        myClick: function () {
            console.log('clicking')
        },

        myKeyup: function() {
            console.log('Key Up')
        }
    }
})
let msg = Vue.component('message', {
    // props: ['type', 'message'],
    props: {
        type: { type: String, default: 'alert-success' }, //default pour la valeur par defaut
        message: [String, Number],
        header: String
    },
    template: `
        <div class="alert" :class="type"> 
            
            <button class="float-right" @click.prevent="close"> <i class="fa fa-times" ></i> </button>
            <div class="font-weight-bold"> {{header}} </div>

            {{message}}
        </div>
    `,

    methods: {
        close() {
            // this.$parent.data.alert = false //cette methode marche mais deconseillée
            this.$emit('close') //on emet un event close
        }
    }
});


//un autre component
let counter = {
    data: function () {
        return {
            count: 0
        }
    },
    
    props: {
        start: { type: Number, default: 0}
    },

    methods: {
        increment: function () {
            return this.count++;
        }
    },

    template: `

    <div> 
        </span> {{count}} </span> <br> 
        <button @click="increment"> Incrementer </button> 
    </div>
    
    `,

    mounted: function () { //lorsqu'on monte le composant
        this.count = this.start
    }
}

// composant form-user

let formuser = {

    props: {
        // user: Object
        value: Object //value car on a utilisé v-model dans notre composant
    },

    data () { //ES6
        return {
            user0: JSON.parse(JSON.stringify(this.value))
        }
    },

    template: `
    
    <form @submit.prevent="save">
        <div class="form-group">
        <label for="">Nom</label>
        <input type="text" class="form-control" name="" id="" placeholder="" v-model="user0.nom">
        </div>

        <div class="form-group">
        <label for="">Prenoms</label>
        <input type="text" class="form-control" name="" id="" placeholder="" v-model="user0.prenoms">
        </div>

        <button class="btn btn-primary" type="submit">Envoyer</button>

    </form>

    `,

    methods: {
        save() {
            this.$emit('input', this.user0)
        }
    }
}


//instance Vue
let vm = new Vue({
    el: '#app',

    components: { msg, counter, formuser },
    
    data: {
        message2: "Ohh! slow down there are kids",
        alert: false,
        user: {
            nom: 'Dk',
            prenoms: 'codeur'
        }
    },

    methods: { 
        showAlert () { //or showAlert: function() {}
            this.alert = true;
        },

        hideAlert() {
            this.alert = false
        }
    }
})
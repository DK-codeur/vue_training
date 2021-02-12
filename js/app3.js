let vm = new Vue({
    el: '#app',

    data: {
        success: false,
        // message: '',
        firstname : 'jean',
        lastname: 'marc',
        
        myWatchedInput: ''
    },

    computed: {  //au lieu de methods // computed à un getter et un setter
        // cls: function () {
        //     console.log("cls")
        //     return this.success  === true ? 'alert-primary' : 'alert-danger'
        // }

        fullname: {
            get: function () {
                return this.firstname + ' ' + this.lastname
            },

            set: function (value) {
                // console.log(value)

                let part = value.split(' ')
                this.firstname = part[0],
                this.lastname = part[1]
            }
        }
    },

    watch: {
        myWatchedInput: function (value) {
            console.log('i watch', value)
        }
    }
})
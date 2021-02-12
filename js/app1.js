new Vue({
    el: '#app',

    data: {
        message: 'hello world !',
        formText: '',
        link: 'http://dk-codeur.io',
        success: true,
        textError: 'text-danger',
        technologies: ["flutter", "react", "vuejs", "angular", "django", "laravel"]
    },

    // avec this. on a access à tout les element de data
    methods: {
        close: function () {
            this.success = false
        },

        linkStyle: function () {
            if (this.success) {
                return;
            } else {
                return 'text-danger';
            }
        }
    }
})
let vm = new Vue({
    el: '#app',
    
    data: {
        secondes: 0
    },

    mounted: function() { //pensé à supprimé apres mounted
        this.$interval = setInterval(() => {
            console.log('ok')
            this.secondes++
        }, 1000);
    },

    destroyed: function() {
        clearInterval(this.$interval)
    }
})
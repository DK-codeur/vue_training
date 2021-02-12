Vue.filter('capitalize', function (value) {
    return value.toUpperCase()
})

Vue.filter('reverse', function (value) {
    return value.split('').reverse().join('')
})

Vue.filter('capitalize2', function (value, pre, suf) {
    return pre + value.toUpperCase() + suf
})



let vm = new Vue({
    el: "#app",

    data: {
        message: 'Hello world',
        msg: 'laravel'
    }
})
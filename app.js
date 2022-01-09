//DOM: Document Object Model

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

//console.log('hey Vue')

//binding element attributions
//when hover over a certain word we get the tooltip showing the 
//the following test as below
var app2 = new Vue({
el: '#app-2',
data: {message: 'you loaded this page on ' 
+ new Date().toLocaleString()}
})


var app3 = new Vue({
el: '#app-3',
data: {
seen: true
}
})

//list of data being pushed to the li element
var app4 = new Vue({
el: '#app-4',
data: {
todos: [
    {text: 'Learn Javascript' },
    {text: 'Learn Vue' },
    {text: 'Build something awesome'}
    ]
        }
})


var app5 = new Vue({
el: '#app-5',
data:{
    message: 'Hello Vue.js!'
    },
    methods: {
    reverseMessage: function (){
    this.message = this.message.split('').reverse().join('')
    }
    }
})
var apiURL = 'http://139.59.248.88/'

var chart = new Vue({

  el: '#chart',
  
  data: { 
    chdata: null,
    order: -1
  },
  
  created: function () {
    this.fetchData()
  },
  
  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', apiURL)
      xhr.onload = function () {
        self.chdata = JSON.parse(xhr.responseText)
      }
      xhr.send()
    }
  }
  
})
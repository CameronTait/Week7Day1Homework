import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {name: "Tidy my room"},
        {name: "Wash the car"},
        {name: "Go to gym"}
      ],
      newItem: ""
    },
    methods: {
      saveNewItem: function(){
        this.items.push({
          name: this.newItem,
          isPurchased: false
        });
        this.newItem = "";
      },
    }
  });
});
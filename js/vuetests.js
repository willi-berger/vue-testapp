var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      seen: true
    }
  });


  var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  });

  var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  });

  // ---

  // define a new vue component

  Vue.component(
    'todo-item', {
      props:['todo'],
      template:'<li>{{todo}}</li>'
    }
  );

  var app5 = new Vue({
    el:'#app-5',
    data: {
      groceryList: [
        {id: 0, text: 'Gemüse'},
        {id: 2, text: 'Milch'},
        {id: 3, text: 'Brot'},
      ]
    }






  });

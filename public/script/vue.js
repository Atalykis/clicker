const render = new Vue({
  el: "#clicker",
  data() {
    return {
      game: new Game(),
    };
  },

  methods: {


  },
});

render.game.initGame();
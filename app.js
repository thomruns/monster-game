new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true
      this.playerHealth = 100
      this.monsterHealth = 100
    },
    attack: function() {
      console.log('Attack!')
      var max = 10
      var min = 3
      var damage = Math.max(Math.floor(Math.random() * max) + 1, min) // random damage
      this.monsterHealth -= damage // damage to monster

      if (this.monsterHealth <= 0) {
        alert('You won!')
        this.gameIsRunning = false
        return
      }

      console.log(`Monster is damaged by ${damage}`)
      max = 12
      min = 5
      damage = Math.max(Math.floor(Math.random() * max) + 1, min) // monster damage
      this.playerHealth -= damage // damage to player

      if (this.playerHealth <= 0) {
        alert('You lost!')
        this.gameIsRunning = false
      }
      console.log(`Player is damaged by ${damage}`)
    },
    specialAttack: function() {
      console.log('SPECIAL ATTACK!')
    },
    heal: function() {
      console.log('Heal :)')
    },
    giveUp: function() {
      this.gameIsRunning = false
    }
  }
})
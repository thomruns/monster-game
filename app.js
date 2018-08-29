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
    }, // end startGame

    attack: function() {
      this.monsterHealth -= this.calculateDamage(3, 10) // damage to monster
      if (this.checkWin()) {
        return
      }
      this.monsterAttacks()
    }, // end attack

    specialAttack: function() {
      this.monsterHealth -= this.calculateDamage(10, 20) // damage to monster
      if (this.checkWin()) {
        return
      }
      this.monsterAttacks()
    }, // end specialAttack

    heal: function() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10
      } else {
        this.playerHealth = 100
      }
      this.monsterAttacks()
    }, // end heal

    giveUp: function() {
      this.gameIsRunning = false
    }, // end giveUp

    monsterAttacks: function() {
      this.playerHealth -= this.calculateDamage(5, 12) // damage to player
      this.checkWin()
    }, // end monsterAttacks

    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    }, // end calculateDamage

    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! New Game?')) {
          this.startGame()
        } else {
          this.gameIsRunning = false
        }
        return true
      } else if (this.playerHealth <= 0) {
        if (confirm('You lost! New Game?')) {
          this.startGame()
        } else {
          this.gameIsRunning = false
        }
        return true
      }
      return false
    } // end checkWin

  } // end methods)
}) // end Vue instance
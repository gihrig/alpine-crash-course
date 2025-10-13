document.addEventListener('alpine:init', () => {
  Alpine.data('counter', () => ({
    count: 0,
    name: 'Mario',

    increment() {
      this.count = this.count + 1
    },

    logCount() {
      console.log('The count is currently', this.count)
    }
  }))
})

module.exports = {
  url: 'https://www.google.com/advanced_search',
  elements: {
    mainQueryInput: 'input[name="as_q"]',

    languageDropdown: '#lr_button',

    lastUpdateDropdown: '#as_qdr_button',

    submitButton: '.jfk-button[type="submit"]'
  },
  commands: [{
    setQuery (value) {
      // const page = this;

      // page
      return this
        .setValue('@mainQueryInput', value)
    },
    selectFilter (selector, value) {
      // const page = this;

      // page
      return this
        .click(selector)
        .click(`.goog-menuitem[value="${value}"]`)
    },
    search () {
      return this
        .click('@submitButton')
    }
  }]

}

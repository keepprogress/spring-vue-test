// follow instruction to do first test in https://www.youtube.com/watch?v=Q8jIlG6WXvI

module.exports = {
  'My first test case' (browser) {
    browser
      .url('https://news.ycombinator.com/')
      .waitForElementVisible('.hnname')
      .assert.containsText('.hnname', 'Hacker News')
  }
}

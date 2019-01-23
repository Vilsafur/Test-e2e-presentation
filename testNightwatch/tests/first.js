module.exports = {
    'Demo test' : function (browser) {
      var firstPage = browser.page.firstPage()

      firstPage.navigate()
        .assert.visible('@button')
        .assert.hidden('@progress')
        .assert.hidden('@answer')
        
        browser.screenshot()
        
      firstPage.click('@button')

      browser.pause(1000)
      firstPage.assert.visible('@button')
        .assert.visible('@progress')
        .assert.hidden('@answer')

      browser.pause(10000)

      firstPage.assert.visible('@button')
        .assert.hidden('@progress')
        .assert.visible('@answer')
    }
  }
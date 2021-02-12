module.exports = {
    '@tags': ['google'],
    'Google advanced search: Elon Musk'(browser) {
        const mainQuery = "Elon Musk"

        const page = browser.page.googleAdvancedSearch();

        
        debugger;

        page
        .navigate()
        .setQuery(mainQuery)
        .selectFilter('@languageDropdown', 'lang_it')
        .selectFilter('@lastUpdateDropdown', 'm')
        .search();

        browser
            .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
            .assert.urlContains('lr=lang_it', 'Params: Language is Italian')
            .assert.urlContains('as_qdr=m', 'Params: Time period is month')
           
        const resultsPageQuerySelector = `.a4bIc input[name="q"][value="${mainQuery}"]`

        browser.assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query input');

        browser.saveScreenshot('test_output/google.png')

    }
}
module.exports = {
    '@tags': ['google'],
    'Google advanced search: Elon Musk'(browser) {
        const mainQuery = 'Elon Musk'

        const mainQueryInputSelector = 'input[name="as_q"]';

        const languageDropdownOpenerSelector = '#lr_button';

        const languageDropdownValueSelector = '.goog-menuitem[value="lang_it"]';

        const lastUpdateDropdownOpenerSelector = '#as_qdr_button'

        const lastUpdateDropdownValueSelector = '.goog-menuitem[value="m"]'

        const submitButtonSelector = '.jfk-button[type="submit"]'


        browser
            .url('https://www.google.com/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)
            .click(languageDropdownOpenerSelector)
            .click(languageDropdownValueSelector)
            .click(lastUpdateDropdownOpenerSelector)
            .click(lastUpdateDropdownValueSelector)
            .click(submitButtonSelector)
            .saveScreenshot('test_output/google.png')

    }
}
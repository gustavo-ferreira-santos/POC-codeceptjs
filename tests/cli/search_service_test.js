const search_service_page = require("../../pages/search_service_page");

Feature('Search Services');

Scenario('Search Service With Success @search_success', ({I}) => {

    I.runOnAndroid(() => {
      console.log('Executando teste no Android')
      search_service_page.enterCli('11948101272')
      search_service_page.searchService('pintor')

      search_service_page.checkSearchSuccess()
    })

    I.runOnIOS(() => {
      console.log('Executando teste no iOS')
      search_service_page.enterCli('11948101272')
      search_service_page.searchService('pintor')

      search_service_page.checkSearchSuccess()
    })    
});

Scenario('Search Service With Error @search_fail', ({I}) => {

    I.runOnAndroid(() => {
      console.log('Executando teste no Android')
      search_service_page.enterCli('11948101272')
      search_service_page.searchService('xpto')

      search_service_page.checkSearchError()
    })

    I.runOnIOS(() => {
      console.log('Executando teste no Android')
      search_service_page.enterCli('11948101272')
      search_service_page.searchService('xpto')
      search_service_page.checkSearchError()
    })    
});

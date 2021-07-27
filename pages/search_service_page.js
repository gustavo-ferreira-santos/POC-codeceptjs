const { I } = inject();

module.exports = {

  fields:{
    btn_cli: '#br.com.getninjas.pro.homolog:id/select_client',
    inpt_tel: '#br.com.getninjas.pro.homolog:id/field_phone',
    btn_continue: '#br.com.getninjas.pro.homolog:id/next',
    inpt_search_service: '#br.com.getninjas.pro.homolog:id/search',
    search_result: '#android:id/text1',
    msg_failed_search: '#br.com.getninjas.pro.homolog:id/message'
  },

  enterCli(tel) {
    I.waitForElement(this.fields.btn_cli, 10)
    I.tap(this.fields.btn_cli)
    I.fillField(this.fields.inpt_tel, tel)
    I.tap(this.fields.btn_continue)
  },

  searchService(service) {
    I.waitForElement(this.fields.inpt_search_service, 5)
    I.tap(this.fields.inpt_search_service)
    I.fillField(this.fields.inpt_search_service, service)
  },

  checkSearchSuccess() {
    I.waitForElement(this.fields.search_result, 5)
    I.seeElement(this.fields.search_result)
  },

  checkSearchError() {
    I.waitForElement(this.fields.msg_failed_search, 5)
    I.seeElement(this.fields.msg_failed_search)
  },
}

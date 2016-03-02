/**
 * Created by sfernandez on 22/02/2016.
 */

var login_page = function() {

    this.expectTitle = function(value) {
        expect(browser.getTitle()).toEqual(value);
    }

    this.enterUserName = function(value) {
        element(by.model('user.name')).sendKeys(value);
    };

    this.enterPassword = function(value) {
        element(by.model('user.password')).sendKeys(value);
    };

    this.clickLogin = function() {
        element(by.css('.btn-send')).click(); //No tiene identificador
    };

};
module.exports = new login_page();
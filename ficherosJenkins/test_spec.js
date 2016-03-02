/**
 * Created by sfernandez on 19/02/2016.
 */

describe('Login y búsqueda', function() {

    beforeAll(function() {
        browser.get('http://apolo:8089/demo/');
    });

    it('Página de login', function() {
        login();
    });

    it('Búsqueda', function() {
        element(by.xpath("//section[@id='station']//p[.='Consultas']")).click();
        element.all(by.css('.fa-search')).get(1).click(); //No tiene identificador
        element(by.model('filter.navPatient')).sendKeys('jose');
        element(by.linkText("Jose Manuel Ruiz Soto")).click();
        nombrePaciente = element(by.xpath("//div[@id='patientBar']//span[.='Jose Manuel Ruiz Soto']")).getText();
        expect(nombrePaciente).toBe('Jose Manuel Ruiz Soto');
    });

    /*it('Probar ng-repeat', function() {
        /*var citas = element.all(by.repeater('cita in citasMorning'));
        for(i=0; i<4; i++){
            console.log(citas[i]);
            console.log('1');
        }*/
/*
        var EC = protractor.ExpectedConditions;
        var repeaterElement = element(by.repeater('cita in citasMorning'));

        //Wait up to 10 seconds for elements to be visible
        browser.wait(EC.visibilityOf(repeaterElement), 10000).then(function(){
            //Perform any operation that you want after waiting for the element to appear
            var citas = element.all(by.repeater('cita in citasMorning').getText());
            for(i=0; i<citas.length; i++){
                console.log(citas[i]);
                console.log('1');
            }
        });

    });*/

});

function login() {
    var login_page = require('./login_page');

    login_page.expectTitle('Alfatec - HISHCEWeb');
    login_page.enterUserName('demo');
    login_page.enterPassword('demo');
    login_page.clickLogin();
}
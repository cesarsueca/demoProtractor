

describe('Probar SINA', function() {

    beforeAll(function() {
        browser.get('http://artemis:9060/sina-his-mpi-front/');
    });

   it('Busqueda', function() {
       element(by.model('searchStr')).sendKeys('ana');
       //console.log(element(by.repeater('result in results').row(1)));
       /*var EC = protractor.ExpectedConditions;
       var guardarButton = element(by.css("button.material.ng-scope"));
       browser.wait(EC.elementToBeClickable(guardarButton), 10000);
       guardarButton.click();

       element(by.css("i.fa.fa-eye")).click();
       //console.log(element(by.xpath("//div[@class='tabs-body']//span[.='ser']")).getText()); //Buscando forma de que funcione
*/
   });

});


import 'cypress-file-upload'


describe('fileupload in orangeHrm', () => {
    it('fileupload single page in cypress', () => {
        cy.visit('http://the-internet.herokuapp.com/upload');
        cy.get('[id="file-upload"]').attachFile('24sachin1.jpg')

        cy.get('[id="file-submit"]').click();
        cy.wait(5000)
        cy.get('div[class="example"] h3').should('have.text', 'File Uploaded!')

    })

    it('fileupload single page in cypress with rename ', () => {
        cy.visit('http://the-internet.herokuapp.com/upload');
        cy.get('[id="file-upload"]').attachFile({ filePath: '24sachin1.jpg', fileName: 'sachin.pdf' })
        cy.get('[id="file-submit"]').click();
        cy.wait(5000)
        cy.get('div[class="example"] h3').should('have.text', 'File Uploaded!')

    })
    it('fileupload with drog-n-drop', () => {
        cy.visit('http://the-internet.herokuapp.com/upload');
        cy.get('[id="drag-drop-upload"]').attachFile('24sachin1.jpg', { subjectType: 'drag-n-drop' });
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('24sachin1');
    })

    it.skip('fileupload with drog-n-drop', () => {
        cy.visit('http://devidwalsh.name/demo/multiple-file-upload.php');
        //cy.get('[id="drag-drop-upload"]').attachFile('24sachin1.jpg', { subjectType: 'drag-n-drop' });
        //cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('24sachin1');
    })
})
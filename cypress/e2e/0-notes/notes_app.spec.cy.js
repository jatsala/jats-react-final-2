/// <reference types="cypress" />

describe('Testeamos nuestra aplacación de notas', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Se renderiza correctamente', () => {
        cy.contains('Task List V2- Hosted on: Firebase')
    });

    it('Podemos añadir una nueva tarea', () => {
        const textNewTask = 'Testing cypressV2'
        cy.get('input[placeholder="New Task"]').type(textNewTask)
        cy.get('button.btn-add-task').click()
        // cy.wait(3000)
        cy.get('li').last().contains(textNewTask)
    });

});

/// <reference types="cypress" />

describe('tests van het invullen van de boeking form', () => {
    const email = 'test@mail.com'
    const geenEmail = 'testmail.com'
    const aantal = 5
    const grootAantal = 11 // 10 is max

    beforeEach(() => {
        cy.visit('https://localhost:44466/')
    })

    it('vult de boeking form correct in', () => {
        cy.visit('https://localhost:44466/boek')
        cy.get('.dagenContainer').children().first().first().click() // container bevat item, item bevat de dag, dag bevat de input en span
        cy.get('input[name=email').type(email)
        cy.get('input[name=aantal').type(aantal)
        cy.get('button[type=submit').click()
    })
    
})
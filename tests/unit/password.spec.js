const {verifyPassword}= require('../../app.js')

describe('La jauge de chasteté du mot de passe', () => {
  it('doit laisser passer le gueux si son code est assez long (4 caractères ou plus)', () => {
    expect(verifyPassword('1234')).toBe(true)
  })
  it('doit fouetter le malotru et l\'envoyer au pilori si son code est aussi court qu une queue de rat', () => {
    expect(verifyPassword('123')).toBe(false)
  })
})  
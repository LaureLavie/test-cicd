const {verifyEmail}= require('../../app.js') 

describe('Procès en sorcellerie du messager', () => {
  it('doit proclamer "vrai" si le signe du diable (@) est présent', () => {
    expect(verifyEmail('tobe@ornot.tobe')).toBe(true)
  })
  it('doit jeter le gueux aux oubliettes s il manque le signe', () => {
    expect(verifyEmail('tobeornot.tobe')).toBe(false)
  })
})
const request=require('supertest');
const {app}=require('../../app');

describe('Le grand tribunal de la porte dérobée', ()=>{
  it('devrait laisser entrer le manant si son identité et son secret sont en règle',async()=>{
    const res= await request (app)
    .post('/login')
    .send({email:'tobe@ornot.tobe', password:'1234'})
    .expect(200)
    expect(res.body.message).toBe('Entre donc, ô noble inconnu, la chopine est servie !')
  })
  it('devrait refouler le gueux si son email pue la contrefaçon',async()=>{
    const res= await request (app)
    .post('/login')
    .send({email:'tobeornot.tobe', password:'1234'})
    .expect(400)
    expect(res.body.message).toBe('Ton adresse de messager est aussi vide qu’une outre percée !')
  })
  it('devrait renvoyer le misérable au pilori si son code est trop maigre',async()=>{
    const res= await request (app)
    .post('/login')
    .send({email:'tobe@ornot.tobe', password:'123'})
    .expect(400)
    expect(res.body.message).toBe('Ce mot de passe n’est qu’un souffle de moribond, circule !')
      })
})
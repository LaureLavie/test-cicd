const express= require('express')
const app=express()
app.use(express.json())
app.use(express.static('public'))

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Si l'email est mauvais
  if (!verifyEmail(email)) {
    return res.status(400).json({ message: 'Ton adresse de messager est aussi vide qu’une outre percée !' });
  }

  // Si le mot de passe est trop court
  if (!verifyPassword(password)) {
    return res.status(400).json({ message: 'Ce mot de passe n’est qu’un souffle de moribond, circule !' });
  }

  // Si tout est en règle
  res.status(200).json({ message: 'Entre donc, ô noble inconnu, la chopine est servie !' });
});


function verifyEmail(email){
  return email.includes('@')
}

function verifyPassword(password)  {
  return password.length >= 4
}
module.exports={verifyPassword, verifyEmail, app}

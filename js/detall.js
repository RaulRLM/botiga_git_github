function getParametre(nom) {
  const params = new URLSearchParams(window.location.search)
  return params.get(nom)
}

const id = parseInt(getParametre('id'), 10)
const cont = document.getElementById('detall-producte')

const producte = productes.find((p) => p.id === id)

if (!producte) {
  const p = document.createElement('p')
  p.textContent = 'Producte no trobat.'
  cont.appendChild(p)
} else {
  const h1 = document.createElement('h1')
  h1.textContent = producte.nom
  cont.appendChild(h1)

  const descElem = document.createElement('p')
  descElem.textContent = producte.descripcio
  cont.appendChild(descElem)

  const preuElem = document.createElement('p')
  const strong = document.createElement('strong')
  strong.textContent = `${producte.preu.toFixed(2)} €`
  preuElem.appendChild(strong)
  cont.appendChild(preuElem)
}

const hermanos = [
  {
    id: 1,
    name: 'Carlos Miguel',
    txt: 'Llegas a tus setenta con un espíritu y salud de veinte, con tu talante emprendedor intacto, con el ánimo que extrovierte siempre  gratitud y alegría por la vida, en todo momento disponible para tus dos hijos, sus parejas y sus niños, y con un gran sentido de familia que te hizo estar pendiente del bienestar de la mamá hasta sus últimos días y ahora te lleva a prolongar el vínculo de unión que hemos logrado preservar entre los cuatro hermanos. Tu amor por el deporte te augura por lo menos una treintena de años saludables más y es ejemplo y estímulo para todos nosotros, los que ya estamos en las ligas mayores y los que, como tus nietecitas y nietecito, apenas empiezan a transitar sus caminos. Ad multos annos vivas, hermanita!',
    title: 'A LA HERMANITA EN SUS 70 AÑOS',
  },
  {
    id: 2,
    name: 'xcxcxcx',
    txt: 'fsgdgdh',
    title: 'sghdhdb',
  },
]

const min = 0
const max = hermanos.length - 1

function randomIntText() {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const i = randomIntText()

const textHermano = hermanos[i].txt
const nameHermano = hermanos[i].name

module.exports.textHermano = textHermano
module.exports.nameHermano = nameHermano

module.exports.hermanos = hermanos

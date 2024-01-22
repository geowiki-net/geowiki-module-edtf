const Twig = require('twig')
const edtf = require('edtf')

Twig.extendFilter('edtf_min', value => {
  try {
    return edtf(value).min
  } catch (e) {
    return null
  }
})

Twig.extendFilter('edtf_max', value => {
  try {
    return edtf(value).max
  } catch (e) {
    return null
  }
})

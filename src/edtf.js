const Twig = require('twig')
const edtf = require('edtf')

Twig.extendFilter('edtf_min', value => {
  return edtf(value).min
})

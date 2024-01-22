const Twig = require('twig')

Twig.extendFilter('edtf_min', value => {
  return 'EDTF'
})

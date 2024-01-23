const Twig = require('twig')
import edtf from 'edtf'

Twig.extendFilter('edtf_min', value => {
  try {
    return Math.ceil(edtf(value).min / 1000)
  } catch (e) {
    return null
  }
})

Twig.extendFilter('edtf_max', value => {
  try {
    return Math.floor(edtf(value).max / 1000)
  } catch (e) {
    return null
  }
})

const Twig = require('twig')
import edtf from 'edtf'

Twig.extendFilter('edtf_min', value => {
  try {
    return timezoneShift(Math.ceil(edtf(value).min / 1000))
  } catch (e) {
    return null
  }
})

Twig.extendFilter('edtf_max', value => {
  try {
    return timezoneShift(Math.floor(edtf(value).max / 1000))
  } catch (e) {
    return null
  }
})

function timezoneShift (value) {
  const offset = new Date(value * 1000).getTimezoneOffset()
  return value + offset * 60
}

# geowiki-module-edtf
Support for EDTF (Extended date/time format) filters

# API
Exposes the following twig filters:

* edtf_min: returns the earliest UNIX timestamp (returns int or null if the value was not valid).
* edtf_max: returns the latest UNIX timestamp (returns int or null if the value was not valid).

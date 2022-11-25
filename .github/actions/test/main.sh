#!/usr/bin/env bash
# This works.
echo "camel_cased = ${INPUT_CAMEL_CASED}"
# This does not work.
echo "kebab-cased = ${INPUT_KEBAB-CASED}"

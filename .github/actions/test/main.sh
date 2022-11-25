#!/usr/bin/env bash
# This works.
echo "bash: camel_cased = ${INPUT_CAMEL_CASED}"
# This does not work.
echo "bash: kebab-cased = ${INPUT_KEBAB-CASED}"

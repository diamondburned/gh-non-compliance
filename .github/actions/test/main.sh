#!/usr/bin/env bash
# This works.
echo "${INPUT_CAMEL_CASED}"
# This does not work.
echo "${INPUT_KEBAB-CASED}"

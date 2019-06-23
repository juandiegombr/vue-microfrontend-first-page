#!/bin/bash
#
# run.sh
#

yarn build
cd dist
hs --cors -p 8081
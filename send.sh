#!/usr/bin/env bash
rm -fR build
npm run build
aws s3 rm s3://aboutbrazilmr.com/* --recursive
aws s3 cp build s3://aboutbrazilmr.com/ --recursive
aws s3 cp assets s3://aboutbrazilmr.com/assets --recursive

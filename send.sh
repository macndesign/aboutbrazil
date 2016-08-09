#!/usr/bin/env bash
rm -fR build
npm run build
aws s3 rm s3://aboutbrazil/* --recursive
aws s3 cp build s3://aboutbrazil/ --recursive
aws s3 cp assets s3://aboutbrazil/assets --recursive
aws s3 cp data s3://aboutbrazil/data --recursive

#!/bin/bash

# Make a request to the HLS URL
response=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/hls/abdi.m3u8)

# Check the response code
if [ "$response" == "200" ]; then
  echo "Response is 200 (OK)"
elif [ "$response" == "304" ]; then
  echo "Response is 304 (Not Modified)"
else
  echo "Response is $response (Unknown)"
fi

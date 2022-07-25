REM npm install -g http-server
set OPT_REVERSE_PROXY=--proxy http://localhost:8282
set OPT_NO_CACHE=-c-1
set OPT_PORT=--port 8181
set OPTIONS=%OPT_PORT% %OPT_NO_CACHE% %OPT_REVERSE_PROXY%
http-server dist\my-app\ %OPTIONS%
REM npm install -g http-server

REM set OPT_REVERSE_PROXY=--proxy http://localhost:8233
set OPT_REVERSE_PROXY=--proxy https://www.d-defrance.fr
set OPT_NO_CACHE=-c-1
set OPT_PORT=--port 8181
set OPTIONS=%OPT_PORT% %OPT_NO_CACHE% %OPT_REVERSE_PROXY%
http-server dist\tp-app\ %OPTIONS%
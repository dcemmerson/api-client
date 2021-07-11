# Request Server
Node server with Express used to make http requests from frontend.


## To Run Server Locally
1. Clone api-client repo and descend into `/requestserver`
2. Generate certs
```
openssl req -nodes -new -x509 -keyout server.key -out server.cert
```
3. Run `npm start`
4. Make GET request to https://localhost:3001/healthcheck to verify server is running

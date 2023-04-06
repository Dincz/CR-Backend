started on 08-03-2023
0:assigned naems to the folder n files
1:download npm
2:setup gitignor
3:installed dotenv and assigned a port:5001 : npm install dotenv
4.importing it to use in the server.js
5.installed postman || tried response from the api || wrote json {name:email:phone}
6created mutiple routes { get|put()|post|delete()|get(id)}
added {
controller || contactController : which handles get|put()|post|delete()|get,
middleware || errorhandler : handles erros
constant : contains ports of errors 400,2,3,4,500 .
}
updateed to git n commit "added controller , middleware , constant "

..on 13-03-2023
npm i express-async-handler
download async handler
npm i mongoose
created id and started with the mongoDB and made config folder with dbConnection which handles the connection
folder:models
download npm
npm i express-async-handler
download async handler
npm i mongoose
npx install-peerdeps --dev eslint-config-airbnb
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node
improvements
:Added res.status(statusCode).json in errorHandler.js
ask about \_ & error handling should be done based on the error message instead of response code ..to avoid sending response again after sending the response in controller & save format again error
:


### API Movie Rest API ###

This Rest API requires [Node.js](https://nodejs.org/) v14+ to run. and using Mysql as database
First fill the .env file
```sh
cp .env.example .env
```

Fill the .env
```sh
DB_URI=mysql://root@127.0.0.1/movie

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=acer
DB_NAME=movie
DB_PORT=3306

PORT=4002
```
Install the dependencies and devDependencies and start the server.

```sh
npm install
npm run migrate
npm run seed
```

For running this API you can use PM2 with this command

```sh
pm2 start ecosystem.config.js
```

or use nodemon or start dev

```sh
npm run dev 
```

```sh
npm run start 
```

For the documentation API Endpoint you can go to this link [Movie Rest API](https://www.postman.com/altimetry-architect-40645997/workspace/campaign-com-assigment/collection/19521713-dafa9c24-6faa-41cb-8937-0d62129efc62?ctx=documentation)


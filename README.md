### Clean Installation

* `npm install` (from the project base folder) to install server dependencies
* `npm install` (from the client folder) to install client dependencies

### Running Locally

* For the UI, the backend runs on :3001, the client runs on :3000 and uses a proxy to direct network calls to the backend
* (From the client folder): `npm start`
* (From the project base folder): `PORT=3001 node bin/www`

Then, visit the address in your browser:

`http://localhost:3000`



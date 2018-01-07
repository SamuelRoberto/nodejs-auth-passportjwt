# NodeJS - PassportJWT authentication Boilerplate

NodeJS Authentication Boilerplate with Passport JWT Strategy

# Routes

### Authentication
Authentication routes. You can use this routes to create Account or Login into the App.
  | PATH | Description |
| ------ | ------ |
| localhost:3000/api/v1/register | Create account into MongoDB |
| localhost:3000/api/v1/login | Generate TOKEN for Authentication |

Register JSON Stringify Example:
```sh
{ "name": "Admin", "lastname": "Admin", "email": "admin@admin.it", "password": "password" }
```
In order to user Token you should:
  - Make request to 'login' with correct account
  - Save the Token that is sended by Server
  - Append Token in Header of each request that need Authentication check in the "Authorization" attribute using 'Bearer' standard.
 
### Free Route
Free routes. All users can see this routes without any token.
  | PATH | Description |
| ------ | ------ |
| localhost:3000/free | Free route for all user |

### Secret Route
Secret routes. You can see the content of this routes only if you have a valid token.
  | PATH | Description |
| ------ | ------ |
| localhost:3000/secret | Secret route for onyl authenticated user |
License
----

MIT
### Bajar el mock server siguiendo estos pasos

[Link MockServer docker](https://www.mock-server.com/mock_server/running_mock_server.html#docker_container)


levantar el server docker luego correr este proyecto:

```
docker run -d --rm -p 1080:1080  mockserver/mockserver
```

Pararse en el directorio dle proyecto

```
npm install

node index.js
```

el dashboard del mockserver esta en:

http://localhost:1080/mockserver/dashboard


Listo :)
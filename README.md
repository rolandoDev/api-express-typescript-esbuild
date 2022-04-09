Starter Express + Typescript + ESBuild
===
Estructura de proyecto para API REST en express usando Typescript y el empaquetador ESBuild
## Instalación
- Clonar el Repositorio:  `git clone`
- Instalar Dependencias:  `npm install`
- Configurar un archivo .env: 
 ```
PORT=3000
NODE_ENV=development
API_KEY=colocar_aqui_un_api_key_para_permitir_la_peticion
 ```
- Ejecutar Sevidor en Modo Desarollo: `npm run dev`.
- Abrir la ruta: [http://localhost:3000].
- Probar la seguridad del endpoint `/v1/hello` en la ruta [http://localhost:3000/v1/hello] saldrá un mensaje con acceso denegado.
- Para autorizar la petición a `/v1/hello` debe especificar en el Header de la petición el parametro `x-api-key: la_misma_api_key_que_se_definió_en_.env`.


## Compilar a producción 
- Ejecutar el comando `npm run build`
- Esto crea un archivo en el directorio `dist/index.js` con todo el código del proyecto, puede crear un .env para produccion en ese nuevo directorio

```

|—— dist
|    |—— .env
|    |—— index.js
|—— .env
|—— src
|—— .gitignore
|—— .package.json
|—— tsconfig.json

```

Si desea desplegar a un servidor sólo es necesario el archivo `index.js`
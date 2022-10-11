# My Projects Portfolio (personal-site)

A website to show my projects portfolio

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

## Docker configuration

### Criando Imagem Docker

`docker build . -t ebdonato/personal-site:tag`

### Criando um container com a imagem

`docker run -d -p 8080:80 ebdonato/personal-site:tag`

### Criando outra tags

`docker tag ebdonato/personal-site:tag ebdonato/personal-site:new-tag`

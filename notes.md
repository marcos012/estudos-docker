Composer: gerenciador de pacotes do docker
ENTRYPOINT: comando principal de uma imagem | nunca sera substituido
CMD: comandos customizados que serao anexados no entrypoint | pode ser substituido

para substituir um CMD basta adicionar o comando que deseja executar junto ao comando de execucao da imagem


buildar imagem docker

```
docker build -t {username}/{image_name}:latest .
```

buildar imagem docker passando um nome especifico de Dockerfile

```
docker build -t {username}/{image_name}:prod . -f Dockerfile.prod
```

Executar imagem docker

```
docker run --rm --name {image_name} -p 8000:8000 {username}/{image_name}
```

Ver logs de um container

```
docker logs {CONTAINER_NAME}
```

Enviar imagem para o dockerhub

```
docker push  {username}/{image_name}
```

Remover container docker

```
docker rm -f {CONTAINER_ID}
```


Criar netword para containers
```
docker network create {nome da rede}
```

Executar contanier dentro de uma network

```
docker run -d --network {net_name} --name {image_name} {username}/{image_name}

```

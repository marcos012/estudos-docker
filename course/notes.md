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

Entrar em um container
```
docker exec -it {container} bash
```

### Docker compose

Pode criar e subir containers  automaticamente

para rodar basta utilizar

```
docker-compose up -d
```

em caso de alteracoes na imagem rode


```
docker-compose up -d --build
```

### dependencia de containers

e possivel criar dependencia entre containers utilizando a propriedade `depends_on`

uma outra abordagem e utilizar uma ferramenta dentro do container, para aguardar a conexao com um banco de dados por exemplo

[Dockerize](https://github.com/jwilder/dockerize) // ferramenta para realizar a espera

Para utilizar essas ferramentas de espera e necessario alterar o `entrypoint` do container com o comando desejado (verificar documentacao)


Remove todos containers  $ docker rm $(docker ps -aq)

Remove todas imagens $ docker rmi $(docker images -q)
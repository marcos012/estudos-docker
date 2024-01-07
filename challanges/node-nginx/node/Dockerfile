FROM node:15

WORKDIR /usr/src/app

COPY . .

ENV DOCKERIZE_VERSION v0.6.1

RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

ENTRYPOINT ["dockerize","-wait","tcp://db:3306","-timeout","20s"]
CMD ["sh", "-c", "npm install && node src/index.js"]

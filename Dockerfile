FROM codeceptjs/codeceptjs:3.0.7

WORKDIR /codecept

COPY package* ./

RUN npm i

COPY . .

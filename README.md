# RABBITMQ-NODEJS
This project contains example of integration RABBITMQ que service with NODE.JS

## STEP 01: Install RabbitMQ into linux

#### Install Erlang
'*apt install erlang-base*'

#### Install RabbitMQ
'*sudo apt-get install rabbitmq-server*'

#### Start the Server
'*sudo systemctl start rabbitmq-server.service*'
'*sudo systemctl enable rabbitmq-server.service*'

#### You can check the status of RabbitMQ:
'*sudo rabbitmqctl status*'

## STEP 02: Install Nodejs dependancies for rabbitMQ
'*npm install amqplib --save*'


Ref: https://www.vultr.com/docs/how-to-install-rabbitmq-on-ubuntu-16-04-47

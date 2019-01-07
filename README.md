# crypto PEM example

Example of decrypting and asynchronous encryption with node.js.

## Key Generation
`ssh-keygen -t rsa -b 4096 -C "info@internet-israel.com" -f app/example_id_rsa`
and:

`ssh-keygen -f app/example_id_rsa -e -m pem > app/example_id_rsa.pub`

## Usage

Generate the keys first! then:

`node app/index.js`

OR

`docker-compose up` with docker.
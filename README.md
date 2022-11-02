## SMS APP

this application allows sending sms through twilio, the API is developed with NestJs, Typeorm, postgres and twilio sdk, the frontend is developed in React complemented with technologies like Redux, Redux-Sagas and Tailwind.

## API Installation

you must have a twilio account previously, since it is necessary for the configuration of the api if you don't have it you can follow the instructions in [https://www.twilio.com/try-twilio](https://www.twilio.com/try-twilio).

```bash
$ yarn install
$ docker compose up
create .env file taking the example left in .env-example
```

## Running the API

```bash
# development
$ npm run start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## APP INSTALLATION

the app requires the api for the correct functioning, make sure to raise the api before the app as it receives as environment variable the path to the api.

```bash
$ yarn install
create .env file taking the example left in .env-example
to run the app use the command $ yarn start

```

## Stay in touch

- Author - [Julian Labrador](https://www.linkedin.com/in/julianlabradors/)
- LinkedIn - [Julian Labrador](https://www.linkedin.com/in/julianlabradors/)

## License

tw_api is [MIT licensed](LICENSE).

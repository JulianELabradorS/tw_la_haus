import * as Joi from 'joi';

export const config = () => ({
  port: process.env.PORT,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  twilioAuthToken: process.env.TWILIO_AUTH_TOKEN,
  twilioAccountSid: process.env.TWILIO_ACCOUNT_SID,
  twilioSender: process.env.SENDER_PHONE_NUMBER,
});

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production'),
  PORT: Joi.number().default(3000),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.string().required(),
  DB_USER: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  TWILIO_ACCOUNT_SID: Joi.string().required(),
  TWILIO_AUTH_TOKEN: Joi.string().required(),
  SENDER_PHONE_NUMBER: Joi.string().required(),
});

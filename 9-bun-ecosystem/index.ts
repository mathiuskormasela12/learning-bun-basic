import winston from "winston";
import express from "express";

const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({})
  ]
});

const app = express();

app.get('/v1/bun', (req, res) => {
  res.json({
    message: 'Hello Bun'
  });
});

app.listen(Bun.env.PORT, () => {
  logger.info(`Magic happens at port ${Bun.env.PORT}`);
});
require('dotenv').config();

let production: boolean;
process.env.ENVIRONMENT ??= 'development';
switch (process.env.ENVIRONMENT.toLowerCase()) {
  case 'dev':
  case 'development':
    production = false;
    break;
  
  case 'prod':
  case 'production':
    production = true;
    break;
  
  default:
    production = false;
}

export default {
  PORT: process.env.PORT !== undefined ? parseInt(process.env.PORT) : 3000,
  production
}
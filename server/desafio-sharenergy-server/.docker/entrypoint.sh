#! /bin/bash

npm install
npx prisma generate
npm run build
npm run start:dev
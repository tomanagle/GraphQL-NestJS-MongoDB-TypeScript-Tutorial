// src/database/database.providers.ts
import mongoose from 'mongoose';
import { MONGO_DB_CONNECTION_STRING } from '../constants';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(MONGO_DB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
  },
];

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!  <br> <a href="/api">api documentation</a>';
  }
}

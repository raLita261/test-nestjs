import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getBye(): string{
    return 'ooohhh bye bye Miss America';
  }
}

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
      migrationsRun: true,
      host: this.configService.get('dbHost'),
      port: this.configService.get('dbPort'),
      username: this.configService.get('dbUser'),
      password: this.configService.get('dbPassword'),
      database: this.configService.get('dbName'),
    };
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './components/Product/product.module';
import { OrderModule } from './components/Order/order.module';
import { PrescriptionModule } from './components/Prescription/prescription.module';

@Module({
  imports: [ProductModule, OrderModule, PrescriptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

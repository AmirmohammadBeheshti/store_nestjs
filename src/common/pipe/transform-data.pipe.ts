import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class TransformDataPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return 'Test value ';
  }
}

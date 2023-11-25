import { Controller, Post, Body } from '@nestjs/common';
import { SpaceService } from './space.service';
import { ProcessTextDto } from './process-text.dto';

@Controller('process-text')
export class SpaceController {
  constructor(private readonly spaceService: SpaceService) {}

  @Post()
  processText(@Body() processTextDto: ProcessTextDto): string {
    try {
      if (!processTextDto?.text) {
        return 'text is required';
      }

      return this.spaceService.processText(processTextDto.text);
    } catch (error) {
      return 'Theres error: ' + error.message;
    }
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { HealthcentersService } from './healthcenters.service';

describe('HealthcentersService', () => {
  let service: HealthcentersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthcentersService],
    }).compile();

    service = module.get<HealthcentersService>(HealthcentersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

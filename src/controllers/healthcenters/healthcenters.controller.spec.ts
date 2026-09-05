import { Test, TestingModule } from '@nestjs/testing';
import { HealthcentersController } from './healthcenters.controller';

describe('HealthcentersController', () => {
  let controller: HealthcentersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthcentersController],
    }).compile();

    controller = module.get<HealthcentersController>(HealthcentersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

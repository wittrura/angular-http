import { TestBed, inject } from '@angular/core/testing';

import { HeroServicePromiseService } from './hero.service.promise.service';

describe('HeroServicePromiseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroServicePromiseService]
    });
  });

  it('should ...', inject([HeroServicePromiseService], (service: HeroServicePromiseService) => {
    expect(service).toBeTruthy();
  }));
});

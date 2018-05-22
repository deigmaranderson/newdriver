import { TestBed, inject } from '@angular/core/testing';

import { IndicanteService } from './indicante.service';

describe('IndicanteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndicanteService]
    });
  });

  it('should be created', inject([IndicanteService], (service: IndicanteService) => {
    expect(service).toBeTruthy();
  }));
});

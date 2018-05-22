import { TestBed, inject } from '@angular/core/testing';

import { IndicadoService } from './indicado.service';

describe('IndicadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndicadoService]
    });
  });

  it('should be created', inject([IndicadoService], (service: IndicadoService) => {
    expect(service).toBeTruthy();
  }));
});

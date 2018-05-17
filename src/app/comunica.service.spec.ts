import { TestBed, inject } from '@angular/core/testing';

import { ComunicaService } from './comunica.service';

describe('ComunicaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComunicaService]
    });
  });

  it('should be created', inject([ComunicaService], (service: ComunicaService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KardexService } from './kardex.service';

describe('Service: Kardex', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KardexService]
    });
  });

  it('should ...', inject([KardexService], (service: KardexService) => {
    expect(service).toBeTruthy();
  }));
});

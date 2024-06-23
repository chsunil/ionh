import { TestBed } from '@angular/core/testing';

import { WpServicesService } from './wp-services.service';

describe('WpServicesService', () => {
  let service: WpServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WpServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

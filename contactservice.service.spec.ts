import { TestBed } from '@angular/core/testing';

import { ContactService } from './contactservice.service';

describe('ContactserviceService', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

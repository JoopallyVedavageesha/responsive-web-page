import { TestBed } from '@angular/core/testing';

import { OrderDetailsService } from './order-details.service';

describe('OrderDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderDetailsService = TestBed.get(OrderDetailsService);
    expect(service).toBeTruthy();
  });
});

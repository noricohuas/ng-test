import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';
import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from '../app.module';

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [AppModule],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    });
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from './app.module';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [AppModule],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    element = fixture.debugElement.nativeElement;
    expect(element.querySelector('h1').textContent).toContain('Tour of Heroes');
  }));

  it(`should have nav first element contain Dashboard`, async(() => {
    element = fixture.debugElement.nativeElement;
    expect(element.querySelector('nav').textContent).toContain('Dashboard');
  }));

  it(`should have nav first element equal Dashboard`, async(() => {
    element = fixture.debugElement.nativeElement;
    expect(element.querySelectorAll('nav')[0].textContent).toContain('Dashboard');
  }));

  it(`should have nav count`, async(() => {
    element = fixture.debugElement.nativeElement;
    expect(element.querySelectorAll('nav').length).toBeGreaterThan(0);
  }));


});

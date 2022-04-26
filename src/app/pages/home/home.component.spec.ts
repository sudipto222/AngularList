import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { OrderModule } from 'ngx-order-pipe';
import { OrderPipe } from 'ngx-order-pipe';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        OrderModule,
        Ng2SearchPipeModule,
        FormsModule
      ],
      declarations: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // Checking if Home Component Property Title Is Equal to Home Component
  it(`should have as title 'Home Component'`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Home Component');
  });

  // Checking if Home Component Property Collection Is Empty Array
  it(`should have as collection empty`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.collection).toEqual([]);
  });

  // Checking if Home Component Property Search Text Is Empty
  it(`Search Term Should Be Empty`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.searchText).toEqual("");
  });

  // Intially Order By Tariff Name
  it(`Should Initially Order By Tariff Name`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.order).toEqual("tariffName");
  });

  // Search Term Should Be Null Initially and then set to 'Benef'
  it('Search Term Should Be Empty & Then Set to Benef', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input').value).toEqual('');
    compiled.querySelector('input').value = 'Benef';
    compiled.querySelector('input').dispatchEvent(new Event('input'));
    expect(fixture.debugElement.componentInstance.searchText).toEqual('Benef');
  });

  it('Should Click On Tariff Filter & Order Property Must Set To TariffName', async () => {
    const fixture = TestBed.createComponent(HomeComponent);
    let button = fixture.debugElement.nativeElement.querySelectorAll('button')[0];
    button.click();
    expect(fixture.debugElement.componentInstance.order).toEqual('tariffName');
  });

  it('Should Click On Download Filter & Order Property Must Set To Download', async () => {
    const fixture = TestBed.createComponent(HomeComponent);
    let button = fixture.debugElement.nativeElement.querySelectorAll('button')[1];
    button.click();
    expect(fixture.debugElement.componentInstance.order).toEqual('download');
  });

  it('Should Click On Upload Filter & Order Property Must Set To Upload', async () => {
    const fixture = TestBed.createComponent(HomeComponent);
    let button = fixture.debugElement.nativeElement.querySelectorAll('button')[2];
    button.click();
    expect(fixture.debugElement.componentInstance.order).toEqual('upload');
  });

  it('Should Click On Price Filter & Order Property Must Set To Price', async () => {
    const fixture = TestBed.createComponent(HomeComponent);
    let button = fixture.debugElement.nativeElement.querySelectorAll('button')[3];
    button.click();
    expect(fixture.debugElement.componentInstance.order).toEqual('price');
  });
});

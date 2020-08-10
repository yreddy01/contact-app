import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatIconModule } from '@angular/material/icon';
import { TextMaskModule } from 'angular2-text-mask';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  let loader: HarnessLoader;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactFormComponent],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatInputModule,
        MatIconModule,
        TextMaskModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate first name field', () => {
    const firstName = component.contactForm.controls.firstName;
    expect(firstName.valid).toBeFalsy();

    firstName.setValue('');
    expect(firstName.hasError('required')).toBeTruthy();

    firstName.setValue('AAAA');
    expect(firstName.valid).toBeTruthy();
  });

  it('should validate last name field', () => {
    const lastName = component.contactForm.controls.lastName;
    expect(lastName.valid).toBeFalsy();

    lastName.setValue('');
    expect(lastName.hasError('required')).toBeTruthy();

    lastName.setValue('AAAA');
    expect(lastName.valid).toBeTruthy();
  });

  it('should validate company field', () => {
    const company = component.contactForm.controls.company;
    expect(company.valid).toBeFalsy();

    company.setValue('');
    expect(company.hasError('required')).toBeTruthy();

    company.setValue('AAAA');
    expect(company.valid).toBeTruthy();
  });

  it('should validate email field', () => {
    const email = component.contactForm.controls.email;
    expect(email.valid).toBeFalsy();

    email.setValue('');
    expect(email.hasError('required')).toBeTruthy();

    email.setValue('AAAA');
    expect(email.hasError('pattern')).toBeTruthy();

    email.setValue('aa@gmail');
    expect(email.hasError('pattern')).toBeTruthy();

    email.setValue('aa@gmail.com');
    expect(email.valid).toBeTruthy();
  });

  it('should validate phone field', () => {
    const phone = component.contactForm.controls.phone;
    expect(phone.valid).toBeFalsy();

    phone.setValue('');
    expect(phone.hasError('required')).toBeTruthy();

    phone.setValue('+1 (123) 123-123_');
    expect(phone.hasError('pattern')).toBeTruthy();

    phone.setValue('+1 (123) 123-1234');
    expect(phone.valid).toBeTruthy();
  });

  it('should validate address field', () => {
    const address = component.contactForm.controls.address;
    expect(address.valid).toBeFalsy();

    address.setValue('');
    expect(address.hasError('required')).toBeTruthy();

    address.setValue('123');
    expect(address.valid).toBeTruthy();
  });
});
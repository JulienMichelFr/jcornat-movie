import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { ItemComponent } from './movie/item/item.component';
import { DynamicFormGroupComponent } from './dynamic-form/group/group.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormSectionComponent } from './dynamic-form/section/section.component';
import { DynamicFormQuestionComponent } from './dynamic-form/question/question.component';
import { FieldCheckboxComponent } from './field/checkbox/checkbox.component';
import { FieldDateComponent } from './field/date/date.component';
import { FieldFileComponent } from './field/file/file.component';
import { FieldMultipleFieldComponent } from './field/multiple-field/multiple-field.component';
import { FieldNumberComponent } from './field/number/number.component';
import { FieldPasswordComponent } from './field/password/password.component';
import { FieldRadioComponent } from './field/radio/radio.component';
import { FieldRangeComponent } from './field/range/range.component';
import { FieldSelectComponent } from './field/select/select.component';
import { FieldTextareaComponent } from './field/textarea/textarea.component';
import { FieldTextComponent } from './field/text/text.component';
import { FieldTimeComponent } from './field/time/time.component';
import { FieldVideoYoutubeComponent } from './field/video-youtube/video-youtube.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { C7zFocusDirective } from './focus/focus.directive';
import { MovieAddComponent } from './movie/add/add.component';
import { MovieUpdateComponent } from './movie/update/update.component';
import { HttpClientModule } from '@angular/common/http';
import { C7zButtonComponent } from './button/button.component';
import { MovieSearchComponent } from './movie/search/search.component';
import { MovieImportComponent } from './movie/import/import.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    ItemComponent,
    DynamicFormGroupComponent,
    DynamicFormComponent,
    DynamicFormSectionComponent,
    DynamicFormQuestionComponent,
    FieldCheckboxComponent,
    FieldDateComponent,
    FieldFileComponent,
    FieldMultipleFieldComponent,
    FieldNumberComponent,
    FieldPasswordComponent,
    FieldRadioComponent,
    FieldRangeComponent,
    FieldSelectComponent,
    FieldTextareaComponent,
    FieldTextComponent,
    FieldTimeComponent,
    C7zFocusDirective,
    FieldVideoYoutubeComponent,
    MovieAddComponent,
    MovieUpdateComponent,
    C7zButtonComponent,
    MovieSearchComponent,
    MovieImportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
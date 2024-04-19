import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from '@innomotics/ix-angular-lib';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormExampleComponent } from './components/form-example/form-example.component';
import { GeneralExampleComponent } from './components/general-example/general-example.component';
import { ModalExampleComponent } from './components/modal-example/modal-example.component';

@NgModule({
  declarations: [
    AppComponent,
    FormExampleComponent,
    GeneralExampleComponent,
    ModalExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule,
    ComponentsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from '@innomotics/brand-experience-angular-lib/dist';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormExampleComponent } from './components/form-example/form-example.component';
import { GeneralExampleComponent } from './components/general-example/general-example.component';
import { ModalExampleComponent } from './components/modal-example/modal-example.component';
import { ModalByComponentComponent } from './components/modal-example/components/modal-by-component/modal-by-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FormExampleComponent,
    GeneralExampleComponent,
    ModalExampleComponent,
    ModalByComponentComponent,
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

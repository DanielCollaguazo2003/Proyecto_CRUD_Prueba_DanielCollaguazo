
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { IndexComponent } from './pages/index/index.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { FormularioComponent } from './components/formulario/formulario.component';

//firebase
// import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { FIREBASE_APP_NAME, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    IndexComponent,
    ListaTareasComponent,
    FormularioComponent
  ],
  imports: [
    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // provideFirestore(() => getFirestore()),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    //{ provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

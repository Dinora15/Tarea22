import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from '@ionic/react';
import { bodyOutline, bookOutline, homeOutline } from 'ionicons/icons';
import React from 'react';

export const Menu: React.FC=()=>{
    return (

<IonMenu side="start" contentId="first">
      <IonHeader>        
        <IonToolbar color="primary">
          <IonTitle>Inicio Menu</IonTitle>
        </IonToolbar>        
              </IonHeader>
      <IonContent>
        <IonList>
        <IonMenuToggle>
          <IonItem routerLink="/home-peliculas" routerDirection='none' lines='none'>
            <IonIcon color="medium" slot="start" icon={homeOutline}/>
            <IonLabel>Películas</IonLabel>
          </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
          <IonItem routerLink="/titulo-pelicula" routerDirection='none' lines='none'>
            <IonIcon color="medium" slot="start" icon={bodyOutline}/>
            <IonLabel>Título Película</IonLabel>
          </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
          <IonItem routerLink="/about" routerDirection='none' lines='none'>
            <IonIcon color="medium" slot="start" icon={bookOutline}/>
            <IonLabel>About Película</IonLabel>
          </IonItem>
          </IonMenuToggle>       
                 
        </IonList>
      </IonContent>
    </IonMenu>
    );
}
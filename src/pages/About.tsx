import {  IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const About: React.FC=()=>{
return (
<IonPage>
   <IonHeader>
    <IonToolbar>
    <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons> 
        <IonTitle>About Película </IonTitle> 
            </IonToolbar>
    </IonHeader> 
    <IonContent>
        <IonCard>
        <IonGrid>
            <IonRow>
                <IonCol>
                <h1>About Pelicula</h1>               
                </IonCol>
            </IonRow>
        </IonGrid>
        </IonCard>
    </IonContent>
</IonPage>

);
};

export default About;
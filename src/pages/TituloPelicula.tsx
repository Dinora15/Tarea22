import {  IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';


interface TituloPeliculaProps
  extends RouteComponentProps<{
    id: string;
  }> {}
const TituloPelicula: React.FC<TituloPeliculaProps>=({ match })=>{
return (
<IonPage>
   <IonHeader>
    <IonToolbar>
    <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons> 
        <IonTitle>Pelicula Seleccionada </IonTitle> 
            </IonToolbar>
    </IonHeader> 
    <IonContent>
        <IonCard>
        <IonGrid>
            <IonRow>
                <IonCol>
                <h1>Titulo Pelicula:{match.params.id}</h1> 

                </IonCol>
            </IonRow>
        </IonGrid>
        </IonCard>
    </IonContent>
</IonPage>

);
};

export default TituloPelicula;
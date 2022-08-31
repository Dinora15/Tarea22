import {      IonButtons,  IonContent,      IonHeader,  IonMenuButton,   IonPage,  IonTitle, IonToolbar } from '@ionic/react';
import {Peliculas} from './../components/Peliculas/Peliculas';




const Home: React.FC = () => {
 
  
  return (
    
    <IonPage>        
       <IonHeader>        
    <IonToolbar>
    <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons> 
        <IonTitle>5 Películas </IonTitle> 
            </IonToolbar>            
            </IonHeader>   
      <IonContent> 
      <Peliculas />            
            
           </IonContent>  
                 
          </IonPage>
          
  );
};

export default Home;

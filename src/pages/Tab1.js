import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1 = () => {
  let arr = Array(7).fill(9);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-padding-top">First Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {arr.map((e) => {
          return (
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                <IonCardTitle class="iontitle">Card Title</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                aperiam.
              </IonCardContent>
            </IonCard>
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

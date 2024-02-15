import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import logo from "../../assets/logo.svg";
import {
  personCircle,
  search,
  ellipsisHorizontal,
  ellipsisVertical,
} from "ionicons/icons";

interface Props {
  title: string;
  backBtn?: boolean;
}

const Header: React.FC<Props> = ({ title, backBtn }) => {
  return (
    <IonHeader className="ion-margin-bottom">
      {/* <IonToolbar color={"primary"}>
        <IonTitle>
          <img src={logo} alt="" />
        </IonTitle>
      </IonToolbar> */}
      <IonToolbar color={"primary"}>
        {backBtn && (
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
        )}
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;

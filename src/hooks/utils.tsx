import { IonBadge, IonIcon } from "@ionic/react";
import { alertCircleOutline, checkmarkCircleOutline } from "ionicons/icons";

export const getDate = (timestamp: number, type?: string): number | string => {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(timestamp * 1000);
  switch (type) {
    case "month":
      return months[date.getMonth()];
    case "dayWzMonth":
      return `${date.getDate()} ${months[date.getMonth()]}`;
    case "date":
      return `${date.getDate()} ${
        months[date.getMonth()]
      } ${date.getFullYear()}`;

    default:
      return new Date(timestamp).getTime();
  }
};

export const getColor = (status: string): JSX.Element => {
  switch (status) {
    case "Paid":
      return (
        <IonBadge
          mode={"ios"}
          color={"success"}
          className="ion-align-items-center"
        >
          {status}
          <IonIcon icon={checkmarkCircleOutline} />
        </IonBadge>
      );

    case "Late":
      return (
        <IonBadge
          mode={"ios"}
          color={"danger"}
          className="ion-align-items-center"
        >
          {status}
          <IonIcon icon={alertCircleOutline} />
        </IonBadge>
      );

    default:
      return <></>;
  }
};

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonText,
} from "@ionic/react";
import React from "react";
import { getColor, getDate } from "../hooks/utils";
import { Payslip } from "../pages/PayslipLists";
interface Props {
  ShowPayslipDetails: (payslip: Payslip) => void;
  payslip: Payslip;
}
const ListItem: React.FC<Props> = ({ ShowPayslipDetails, payslip }) => {
  return (
    <IonCard
      className="card listCardItem"
      button
      disabled={payslip.status === "Late"}
      onClick={() => ShowPayslipDetails(payslip)}
    >
      <IonCardHeader>
        <IonCardTitle className="ion-justify-content-between ion-align-items-center">
          {getDate(payslip.fromDate, "month")} Payslip
          {getColor(payslip.status)}
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonText>
          {" "}
          For {getDate(payslip.fromDate, "dayWzMonth")} To {` `}
          {getDate(payslip.toDate, "date")}
        </IonText>
      </IonCardContent>
    </IonCard>
  );
};

export default ListItem;

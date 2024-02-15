import {
  IonBadge,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import React from "react";
import { getDate } from "../hooks/utils";
import { Payslip } from "../pages/PayslipLists";
interface Props {
  ShowPayslipDetails: (payslip: Payslip) => void;
  payslip: Payslip;
}
const ListItem: React.FC<Props> = ({ ShowPayslipDetails, payslip }) => {
  const getColor = () => {
    switch (payslip.status) {
      case "Paid":
        return "success";
      case "Late":
        return "danger";
    }
  };
  return (
    <IonCard
      className="card"
      button
      onClick={() => ShowPayslipDetails(payslip)}
    >
      <IonCardHeader>
        <IonCardTitle className="listCardTitle ion-justify-content-between ion-align-items-center">
          {getDate(payslip.fromDate, "month")} Payslip
          <IonBadge mode={"ios"} color={getColor()}>
            {payslip.status}
          </IonBadge>
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        For {getDate(payslip.fromDate, "date")} To{" "}
        {getDate(payslip.toDate, "date")}
      </IonCardContent>
    </IonCard>
  );
};

export default ListItem;

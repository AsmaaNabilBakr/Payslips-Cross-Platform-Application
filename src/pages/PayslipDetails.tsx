import { Preferences } from "@capacitor/preferences";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
  useIonViewWillLeave,
} from "@ionic/react";
import React, { useState } from "react";
import { getDate } from "../hooks/utils";
import { Payslip } from "./PayslipLists";
import Header from "../components/Header";

const PayslipDetails: React.FC = () => {
  const [payslip, setPayslip] = useState<Payslip>();
  useIonViewDidEnter(() => {
    const getPayslip = async () => {
      const { value } = await Preferences.get({ key: "payslip" });
      setPayslip(JSON.parse(value || ""));
    };
    getPayslip();
  }, []);

  useIonViewWillLeave(() => {
    Preferences.remove({ key: "payslip" });
  });
  const month = payslip ? getDate(payslip.fromDate, "month") : "";

  return (
    <IonPage>
      <Header title={`${month} Payslip`} backBtn />
      <IonContent className="ion-padding">UI goes here...</IonContent>
    </IonPage>
  );
};

export default PayslipDetails;

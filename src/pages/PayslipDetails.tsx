import { Preferences } from "@capacitor/preferences";
import {
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonText,
  useIonLoading,
  useIonViewDidEnter,
  useIonViewWillLeave,
} from "@ionic/react";
import React, { useState } from "react";
import DownloadPayslip from "../components/DownloadPayslip";
import Header from "../components/Header";
import { getColor, getDate } from "../hooks/utils";
import { Payslip } from "./PayslipLists";
import "./pages.css";
const PayslipDetails: React.FC = () => {
  const [payslip, setPayslip] = useState<Payslip>();
  const [present, dissmis] = useIonLoading();
  useIonViewDidEnter(() => {
    const getPayslip = async () => {
      await present("Loading...");
      const { value } = await Preferences.get({ key: "payslip" });
      setPayslip(JSON.parse(value || ""));
      dissmis();
    };
    getPayslip();
  }, []);

  useIonViewWillLeave(() => {
    Preferences.remove({ key: "payslip" });
  });
  const month = payslip ? getDate(payslip.fromDate, "month") : "";

  return (
    <IonPage className="payslipDetailsPage">
      <Header title={`${month} Payslip`} backBtn />
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeSm="12" sizeMd="8" sizeLg="8" >
              <IonCard className="card">
                <IonCardContent>
                  <div>
                    <IonText>status:</IonText>
                    {payslip && getColor(payslip.status)}
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" sizeSm="12" sizeMd="8" sizeLg="8">
              <IonCard className="card">
                <IonCardContent>
                  <div>
                    <IonText>Work Cycle:</IonText>
                    {payslip &&
                      `For ${getDate(payslip.fromDate, "dayWzMonth")} To
                    ${getDate(payslip.toDate, "date")}`}
                  </div>
                  <div className="ion-margin-top">
                    <IonText>Payslip:</IonText>
                    {payslip && <DownloadPayslip payslip={payslip} />}
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PayslipDetails;

import { Preferences } from "@capacitor/preferences";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonRouter
} from "@ionic/react";
import { calendarOutline } from "ionicons/icons";
import { useState } from "react";
import { getDate } from "../hooks/utils";
export interface Payslip {
  id: string;
  fromDate: number;
  toDate: number;
  file: string;
}

const PayslipLists: React.FC = () => {
  const router = useIonRouter();
  const [payslips] = useState<Payslip[]>([
    {
      id: "1",
      fromDate: 1640995200,
      toDate: 1643673600,
      file: "../../assets/payslips/payslip.pdf",
    },
    {
      id: "2",
      fromDate: 1643673600,
      toDate: 1646256000,
      file: "../../assets/payslips/dummy.pdf",
    },
    {
      id: "3",
      fromDate: 1646256000,
      toDate: 1648934400,
      file: "../../assets/payslips/payslip.pdf",
    },
    {
      id: "4",
      fromDate: 1648934400,
      toDate: 1651526400,
      file: "../../assets/payslips/payslip.pdf",
    },
    {
      id: "5",
      fromDate: 1651526400,
      toDate: 1654204800,
      file: "../../assets/payslips/payslip.pdf",
    },
    {
      id: "6",
      fromDate: 1654204800,
      toDate: 1656796800,
      file: "../../assets/payslips/payslip.pdf",
    },
    {
      id: "7",
      fromDate: 1656796800,
      toDate: 1659475200,
      file: "../../assets/payslips/payslip.pdf",
    },
    {
      id: "8",
      fromDate: 1659475200,
      toDate: 1662070400,
      file: "../../assets/payslips/payslip.pdf",
    },
    {
      id: "9",
      fromDate: 1662070400,
      toDate: 1664748800,
      file: "../../assets/payslips/payslip.pdf",
    },
    {
      id: "10",
      fromDate: 1664748800,
      toDate: 1667340800,
      file: "../../assets/payslips/payslip.pdf",
    },
  ]);

  const ShowPayslipDetails = (payslip: Payslip) => {
    Preferences.set({
      key: "payslip",
      value: JSON.stringify(payslip),
    });
    router.push(`/details/${payslip.id}`, "forward");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonTitle>Payslips</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen forceOverscroll={false}>
        <IonGrid>
          <IonRow>
            {payslips.map((item: Payslip) => (
              <IonCol size="12" sizeMd="6" sizeLg="4" sizeXl="4" key={item.id}>
                <IonCard button onClick={() => ShowPayslipDetails(item)}>
                  <IonCardHeader>
                    <IonCardTitle>
                      {getDate(item.fromDate, "month")} Payslip
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonIcon icon={calendarOutline} />
                    From: {getDate(item.fromDate, "date")} To:{" "}
                    {getDate(item.toDate, "date")}
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PayslipLists;

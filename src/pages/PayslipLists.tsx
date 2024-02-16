import { Preferences } from "@capacitor/preferences";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonText,
  useIonRouter,
  useIonViewDidEnter,
} from "@ionic/react";
import { useState } from "react";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import { getDate } from "../hooks/utils";
import "./pages.css";

export interface Payslip {
  id: string;
  fromDate: number;
  toDate: number;
  file: string;
  status: string;
}

const PayslipLists: React.FC = () => {
  const router = useIonRouter();
  const data = [
    {
      id: "1",
      fromDate: 1640995200,
      toDate: 1643673600,
      file: "",
      status: "Late",
    },
    {
      id: "2",
      fromDate: 1659475200,
      toDate: 1662070400,
      file: "dummy.pdf",
      status: "Paid",
    },
    {
      id: "3",
      fromDate: 1646256000,
      toDate: 1648934400,
      file: "dummy.pdf",
      status: "Paid",
    },
    {
      id: "4",
      fromDate: 1648934400,
      toDate: 1651526400,
      file: "dummy.pdf",
      status: "Paid",
    },
    {
      id: "5",
      fromDate: 1664748800,
      toDate: 1667340800,
      file: "dummy.pdf",
      status: "Paid",
    },
    {
      id: "6",
      fromDate: 1654204800,
      toDate: 1656796800,
      file: "dummy.pdf",
      status: "Paid",
    },
    {
      id: "7",
      fromDate: 1656796800,
      toDate: 1659475200,
      file: "dummy.pdf",
      status: "Paid",
    },
    {
      id: "8",
      fromDate: 1643673600,
      toDate: 1646256000,
      file: "dummy.pdf",
      status: "Paid",
    },

    {
      id: "9",
      fromDate: 1662070400,
      toDate: 1664748800,
      file: "dummy.pdf",
      status: "Paid",
    },
    {
      id: "10",
      fromDate: 1651526400,
      toDate: 1654204800,
      file: "dummy.pdf",
      status: "Paid",
    },
  ];

  const [payslips, setPayslip] = useState<Payslip[]>();

  useIonViewDidEnter(() => {
    const sortData = async () => {
      const sortData = data.sort(
        (a, b) =>
          (getDate(a.fromDate) as number) - (getDate(b.fromDate) as number)
      );
      setPayslip(sortData);
    };
    sortData();
  }, []);

  const ShowPayslipDetails = (payslip: Payslip) => {
    Preferences.set({
      key: "payslip",
      value: JSON.stringify(payslip),
    });
    router.push(`/details/${payslip.id}`, "forward");
  };
  return (
    <IonPage>
      <Header title="Payslips" />

      <IonContent fullscreen forceOverscroll={false}>
        <IonGrid>
          <IonRow>
            <IonText className="ion-padding-start" color="medium">
              Your payslip will be available on platform by your pay day.
            </IonText>
          </IonRow>
          <IonRow>
            {payslips?.map((item: Payslip) => (
              <IonCol size="12" sizeMd="6" sizeLg="4" sizeXl="4" key={item.id}>
                <ListItem
                  ShowPayslipDetails={ShowPayslipDetails}
                  payslip={item}
                />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PayslipLists;

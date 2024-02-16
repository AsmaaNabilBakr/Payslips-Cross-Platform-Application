import { Capacitor } from "@capacitor/core";
import { Directory, Filesystem } from "@capacitor/filesystem";
import { IonButton, IonIcon, useIonLoading, useIonToast } from "@ionic/react";
import { downloadOutline } from "ionicons/icons";
import React from "react";
import { getDate } from "../hooks/utils";
import { Payslip } from "../pages/PayslipLists";
interface Props {
  payslip: Payslip;
}
const DownloadPayslip: React.FC<Props> = ({ payslip }) => {
  const [present] = useIonToast();
  const [presentLoading, dismissLoading] = useIonLoading();
  const presentToast = (
    message: string,
    color: string,
    position?: "top" | "middle" | "bottom"
  ) => {
    present({
      message: message,
      duration: 1500,
      color: color,
      position: position || "bottom",
    });
  };
  const onDownloadPayslip = async () => {
    try {
      await presentLoading("Downloading...");
      const contents = await Filesystem.downloadFile({
        path: Directory.Documents,
        directory: Directory.Documents,
        url: `https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/${payslip.file}`,
      });
      dismissLoading();
      presentToast("File downloaded successfully", "success");
    } catch (error) {
      dismissLoading();

      presentToast("Error downloading file, Try Again", "danger");
    }
  };
  const month = payslip ? getDate(payslip.fromDate, "month") : "";

  return Capacitor.isNativePlatform() ? (
    <IonButton
      disabled={!payslip}
      onClick={() => onDownloadPayslip()}
      size="small"
      fill="outline"
    >
      Download Payslip
      <IonIcon icon={downloadOutline} />
    </IonButton>
  ) : (
    <IonButton
      disabled={!payslip}
      href={`../../assets/payslips/${payslip.file}`}
      download={`${month}-payslip`}
      fill="outline"
      size="small"
    >
      Download Payslip
      <IonIcon icon={downloadOutline} />
    </IonButton>
  );
};
export default DownloadPayslip;

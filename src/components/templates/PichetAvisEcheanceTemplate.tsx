import { forwardRef } from "react";
import { PichetAvisEcheanceData } from "@/types/template";
import { QRCodeSVG } from "qrcode.react";
import pichetlogo from "@/assets/pihet-logo.png";

interface PichetAvisEcheanceTemplateProps {
  data: PichetAvisEcheanceData;
}

const PichetAvisEcheanceTemplate = forwardRef<HTMLDivElement, PichetAvisEcheanceTemplateProps>(
  ({ data }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white p-6">
        {/* Header Section */}
        <div className="flex justify-between">
          {/* Left - Logo and Agency Info */}

          <div className="flex ml-[-4px]">
            {data.logoUrl ? (
              <img src={data.logoUrl} alt="Logo" className="w-full h-[45px] object-contain" />
            ) : (
              <>
                <img
                  src={pichetlogo}
                  alt="Pichet Logo"
                  style={{ width: "100%", height: "60px" }}
                />
              </>
            )}
          </div>
          <div className="flex flex-col items-end text-right">

            {/* ================= AGENCY INFO ================= */}
            <div>
              <div
                className="text-[24px] font-bold tracking-[0.1em]  text-black  p-0"
                style={{ fontFamily: "Geometria W04 Light" }}
              >
                {data.agencyName}
              </div>

              <div
                className="text-[10px] leading-tight text-black font-medium"
                style={{ fontFamily: "Geometria W04 Light" }}
              >
                {data.agencyAddress}
              </div>

              <div
                className="text-[10px] leading-tight text-black font-medium"
                style={{ fontFamily: "Geometria W04 Light" }}
              >
                {data.agencyCity}
              </div>
            </div>

            {/* ================= PHONE + SERVICE ================= */}
            <div className="flex mt-2 gap-0 border px-1  ">

              {/* PHONE NUMBER */}
              <p
                className="text-[12px] font-bold tracking-[0.1em] text-gray-400 mt-[-2.5px] "
                style={{ fontFamily: "Helvetica, sans-serif" }}
              >
                {data.companyPhone}
              </p>

              {/* SERVICE BOX */}
              <div className="relative bg-[#7D7C88] p-1">

                {/* ARROW */}
                <span
                  className="absolute -left-[0px] top-1/2 -translate-y-1/2
                w-0 h-0 rotate-180
                border-t-[5px] border-b-[5px] border-r-[6px]
                border-t-transparent border-b-transparent border-r-[#fff]"
                ></span>

                {/* BOX */}
                <span
                  className=" text-left text-white text-[8px] leading-[1.2em]
                  p-1 w-[70px] block mt-[-10px] font-semibold"
                  style={{ fontFamily: "Geometria W04 Light" }}
                >
                  Service gratuit
                  <br />
                  + prix appel
                </span>

              </div>
            </div>

            {/* ================= SERVICE TEXT ================= */}
            <p
              className="mt-1 text-[10px] text-gray-700 font-semibold"
              style={{ fontFamily: "Geometria W04 Light" }}
            >
              Nos conseillers du Service Relation Clients sont à votre disposition
            </p>

            {/* ================= FOOTER LINKS ================= */}
            <div className="mt-6 leading-tight">
              <div
                className="text-[11px] text-black"
                style={{ fontFamily: "Geometria W04 Light" }}
              >
                pichet.fr
              </div>

              <div
                className="text-[11px] font-medium"
                style={{ fontFamily: "Geometria W04 Light" }}
              >
                Espace client :
                <span className="font-bold text-black text-[11px]" style={{ fontFamily: "Geometria W04 Light" }}>
                  {data.espaceClient}
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Company Legal Info */}
        <div className=" mb-4  pb-1 w-[360px] mt-[-105px] justify-stretch" >
          <div className="text-[8px]" style={{ fontFamily: 'Helvetica,sans-serif' }}>{data.companyName}</div>
          <div className="text-[8px]" style={{ fontFamily: 'Helvetica,sans-serif' }}>Siège social : {data.companySiege}</div>

          <div className="flex justify-between pt-1 pb-1 text-[8px]" style={{ fontFamily: 'Helvetica,sans-serif' }}>RCS {data.companyRCS} - TVA intracommunautaire : {data.companyTVA} - Code APE {data.companyAPE}</div>
          <div className="text-[8px]" style={{ fontFamily: 'Helvetica,sans-serif' }}>Carte professionnelle ({data.companyCartePro}) délivrée par la CCI de BORDEAUX</div>

          <div className="text-[8px]" style={{ fontFamily: 'Helvetica,sans-serif' }}>Responsabilité Civile Professionnelle délivrée par {data.companyRC}</div>

          <div className="mt-3 p-1  bg-[#EDEDED] text-[8px]">
            <div className="text-[8px]" style={{ fontFamily: 'Helvetica,sans-serif' }}> Conformément à la loi « informatique et liberté » du 06/01/1978, vous disposez d'un droit d'accès et de rectifications aux informations
              vous concernant en vous adressant à :<span className="font-bold ">{data.companyEmail}</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex gap-6">
          {/* Left Column - Document Title and Property Info */}
          <div className="w-full">
            <h1
              className="text-[18px] font-bold mb-1 text-black"
            >
              AVIS D'ECHEANCE
            </h1>

            <div className="mb-4 text-black">
              <div className="font-bold text-[12px] mb-1 underline">Adresse du bien loué</div>
              <div className="text-[10px] font-semibold">{data.propertyDescription}</div>
              <div className="text-[10px] font-semibold">{data.propertyAddress1}</div>
              <div className="text-[10px] font-semibold">{data.propertyAddress2}</div>
            </div>

            <div className="flex flex-col gap-0 text-black" style={{ fontFamily: "Geometria W04 Light" }}>

              <div className="flex  w-full justify-start">
                <p className="font-bold text-[9px] w-[70px]">Assistante :</p>
                <span className="text-[10px] font-bold ">{data.assistantName} / {data.assistantPhone} <br></br>{data.assistantEmail}</span>
              </div>

              <div className="flex w-full justify-start">
                <p className="font-bold text-[9px] w-[70px]">Comptable :</p>
                <span className="text-[10px] font-bold ">{data.comptableEmail}</span>
              </div>

              <div className="flex  w-full justify-start">
                <p className="font-bold text-[9px] w-[70px]">Compte Web :</p>
                <span className="text-[10px] font-bold ">{data.comptableName} <br></br> {data.comptablePhone}</span>
              </div>

              <div className="flex  w-full text-[10px] font-bold ">
                <p className="font-bold text-[9px] w-[70px]">Locataire(s) :</p>
                <span className="text-[10px] font-bold ">{data.tenantName}</span>
              </div>

            </div>

          </div>

          {/* Right Column - Contact and Info */}


          <div className="flex flex-col justify-start gap-2 ml-[-360px] text-black">
            {/* Tenant Address Block */}
            <div className="flex flex-col justify-start mb-6 font-bold text-[12px]" style={{ fontFamily: "Geometria W04 Light" }}>
              <div>{data.tenantName}</div>
              <div>{data.tenantAddress1}</div>
              <div>{data.tenantAddress2}</div>
              <div>{data.tenantCity}</div>
            </div>

            <div className="mb-2">
              <div className="font-bold text-[12px]" style={{ fontFamily: "Geometria W04 Light" }}>Pessac, le {data.documentDate}</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-8">
          <div className="font-semibold text-[10px]" style={{ fontFamily: "Geometria W04 Light" }}>205117</div>
          <div className="flex  gap-3  text-black font-sans">

            {/* ================= LEFT TABLE ================= */}
            <table className="border-2 border-gray-800 border-collapse w-[300px]">
              <tbody>
                {/* HEADER */}
                <tr className="bg-[#d9d9d9] font-semibold text-center text-[11px] ">
                  <td className="w-[70px] py-1 border-r-2 border-gray-800">N° Lot</td>
                  <td className="py-1">Type de lot</td>
                </tr>

                {/* DATA */}
                <tr className="h-20 border-b-2 border-black">
                  <td className="text-center  text-[11px] border-r-2 border-gray-800 align-top font-medium">131</td>
                  <td className="px-2 text-[11px] align-top font-medium">
                    Appart. 2 Pièces B3 302
                  </td>
                </tr>
              </tbody>
            </table>

            {/* ================= MIDDLE TABLE ================= */}
            <table className="border-2 border-black border-collapse w-[270px] h-fit text-left">
              <tbody>
                <tr>
                  <td className="border-b-2 border-black bg-[#d9d9d9] font-semibold  py-1 w-[160px] text-[11px]">
                    Propriétaire
                  </td>
                  <td className=" border-b-2 border-black border-l-2 py-1 text-[11px] font-medium">
                    16663
                  </td>
                </tr>
                <tr>
                  <td className=" bg-[#d9d9d9] font-semibold  py-1 text-[11px]">
                    Références à rappeler :
                  </td>
                  <td className=" border-black border-l-2 border-b-2 py-1 text-[11px] font-medium">
                    G 4017.00048
                  </td>
                </tr>
              </tbody>
            </table>

            {/* ================= RIGHT EMPTY BOX ================= */}
            <table className="border-none  border-collapse w-[180px]">
              <tbody>
                <tr>
                  <td className="h-[90px]"></td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>



        {/* Quittance Section */}
        <div className="mt-4">
          <h2
            className="font-bold text-sm mb-2 p-2"
            style={{
              backgroundColor: "#1a365d",
              color: "white",
            }}
          >
            QUITTANCE DE LOYER
          </h2>
          <div className="text-xs mb-2">
            QUITTANCE POUR LA PERIODE DU {data.quittancePeriodStart} AU {data.quittancePeriodEnd}
          </div>

          <table className="w-full text-xs border-collapse mb-4">
            <tbody>
              <tr className="border-b">
                <td className="py-1 border-r px-2" style={{ backgroundColor: "#f5f5f5" }}>
                  du {data.quittancePeriodStart} au {data.quittancePeriodEnd} / Avance / Mens
                </td>
                <td className="py-1 px-2">Loyer</td>
                <td className="py-1 px-2 text-right font-bold">{data.quittanceLoyer}</td>
              </tr>
              <tr className="border-b">
                <td className="py-1 border-r px-2" style={{ backgroundColor: "#f5f5f5" }}></td>
                <td className="py-1 px-2">Provision sur charges (HP)</td>
                <td className="py-1 px-2 text-right">{data.quittanceProvisionCharges}</td>
              </tr>
              <tr className="border-b">
                <td className="py-1 border-r px-2" style={{ backgroundColor: "#f5f5f5" }}></td>
                <td className="py-1 px-2">Provision sur T.O.M. (HP)</td>
                <td className="py-1 px-2 text-right">{data.quittanceProvisionTOM}</td>
              </tr>
              <tr style={{ backgroundColor: "#e8f4f8" }}>
                <td className="py-1 border-r px-2"></td>
                <td className="py-1 px-2 font-bold">TOTAL de la période</td>
                <td className="py-1 px-2 text-right font-bold">{data.quittanceTotal}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Avis d'Échéance Section */}
        <div className="mt-4">
          <h2
            className="font-bold text-sm mb-2 p-2"
            style={{
              backgroundColor: "#c8102e",
              color: "white",
            }}
          >
            AVIS D'ECHEANCE
          </h2>
          <div className="text-xs mb-2">
            AVIS D'ECHEANCE du {data.avisPeriodStart} au {data.avisPeriodEnd}
          </div>

          <table className="w-full text-xs border-collapse mb-4">
            <tbody>
              <tr className="border-b">
                <td className="py-1 border-r px-2" style={{ backgroundColor: "#f5f5f5" }} rowSpan={7}>
                  du {data.avisPeriodStart} au {data.avisPeriodEnd} / Avance / Mens
                </td>
                <td className="py-1 px-2">{data.soldeAnterieurDate} {data.soldeAnterieurLabel}</td>
                <td className="py-1 px-2 text-right">{data.soldeAnterieurAmount}</td>
              </tr>
              <tr className="border-b">
                <td className="py-1 px-2">{data.paiementDate} {data.paiementLabel}</td>
                <td className="py-1 px-2 text-right" style={{ color: "#c8102e" }}>-{data.paiementAmount}</td>
              </tr>
              <tr className="border-b">
                <td className="py-1 px-2">Loyer</td>
                <td className="py-1 px-2 text-right font-bold">{data.avisLoyer}</td>
              </tr>
              <tr className="border-b">
                <td className="py-1 px-2">Solde de charges 2020</td>
                <td className="py-1 px-2 text-right">{data.avisSoldeCharges}</td>
              </tr>
              <tr className="border-b">
                <td className="py-1 px-2">Régularisation eau 2020</td>
                <td className="py-1 px-2 text-right">{data.avisRegularisationEau}</td>
              </tr>
              <tr className="border-b">
                <td className="py-1 px-2">Provision sur charges (HP)</td>
                <td className="py-1 px-2 text-right">{data.avisProvisionCharges}</td>
              </tr>
              <tr className="border-b">
                <td className="py-1 px-2">Provision sur T.O.M. (HP)</td>
                <td className="py-1 px-2 text-right">{data.avisProvisionTOM}</td>
              </tr>
              <tr style={{ backgroundColor: "#e8f4f8" }}>
                <td className="py-1 border-r px-2"></td>
                <td className="py-1 px-2 font-bold">TOTAL de la période</td>
                <td className="py-1 px-2 text-right font-bold">{data.avisTotal}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Montant Net à Payer */}
        <div
          className="flex justify-between items-center p-3 mb-4"
          style={{
            backgroundColor: "#c8102e",
            color: "white",
          }}
        >
          <div className="font-bold text-lg">MONTANT NET A PAYER</div>
          <div className="text-right">
            <div className="font-bold text-2xl">{data.montantNetAPayer}</div>
            <div className="text-xs">Exigible le : {data.dateExigible}</div>
          </div>
        </div>

        {/* Footer with QR Code and Bank Info */}
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between items-start">
            {/* Logo repeat */}
            <div
              className="flex items-center"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "24px",
                fontWeight: "bold",
                color: "#1a365d",
              }}
            >
              <span style={{ color: "#c8102e" }}>P</span>ICHET
            </div>

            {/* Prélèvement Info */}
            <div className="text-xs flex-1 mx-6">
              <div className="font-bold mb-2" style={{ color: "#c8102e" }}>
                Prélèvement effectué le {data.prelevementDate} sur le compte indiqué ci-dessous
              </div>
              <div className="text-[8px] mb-2">Pour un règlement rapide, simple et sécurisé</div>
              <div className="mb-2">
                <strong>Montant prélevé :</strong> {data.montantPreleve} Euros.
              </div>
              <div className="grid grid-cols-2 gap-x-4 text-[8px]">
                <div><strong>ICS :</strong> {data.ics}</div>
                <div><strong>RUM :</strong> {data.rum}</div>
                <div><strong>IBAN :</strong> {data.iban}</div>
                <div><strong>BIC :</strong> {data.bic}</div>
              </div>
              <div className="mt-1 text-[8px]">
                <strong>Titulaire du compte :</strong> {data.titulaireCo}
              </div>
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center">
              {data.qrCodeImage ? (
                <img src={data.qrCodeImage} alt="QR Code" className="w-20 h-20" />
              ) : data.qrCodeUrl ? (
                <QRCodeSVG value={data.qrCodeUrl} size={80} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

PichetAvisEcheanceTemplate.displayName = "PichetAvisEcheanceTemplate";

export default PichetAvisEcheanceTemplate;

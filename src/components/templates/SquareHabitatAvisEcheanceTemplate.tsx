import { forwardRef } from "react";
import { SquareHabitatAvisEcheanceData } from "@/types/template";
import squareHabitatLogo from "@/assets/squarehabitatlogo.png";

interface SquareHabitatAvisEcheanceTemplateProps {
  data: SquareHabitatAvisEcheanceData;
}

const SquareHabitatAvisEcheanceTemplate = forwardRef<HTMLDivElement, SquareHabitatAvisEcheanceTemplateProps>(
  ({ data }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white text-black relative"
        style={{
          width: "210mm",
          minHeight: "297mm",
          padding: "10mm",
          fontFamily: "Poppins, sans-serif",
          fontSize: "9px",
          lineHeight: "1.3",
          boxSizing: "border-box",
        }}
      >
        {/* Header Section with Logo */}
        <div className="flex justify-start gap-4">
          {/* Left - Logo and Company Info */}
          <div className="flex flex-col gap-1">
            <div className="mb-1">
              <img
                src={data.logoUrl || squareHabitatLogo}
                alt="Square Habitat"
                style={{ height: "50px", objectFit: "contain"}}
              />
            </div>

            <div className="text-[12px] font-semibold leading-3">
              <div>{data.agencyName}</div>
              <div>{data.agencyAddress}</div>
              <div>{data.agencyCity}</div>
              <div>Tel: {data.agencyPhone}</div>
              <div>Fax: {data.agencyFax}</div>
            </div>

          </div>
          <div style={{ fontSize: "9px", color: "#666", lineHeight: "1.4" }}>
            <div>{data.companyLegal}</div>
            <div >{data.cardePro}</div>
            <div >{data.Adhérent}</div>
            <div >{data.agencyCode}</div>
          </div>
        </div>



        {/* Main Content Grid */}
        <div className="flex gap-6 mt-8">
          {/* Left Column - Document Title and Property Info */}
          <div className="w-full">
            <div className="flex flex-col gap-0 text-black mb-3 text-left" style={{ fontFamily: "Geometria W04 Light" }}>

              <div className="flex  w-full justify-start text-left p-[2px]">
                <p className="font-bold text-[10px] w-[70px]">Gestionnaire :</p>
                <span className="text-[10px] font-bold ml-2 ">{data.gestionnaireName} / {data.gestionnaireRef}</span>
              </div>

              <div className="flex w-full justify-start text-left p-[2px]">
                <p className="font-bold text-[10px] w-[70px]">Téléphone :</p>
                <span className="text-[10px] font-bold ml-2 "></span>

              </div>

              <div className="flex  w-full justify-start text-left p-[2px]">
                <p className="font-bold text-[10px] w-[70px] ">Courriel :</p>
                <span className="text-[10px] font-bold ml-2 "> {data.gestionnaireEmail}</span>
              </div>

            </div>

            <div className="border-2 border-black p-1 w-[200px] h-9 mb-1 mt-2">
              <h1 className="text-[18px] font-bold text-black mt-[-6px] ">
                AVIS D'ECHEANCE
              </h1>
            </div>

            <div className="mb-4 text-black">
              <div className="font-semibold text-[10px] mb-1 underline">Adresse du bien loué</div>
              <div className="text-[10px] font-medium">{data.propertyType}</div>
              <div className="text-[10px] font-medium">{data.propertyAddress}</div>
              <div className="text-[10px] font-medium">{data.propertyCity}</div>

            </div>

            <div className="flex flex-col gap-0 text-black" style={{ fontFamily: "Geometria W04 Light" }}>

              <div className="flex w-full text-[10px] font-bold ">
                <p className="font-bold text-[9px] w-[70px]">Locataire(s) :</p>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold ">{data.tenantName}</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column - Contact and Info */}

          <div className="flex flex-col justify-start gap-2 ml-[-360px] text-black pt-2">
            {/* Tenant Address Block */}
            <div className="flex flex-col justify-start mb-6 font-bold text-[12px] mt-6" style={{ fontFamily: "Geometria W04 Light" }}>
              <div className="w-[250px]">{data.tenantName}</div>
              <div>{data.tenantAddress2}</div>
              <div>{data.tenantAddress1}</div>
              <div>{data.tenantCity}</div>
            </div>

            <div className="mb-2">
              <div className="font-bold text-[12px]" style={{ fontFamily: "Geometria W04 Light" }}>{data.documentLocation}, le {data.documentDate}</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-8">
          <div className="flex  gap-3  text-black font-sans">
            {/* ================= LEFT TABLE ================= */}
            <table className="border border-black border-collapse w-full">
              <tbody>
                {/* HEADER */}
                <tr className="font-semibold text-center text-[11px] align-top w-full ">
                  <td className="pb-2 pt-1 align-top border-r border-b border-black bg-[#d9d9d9] w-[180px]"><div className="mt-[-10px] p-1">Type de lot</div></td>
                  <td className="pb-2 pt-1 border-r border-b border-black align-top bg-[#d9d9d9] w-[180px]"><div className="mt-[-10px] p-1">N° Lot</div></td>
                  <td className="pb-2 pt-1 align-top border-r border-b border-black bg-[#d9d9d9] w-[180px]"><div className="mt-[-10px] p-1">Propriétaire</div></td>
                  <td className="pb-2 pt-1 align-top bg-[#d9d9d9] border-b border-black w-[180px]"><div className="mt-[-10px] p-1">Référence</div></td>
                </tr>

                {/* DATA */}
                <tr className="h-6 border-b border-black w-full ">
                  <td className="px-2 text-[11px] align-top font-medium border-r  border-black">
                    <div className="mt-[-10px] p-1">{data.lotType}</div>
                  </td>
                  <td className="text-center  text-[11px] border-r border-black align-top font-medium"><div className="mt-[-10px] p-1">{data.lotNumber}</div></td>
                  <td className="px-2 text-[11px] align-top font-medium border-r border-b border-black">
                    <div className="mt-[-10px] p-1">{data.proprietaireNumber}</div>
                  </td>
                  <td className="px-2 text-[11px] align-top font-medium">
                    <div className="mt-[-10px] p-1">{data.referenceARappeler}</div>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

        {/* Quittance Section */}
        <div className="flex gap-4 text-[12px] text-black font-sans w-full mt-6">

          {/* ================= LEFT BLOCK ================= */}
          <div className="w-[310px] h-[300px]">

            {/* BLACK HEADER */}
            <div className="bg-black text-white text-center font-semibold pb-3 pt-0 uppercase text-[12px] align-top">
              Quittance de loyer
              <br />
              ou Indemnité d’Occupation
            </div>

            {/* CONTENT */}
            <div className="p-[2px] leading-tight text-justify">
              <p className="font-bold mb-2 text-[11px] align-top mt-2">
                du {data.quittancePeriodStart} au {data.quittancePeriodEnd} / {data.quittanceType}
              </p>

              <p className="text-[9px] justify-stretch text-left font-medium leading-[1.5em]">
                {data.disclaimerText}
              </p>
            </div>
          </div>

          {/* ================= RIGHT TABLE ================= */}
          <table className="w-[470px] border border-black border-collapse text-[12px] align-top">
            <tbody>

              {/* HEADER */}
              <tr className="bg-[#d9d9d9] font-semibold text-center align-top text-[10px] h-10 py-2">
                <td className="border-b border-black ">
                  QUITTANCE POUR LA PÉRIODE
                  <br />
                  DU {data.quittancePeriodStart} AU {data.quittancePeriodEnd}
                </td>
                <td className="border-b border-l border-r border-black w-[70px] align-middle">Débit</td>
                <td className="border-b  border-black w-[70px] align-middle">Crédit</td>
              </tr>

              {/* ROWS */}
              <tr className="h-1">
                <td className="px-2  text-[11px] leading-[1em] font-medium py-[3px] ">Loyer</td>
                <td className="border-l border-r border-black  px-2 py-[3px]  text-right text-[11px] leading-[1em] font-medium ">{data.quittanceLoyer}</td>
                <td className=""></td>
              </tr>

              <tr className=" pb-10">
                <td className="px-2 text-[11px] leading-[1em] align-top font-medium">
                  charges
                </td>
                <td className="border-l border-r  border-black  px-2  text-right text-[11px] leading-[1em] align-top font-medium">{data.quittanceCharges}</td>
                <td className=""></td>
              </tr>

              <tr className="h-6">
                <td className="px-2 text-[11px] leading-[1em] align-top font-medium text-center">
                  VOTRE REGLEMENT
                </td>
                <td className="border-l border-r  border-black "></td>
                <td className="px-2  text-right text-[10px] leading-[1em] align-top font-medium"> {data.quittanceTotalPeriode}</td>
              </tr>


              {/* TOTAL */}
              <tr className="font-semibold h-8">
                <td className="border-t border-black text-left px-3 text-[11px] flex justify-start gap-10">
                  <div>TOTAL de la période </div> <div>{data.quittanceTotalPeriode} Euros.</div>
                </td>
                <td className="border-l border-r border-t border-black  text-right px-2 text-[11px]">

                </td>
                <td className="border-t border-black"></td>
              </tr>

            </tbody>
          </table>

        </div>


        <div className="border-dashed border-gray-400 border-[0.1px] mt-2 mb-2"></div>

        {/* Avis d'Échéance Section  */}
        <div className="flex gap-4 text-[12px] text-black font-sans w-full mt-1">

          {/* ================= LEFT BLOCK ================= */}
          <div className="w-[310px]">

            {/* BLACK HEADER */}
            <div className="bg-black text-white text-center font-semibold pb-3 uppercase text-[12px] align-top">
              <span className="mt-[-10px]">AVIS D'ECHEANCE</span>
            </div>

            {/* CONTENT */}
            <div className="p-[2px] leading-tight text-justify">
              <p className="font-bold mb-2 text-[11px]  mt-4">
                du {data.quittancePeriodStart} au {data.quittancePeriodEnd} / Avance / Mens
              </p>

              <p className="text-[9px] justify-stretch text-left font-medium leading-[1.5em]">
                Nous vous informons que vous êtes redevable du montant de la somme
                détaillée ci-contre que nous vous invitons à régler dès réception du
                présent avis.<br></br><br></br>
                Cet avis est une demande de paiement.<br></br><br></br>
                Il ne peut en aucun cas servir de reçu ou de quittance de loyer

              </p>
            </div>
          </div>

          {/* ================= RIGHT TABLE ================= */}
          <table className="w-[470px] border border-black border-collapse text-[12px] align-top">
            <tbody>

              {/* HEADER */}
              <tr className="bg-[#C0C0C0] font-semibold text-center align-bottom">
                <td className="border-b border-black py-2 text-[12px] font-bold align-bottom">
                  Relevé de compte
                </td>
                <td className="border-b  border-black w-[70px] align-middle py-2">Débit</td>
                <td className="border-b  border-black w-[70px] align-middle py-2">Crédit</td>
              </tr>

              {/* ROWS */}
              <tr>
                <td className="px-2  leading-[1.5em] font-medium py-[3px] "></td>
                <td className="border-l border-r border-black  px-2 py-[3px]  text-right text-[10px] leading-[1.5em] font-medium "></td>
                <td className=""></td>
              </tr>
              {data.releve.map((item, index) => (
                <tr key={index}>
                  <td className="py-1 px-2 text-[10px] leading-[1em] font-medium ">
                    {item.date && <span>{item.date} </span>}
                    {item.description}
                  </td>
                  <td className="border-l border-r border-black  px-2 py-[3px]  text-right text-[10px] leading-[1em] font-medium">{item.debit}</td>
                  <td className="  px-2 py-[3px]  text-right text-[10px] leading-[1em] font-medium ">{item.credit}</td>
                </tr>
              ))}
              <tr>
                <td className="px-2 py-2 text-[10px] leading-[1.5em] align-top font-medium flex justify-start gap-10 mt-[100px]">
                  <div>TOTAL de la période</div> <span>{data.avisTotalPeriode}Euros.</span>
                </td>
                <td className=" border-l border-r border-black  px-2 py-2"> </td>
                <td className=""></td>
              </tr>



              {/* TOTAL */}
              <tr className="font-semibold bg-[#C0C0C0]">
                <td className="border-t border-black text-left px-2 text-[10px] leading-[1.2em] align-top font-bold pb-2">
                  MONTANT NET A PAYER<br></br>
                  <div className="text-[10px] font-medium">Exigible le : {data.dateExigible}</div>
                </td>
                <td className="border-black border-t text-right px-2 text-[10px] font-bold align-top pb-2">
                  {data.montantNetAPayer} <br></br>Euros.
                </td>
                <td className="border-t border-black"></td>
              </tr>

            </tbody>
          </table>

        </div>


        {/* Footer with QR Code and Bank Info */}
        <div className="flex mt-12 gap-2 p-2">
          <div className="flex justify-between items-start bg-[#C0C0C0] p-0 rounded-2xl w-[450px] h-[125px]">
            {/* Prélèvement Info */}
            <div className="flex-1 p-0">
              <div className="font-semibold text-center border-b-2 border-black text-[10px] px-4 pt-2 py-2">
                Prélèvement effectué le {data.prelevementDate} sur le compte indiqué ci-dessous
              </div>
              <div className="mt-2 ml-3 text-[11px] font-medium pb-1">
                <span className="font-semibold">Montant prélevé :</span> <span className="ml-4">{data.prelevementMontant}</span> Euros.
              </div>
              <div className="grid grid-cols-2 gap-1 text-[10px] ml-3 font-medium justify-start">
                <div className="text-[11px]"><span className="font-semibold">ICS :</span> {data.prelevementICS}</div>
                <div className="text-[11px] ml-[-80px]"><span className="font-semibold">RUM :</span> {data.prelevementRUM}</div>
                <div className="text-[11px]"><span className="font-semibold">IBAN :</span> {data.prelevementIBAN}</div>
                <div className="text-[11px] ml-[-10px]"><span className="font-semibold">BIC :</span> {data.prelevementBIC}</div>
                <div className="text-[11px] "> {data.tenantName} </div>
              </div>
            </div>
          </div>

          {/* Footer Banner */}
          <div className="flex flex-col items-start justify-around bg-[#009198] p-2 h-[150px] mt-[-20px] w-[300px]">
            <div className="text-left ml-2 text-[12px] font-medium text-white ">
              CONSULTER VOTRE COMPTE -
            </div>
            <div>
              <ul>
                <li className="text-[12px] text-white p-1">👉 {data.footerwebsitename}</li>
                <li className="text-[12px] text-white p-1">👉 {data.footername}</li>
              </ul>
            </div>
            <div className="mt-1 text-[12px] ml-1 font-normal text-white">
              identifiant espace ADB : {data.clientIdentifiant}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

SquareHabitatAvisEcheanceTemplate.displayName = "SquareHabitatAvisEcheanceTemplate";

export default SquareHabitatAvisEcheanceTemplate;

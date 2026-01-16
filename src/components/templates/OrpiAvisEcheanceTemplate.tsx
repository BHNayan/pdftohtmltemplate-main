import { forwardRef } from "react";
import { OrpiAvisEcheanceData } from "@/types/template";
import orpiLogo from "@/assets/orpilogo.png";

interface OrpiAvisEcheanceTemplateProps {
  data: OrpiAvisEcheanceData;
}

const OrpiAvisEcheanceTemplate = forwardRef<HTMLDivElement, OrpiAvisEcheanceTemplateProps>(
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
          boxSizing: "border-box",
        }}
      >
        {/* Header Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
          {/* Left - Agency Info */}
          <div>
            <div style={{ fontWeight: "bold", fontSize: "12px", color: "#DD1B10" }}>{data.agencyName}</div>
            <div style={{ fontSize: "11px" }} className="font-medium">{data.agencyAddress}</div>
            <div style={{ fontSize: "11px" }} className="font-medium">{data.agencyCity}</div>
            <div style={{ fontSize: "11px" }} className="font-medium">{data.agencyPhone}</div>
          </div>

          {/* Center - Orpi Logo */}
          <div style={{ textAlign: "center" }}>
            <img
              src={data.logoUrl || orpiLogo}
              alt="Orpi"
              style={{ height: "70px", objectFit: "contain" }}
            />
          </div>

          {/* Right - Services */}
          <div style={{ textAlign: "right", fontSize: "11px" }}>
            <div style={{ fontWeight: "bold", color: "#000" }}>Gestion locative</div>
            <div style={{ fontWeight: "bold", color: "#000" }}>Syndic de Copropriété</div>
            <div style={{ fontWeight: "bold", color: "#000" }}>Location - Transaction</div>
            <div style={{ color: "#4A7DB6", marginTop: "1px" }}>{data.agencyEmail}</div>
          </div>
        </div>

        {/* Company Legal Info */}
        <div className="flex justify-center text-[7px] text-center mt-4 mb-4">
          <div className="w-[55%]">{data.companyLegal}</div>
        </div>


        <div className="flex gap-6">
          {/* Left Column - Document Title and Property Info */}
          <div className="w-full">
            <h1
              className="text-[18px] font-medium mb-1 text-black"
            >
              AVIS D'ECHEANCE
            </h1>

            <div className="mb-4 text-black">
              <div className="font-semibold text-[10px] mb-1 underline">Adresse du bien loué</div>
              <div className="text-[10px] font-medium">{data.propertyDescription}</div>
              <div className="text-[10px] font-medium">{data.propertyAddress}</div>
              <div className="text-[10px] font-medium">{data.propertyCity}</div>
            </div>

            <div className="flex flex-col gap-0 text-black" style={{ fontFamily: "Geometria W04 Light" }}>

              <div className="flex  w-full justify-start mb-4">
                <p className="font-bold text-[9px] w-[70px]">Gestionnaire :</p>
                <span className="text-[10px] font-bold ">{data.gestionnaireName} / {data.gestionnairePhone} <br></br>{data.gestionnaireEmail}</span>
              </div>


              <div className="flex  w-full justify-start mb-2">
                <p className="font-bold text-[9px] w-[70px]">Compte Web :</p>
                <span className="text-[10px] font-bold ">{data.compteWeb}</span>
              </div>

              <div className="flex  w-full text-[10px] font-bold mb-1">
                <p className="font-bold text-[9px] ">Locataire(s) :<span className="ml-3"> {data.tenantName}</span></p>
              </div>
            </div>

          </div>

          {/* Right Column - Contact and Info */}


          <div className="flex flex-col justify-start gap-2 ml-[-360px] text-black pt-10">
            {/* Tenant Address Block */}
            <div className="flex flex-col justify-start mb-14 font-bold text-[12px]" style={{ fontFamily: "Geometria W04 Light" }}>
              <div>{data.tenantName}</div>
              <div>{data.tenantAddress1}</div>
              <div>{data.tenantAddress2}</div>
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
            <table className="border border-black border-collapse w-[300px]">
              <tbody>
                {/* HEADER */}
                <tr className="font-semibold text-center text-[11px] align-top ">
                  <td className="w-[40px] pb-2 pt-1 border-r border-black align-top bg-[#d9d9d9]">N° Lot</td>
                  <td className="pb-2 pt-1 align-top bg-[#d9d9d9]">Type de lot</td>
                </tr>

                {/* DATA */}
                <tr className="h-20 border-b border-black">
                  <td className="text-right px-1  text-[11px] border-r border-black align-top font-medium">{data.lotNumber}</td>
                  <td className="px-2 text-[11px] align-top font-medium">
                    {data.lotType}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* ================= MIDDLE TABLE ================= */}

            <div className="flex flex-col gap-2">
              <table className="border border-black border-collapse w-[270px] h-fit text-left align-middle">
                <tbody>
                  <tr>
                    <td className="border-b border-black bg-[#d9d9d9] font-semibold  pb-2 px-1 w-[160px] text-[11px]">
                      Propriétaire
                    </td>
                    <td className=" border-b border-black border-l pb-2 px-1 text-[11px] font-medium align-middle" >
                      {data.proprietaire}
                    </td>
                  </tr>
                  <tr>
                    <td className=" bg-[#d9d9d9] font-semibold  pb-2 px-1 text-[11px]">
                      Références à rappeler :
                    </td>
                    <td className=" border-black border-l border-b pb-2 px-1 text-[11px] font-medium align-middle">
                      {data.referenceARappeler}
                    </td>
                  </tr>
                </tbody>
              </table>
              <tr>
                <td colSpan={2} style={{ border: "none" }}></td>
                <td className="text-[10px] text-black font-semibold"><div className="ml-[-2.5px]">Informations</div></td>
                <td className="text-[10px] text-black font-normal"><div className="ml-[25px] rounded-xl pt-1 px-4 pb-4 border border-black border-dashed">{data.informationMessage}</div></td>
              </tr>
            </div>


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
        {/* Dotted Line Separator */}
        <div style={{ borderTop: "1px dashed #999", margin: "8px 0" }} />

        {/* Quittance Section */}
        <div className="flex gap-4 text-[12px] text-black font-sans w-full mt-6">

          {/* ================= LEFT BLOCK ================= */}
          <div className="w-[310px] h-[300px]">

            {/* BLACK HEADER */}
            <div className="bg-black text-white text-center font-semibold pb-3 pt-2 uppercase text-[12px] align-top">
              QUITTANCE DE LOYER<br></br>
              ou Indemnité d'Occupation
            </div>

            {/* CONTENT */}
            <div className="p-[2px] leading-tight text-justify">
              <p className="font-semibold mb-2 text-[12px] align-top mt-2">
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
              <tr className="bg-[#d9d9d9] font-bold text-center h-14 ">
                <td className="border-b border-black text-[10px] p-2">
                  <div className="mt-[-10px]">QUITTANCE POUR LA PERIODE<br />
                  DU {data.quittancePeriodStart} AU {data.quittancePeriodEnd}</div>
                </td>
                <td className="border-b border-l border-r border-black w-[70px] font-bold align-middle"><div className="mt-[-10px] p-2">Débit</div></td>
                <td className="border-b  border-black w-[70px] font-bold align-middle"><div className="mt-[-10px] p-2">Crédit</div></td>
              </tr>

              {/* ROWS */}

              <tr className="h-1">
                <td className="px-2  text-[10px] leading-[1.5em] font-medium "><div className="pt-4">LOYER</div></td>
                <td className="border-l border-r border-black  px-2   text-right text-[10px] leading-[1.5em] font-medium "><div className="pt-4">{data.quittanceLoyer}</div></td>
                <td className=""></td>
              </tr>

              <tr>
                <td className="px-2 text-[10px] leading-[1em] align-top font-medium">
                  CHARGES
                </td>
                <td className="border-l border-r  border-black  px-2  text-right text-[10px] leading-[1em] align-top font-medium">{data.quittanceCharges}</td>
                <td className=""></td>
              </tr>



              {/* TOTAL */}
              <tr className="font-semibold h-8">
                <td className=" border-t border-black text-left px-3 text-[11px] ">
                  <div className=" flex justify-between align-middle"><div className="mt-[-10px]">TOTAL de la période</div> </div>
                </td>
                <td className="border-l border-r border-t border-black  text-right px-2 text-[11px]">
                  <div className="mt-[-10px]">{data.quittanceTotalPeriode}</div>
                </td>
                <td className="border-t border-black"></td>
              </tr>

            </tbody>
          </table>

        </div>

        {/* Dotted Line Separator */}
        <div style={{ borderTop: "1px dashed #999", margin: "8px 0" }} />

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
              <p className="font-bold mb-2 text-[10px]  mt-4">
                du {data.avisPeriodStart} au {data.avisPeriodEnd} / {data.avisType}
              </p>

              <p className="text-[9px] justify-stretch text-left font-medium leading-[1.5em]">
                Nous vous informons que vous êtes redevable du montant de la somme détaillée ci-contre que nous vous invitons à régler dès réception du présent avis.<br></br>
                Cet avis est une demande de paiement.<br></br>
                Il ne peut en aucun cas servir de reçu ou de quittance de loyer.
              </p>
            </div>
          </div>

          {/* ================= RIGHT TABLE ================= */}
          <table className="w-[470px] border border-black border-collapse text-[12px] align-top">
            <tbody>

              {/* HEADER */}
              <tr className="bg-[#DDDDDD] font-bold text-left align-bottom" style={{ fontFamily: "'poppins',sans-serif " }}>
                <td className="border-b border-black py-2 text-[11px] font-bold align-bottom">
                  <div className="ml-2">AVIS D'ECHEANCE du {data.avisPeriodStart} au {data.avisPeriodEnd}</div>
                </td>
                <td className="border-b border-black w-[70px] align-middle py-2 text-[11px] font-semibold"><div className="ml-4">Débit</div></td>
                <td className="border-b border-black w-[70px] align-middle py-2 text-[11px] font-semibold"><div className="ml-4">Crédit</div></td>
              </tr>

              {/* ROWS */}
              <tr>
                <td className="px-2  leading-[1.5em] font-medium py-[3px] "></td>
                <td className="border-l border-r border-black  px-2 py-[3px]  text-right text-[10px] leading-[1.5em] font-medium "></td>
                <td className=""></td>
              </tr>
              {data.avisOperations.map((op, index) => (
                <tr key={index}>
                  <td className="py-1 px-2 text-[10px] leading-[1.5em] font-medium ">{op.date} <span>{op.description}</span></td>
                  <td className="border-l border-r border-black  px-2 py-[3px]  text-right text-[10px] leading-[1.5em] font-medium ">{op.debit}</td>
                  <td className="border-l border-r border-black  px-2 py-[3px]  text-right text-[10px] leading-[1.5em] font-medium ">{op.credit}</td>
                </tr>
              ))}

              <tr className="font-semibold h-20 p-2">
                <td className="text-left px-3 text-[11px] pt-12">
                  <p className="flex justify-between align-middle "><div className="py-2">TOTAL de la période</div> </p>
                </td>
                <td className="text-right px-2 text-[11px] border-r border-l border-black pt-12">
                  <div className="py-2">{data.avisTotalPeriode}</div>
                </td>
                <td className=""></td>
              </tr>


              {/* TOTAL */}
              <tr className="font-semibold bg-[#DDDDDD]">
                <td className="border-t border-black text-left px-2 text-[10px] leading-[1.2em] align-top font-bold pb-2">

                  <p className="flex justify-between text-[12px] align-middle font-bold "><div className="mb-1">Montant net à payer</div></p>
                  <div className="text-[10px] font-normal">Exigible le : {data.dateExigible}</div>

                </td>
                <td className="border-l border-r border-t border-black  text-right px-2 text-[10px] font-bold align-top pb-2">
                  {data.montantNetAPayer}
                </td>
                <td className="border-t border-black text-right px-2 text-[10px] font-bold align-top pb-2"></td>
              </tr>

            </tbody>
          </table>

        </div>


        {/* Footer with QR Code and Bank Info */}
        <div className="flex mt-12 pb-4">
          <div className="flex justify-between items-start bg-[#C0C0C0]  rounded-2xl w-[500px] h-[140px] pb-2">
            {/* Prélèvement Info */}
            <div className="flex-1 pb-4">
              <div className="font-medium text-center border-b-2 border-black text-[10px] px-4 pt-2 py-2">
                Prélèvement effectué le {data.prelevementDate} sur le compte indiqué ci-dessous
              </div>
              <div className="mt-1 ml-3 text-[10px] ">
                Référence :<span className="ml-4">{data.prelevementReference}</span>
              </div>
              <div className="mt-1 ml-3 text-[10px]  pb-1">
                Montant prélevé :<span className="ml-4">{data.prelevementMontant} </span> Euros.
              </div>
              <div className="flex gap-10 text-[10px] ml-3 justify-start">
                <div className="text-[10px]">ICS : {data.prelevementICS}</div>
                <div className="text-[10px]">RUM : {data.prelevementRUM}</div>
               

              </div>
              <div className="flex gap-10 text-[10px] ml-3 justify-start">
                <div className="text-[10px]">IBAN : {data.prelevementIBAN}</div>
                <div className="text-[10px]">BIC : {data.prelevementBIC}</div>

              </div>
              <div className="mt-1 text-[10px] ml-3 pb-4">
                Titulaire du compte : {data.prelevementTitulaire}
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
);

OrpiAvisEcheanceTemplate.displayName = "OrpiAvisEcheanceTemplate";

export default OrpiAvisEcheanceTemplate;

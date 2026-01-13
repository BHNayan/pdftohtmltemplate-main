import { forwardRef } from "react";
import { PichetParisQuittanceData } from "@/types/template";

import pichetlogo from "../../assets/pihet-logo.png";

interface PichetParisQuittanceTemplateProps {
  data: PichetParisQuittanceData;
}

const PichetParisQuittanceTemplate = forwardRef<HTMLDivElement, PichetParisQuittanceTemplateProps>(

  ({ data }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white p-4">
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
                className="text-[24px] font-bold text-black leading-[1.5em]  "
                style={{ fontFamily: "Geometria" }}
              >
                {data.agencyName}
              </div>

              <div
                className="text-[12px] leading-[1.5em] text-black font-medium"
                style={{ fontFamily: "Geometria" }}
              >
                {data.agencyAddress}
              </div>

              <div
                className="text-[12px] leading-[1.5em] text-black font-medium"
                style={{ fontFamily: "Geometria" }}
              >
                {data.agencyCity}
              </div>
            </div>

            {/* ================= PHONE + SERVICE ================= */}
            <div className="flex ">
              {/* PHONE NUMBER */}
              <p
                className="text-[12px] font-medium leading-[1.5em]  text-black "
                style={{ fontFamily: "Geometria" }}
              >
                Tél. : {data.agencyPhone}
              </p>


            </div>
            {/* ================= FOOTER LINKS ================= */}
            <div className="mt-4 leading-tight">
              <div
                className="text-[12px] text-black pb-1"
                style={{ fontFamily: "Geometria" }}
              >
                pichet.fr
              </div>

              <div
                className="text-[11px] font-medium"
                style={{ fontFamily: "Geometria" }}
              >
                Espace client :
                <span className="font-bold text-black text-[11px] ml-1" style={{ fontFamily: "Geometria" }}>
                  https://pichet.thetranet.fr
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Company Legal Info */}
        <div className=" mb-1  p-1 w-[360px] mt-[-80px] justify-stretch" >
          <div className="text-[8px]" style={{ fontFamily: 'Helvetica,sans-serif' }}>{data.companyName} - SARL au capital de 8 000 €</div>
          <div className="text-[8px]" style={{ fontFamily: 'Helvetica,sans-serif' }}>Siège social : {data.companySiege}</div>

          <div className="flex justify-between text-[8px] pb-1" style={{ fontFamily: 'Helvetica,sans-serif' }}>RCS Bordeaux {data.companyRCS} -  TVA intracommunautaire : {data.companyTVA} – Code APE {data.companyAPE} A {data.companyEmail} - {data.companyWebsite}</div>
          <div className="text-[8px]" style={{ fontFamily: 'Helvetica,sans-serif' }}>Carte professionnelle ({data.companyCartePro}) délivrée par la CCI de BORDEAUX</div>
          <div className="text-[8px]" style={{ fontFamily: 'Helvetica,sans-serif' }}>Garantie Financière délivrée par la  {data.companyGarantie} </div>
          <div className="text-[8px] pb-1" style={{ fontFamily: 'Helvetica,sans-serif' }}>Responsabilité Civile Professionnelle délivrée par {data.companyRC}</div>

          <div className="mt-1  bg-[#EDEDED] text-[8px]">
            <div className="text-[8px]" style={{ fontFamily: 'Helvetica,sans-serif' }}> Conformément à la loi « informatique et liberté » du 06/01/1978, vous disposez d'un droit d'accès et de rectifications aux informations
              vous concernant en vous adressant à :<span className="font-bold ">{data.companyEmail}</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex gap-6 ">
          {/* Left Column - Document Title and Property Info */}
          <div className="w-full ">
            <h1
              className="text-[18px] font-bold mb-1 text-black"
            >
              AVIS D'ECHEANCE
            </h1>

            <div className="mb-4 text-black">
              <div className="font-bold text-[11px] mb-1 underline">Adresse du bien loué</div>
              <div className="text-[10px] font-semibold">{data.propertyDescription}</div>
              <div className="text-[10px] font-semibold">{data.propertyAddress}</div>
              <div className="text-[10px] font-semibold">{data.tenantCity}</div>
             

            </div>

            <div className="flex flex-col gap-0 text-black" style={{ fontFamily: "Geometria W04 Light" }}>

              <div className="flex  w-full justify-start">
                <p className="font-bold text-[9px] w-[70px]">Assistante :</p>
                <span className="text-[10px] font-bold ">{data.assistantName} / {data.assistantPhone} <br></br>{data.assistantEmail}</span>
              </div>

              <div className="flex w-full justify-start">
                <p className="font-bold text-[9px] w-[70px]">Comptable :</p>
                <span className="text-[10px] font-bold ">{data.comptableName}/ {data.comptablePhone}<br></br>{data.comptableEmail}</span>

              </div>

              <div className="flex  w-full justify-start">
                <p className="font-bold text-[9px] w-[70px]">Compte Web :</p>
                <span className="text-[10px] font-bold ">{data.compteWeb}</span>
              </div>

              <div className="flex w-full text-[10px] font-bold ">
                <p className="font-bold text-[9px] w-[70px]">Locataire(s) :</p>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold ">{data.tenantName}</span>
                  <span className="text-[10px] font-bold ">{data.locataire2Name}</span>
                  <span className="text-[10px] font-bold ">{data.locataire1Name}</span>

                </div>
              </div>

            </div>

          </div>

          {/* Right Column - Contact and Info */}

          <div className="flex flex-col justify-start gap-2 ml-[-360px] text-black pt-2">
            {/* Tenant Address Block */}
            <div className="flex flex-col justify-start mb-6 font-bold text-[12px] mt-6" style={{ fontFamily: "Geometria W04 Light" }}>
              <div className="w-[250px]">{data.tenantName}</div>
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
          <div className="font-semibold text-[10px] mb-2" style={{ fontFamily: "Geometria W04 Light" }}>222610</div>
          <div className="flex  gap-3  text-black font-sans">

            {/* ================= LEFT TABLE ================= */}
            <table className="border border-black border-collapse w-[300px]">
              <tbody>
                {/* HEADER */}
                <tr className="font-semibold text-center text-[11px] align-top ">
                  <td className="w-[70px] pb-2 pt-1 border-r border-black align-top bg-[#d9d9d9]">N° Lot</td>
                  <td className="pb-2 pt-1 align-top bg-[#d9d9d9]">Type de lot</td>
                </tr>

                {/* DATA */}
                <tr className="h-20 border-b border-black">
                  <td className="text-center  text-[11px] border-r border-black align-top font-medium">{data.lotNumber}</td>
                  <td className="px-2 text-[11px] align-top font-medium">
                    {data.lotType}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* ================= MIDDLE TABLE ================= */}
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
              <p className="font-bold mb-2 text-[10px] align-top">
                du {data.quittancePeriodStart} au {data.quittancePeriodEnd} / Avance / Mens
              </p>

              <p className="text-[9px] justify-stretch text-left font-medium leading-[1.5em]">
                Dont quittance, sans préjudice du terme en cours, sous réserve de tous
                suppléments pouvant être dus en vertu des lois ou conventions
                applicables et sous réserve de tous les droits et actions du propriétaire,
                de toutes poursuites qui auraient pu être engagées et de toutes
                décisions de justice qui auraient pu être obtenues.<br></br>
                En cas de congé précédemment donné, cette quittance représenterait
                l'indemnité d'occupation et ne saurait être considérée comme un titre de
                location.<br></br>
                Cette quittance annule tous les reçus qui auraient pu être donnés pour
                acompte versé sur le présent terme, même si ces reçus portent une date
                postérieure à la date ci-contre. Le paiement de la présente quittance
                n'emporte pas présomption de paiement des termes antérieurs.
              </p>
            </div>
          </div>

          {/* ================= RIGHT TABLE ================= */}
          <table className="w-[470px] border border-black border-collapse text-[12px] align-top">
            <tbody>

              {/* HEADER */}
              <tr className="bg-[#d9d9d9] font-semibold text-center align-top text-[10px]">
                <td className="border-b border-black ">
                  QUITTANCE POUR LA PÉRIODE
                  <br />
                  DU {data.quittancePeriodStart} AU {data.quittancePeriodEnd}
                </td>
                <td className="border-b border-l border-r border-black w-[70px] align-middle">Débit</td>
                <td className="border-b  border-black w-[70px] align-middle">Crédit</td>
              </tr>

              {/* ROWS */}
              <tr>
                <td className="px-2  leading-[1em] font-medium py-[3px] "></td>
                <td className="border-l border-r border-black  px-2 py-[3px]  text-right text-[10px] leading-[1em] font-medium "></td>
                <td className=""></td>
              </tr>
              <tr>
                <td className="px-2  text-[10px] leading-[1em] font-medium py-[3px] ">Loyer</td>
                <td className="border-l border-r border-black  px-2 py-[3px]  text-right text-[10px] leading-[1em] font-medium ">{data.quittanceLoyer}</td>
                <td className=""></td>
              </tr>

              <tr>
                <td className="px-2 text-[10px] leading-[1em] align-top font-medium">
                  Provision sur charges (HP)
                </td>
                <td className="border-l border-r  border-black  px-2  text-right text-[10px] leading-[1em] align-top font-medium">{data.quittanceProvisionCharges}</td>
                <td className=""></td>
              </tr>

              <tr>
                <td className="px-2  text-[10px] leading-[1em] pb-16 align-top font-medium">
                  Provision sur T.O.M. (HP)
                </td>
                <td className=" border-l border-r border-black  px-2  text-right text-[10px] leading-[1em] pb-16 align-top font-medium">{data.quittanceProvisionTOM}</td>
                <td className=""></td>
              </tr>


              {/* TOTAL */}
              <tr className="font-semibold">
                <td className="border-t border-black text-left px-3 text-[11px] ">
                  TOTAL de la période
                </td>
                <td className="border-l border-r border-t border-black  text-right px-2 text-[11px]">
                  {data.quittanceTotal}
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
              <p className="font-bold mb-2 text-[10px]  mt-4">
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
                  AVIS D'ECHEANCE du {data.avisPeriodStart} au {data.avisPeriodEnd}
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
              <tr>
                <td className="py-1 px-2 text-[10px] leading-[1.5em] font-medium ">{data.soldeAnterieurDate} SOLDE ANTERIEUR</td>
                <td className="border-l border-r border-black  px-2 py-[3px]  text-right text-[10px] leading-[1.5em] font-medium ">{data.soldeAnterieurAmount}</td>
                <td className=""></td>
              </tr>

              <tr>
                <td className="px-2 text-[10px] leading-[1.5em] align-top font-medium">
                  {data.paiementDate} {data.paiementLabel}
                </td>
                <td className="border-l border-r  border-black  "></td>
                <td className="px-2  text-right text-[10px] leading-[1.5em] align-top font-medium ">{data.paiementAmount}</td>
              </tr>

              <tr>
                <td className="px-5  text-[10px] leading-[1.5em] align-top font-medium ">
                  Loyer
                </td>
                <td className=" border-l border-r border-black  px-2  text-right text-[10px] leading-[1.5em]  align-top font-medium">{data.avisLoyer}</td>
                <td className=""></td>
              </tr>

              <tr>
                <td className="px-5  text-[10px] leading-[1.5em] align-top font-medium ">
                  Provision sur charges (HP)
                </td>
                <td className=" border-l border-r border-black  px-2  text-right text-[10px] leading-[1.5em]  align-top font-medium ">{data.avisProvisionCharges}</td>
                <td className=""></td>
              </tr>
              <tr>
                <td className="px-5  text-[10px] leading-[1.5em] align-top font-medium pb-10">
                  Provision sur T.O.M. (HP)
                </td>
                <td className=" border-l border-r border-black  px-2  text-right text-[10px] leading-[1.5em]  align-top font-medium pb-10">{data.avisProvisionTOM}</td>
                <td className="pb-10"></td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-[10px] leading-[1.5em] align-top font-medium">
                  TOTAL de la période
                </td>
                <td className=" border-l border-r border-black  px-2 py-2 text-right text-[10px] leading-[1.5em]  align-top font-medium"> {data.avisTotal}</td>
                <td className=""></td>
              </tr>



              {/* TOTAL */}
              <tr className="font-semibold bg-[#C0C0C0]">
                <td className="border-t border-black text-left px-2 text-[10px] leading-[1.2em] align-top font-bold pb-2">
                  MONTANT NET A PAYER<br></br>
                  <div className="text-[10px] font-medium">Exigible le : {data.dateExigible}</div>
                </td>
                <td className="border-l border-r border-t border-black  text-right px-2 text-[10px] font-bold align-top pb-2">
                  {data.montantNetAPayer}
                </td>
                <td className="border-t border-black"></td>
              </tr>

            </tbody>
          </table>

        </div>


        {/* Footer with QR Code and Bank Info */}
        <div className="flex mt-2 p-0">
          <div className="flex justify-between items-start bg-[#C0C0C0] p-0 rounded-2xl w-full h-[125px]">
            {/* Prélèvement Info */}
            <div className="flex-1 p-0">
              <div className="flex gap-10 text-[10px] text-center border-b-2 border-black pb-2 px-2">

                <div className="font-semibold text-left  text-[10px]  pt-2 ">
                  Prélèvement effectué le {data.prelevementDate}
                </div>
                <div>
                  <div className="font-bold text-[10px]">Règlement d'un montant total de {data.prelevementTotal} Euros</div>
                  <div className="font-bold text-[10px] ">selon le détail ci-dessous</div>
                </div>



              </div>

              <div className="flex gap-1   font-bold  justify-between p-1">
                <div className="text-[9px]"><strong>{data.prelevement1Name}</strong> </div>

                <div className="flex gap-1 justify-start">
                  <div className="text-[9px]"><strong>PRLV - ICS :</strong> {data.prelevement1ICS}</div>
                  <div className="text-[9px] "><strong>RUM :</strong> {data.prelevement1RUM}</div>
                  <div className="text-[9px] "><strong>BIC :</strong> {data.prelevement1BIC}</div>
                  <div className="text-[9px]"><strong>IBAN :</strong> {data.prelevement1IBAN}</div>
                </div>

                <div className="text-[9px] "><strong>{data.prelevementTotal}</strong> </div>
              </div>
              <div className="mt-1 text-[10px] font-semibold">
                <span className="p-1">{data.prelevement2Name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


);

PichetParisQuittanceTemplate.displayName = "PichetParisQuittanceTemplate";

export default PichetParisQuittanceTemplate;

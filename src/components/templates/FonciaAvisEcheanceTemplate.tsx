import { forwardRef } from "react";
import { FonciaAvisEcheanceData } from "@/types/template";
import { QRCodeSVG } from "qrcode.react";
import { fontFamily } from "html2canvas/dist/types/css/property-descriptors/font-family";
import fonicalogo from '../../assets/fonica-logo.png';

interface FonciaAvisEcheanceTemplateProps {
  data: FonciaAvisEcheanceData;
}

const FonciaAvisEcheanceTemplate = forwardRef<HTMLDivElement, FonciaAvisEcheanceTemplateProps>(
  ({ data }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white shadow-lg mx-auto relative"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "10px",
          color: "#000",
        }}
      >


        <div className="p-4">
          <div className="border-b-4 border-[#EA6506]">
            {/* Header Section */}
            <div className="flex justify-between gap-0 mb-0 pb-0 items-end">
              {/* Left - Foncia Logo */}

              <div className="flex items-center p-2">
                {data.logoUrl ? (
                  <img src={data.logoUrl} alt="Logo" className="w-full h-[45px] object-contain" />
                ) : (
                  <>
                    <img
                      src={fonicalogo}
                      alt="Foncia"
                      className="w-full h-full"
                    />
                  </>
                )}
              </div>
              {/* Document Date and Ref Line with orange underline */}
              <div className="p-2 text-[11px] flex justify-between pb-2">
                <span>{data.documentDate}</span>
                <span className="mx-2">/</span>
                <span>{data.documentRef}</span>
              </div>

              {/* Right - Agency Info */}
              <div className="text-right mr-[40px] pb-2 ">
                <div className="font-bold text-[40px] text-right font-['Playfair_Display',serif] leading-[1.8em]" >{data.agencyNamemain}</div>
                <div className="font-bold text-[22px] text-right font-['Playfair_Display',serif]" >{data.agencyNamesub}</div>
                <div className="text-gray-500 text-[11px] font-['Inter',sans-serif] font-light">{data.agencyAddress1}</div>
                <div className="font-['Inter',sans-serif] font-light text-gray-500  text-[11px]">{data.agencyAddress2}</div>
                <div className="font-bold text-black text-[11px]">Tél : {data.agencyPhone}</div>
                <div className="font-thin text-gray-600 text-[10px]">Fax : {data.agencyFax}</div>
                <div className="font-thin text-black text-[10px]">{data.agencyEmail}</div>
              </div>
              {/* Blue vertical text on the right edge */}
              <div className="p-2 bg-[#EA6506] w-[30px] h-[170px] absolute right-4 top-13 ">
                <div
                  className="-rotate-90 text-white text-[16px] font-bold font-['Poppins',sans-serif] whitespace-nowrap mt-[130px] mr-3" >
                  www.foncia.com
                </div>
              </div>
            </div>
          </div>

          {/* Property Address and Tenant Block */}
          <div className="flex justify-between mb-4 mt-8">
            {/* Left - Property Address */}
            <div className="text-[12px]">
              <div
                className="font-meidum underline pb-[3px] text-[10px]"

              >
                Adresse de l'immeuble donné à bail
              </div>
              <div>{data.propertyName}</div>
              <div>{data.propertyAddress1}</div>
              <div>{data.propertyAddress2}</div>
            </div>

            <div className="flex flex-col justify-start gap-2  text-black  mr-[100px] mt-6">
              {/* Tenant Address Block */}
              <div className="flex flex-col justify-start mb-6 font-bold text-[12px]" style={{ fontFamily: "Geometria W04 Light" }}>
                <div>{data.tenantName}</div>
                <div>{data.tenantName2}</div>
                <div>{data.tenantName3}</div>
                <div>{data.tenantAddress1}</div>
                <div>{data.tenantAddress2}</div>
              </div>
            </div>
          </div>

          {/* Staff Info Section */}

          <div className=" flex justify-between gap-2">

            <div className=" flex flex-col justify-between border border-black p-0 w-[352px] mb-4 pb-2">
              <div className="font-bold mb-1 text-center bg-[#DDDDDD] text-black pb-2 align-top"><span className="mt-[-10px]">Les interlocuteurs à votre service</span></div>
              <div className=" text-[11px] flex justify-between">
                <span className="font-medium ml-3 ">Gestionnaire :</span> <span className="mr-[90px] text-left font-medium"> {data.gestionnaireName}</span> <span className=" text-right font-medium mr-1">{data.gestionnairePhone}</span>
              </div>
              <div className=" text-[11px] flex justify-between">
                <span className="font-medium ml-3 ">Comptable :</span> <span className="mr-[70px] text-left font-medium">{data.comptableName}</span> <span className=" text-right font-medium mr-1">{data.comptablePhone}</span>
              </div>
            </div>


            <div className="flex flex-col justify-start items-start text-left mr-24 gap-1">

              <div>
                <span className="font-medium text-[11px]">Référence :</span> {data.reference}
              </div>
              <div>
                <span className="font-medium text-[11px]">TVA Intra. :</span> {data.tvaIntra}
              </div>

            </div>


            <div className="flex justify-between">
              <div className="font-medium text-[10px]">Page N° 1/1</div>

            </div>

          </div>




          {/* Lot Info Table with Espace Client */}
          <div className="flex gap-2 mb-4 ">
            {/* Left - Lot table */}
            <table className="border-collapse flex-1">
              <tbody>

                <tr className="bg-[#DDDDDD] text-black">
                  <th className="border-t border-l border-r border-black p-0 text-center font-semimedium text-[10px] align-top">N° Lot</th>
                  <th className="border-t  border-r border-black p-0 text-center font-semimedium text-[10px] align-top">Ent.</th>
                  <th className="border-t  border-r border-black p-0 text-center font-semimedium text-[10px] align-top">Esc.</th>
                  <th className="border-t  border-r border-black p-0 text-center font-semimedium text-[10px] align-top">Et.</th>
                  <th className="border-t  border-r border-black p-0 text-center font-semimedium text-[10px] align-top">Porte</th>
                  <th className="border-t  border-r border-black p-0 text-center font-semimedium text-[10px] align-top">Type de lot</th>
                </tr>


                <tr >
                  <td className="border-l border-r border-black p-1 font-medium text-[10px] text-right leading-[0.2em]">{data.lotNumber}</td>
                  <td className="border-r  border-black p-1 font-medium text-[10px] text-center leading-[0.2em]">{data.entree}</td>
                  <td className="border-r  border-black p-1 font-medium text-[10px] text-center leading-[0.2em]">{data.escalier}</td>
                  <td className="border-r  border-black p-1 font-medium text-[10px] text-center leading-[0.2em]">{data.etage}</td>
                  <td className="border-r  border-black p-1 font-medium text-[10px] text-center leading-[0.2em]">{data.porte}</td>
                  <td className="border-r  border-black p-1 font-medium text-[10px] leading-[0.2em] ">{data.typeLot}</td>
                </tr>
                {data.lot2Number && (
                  <tr >
                    <td className="border-l border-r border-b border-black p-1 font-medium text-[10px] text-right leading-[0.2em] pb-8">{data.lot2Number}</td>
                    <td className=" border-r border-b border-black p-1 font-medium text-[10px] text-center leading-[0.2em] pb-8">{data.lot2Entree}</td>
                    <td className=" border-r border-b border-black p-1 font-medium text-[10px] text-center leading-[0.2em] pb-8">{data.lot2Escalier}</td>
                    <td className=" border-r border-b border-black p-1 font-medium text-[10px] text-center leading-[0.2em] pb-8">{data.lot2Etage}</td>
                    <td className=" border-r border-b border-black p-1 font-medium text-[10px] text-center leading-[0.2em] pb-8">{data.lot2Porte}</td>
                    <td className=" border-r border-b border-black p-1 font-medium text-[10px] leading-[0.2em] pb-8">{data.lot2Type}</td>
                  </tr>
                )}
              </tbody>
            </table>

            <div className="w-[250px]">

            </div>

            {/* Right - Espace Client box */}
            <div
              className=" w-[120px]  bg-[#F4F4F5] ">
              <div className="font-bold  bg-gradient-to-b from-[#1AB2CB] via-[#1AB2CB] to-[#005993] text-white pt-0 pb-4 text-[11px] text-center align-top tracking-widest"><span className="align-top items-center m-0 " style={{ fontFamily: 'Poppins' }}>ESPACE CLIENT</span></div>
              <div className="text-[10px] text-[#59C6D9] p-1 font-bold text-center">Pour vous identifier</div>

              <div className="flex flex-col text-left p-1 gap-1">
                <div className="flex flex-col gap-1">
                  <div className="text-[8px] text-left  text-gray-400">Votre identifiant</div>
                  <div className="font-bold border-1 border-gray-400 p-2 bg-[#ffffff] text-[8px] ">{data.clientId}</div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-[8px] text-left   text-gray-400">Votre mot de passe</div>
                  <div className="font-bold border-1 border-gray-400 p-2 bg-[#ffffff] text-[8px] ">{data.clientPassword}</div>
                </div>
              </div>

            </div>
          </div>


          {/* Quittance Section */}
          <div className="flex gap-4 text-[12px] text-black font-sans w-full mt-6">

            {/* ================= LEFT BLOCK ================= */}
            <div className="w-[310px] h-[300px]">

              {/* BLACK HEADER */}
              <div className="bg-black text-white text-center font-bold pb-3 pt-2 uppercase text-[12px] align-top">
                QUITTANCE DE LOYER<br></br>
                ou Indemnité d'Occupation
              </div>

              {/* CONTENT */}
              <div className="p-[2px] leading-tight text-justify">
                <p className="font-bold mb-2 text-[10px] align-top mt-2">
                  du {data.quittancePeriodStart} au {data.quittancePeriodEnd} {data.quittancePaymentType}
                </p>

                <p className="text-[9px] justify-stretch text-left font-medium leading-[1.5em]">
                  Dont quittance, sans préjudice du terme en cours, sous réserve de
                  tous suppléments pouvant être dus en vertu des lois ou
                  conventions applicables et sous réserve de tous les droits et
                  actions du propriétaire, de toutes poursuites qui auraient pu être
                  engagées et de toutes décisions de justice qui auraient pu être
                  obtenues.<br></br>
                  En cas de congé précédemment donné, cette quittance
                  représenterait l'indemnité d'occupation et ne saurait être
                  considérée comme un titre de location.<br></br>
                  Cette quittance annule tous les reçus qui auraient pu être donnés
                  pour acompte versé sur le présent terme, même si ces reçus
                  portent une date postérieure à la date ci-contre. Le paiement de la
                  présente quittance n'emporte pas présomption de paiement des
                  termes antérieurs.

                </p>
              </div>
            </div>

            {/* ================= RIGHT TABLE ================= */}
            <table className="w-[470px] border border-black border-collapse text-[12px] align-top">
              <tbody>

                {/* HEADER */}
                <tr className="bg-[#d9d9d9] font-bold text-center ">
                  <td className="border-b border-black ">
                    Quittance
                  </td>
                  <td className="border-b border-l border-r border-black w-[70px] font-bold align-middle">Débit</td>
                  <td className="border-b  border-black w-[70px] font-bold align-middle">Crédit</td>
                </tr>

                {/* ROWS */}
                <tr>
                  <td className="px-2  leading-[1em] font-medium py-[3px] "></td>
                  <td className="border-l border-r border-black  px-2 py-[3px]  text-right text-[10px] leading-[1em] font-medium "></td>
                  <td className=""></td>
                </tr>
                <tr>
                  <td className="px-2  text-[10px] leading-[1em] font-medium py-[3px] ">LOYER PRINCIPAL</td>
                  <td className="border-l border-r border-black  px-2 py-[3px]  text-right text-[10px] leading-[1em] font-medium ">{data.quittanceLoyerPrincipal}</td>
                  <td className=""></td>
                </tr>

                <tr>
                  <td className="px-2 text-[10px] leading-[1em] align-top font-medium">
                    PROVISION CHARGES
                  </td>
                  <td className="border-l border-r  border-black  px-2  text-right text-[10px] leading-[1em] align-top font-medium">{data.quittanceProvisionCharges}</td>
                  <td className=""></td>
                </tr>

                <tr>
                  <td className="px-2  text-[10px] leading-[1em] pb-16 align-top font-medium">
                    ASSURANCE PRIVILEGE ABP
                  </td>
                  <td className=" border-l border-r border-black  px-2  text-right text-[10px] leading-[1em] pb-16 align-top font-medium">{data.quittanceAssurance}</td>
                  <td className=""></td>
                </tr>


                {/* TOTAL */}
                <tr className="font-semibold bg-[#DDDDDD]">
                  <td className=" border-t border-black text-left px-3 text-[11px] ">
                    <p className=" flex justify-between align-middle">TOTAL de la période (Euros.) <span className="text-right">{data.quittanceTotal}</span></p>
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
                  du {data.avisPeriodStart} au {data.avisPeriodEnd} {data.quittancePaymentType}
                </p>

                <p className="text-[9px] justify-stretch text-left font-medium leading-[1.5em]">
                  Nous avons l'honneur de vous informer que vous êtes redevable
                  du montant de la somme détaillée ci-contre que nous vous invitons
                  à régler dès réception du présent avis.<br></br><br></br>
                  Cet avis est une demande de paiement.<br></br><br></br>
                  Il ne peut en aucun cas servir de reçu ou de quittance de loyer.

                </p>
              </div>
            </div>

            {/* ================= RIGHT TABLE ================= */}
            <table className="w-[470px] border border-black border-collapse text-[12px] align-top">
              <tbody>

                {/* HEADER */}
                <tr className="bg-[#DDDDDD] font-bold text-center align-bottom" style={{ fontFamily: "'poppins',sans-serif " }}>
                  <td className="border-b border-black py-2 text-[12px] font-bold align-bottom">
                    Relevé de compte
                  </td>
                  <td className="border-b border-l border-r border-black w-[70px] align-middle py-2">Débit</td>
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
                  <td className="px-10  text-[10px] leading-[1.5em] align-top font-medium ">
                    LOYER PRINCIPAL
                  </td>
                  <td className=" border-l border-r border-black  px-2  text-right text-[10px] leading-[1.5em]  align-top font-medium">{data.avisLoyerPrincipal}</td>
                  <td className=""></td>
                </tr>
                <tr>
                  <td className="px-10  text-[10px] leading-[1.5em]  align-top font-medium">
                    TAXES ENLEVEMENT O.M. {data.avisTaxesOMYear}
                  </td>
                  <td className=" border-l border-r border-black px-2  text-right text-[10px] leading-[1.5em]  align-top font-medium ">{data.avisTaxesOM}</td>
                  <td className=""></td>
                </tr>
                <tr>
                  <td className="px-10  text-[10px] leading-[1.5em] align-top font-medium">
                    ASSURANCE PRIVILEGE ABP
                  </td>
                  <td className=" border-l border-r border-black  px-2  text-right text-[10px] leading-[1.5em]  align-top font-medium">{data.avisAssurance}</td>
                  <td className=""></td>
                </tr>
                <tr>
                  <td className="px-10  text-[10px] leading-[1.5em] align-top font-medium pb-10 ">
                    PROVISION CHARGES
                  </td>
                  <td className=" border-l border-r border-black  px-2  text-right text-[10px] leading-[1.5em]  align-top font-medium pb-10 ">{data.avisProvisionCharges}</td>
                  <td className=""></td>
                </tr>

                <tr>
                  <td className="px-2 py-2 text-[10px] leading-[1.5em] align-top font-medium">
                    TOTAL de la période du {data.avisPeriodStart} au {data.avisPeriodEnd} {data.avisTotal}
                  </td>
                  <td className=" border-l border-r border-black  px-2 py-2 text-right text-[10px] leading-[1.5em]  align-top font-medium"> </td>
                  <td className=" px-2 py-2 text-right text-[10px] leading-[1.5em]  align-top font-medium"></td>
                </tr>



                {/* TOTAL */}
                <tr className="font-semibold bg-[#DDDDDD]">
                  <td className="border-t border-black text-left px-2 text-[10px] leading-[1.2em] align-top font-bold pb-2">

                    <p className=" flex justify-between align-middle">Montant net à payer (Euros.) <span className="text-right">{data.montantNetAPayer}</span></p>

                  </td>
                  <td className="border-l border-r border-t border-black  text-right px-2 text-[10px] font-bold align-top pb-2">
                    {data.totalCredits}
                  </td>
                  <td className="border-t border-black text-right px-2 text-[10px] font-bold align-top pb-2">{data.totalDebits}</td>
                </tr>

              </tbody>
            </table>

          </div>


          {/* Footer with QR Code and Bank Info */}
          <div className="flex mt-12 pb-2">
            <div className="flex justify-between items-start bg-[#C0C0C0]  rounded-2xl w-[500px] h-[120px]">
              {/* Prélèvement Info */}
              <div className="flex-1 pb-4">
                <div className="font-semibold text-center border-b-2 border-black text-[9px] px-4 pt-2 py-2">
                  Prélèvement effectué le sur le compte indiqué ci-dessous
                </div>
                <div className="mt-2 ml-3 text-[10px]  pb-1">
                  Montant prélevé :<span className="ml-4">{data.montantPreleve}</span> Euros.
                </div>
                <div className="flex gap-10 text-[10px] ml-3 justify-start">
                  <div className="text-[10px]">ICS : {data.ics}</div>
                  <div className="text-[10px]">RUM : {data.rum}</div>
                  <div className="text-[10px]">BIC : {data.bic}</div>

                </div>
                <div className="text-[10px] ml-3">IBAN : {data.iban}</div>
                <div className="mt-1 text-[10px] ml-3 pb-2">
                  Titulaire du compte : {data.titulaireCompte}
                </div>
              </div>
            </div>

            {/* Footer Banner */}
            <div className="flex flex-col items-center ml-3 font-semibold text-[10px]">
              <h1> Prélevé le : {data.prelevementDate} </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

FonciaAvisEcheanceTemplate.displayName = "FonciaAvisEcheanceTemplate";

export default FonciaAvisEcheanceTemplate;

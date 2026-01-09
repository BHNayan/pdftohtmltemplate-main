import { Home, FileText } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { AvisEcheanceData } from "@/types/template";
import { forwardRef } from "react";
import cdclogo from "@/assets/logo-default.png";
import qrLogo from "@/assets/qr.png";

interface AvisEcheanceTemplateProps {
  data: AvisEcheanceData;
}

const AvisEcheanceTemplate = forwardRef<HTMLDivElement, AvisEcheanceTemplateProps>(
  ({ data }, ref) => {
    return (
      <div ref={ref} className="bg-white text-gray-900 w-full max-w-[210mm] mx-auto shadow-lg font-sans text-[11px] leading-tight print:shadow-none print:max-w-none">
        {/* Header */}
        <div className="flex  items-center px-2  pt-3 pb-2 bg-white gap-2 ml-3">
          {/* Left - Logo */}
          <div className="flex items-center">
            {data.logoUrl ? (
              <img src={data.logoUrl} alt="Logo" className="w-full h-[42px] object-contain" />
            ) : (
              <>
                <img
                  src={cdclogo}
                  alt="CDC"
                  style={{ width: "200px", height: "100%" }}
                />
              </>
            )}
          </div>

          {/* Right - Agency Address */}
          <div className="text-[9px]  text-gray-700 text-left leading-[1.2] justify-start mt-[-15px] font-medium">
            <p className="font-medium text-gray-700">{data.agencyName}</p>
            <p className="font-medium text-gray-700">{data.agencyAddress1}</p>
            <p className="font-medium text-gray-700">{data.agencyAddress2}</p>
          </div>
        </div>


        {/* Main Content */}
        <div className="px-4 sm:px-6 pb-4 pt-8">
          {/* Top Row - Left info and Right Title/Address */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {/* Left Column - Company info */}
            <div className="flex-1 order-2 sm:order-1">
              <p className="text-[11px] text-gray-700 mb-3 font-medium">SIREN bailleur : {data.sirenBailleur}</p>

              <p className=" mb-0.5">
                <span className="text-gray-700 font-medium text-[11px] ">Votre service client : </span>
                <span className="text-gray-700 font-bold text-[11px] ">{data.serviceClient}</span>
              </p>
              <p className="text-[11px] text-black mb-0.5 font-normal ">{data.serviceHours}</p>
              <p className="text-[11px] text-gray-600 mb-3 font-medium">
                Votre espace web : <span className="text-gray-900  font-bold">{data.webspace}</span>
              </p>

              <div className="mb-4">
                <p className="text-[12px] font-bold text-gray-900 mb-1" >Référence client : {data.referenceClient}</p>
                <div className="flex flex-wrap">
                  <span className="text-[11px] text-gray-700 font-medium">Adresse du bien principal :</span>
                  <span className="text-[11px] text-gray-900 font-semibold ml-1" style={{ fontFamily: 'Geometria W04 Light' }}>{data.propertyName}</span>
                </div>
                <p className="text-[11px] text-gray-900 ml-0 sm:ml-[136px] font-semibold" style={{ fontFamily: 'Geometria W04 Light' }}>{data.propertyAddress1}</p>
                <p className="text-[11px] text-gray-900 ml-0 sm:ml-[136px] font-semibold" style={{ fontFamily: 'Geometria W04 Light' }}>{data.propertyAddress2}</p>
              </div>

              <div className="border-2 rounded-xl border-[#797979] p-1 flex gap-2 bg-white w-[335px] ">
                <div className="text-[#797979]  text-4xl flex-shrink-0 leading-none font-normal bg-white mt-[-38px]">ⓘ</div>
                <p className="text-[10px] text-gray-800 leading-[1.2em] font-medium ml-[-34px] mt-1 pb-1">
                  A partir de janvier 2021, le calcul du montant de votre aide au logement
                  change. Pour toute(s) question(s) relative(s) au nouveau mode de
                  calcul, merci de bien vouloir vous rapprocher de votre CAF ou de vous
                  connecter à www.mesdroitssociaux.gouv.fr
                </p>
              </div>
            </div>

            {/* Right Column - Title and Address */}
            <div className="w-full order-1 sm:order-2 mt-[-15px] ml-[-38px]">
              <div className="mb-4">
                <h1 className="text-[#c8102e] text-center text-[22px] sm:text-[30px] tracking-tight leading-[1.2em] font-bold">
                  AVIS D'ÉCHÉANCE
                </h1>
                <p className="text-gray-800 text-center text-[15px] font-semibold mt-1">N° {data.invoiceNumber} du {data.invoiceDate}</p>
                <p className="text-[10px] text-gray-500 mt-1 leading-[1.2em] font-medium  text-center ml-[20px]">
                  Cet avis d'échéance vaut quittance du mois précédent si vous êtes titulaire du
                  bail et n'avez pas de dette antérieure à la facturation du mois.
                </p>
              </div>

              <div className="mt-6 ml-12">
                <p
                  className="font-semibold text-[11.5px] m-1 tracking-widest  text-black leading-[1em]" style={{ fontFamily: 'Geometria W04 Light' }}>
                  {data.tenantName}
                </p>
                <p className=" font-semibold text-[11.5px] m-1 tracking-widest text-black leading-[1em]" style={{ fontFamily: 'Geometria W04 Light' }}>{data.tenantResidence}</p>
                <p className=" font-semibold text-[11.5px] m-1 tracking-widest text-black leading-[1em]" style={{ fontFamily: 'Geometria W04 Light' }}>{data.tenantDoor}</p>
                <p className="font-semibold text-[11.5px] m-1 tracking-widest text-black leading-[1em]" style={{ fontFamily: 'Geometria W04 Light' }}>{data.tenantAddress}</p>
                <p className="font-semibold text-[11.5px] m-1 tracking-widest text-black leading-[1em]" style={{ fontFamily: 'Geometria W04 Light' }}>{data.tenantCity}</p>
              </div>
            </div>
          </div>

          {/* Tables Row - Side by Side */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 mb-6 ">
            {/* Table 1 - Détail de l'échéance */}
            <div className="flex bg-[#F2F2F2] rounded-sm w-full ">
              <table className="w-full justify-start">
                <thead>
                  <tr>
                    <th className="px-2 py-1.5 text-left bg-white">
                      <div className="flex items-center gap-2">
                        <Home className="w-6 h-6 text-[#c8102e]" strokeWidth={1} />
                        <span className="font-bold text-[12px] text-[#c8102e]">
                          DÉTAIL DE L'ÉCHÉANCE
                        </span>
                      </div>
                    </th>
                    <th className="bg-white px-2 py-1.5 text-right text-[10px] text-gray-500 font-normal w-[80px]">
                      Montant (€)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-2 leading-[0.1em] ">
                      <p className="text-[12px] font-bold text-gray-900"> Logement N° {data.logementNumber}
                        <span className="text-[10.5px] font-medium">Du {data.periodStart} au {data.periodEnd}  </span>
                      </p>
                      <p className="text-[10px] font-medium mt-3">
                        Montant maximum du loyer conventionné : {data.conventionAmount} €
                      </p>
                    </td>
                  </tr>
                  <tr className=" py-0.5">
                    <td className="px-3 py-0.5 text-[11px] pl-8 font-medium leading-[0.2em] text-gray-600" > Loyer principal </td>
                    <td className="px-2 py-0.5 text-[12px] text-right leading-[0.2em]">{data.loyerPrincipal} </td>
                  </tr>

                  <tr className=" py-0.5">
                    <td className="px-3 py-0.5 text-[11px] pl-8 font-medium leading-[0.2em] text-gray-600" > Charges chauffage </td>
                    <td className="px-2 py-0.5 text-[12px] text-right leading-[0.2em]">{data.chargesChauffage} </td>
                  </tr>

                  <tr className=" py-0.5">
                    <td className="px-3 py-0.5 text-[11px] pl-8 font-medium leading-[0.2em] text-gray-600" >  Charges générales </td>
                    <td className="px-2 py-0.5 text-[12px] text-right leading-[0.2em]" > {data.chargesGenerales} </td>
                  </tr>

                  <tr>
                    <td className="px-3 py-0.5 text-[12px] font-bold text-right ">TOTAL ÉCHÉANCE </td>
                    <td className="px-2 py-0.5 text-[12px] font-bold text-right "> {data.totalEcheance}</td>
                  </tr>
                </tbody>
              </table>

            </div>


            {/* Table 2 - Situation de votre compte */}
            <div className="w-full ">
              <table className="w-full bg-[#F2F2F2]">
                <thead>
                  <tr className="bg-white">
                    <th className=" px-2 py-1.5 text-left">
                      <div className="flex items-center gap-2">
                        <FileText className="w-6 h-6 text-[#c8102e]" strokeWidth={1} />
                        <span className="font-bold text-[12px] text-[#c8102e]">SITUATION DE VOTRE COMPTE</span>
                      </div>
                    </th>
                    <th className="px-2 py-1.5 text-right text-[10px] text-gray-500 font-normal w-[70px]">Montant (€)</th>
                  </tr>
                </thead>
                <tbody >
                  <tr>
                    <td className=" px-3 py-1 text-[12px] font-bold text-gray-900 text-center">SOLDE au <span className="font-medium">{data.soldeDate1}</span></td>
                    <td className=" px-2 py-1 text-[12px] text-gray-900 text-right">{data.soldeAmount1}</td>
                  </tr>
                  <tr>
                    <td className=" px-3 py-1 text-[12px] font-bold text-gray-900 text-center">SOLDE au  <span className="font-medium">{data.soldeDate2}</span></td>
                    <td className="px-2 py-1 text-[12px] text-gray-900 text-right">{data.soldeAmount2}</td>
                  </tr>
                  <tr>
                    <td className=" px-3 py-1 text-[12px] text-gray-800 pl-[85px] ">Échéance</td>
                    <td className=" px-2 py-1 text-[12px] text-gray-800 text-right">{data.echeanceAmount}</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-1 text-[12px] font-bold text-gray-900 text-center pl-[40px] pb-4">SOLDE APRÈS ÉCHÉANCE</td>
                    <td className=" px-2 py-1 text-[12px] font-bold text-gray-900 text-right">{data.soldeApresEcheance}</td>
                  </tr>
                </tbody>
              </table>

              {/* A PAYER section with red background */}
              <div className="bg-[#F7CCCC] border-2 border-[#F7CCCC] mt-4">
                <div className="flex justify-between items-start px-2 py-2">
                  <div className="mt-[-10px]">
                    <p className="font-bold text-[12px] text-black">A PAYER AVEC LE TIP</p>
                    <p className="text-[11px] text-black">ci-dessous le {data.paymentDate}</p>
                  </div>
                  <span className="text-[12px] font-bold text-black">{data.paymentAmount}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[180px]">

          </div>

          {/* Footer Company Info */}
          <div className="mt-10 mb-4  text-[8.5px] text-black leading-[1.3em] text-left font-semibold  ml-4">
            <p>
              {data.footerCompanyName} – {data.footerAddress} – {data.footerLegalForm} au capital de {data.footerCapital}
            </p>
            <p>
              N° de TVA : {data.footerTvaNumber} – RCS {data.footerRcs} – {data.footerWebsite}
            </p>
          </div>


          {/* ================= TIP SEPA PAYMENT SLIP ================= */}
          <div className="w-full  font-[Arial] text-black text-[12px]">

            {/* ================= RIGHT MAIN BOX ================= */}
            <div className="border-l border-t border-gray-700 border-dashed">

              {/* ---------- TOP SECTION ---------- */}
              <div className="flex border-b border-black pb-1">

                {/* IBAN + MANDATE (LEFT) */}
                <div className="w-full p-1 ">
                  <p className="font-medium text-[11px] text-gray-700">IBAN : Prière de joindre un RIB</p>
                  <p className="font-medium text-[11px] text-gray-700">ICS : {data.ics}</p>
                  <p className="mb-4 font-medium text-[11px] text-gray-700">RUM : {data.rum}</p>

                  <div className="flex text-[11px] mb-2 w-[350px] border border-gray-300 p-10 justify-center">
                    <div className="w-full text-gray-800 mt-[-30px] ml-[20px]">Date et lieu</div>
                    <div className="w-full text-gray-800 mt-[-30px] ml-[20px]">Signature</div>
                  </div>

                  <p className="text-[10px] leading-[1.2em] text-justify">
                    Mandat de prélèvement SEPA ponctuel : en signant ce formulaire de mandat,
                    vous autorisez votre bailleur à envoyer des instructions à votre banque
                    pour débiter votre compte conformément aux instructions.
                    Vous bénéficiez du droit d'être remboursé par votre banque selon les
                    conditions décrites dans la convention que vous avez passée avec elle.
                    Toute demande de remboursement peut être présentée dans les 8 semaines
                    suivant la date de débit de votre compte.
                    <b>
                      Votre signature vaut autorisation pour débiter, à réception,
                      votre compte pour le montant indiqué.
                    </b>
                  </p>
                </div>

                {/* RIGHT INFO COLUMN */}
                <div className="w-full p-1">

                  {/* ADDRESS + AMOUNT (SIDE BY SIDE) */}
                  <div className="flex justify-between  mb-2 w-full">
                    <div>
                      <p className="font-semibold mb-1 mr-2 text-[11px] tracking-wider text-gray-800" style={{ fontFamily: 'Geometria W04 Light' }}>{data.tenantName}</p>
                      <p className="font-semibold text-[11px] tracking-wider text-gray-800"style={{ fontFamily: 'Geometria W04 Light' }}>{data.tenantResidence}</p>
                      <p className="font-semibold text-[11px] tracking-wider text-gray-800" style={{ fontFamily: 'Geometria W04 Light' }}>{data.tenantDoor}</p>
                      <p className="font-semibold text-[11px] tracking-wider text-gray-800" style={{ fontFamily: 'Geometria W04 Light' }}>{data.tenantAddress}</p>
                      <p className="font-semibold text-[11px] tracking-wider text-gray-800" style={{ fontFamily: 'Geometria W04 Light' }}>{data.tenantCity}</p>
                    </div>

                    <div className="w-[140px] mt-1">
                      <div className="bg-[#d9d9d9] py-3">
                        <p className="font-bold text-[12px]  text-center mt-[-12px]">
                          Montant : {data.paymentAmount} €
                        </p>
                      </div>

                      <p className="text-[#c8102e] font-bold text-[17px] text-center mt-[-8px] ">
                        TIPS€PA
                      </p>
                    </div>
                  </div>

                  {/* EMPTY GAP (IMAGE MATCH) */}
                  <div className="h-8"></div>

                  {/* AGENCY INFO */}
                  <div className="mb-4 ml-[120px] justify-center" style={{ fontFamily: 'Geometria W04 Light' }}>
                    <p className="font-semibold text-[11px] text-gray-800" style={{ fontFamily: 'Geometria W04 Light' }}>{data.footerCompanyName}</p>
                    <p className="font-semibold text-[10px] text-gray-800" style={{ fontFamily: 'Geometria W04 Light' }}>{data.agencyName}</p>
                    <p className="font-semibold text-[10px] text-gray-800" style={{ fontFamily: 'Geometria W04 Light' }}>CA : {data.referenceClient}</p>
                  </div>

                  <div className="mb-4 mt-2 ml-[120px] justify-center">
                    <p className="font-semibold text-[11px] text-gray-800" style={{ fontFamily: 'Geometria W04 Light' }}>{data.footerCompanyName}</p>
                    <p className="font-semibold text-[10px] text-gray-800" style={{ fontFamily: 'Geometria W04 Light' }}>CS {data.RefferCS}</p>
                    <p className="font-semibold text-[10px] text-gray-800" style={{ fontFamily: 'Geometria W04 Light' }}>{data.RefferAddress}</p>
                  </div>

                  <p className="text-[9px] mt-3 text-gray-700  pt-2 font-medium ">
                    NE RIEN INSCRIRE SOUS CE TRAIT - NE PAS PLIER
                  </p>
                </div>

              </div>

              {/* ---------- BOTTOM BARCODE ---------- */}
              <div className="border-t border-black p-2 text-left text-gray-900">
                <p className="tracking-[0.35em] font-bold mb-1 ml-8">
                  {data.barcodeText1}
                </p>

                <div className="flex justify-center gap-8 tracking-widest font-bold text-gray-900">
                  <span>{data.barcodeText2}</span>
                  <span>{data.barcodeText3}</span>
                  <span>{data.barcodeText4}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
);

AvisEcheanceTemplate.displayName = "AvisEcheanceTemplate";

export default AvisEcheanceTemplate;

import { Home, FileText } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { AvisEcheanceData } from "@/types/template";
import { forwardRef } from "react";

interface AvisEcheanceTemplateProps {
  data: AvisEcheanceData;
}

const AvisEcheanceTemplate = forwardRef<HTMLDivElement, AvisEcheanceTemplateProps>(
  ({ data }, ref) => {
    return (
      <div ref={ref} className="bg-white text-gray-900 w-full max-w-[210mm] mx-auto shadow-lg font-sans text-[11px] leading-tight print:shadow-none print:max-w-none">
        {/* Header */}
        <div className="flex  items-center px-4 sm:px-5 pt-3 pb-2 bg-white gap-10">
          {/* Left - Logo */}
          <div className="flex items-center">
            {data.logoUrl ? (
              <img src={data.logoUrl} alt="Logo" className="w-full h-[42px] object-contain" />
            ) : (
              <>
                <div className="flex flex-col">
                  <div className="flex items-baseline">
                    <span className="text-[#c8102e] font-bold text-[22px] sm:text-[24px] tracking-tight leading-none" style={{ fontFamily: "poppins" }}>cdc</span>
                    <span className="text-[#1a1a1a] font-bold text-[22px] sm:text-[24px] tracking-tight leading-none" style={{ fontFamily: "poppins" }}> habitat</span>
                  </div>
                  <span className="text-[#c8102e] text-[10px] sm:text-[11px] font-medium tracking-wide leading-none mt-0.5">social</span>
                </div>
                <div className="h-9 w-px bg-gray-400 mx-2"></div>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] bg-[#c8102e] flex items-center justify-center">
                    <div className="text-white text-center leading-[1.1]">
                      <p className="text-[5px] sm:text-[6px] font-normal">Caisse</p>
                      <p className="text-[5px] sm:text-[6px] font-normal">des Dépôts</p>
                      <p className="text-[4.5px] sm:text-[5px] font-normal tracking-tight uppercase border-t border-white/50 pt-0.5 mt-0.5">groupe</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right - Agency Address */}
          <div className="text-[12px] sm:text-[12px] text-gray-700 text-right leading-[1.4]">
            <p className="font-bold text-gray-900">{data.agencyName}</p>
            <p>{data.agencyAddress1}</p>
            <p>{data.agencyAddress2}</p>
          </div>
        </div>

        {/* Red line under header */}
        <div className="h-[2px] bg-[#c8102e] mx-4 sm:mx-5 mb-3"></div>

        {/* Main Content */}
        <div className="px-4 sm:px-6 pb-4">
          {/* Top Row - Left info and Right Title/Address */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {/* Left Column - Company info */}
            <div className="flex-1 order-2 sm:order-1">
              <p className="text-[14px] text-gray-600 mb-3">SIREN bailleur : {data.sirenBailleur}</p>

              <p className="text-[12px] mb-0.5">
                <span className="text-gray-700">Votre service client : </span>
                <span className="text-gray-600 font-bold text-[14px]">{data.serviceClient}</span>
              </p>
              <p className="text-[12px] text-gray-600 mb-0.5">{data.serviceHours}</p>
              <p className="text-[14px] text-gray-600 mb-5">
                Votre espace web : <span className="text-gray-600  font-semibold">{data.webspace}</span>
              </p>

              <div className="mb-4">
                <p className="text-[14px] font-bold text-gray-900 mb-1">Référence client : {data.referenceClient}</p>
                <div className="flex flex-wrap">
                  <span className="text-[12px] text-gray-600">Adresse du bien principal :</span>
                  <span className="text-[12px] text-gray-900 font-medium ml-1">{data.propertyName}</span>
                </div>
                <p className="text-[12px] text-gray-900 ml-0 sm:ml-[150px]">{data.propertyAddress1}</p>
                <p className="text-[12px] text-gray-900 ml-0 sm:ml-[150px]">{data.propertyAddress2}</p>
              </div>

              <div className="border-2 rounded-xl border-[#797979] p-1 flex gap-2 bg-white ">
                <div className="text-[#797979]  text-4xl flex-shrink-0 leading-none font-normal bg-white mt-[-30px]">ⓘ</div>
                <p className="text-[12px] text-gray-700 leading-relaxed font-semibold">
                  A partir de janvier 2021, le calcul du montant de votre aide au logement
                  change. Pour toute(s) question(s) relative(s) au nouveau mode de
                  calcul, merci de bien vouloir vous rapprocher de votre CAF ou de vous
                  connecter à www.mesdroitssociaux.gouv.fr
                </p>
              </div>
            </div>

            {/* Right Column - Title and Address */}
            <div className="w-full sm:w-[260px] order-1 sm:order-2">
              <div className="mb-4">
                <h1 className="text-[#c8102e] text-[24px] sm:text-[26px] font-black tracking-tight leading-[0.95]" style={{ fontFamily: "poppins" }}>
                  AVIS D'ÉCHÉANCE
                </h1>
                <p className="text-[#c8102e] text-[12px] font-bold mt-1">N° {data.invoiceNumber} du {data.invoiceDate}</p>
                <p className="text-[12px] text-gray-500 mt-2 leading-relaxed">
                  Cet avis d'échéance vaut quittance du mois précédent si vous êtes titulaire du
                  bail et n'avez pas de dette antérieure à la facturation du mois.
                </p>
              </div>

              <div className="mt-6" style={{ fontFamily: "Poppins" }}>
                <p className="font-bold text-[13px]">{data.tenantName}</p>
                <p className="text-[14px]">{data.tenantResidence}</p>
                <p className="text-[14px]">{data.tenantDoor}</p>
                <p className="text-[14px]">{data.tenantAddress}</p>
                <p className="text-[14px]">{data.tenantCity}</p>
              </div>
            </div>
          </div>

          {/* Tables Row - Side by Side */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 ">
            {/* Table 1 - Détail de l'échéance */}
            <div className="flex bg-[#F2F2F2] rounded-sm w-full">
              <table className="w-full ">
                <thead>
                  <tr className="bg-[#f3f4f6]">
                    <th className=" px-2 py-1.5 text-left bg-white">
                      <div className="flex items-center gap-2">
                        <Home className="w-6 h-6 text-[#c8102e]" strokeWidth={2} />
                        <span className="font-bold text-[14px] text-[#c8102e]">DÉTAIL DE L'ÉCHÉANCE</span>
                      </div>
                    </th>
                    <th className=" bg-white px-2 py-1.5 text-right text-[10px] text-gray-500 font-normal w-[80px]">Montant (€)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={2} className="px-3 py-2">
                      <p className="text-[12px] font-bold mb-0.5 text-gray-900">
                        Logement N° {data.logementNumber} Du {data.periodStart} au {data.periodEnd}
                      </p>
                      <p className="text-[12px] text-[#c8102e] mb-2">
                        Montant maximum du loyer conventionné : {data.conventionAmount} €
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className=" px-3 py-0.5 text-[12px] text-gray-700 pl-8">Loyer principal</td>
                    <td className=" px-2 py-0.5 text-[12px] text-gray-900 text-right">{data.loyerPrincipal}</td>
                  </tr>
                  <tr>
                    <td className=" px-3 py-0.5 text-[12px] text-gray-700 pl-8">Charges chauffage</td>
                    <td className=" px-2 py-0.5 text-[12px] text-gray-900 text-right">{data.chargesChauffage}</td>
                  </tr>
                  <tr>
                    <td className=" px-3 py-0.5 text-[12px] text-gray-700 pl-8">Charges générales</td>
                    <td className=" px-2 py-0.5 text-[12px] text-gray-900 text-right">{data.chargesGenerales}</td>
                  </tr>
                  <tr className="">
                    <td className=" px-3 py-2 text-[16px] font-bold text-gray-900 text-right">TOTAL ÉCHÉANCE</td>
                    <td className=" px-2 py-2 text-[14px] font-bold text-gray-900 text-right">{data.totalEcheance}</td>
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
                        <FileText className="w-4 h-4 text-[#c8102e]" strokeWidth={2} />
                        <span className="font-bold text-[14px] text-[#c8102e]">SITUATION DE VOTRE COMPTE</span>
                      </div>
                    </th>
                    <th className="px-2 py-1.5 text-right text-[12px] text-gray-500 font-normal w-[70px]">Montant (€)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className=" px-3 py-1 text-[12px] font-bold text-gray-900">SOLDE au {data.soldeDate1}</td>
                    <td className=" px-2 py-1 text-[12px] text-gray-900 text-right">{data.soldeAmount1}</td>
                  </tr>
                  <tr>
                    <td className=" px-3 py-1 text-[12px] font-bold text-gray-900">SOLDE au {data.soldeDate2}</td>
                    <td className="px-2 py-1 text-[12px] text-gray-900 text-right">{data.soldeAmount2}</td>
                  </tr>
                  <tr>
                    <td className=" px-3 py-1 text-[12px] text-gray-700 pl-6">Échéance</td>
                    <td className=" px-2 py-1 text-[12px] text-gray-900 text-right">{data.echeanceAmount}</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-1 text-[12px] font-bold text-gray-900">SOLDE APRÈS ÉCHÉANCE</td>
                    <td className=" px-2 py-1 text-[12px] font-bold text-gray-900 text-right">{data.soldeApresEcheance}</td>
                  </tr>
                </tbody>
              </table>

              {/* A PAYER section with red background */}
              <div className="bg-[#F7CCCC] border-2 border-[#F7CCCC] mt-4">
                <div className="flex justify-between items-center px-3 py-2">
                  <div>
                    <p className="font-bold text-[13px] text-black">A PAYER AVEC LE TIP</p>
                    <p className="text-[12px] text-black">ci-dessous le {data.paymentDate}</p>
                  </div>
                  <span className="text-[20px] font-bold text-black">{data.paymentAmount}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Company Info */}
          <div className="mt-8 pt-2 border-t border-gray-300 text-[10px] text-black leading-relaxed text-left font-semibold">
            <p>
              {data.footerCompanyName} – {data.footerAddress} – {data.footerLegalForm} au capital de {data.footerCapital}
            </p>
            <p>
              N° de TVA : {data.footerTvaNumber} – RCS {data.footerRcs} – {data.footerWebsite}
            </p>
          </div>

          {/* Payment Slip Section - TIP */}
          <div className="mt-6 border-t-2 border-dashed border-gray-500 pt-1">
            {/* Scissors indicator */}
            <div className="text-center -mt-3 mb-2">
              <span className="text-gray-500 text-[12px] bg-white px-2">✂</span>
            </div>

            <div className="">
              <div className="flex flex-col sm:flex-row">
                {/* Left - QR Code section with red left border */}
                <div className="border-4 border-[#c8102e] px-3 py-3 flex-shrink-0 bg-white text-center  ">
                  <div className=" text-black px-2 py-0.5 text-[14px] font-bold inline-block mb-2">
                    NOUVEAU !
                  </div>
                  <div className="mb-2">
                    <p className="text-[14px] font-bold text-black leading-tight">Paiement</p>
                    <p className="text-[14px] font-bold text-blak leading-tight">en ligne</p>
                  </div>
                  {/* QR code with phone illustration */}
                  <div className="flex flex-col items-center w-full h-full gap-2">

                    {/* MAIN QR CODE */}
                    <div className="w-full flex justify-center">
                      {data.qrCodeImage ? (
                        <img
                          src={data.qrCodeImage}
                          alt="QR Code"
                          className="w-32 h-32 object-contain"
                        />
                      ) : (
                        <QRCodeSVG
                          value={data.qrCodeUrl}
                          size={120}
                          level="M"
                        />
                      )}
                    </div>

                    {/* MOBILE QR PREVIEW */}
                    <div className="w-20 h-32 border-2 border-gray-600 rounded-md bg-white relative">

                      <div className="absolute top-1 left-1 right-1 bottom-3 border border-gray-300 flex items-center justify-center overflow-hidden">
                        {data.qrCodeImage ? (
                          <img
                            src={data.qrCodeImage}
                            alt="QR Code"
                            className="w-8 h-8 object-contain"
                          />
                        ) : (
                          <QRCodeSVG
                            value={data.qrCodeUrl}
                            size={28}
                            level="L"
                          />
                        )}
                      </div>

                      {/* phone speaker */}
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-1 bg-gray-500 rounded-full"></div>
                    </div>

                  </div>

                </div>

                {/* Middle - SEPA info */}
                <div className="flex-1 px-3 py-2 text-[14px] text-gray-900 border-r border-dashed border-gray-400 font-semibold">
                  <p className="mb-0.5"><span className="font-bold">IBAN :</span> <span className="text-gray-600">{data.iban}</span></p>
                  <p className="mb-0.5"><span className="font-bold">ICS :</span> <span className="text-gray-600">{data.ics}</span></p>
                  <p><span className="font-bold">RUM :</span> <span className="text-gray-600">{data.rum}</span></p>

                  <div className="flex mt-4 mb-1">
                    <div className="w-1/2">
                      <span className="text-gray-600 text-[12px]">Date et lieu</span>
                    </div>
                    <div className="w-1/2">
                      <span className="text-gray-600 text-[12px]">Signature</span>
                    </div>
                  </div>

                  <div className="flex gap-4 mb-3">
                    <div className="w-1/2 border-b border-dashed border-gray-400 h-6"></div>
                    <div className="w-1/2 border-b border-dashed border-gray-400 h-6"></div>
                  </div>

                  <p className="text-[12px] text-black leading-[1.3em] font-semibold">
                    Mandat de prélèvement SEPA ponctuel : en signant ce formulaire de mandat,
                    vous autorisez votre bailleur à envoyer des instructions à votre banque pour
                    débiter votre compte, et votre banque à débiter votre compte conformément
                    aux instructions de votre bailleur. Vous bénéficiez du droit d'être remboursé
                    par votre banque selon les conditions décrites dans la convention que vous
                    avez passée avec elle. Toute demande de remboursement peut être
                    présentée dans les 8 semaines suivant la date de débit de votre compte pour
                    un prélèvement autorisé. Vos droits concernant le présent mandat sont
                    expliqués dans un document que vous pouvez obtenir auprès de votre
                    banque. Le présent document à valeur de mandat de prélèvement SEPA
                    ponctuel. <span className="font-bold text-gray-700">Votre signature vaut autorisation pour débiter, à réception, votre
                      compte pour le montant indiqué.</span>
                  </p>
                </div>

                {/* Right - TIP Section */}
                <div className="w-full sm:w-[180px] px-3 py-2">
                  <div className="text-[12px] leading-snug" style={{ fontFamily: "poppins" }}>
                    <p className="font-bold text-black ">{data.tenantName}</p>
                    <p className="text-black font-semibold">{data.tenantResidence}</p>
                    <p className="text-black font-semibold">{data.tenantDoor}</p>
                    <p className="text-black font-semibold">{data.tenantAddress}</p>
                    <p className="text-black font-semibold">{data.tenantCity}</p>
                  </div>

                  <div className="text-right my-3 bg-[#D9D9D9] p-2">
                    <p className="text-[14px] font-bold text-gray-900">Montant : {data.paymentAmount} €</p>
                    <p className="text-[#c8102e] font-black text-[16px] tracking-[0.02em]" style={{ fontFamily: "poppins" }}>TIPS€PA</p>
                  </div>

                  <div className="text-[12px] leading-snug">
                    <p className="font-bold text-gray-900">{data.footerCompanyName}</p>
                    <p className="text-gray-700">{data.agencyName}</p>
                    <p className="text-gray-700">CA : {data.referenceClient}</p>
                  </div>

                  <div className="text-[12px] mt-2 leading-snug">
                    <p className="font-bold text-gray-900">{data.footerCompanyName}</p>
                    <p className="text-gray-700">CS:{data.RefferCS}</p>
                    <p className="text-gray-700">{data.RefferAddress}</p>
                  </div>

                  <p className="text-[10px] text-gray-500 mt-3 border-t border-gray-400 pt-1 uppercase tracking-tight font-semibold">NE RIEN INSCRIRE SOUS CE TRAIT - NE PAS PLIER</p>
                </div>
              </div>

              {/* Bottom Barcode Section */}
              <div className="border-t border-dashed border-gray-400 py-2 px-3 text-center" style={{ fontFamily: "Poppins" }}>
                <p className="text-[14px] tracking-[0.15em] text-gray-900 font-bold">{data.barcodeText1}</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-8 mt-2 text-[12px] tracking-[0.12em]">
                  <span className="text-gray-900 font-bold">{data.barcodeText2}</span>
                  <span className="text-gray-900 font-bold">{data.barcodeText3}</span>
                  <span className="font-bold text-gray-900 text-[14px]">{data.barcodeText4}</span>
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

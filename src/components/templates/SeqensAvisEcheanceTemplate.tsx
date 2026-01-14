import { forwardRef } from "react";
import { SeqensAvisEcheanceData } from "@/types/template";
import { QRCodeSVG } from "qrcode.react";
import seqencelogo from "@/assets/seqence-logo.png";

interface SeqensAvisEcheanceTemplateProps {
  data: SeqensAvisEcheanceData;
}

const SeqensAvisEcheanceTemplate = forwardRef<HTMLDivElement, SeqensAvisEcheanceTemplateProps>(
  ({ data }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white shadow-lg mx-auto"
        style={{
          padding: "10mm ",
          fontFamily: "Poppins, sans-serif",
          lineHeight: "1.3"
        }}
      >
        {/* Header with Logo and Title */}
        <div className="flex justify-between gap-4">
          {/* Left - Logo */}
          <div className="w-[50%] ml-10 mb-2">
            <div className=" border-b-[2px] border-blue-900 text-center w-[170px] ">
              {data.logoUrl ? (
                <img src={data.logoUrl} alt="Logo" className="w-full h-full object-contain " />
              ) : (
                <>
                  <img
                    src={seqencelogo}
                    alt="Seqence logo"
                    style={{ width: "150px", height: "100%" }}
                    className="ml-3"
                  />
                </>
              )}
            </div>

            <div className="text-[13px] font-semibold tracking-wide mb-4 mt-1" style={{ color: "#30436F", fontFamily: 'Poppins' }}>
              {data.companyGroup}
            </div>
          </div>

          {/* Right - Document Title */}
          <div className="w-[50%] flex-col mt-1 ">
            <div className="flex gap-1 ml-6 ">
              <div className=""><span className="text-[15px] text-center font-bold" style={{ color: "#28426D" }}>AVIS D'ECHEANCE</span> </div>
              <div className="text-center align-bottom "><span className=" font-medium text-[12px]" style={{ color: "#1a365d", fontFamily: 'Poppins' }}> {data.documentTitle}</span></div>
            </div>
            <div className="text-[12px] text-center font-semibold flex ml-6" style={{ color: "#28426D" }}>Facture n° {data.factureNumber}</div>
            <div className="text-[9px] mt-1 font-medium text-black text-left ml-6 w-[350px]" style={{ color: "#1a365d", fontFamily: 'Poppins' }}>
              Le présent avis d'échéance vaut quittance ou indemnité d'occupation des mois précédents si aucune somme ne reste due avant le terme appelé.
            </div>

            <div className="flex  justify-start gap-1 ml-6 mt-1 ">
              <div
                className="flex items-center justify-center text-[14px] font-bold mt-3"
                style={{
                  width: "20px",
                  height: "20px",
                  border: "2px solid #1a365d",
                  borderRadius: "50%",
                  color: "#1a365d"
                }}
              >
                <span className="-mt-4">i</span>
              </div>
              <div className="flex flex-col items-start justify-start ">
                <div className="text-[12px] font-semibold text-left " style={{ color: "#1a365d", fontFamily: 'Poppins' }}>
                  VOTRE RÉFÉRENCE CLIENT : <span className="text-black">{data.referenceClient}</span>
                </div>
                <div className="text-[10px] text-black font-semibold" style={{ color: "#1a365d" }}>à rappeler pour tout contact</div>
              </div>
            </div>

            {/* Date */}
            <div className="text-[12px] mb-4 text-left  font-medium ml-6  " style={{ fontFamily: 'Poppins' }} >
              Fait à {data.companyCity.split(' ')[1] || 'Issy-les-Moulineaux'}, le {data.factureDate}
            </div>
          </div>

        </div>

        <div className="flex justify-between items-start mt-[-55px] ">
          {/* Left - Company Legal Info */}
          <div className="text-[10px] text-gray-600 font-medium ml-4" style={{ color: "#28427F", maxWidth: "45%", fontFamily: 'Poppins' }}>
            <div>{data.companyAddress}</div>
            <div>{data.companyCity}</div>
            <div>{data.companyRCS}</div>
            <div>{data.companyCapital}</div>
            <div>ICS : {data.companyICS} - SIRET {data.companySIRET}</div>
            <div>{data.companyTVAI}</div>
          </div>
        </div>


        {/* Two Column Layout - Addresses */}
        <div className="flex justify-start gap-8 mb-4 mt-2">
          {/* Left Column - Correspondence and Residence */}
          <div className="w-full" >
            {/* Correspondence Address */}
            <div className="flex flex-col items-start gap-2 mb-3">
              <div className="flex">
                <div className="text-[30px] mt-[-15px]" style={{ color: "#1a365d" }}>✉</div>
                <div className="font-bold flex flex-col text-[10px]" style={{ color: "#1a365d" }}>{data.correspondenceIntro} <span className="text-[10px] font-medium">Une adresse unique pour vos courriers</span></div>
              </div>
              <div className="flex- flex-col gap-1 mt-[-5px] font-medium">
                <div className="text-[10px]">{data.correspondenceCompany}</div>
                <div className="text-[10px]">{data.correspondenceAddress1}</div>
                <div className="text-[10px]">{data.correspondenceAddress2}</div>
                <div className="text-[10px]">Tél : {data.correspondencePhone}</div>
                <div className="text-[10px]">{data.correspondenceWebsite}</div>
              </div>
            </div>

            {/* Residence Address */}
            <div className="mb-3">
              <div className="text-[10px] font-bold " style={{ color: "#1a365d" }}>{data.residenceLabel}</div>
              <div className="text-[10px] text-black font-medium" >{data.residenceName}</div>
              <div className="text-[10px] text-black font-medium" >{data.residenceAddress}</div>
              <div className="text-[10px] text-black font-medium" >{data.residenceCity}</div>
            </div>

            {/* Direction */}
            <div>
              <div className="text-[10px] font-bold" style={{ color: "#1a365d" }}>{data.directionName}</div>
              <div className="text-[10px] font-medium">{data.directionAddress}</div>
              <div className="text-[10px] font-medium">{data.directionCity}</div>
            </div>
          </div>

          {/* Right Column - Tenant */}
          <div className="w-full mt-10 " >
            <div className="text-[12px] font-medium text-black leading-5">{data.tenantName}</div>
            <div className="text-[12px] font-medium text-black leading-5" >{data.tenantAddress}</div>
            <div className="text-[12px] font-medium text-black leading-5" >{data.tenantCity}</div>
          </div>
        </div>

        {/* Convention Amount */}
        <div className="text-[11px] mb-3 text-black font-medium ">
          Montant du loyer maximum de la convention <span className="text-[10px] font-normal">(hors coefficient logement éventuel)</span> : <span className=" text-[10px] font-semibold" style={{ color: "#000000" }}>{data.conventionAmount} €</span>
        </div>

        {/* Main Content - Two Tables Side by Side */}
        <div className="flex gap-3 ">
          {/* Left Table - Détail de l'échéance */}
          <div className="w-[55%] ">
            <table className="w-full h-full bg-[#F2F3F4] " style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th
                    className="p-1 text-left text-white"
                    style={{
                      backgroundColor: "#1a365d"
                    }}
                  >
                    <div className="flex items-center gap-1">

                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 25 25">
                        <path fill="#ffffff" d="M 12 1.9199219 L 2.2460938 7.65625 L 1.8164062 7.9101562 L 2.3222656 8.7734375 L 2.7539062 8.5195312 L 3 8.375 L 3 21 L 21 21 L 21 8.375 L 21.246094 8.5195312 L 21.677734 8.7734375 L 22.183594 7.9101562 L 21.753906 7.65625 L 12 1.9199219 z M 12 3.0800781 L 20 7.7871094 L 20 20 L 16 20 L 16 11 L 8 11 L 8 20 L 4 20 L 4 7.7871094 L 12 3.0800781 z M 9 12 L 15 12 L 15 20 L 9 20 L 9 12 z"></path>
                      </svg>
                      <span className="font-normal text-[11px]">Détail de l'échéance</span>
                    </div>
                  </th>
                  <th
                    className="p-1 text-center text-white text-[8px] font-normal"
                    style={{
                      backgroundColor: "#1a365d",
                      width: "50px"
                    }}
                  >
                    TVA<br />en €
                  </th>
                  <th
                    className="p-1 text-center text-white text-[8px] font-normal"
                    style={{
                      backgroundColor: "#1a365d",
                      width: "65px"
                    }}
                  >
                    Montant<br />TTC en €
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Appartement Section Header */}
                <tr>
                  <td
                    colSpan={3}
                    className="px-2 py-1 font-medium text-[10px] "
                    style={{
                      color: "#1a365d",
                    }}
                  >
                    <span className="font-bold">Appart. N°{data.appartNumber} </span>du {data.appartPeriodStart} au {data.appartPeriodEnd}
                  </td>
                </tr>
                {/* Charge Rows */}
                <tr>
                  <td className="px-2 py-0.5 text-[10px] font-medium text-[#1A365D]" >Loyer conventionné</td>
                  <td className="px-2 py-0.5 text-right"></td>
                  <td className="px-2 py-0.5 text-right text-[9px] font-medium text-[#1A365D]" >{data.loyerConventionne} €</td>
                </tr>
                <tr>
                  <td className="px-2 py-0.5 text-[10px] font-medium text-[#1A365D]" >RLS CAF</td>
                  <td className="px-2 py-0.5 text-right"></td>
                  <td className="px-2 py-0.5 text-right text-[9px] font-medium text-[#1A365D]">- {data.rlsCAF} €</td>
                </tr>
                <tr>
                  <td className="px-2 py-0.5 text-[10px] font-medium text-[#1A365D]" >Aide pers. logement</td>
                  <td className="px-2 py-0.5 text-right"></td>
                  <td className="px-2 py-0.5 text-right text-[9px] font-medium text-[#1A365D]">- {data.aidePersonnelleLogement} €</td>
                </tr>
                <tr>
                  <td className="px-2 py-0.5 text-[10px] font-medium text-[#1A365D]" >Prov.Charges Ascenseur</td>
                  <td className="px-2 py-0.5 text-right"></td>
                  <td className="px-2 py-0.5 text-right text-[9px] font-medium text-[#1A365D]">{data.provChargesAscenseur} €</td>
                </tr>
                <tr>
                  <td className="px-2 py-0.5 text-[10px] font-medium text-[#1A365D]" >Prov.Charges Chauffage</td>
                  <td className="px-2 py-0.5 text-right"></td>
                  <td className="px-2 py-0.5 text-right text-[9px] font-medium text-[#1A365D]">{data.provChargesChauffage} €</td>
                </tr>
                <tr>
                  <td className="px-2 py-0.5 text-[10px] font-medium text-[#1A365D]" >Prov.Charges Locatives</td>
                  <td className="px-2 py-0.5 text-right"></td>
                  <td className="px-2 py-0.5 text-right text-[9px] font-medium text-[#1A365D]">{data.provChargesLocatives} €</td>
                </tr>
                <tr>
                  <td className="px-2 py-0.5 text-[10px] font-medium text-[#1A365D]" >Prov.Eau chaude</td>
                  <td className="px-2 py-0.5 text-right"></td>
                  <td className="px-2 py-0.5 text-right text-[9px] font-medium text-[#1A365D]" >{data.provEauChaude} €</td>
                </tr>
                <tr>
                  <td className="px-2 py-0.5 text-[10px] font-medium text-[#1A365D]" >Prov.Eau froide</td>
                  <td className="px-2 py-0.5 text-right"></td>
                  <td className="px-2 py-0.5 text-right text-[9px] font-medium text-[#1A365D]">{data.provEauFroide} €</td>
                </tr>

                {/* Stationnement Section */}
                {data.stationnementNumber && (
                  <>
                    <tr>
                      <td
                        colSpan={3}
                        className="px-2 py-1 pt-2  text-[10px] font-medium"
                        style={{
                          color: "#1a365d"
                        }}
                      >
                        <span className=" font-bold">Stationn. N° {data.stationnementNumber}</span> du {data.stationnementPeriodStart} au {data.stationnementPeriodEnd}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-2 py-0.5 text-[10px] font-medium text-[#1A365D]">Loyer stationnement</td>
                      <td className="px-2 py-0.5 text-right" ></td>
                      <td className="px-2 py-0.5 text-right text-[10px] font-medium text-[#1A365D]">{data.loyerStationnement} €</td>
                    </tr>
                  </>
                )}

                {!data.stationnementNumber && (
                  <tr>
                    <td>&nbsp;</td>
                    <td></td>
                    <td></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Right Table - Account Summary */}
          <div className=" w-[45%] flex flex-col justify-end gap-1 bg-[#F2F3F4]" >
            <table className="w-full h-full  bg-[#F2F3F4]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th
                    className="p-2 text-left text-white"
                    style={{
                      backgroundColor: "#1a365d",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <img width="30" height="30"
                        src="https://img.icons8.com/?size=100&id=2yaqM3oZZX7w&format=png&color=FFFFFF" />


                      <span className="font-normal text-[11px]">Dernières écritures<br />sur votre compte locataire</span>
                    </div>
                  </th>
                  <th
                    className="p-2 text-center text-white text-[8px] font-medium"
                    style={{
                      backgroundColor: "#1a365d",
                      width: "70px"
                    }}
                  >
                    Montant<br />TTC en €
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className="px-2 py-0.5 text-[10px] font-medium text-[#1A365D]">
                    {data.soldeFaveurDate} <span className="font-bold" style={{ color: "#1A365D" }}>Solde en notre faveur</span>
                  </td>
                  <td
                    className="px-2 py-0.5 text-right text-[10px] font-semibold text-[#1A365D]">
                    {data.soldeFaveurAmount}€
                  </td>
                </tr>
                <tr>
                  <td
                    className="px-2 py-0.5 text-[10px] font-medium text-[#1A365D]">
                    {data.prelevementDate} Prélèvement au 06
                  </td>
                  <td
                    className="px-2 py-0.5 text-right text-[10px] font-medium text-[#1A365D]">
                    - {data.prelevementHistAmount}€
                  </td>
                </tr>
                <tr>
                  <td
                    className="px-2 py-0.5 text-[10px] font-medium text-[#1A365D] ">
                    <span className="ml-[62px]">Solde avant échéance</span>
                  </td>
                  <td
                    className="px-2 py-0.5 text-right text-[10px] font-medium text-[#1A365D]">
                    {data.soldeAvantEcheance}€
                  </td>
                </tr>
                <tr>
                  <td
                    className="px-2 py-0.5 text-[10px] font-medium text-[#1A365D]">
                    <span className="ml-[62px]">Montant total de l'échéance</span>
                  </td>
                  <td
                    className="px-2 py-0.5 text-right text-[10px] font-medium text-[#1A365D]">
                    {data.montantTotalEcheance}€
                  </td>
                </tr>
                <tr>
                  <td
                    className="px-2 py-0.5 text-[10px] font-medium text-[#1A365D]">
                    <span className="ml-[62px]">Solde après échéance</span>
                  </td>
                  <td
                    className="px-2 py-0.5 text-right text-[10px] font-medium text-[#1A365D]">
                    {data.soldeApresEcheance}€
                  </td>
                </tr>
              </tbody>
            </table>
            {/* Montant prélevé */}
            <div className="mt-8 p-2 flex justify-between  align-bottom font-bold text-right text-[9px]  w-full text-[#1a365d]">
              <span className="ml-16">MONTANT PRELEVE LE {data.montantPreleveDate}</span>
              <span>{data.montantPreleve} €</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4">
          <div className="mb-1 text-[8px] font-semibold text-[#1A365D]">{data.footerText1}</div>
          <div className="text-red-500 text-[8px] font-semibold">{data.footerText2}</div>
          <div className="text-red-500 text-[8px] font-semibold">Reference Unique de Mandat : {data.rumNumber}</div>
        </div>

        {/* Separate Parking Charges Box */}
        {(data.provChargesAscenseurParking || data.provChargesParking) && (
          <div className="mt-14" style={{ width: "58%" }}>
            <table className="w-full text-[10px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th
                    className="p-1 text-left text-white"
                    style={{
                      backgroundColor: "#1a365d"
                    }}
                  >
                    <div className="flex items-center gap-1">

                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 25 25">
                        <path fill="#ffffff" d="M 12 1.9199219 L 2.2460938 7.65625 L 1.8164062 7.9101562 L 2.3222656 8.7734375 L 2.7539062 8.5195312 L 3 8.375 L 3 21 L 21 21 L 21 8.375 L 21.246094 8.5195312 L 21.677734 8.7734375 L 22.183594 7.9101562 L 21.753906 7.65625 L 12 1.9199219 z M 12 3.0800781 L 20 7.7871094 L 20 20 L 16 20 L 16 11 L 8 11 L 8 20 L 4 20 L 4 7.7871094 L 12 3.0800781 z M 9 12 L 15 12 L 15 20 L 9 20 L 9 12 z"></path>
                      </svg>
                      <span className="font-normal text-[11px]">Détail de l'échéance</span>
                    </div>
                  </th>
                  <th
                    className="p-1 text-center text-white text-[8px] font-normal"
                    style={{
                      backgroundColor: "#1a365d",
                      width: "50px"
                    }}
                  >
                    TVA<br />en €
                  </th>
                  <th
                    className="p-1 text-center text-white text-[8px] font-normal"
                    style={{
                      backgroundColor: "#1a365d",
                      width: "65px"
                    }}
                  >
                    Montant<br />TTC en €
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.provChargesAscenseurParking && (
                  <tr>
                    <td className="px-2 py-0.5" style={{ color: "#1a365d" }}>Prov.Charges Ascenseur</td>
                    <td className="px-2 py-0.5 text-right"></td>
                    <td className="px-2 py-0.5 text-right">{data.provChargesAscenseurParking} €</td>
                  </tr>
                )}
                {data.provChargesParking && (
                  <tr>
                    <td className="px-2 py-0.5" style={{ color: "#1a365d" }}>Prov.Charges Parking</td>
                    <td className="px-2 py-0.5 text-right"></td>
                    <td className="px-2 py-0.5 text-right">{data.provChargesParking} €</td>
                  </tr>
                )}
                {/* Total Row */}
                <tr>
                  <td
                    colSpan={2}
                    className="px-2 py-2 text-right font-bold"
                    style={{
                      color: "#1a365d",
                    }}
                  >
                    MONTANT TOTAL DE L'ECHEANCE
                  </td>
                  <td
                    className="px-2 py-2 text-right font-bold"
                    style={{
                      color: "#1a365d",
                    }}
                  >
                    {data.montantTotalEcheance} €
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
);

SeqensAvisEcheanceTemplate.displayName = "SeqensAvisEcheanceTemplate";

export default SeqensAvisEcheanceTemplate;

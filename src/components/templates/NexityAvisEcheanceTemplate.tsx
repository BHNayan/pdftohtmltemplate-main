import { forwardRef } from "react";
import { NexityAvisEcheanceData } from "@/types/template";
import nexityLogo from "@/assets/nexity-logo.png";
import gesitation from "@/assets/gesitation.png";

interface NexityAvisEcheanceTemplateProps {
  data: NexityAvisEcheanceData;
}

const NexityAvisEcheanceTemplate = forwardRef<HTMLDivElement, NexityAvisEcheanceTemplateProps>(
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
        }}
      >
        {/* Header Section */}
        <div className="flex justify-between mb-2 pb-4 gap-2" style={{ borderBottom: "3px solid #c8102e"}}>
          {/* Left - Logo */}
          <div className="flex flex-col items-start w-[400px] gap-1">
            <img
              src={data.logoUrl || nexityLogo}
              alt="Nexity"
              style={{ height: "65px", objectFit: "contain" }}
            />
            <div className="fle flex-col ">
              <div className="text-[10px]  text-black leading-[1em]">Services immobiliers aux particuliers</div>
              <div className="text-[#D02742] text-[10px] leading-[1.5em]">www.nexity.fr</div>
              <div className="text-[8px] leading-[1.5em] text-gray-800">
                {data.companyLegal1}<br />
                {data.companyLegal2}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-2">
              {/* Center - Agency Info */}
              <div className="w-full bg-[#CBCECF] text-left  p-2 h-[80px]">
                <div className="font-semibold text-[12px] leading-[1.2em]">{data.agencyName}</div>
                <div className="text-[12px] leading-[1.2em]">{data.agencyAddress}</div>
                <div className="text-[12px] leading-[1.2em]">{data.agencyCity}</div>
              </div>

              {/* Right - Interlocuteur */}
              <div className="w-full bg-[#CBCECF] text-left  p-2 h-[80px]">
                <div className="font-semibold text-[12px]">{data.interlocuteurTitle}</div>
                <div className="text-[9px]">Contactez vous depuis votre Espace MyNexity</div>
                <div className="text-[10px]">{data.interlocuteurWebsite}</div>
              </div>
               {/* gesitation-logo */}
              <div>
                <img
                  src={gesitation}
                  alt="gesitation"
                  className="w-[130px] h-[60px]"
                />
              </div>
            </div>

            {/* Promotional Banner */}
            <div className="text-[10px] font-semibold">
              <div className="w-[88%]">{data.bannerText}</div>
            </div>
          </div>
        </div>


        {/* Red Header Bar - AVIS D'ÉCHÉANCE */}
        <div className="flex justify-start gap-10">
          <div className="w-[400px] flex flex-col">
            <div style={{ fontWeight: "bold", fontSize: "11px" }} className="w-[350px]" >
              <div className="bg-[#c8102e] p-2 text-center text-[14px] font-medium text-white"><div className="-mt-4 p-1">AVIS D'ÉCHÉANCE - APPEL DE LOYER</div></div>
            </div>

            <div className=" text-left leading-4 mt-1 text-[12px]">
              <span className="text-[11px] font-medium text-black">PÉRIODE :</span> du{" "}
              <span className="text-[11px] font-bold text-black">{data.periodStart}</span> au{" "}
              <span className="text-[11px] font-bold text-black">{data.periodEnd}</span>
              <div className=" flex justify-start items-start gap-3">
                <span className="text-[11px] font-medium  text-black">VOS RÉFÉRENCES :</span> <span className="font-bold text[10px]">{data.prelevementReferenceClient}{" "}</span>
                <span className="text-[11px] font-medium text-black ">N° DE COUPON :</span> <span className="font-bold text[10px]"> {data.couponNumber}</span>
              </div>
            </div>

            {/* Building Address Box */}
            <div className="w-[300px] mt-4 border-[1px] border-black align-top mb-1">
              <div className="text-center font-medium text-black text-[12px] border-b-[1px] border-b-black p-2"><div className="p-1 mt-[-12px]">Adresse principale de l'immeuble</div></div>
              <div className="ml-[2px] text-left font-medium text-black text-[10px]"><div className="mt-[-2px] pb-1">{data.buildingAddress}</div></div>
              <div className="ml-[2px] text-left font-medium text-black text-[10px] pb-4 "> <div className="mt-[-2px] pb-2">{data.buildingCity}</div></div>
            </div>
            <div>
              {/* Lot Table */}
              <table style={{ width: "300px", marginTop: "6px", marginBottom: "10px", borderCollapse: "collapse", fontSize: "9px" }}>
                <thead>
                  <tr style={{ backgroundColor: "#f0f0f0" }}>
                    <th style={{ border: "1px solid #000" }} ><div className="p-2 mt-[-10px]">LOT</div></th>
                    <th style={{ border: "1px solid #000" }}><div className="p-2 mt-[-10px]">TYPE DE LOT</div></th>
                    <th style={{ border: "1px solid #000" }}><div className="p-2 mt-[-10px]">BAT</div></th>
                    <th style={{ border: "1px solid #000"}}><div className="p-2 mt-[-10px]">ESC</div></th>
                    <th style={{ border: "1px solid #000" }}><div className="p-2 mt-[-10px]">ETAGE</div></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: "1px solid #000"  }}><div className="p-2 mt-[-10px] text-[10px] font-medium">{data.lotNumber}</div></td>
                    <td style={{ border: "1px solid #000"  }}><div className="p-2 mt-[-10px] text-[10px] font-medium">{data.lotType}</div></td>
                    <td style={{ border: "1px solid #000"  }}><div className="p-2 mt-[-10px] text-[10px] font-medium">{data.batiment}</div></td>
                    <td style={{ border: "1px solid #000"  }}><div className="p-2 mt-[-10px] text-[10px] font-medium">{data.escalier}</div></td>
                    <td style={{ border: "1px solid #000" }}><div className="p-2 mt-[-10px] text-[10px] font-medium">{data.etage}</div></td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

          {/* Period and Tenant Info Row */}
          <div className="flex justify-start mb-3 gap-1">
            <div className="flex flex-col gap-1">
              <div className="text-[10px] font-normal text-black mb-1 ">{data.documentRef}</div>
              <div className="text-[13px] font-semibold text-black leading-3">{data.tenantName}</div>
              <div className="text-[13px] font-semibold text-black leading-3">{data.tenantApartment}</div>
              <div className="text-[13px] font-semibold text-black leading-3">{data.tenantAddress}</div>
              <div className="text-[13px] font-semibold text-black leading-3">{data.tenantCity}</div>
            </div>
          </div>
        </div>


        {/* myNexity Login Box */}
        <div className=" flex justify-between mb-2 p-1 items-end ml-[-5px]">
          <div className="w-[350px] text-[10px] bg-[#F09F95] pb-1 ">
            <div className="mt-[-5px] p-1">
              Télécharger l'appli Espace Privé Nexity ou aller sur <span style={{ fontWeight: "bold" }}>{data.loginUrl}</span>
              <br />
              <span style={{ fontWeight: "bold" }}>Login :</span> {data.loginEmail}
            </div>
          </div>
          <div style={{ textAlign: "right", fontSize: "12px" }} className=" align-bottom font-medium">
            {data.documentLocation}, le {data.documentDate}
          </div>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="flex gap-2 w-full" style={{ marginBottom: "6px" }}>
          {/* Left Column - Avis d'Échéance - Loyer */}
          <div className="w-[40%]">
            {/* Green Header */}
            <div className=" bg-[#8C8D8F] text-center p-3 rounded-lg text-[12px] font-semibold ">
              <div className="mt-[-10px] mb-1">AVIS D'ÉCHÉANCE - LOYER<br></br></div>
              <div className="text-[9px] font-semibold mt-[-5px]">Période du {data.periodStart} au {data.periodEnd}</div>
            </div>

            {/* Left side info */}
            <div className="mt-2 mb-20">
              <div className="text-[12px] font-medium flex justify-start gap-2">Périodicité :<span className="font-semibold">Mensuelle</span> </div>
              <div className="text-[12px] font-medium flex justify-start gap-2">Terme :<span className="font-semibold">Avance</span> </div>
              <div className="text-[12px]" ><span>EXIGIBLE LE :</span> <span style={{ fontWeight: "medium" }}>{data.periodStart}</span></div>
              <div style={{ marginTop: "4px", fontSize: "9px", lineHeight: "1.3", color: "#D82735" }} className="font-semibold">
                Nous vous informons que vous êtes redevable(s) du montant de l'avis d'échéance détaillé ci-contre que nous vous invitons à régler des réception. Cet avis est une demande de paiement. Il ne peut en aucun cas servir de reçu ou de quittance de loyer.
              </div>
            </div>

          </div>


          <div className="flex flex-col w-full">
            <div className="flex gap-1 justify-between">
              <div className="bg-[#8C8D8F] rounded-[8px]  w-[80%] text-center h-[33px] align-middle items-center">
                <div className="font-semibold text-[14px]">OPÉRATIONS</div>
              </div>
              <div className="bg-[#8C8D8F] font-semibold rounded-[8px] w-[20%] text-center h-[33px] align-middle items-center">
                <div className="font-semibold text-[11px] ">DÉBIT (en €)</div>
              </div>
              <div className="bg-[#8C8D8F] font-semibold rounded-[8px] w-[20%] text-center h-[33px] align-middle items-center">
                <div className="font-semibold text-[11px] ">CRÉDIT (en €)</div>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="h-[200px] w-[12%] mt-1 border border-[#8C8D8F] rounded-[8px]"> <div className="text-[12px] font-normal p-1">
                {data.avisOperations.map((op, index) => (
                  <tr key={index} >
                    <td style={{ padding: "2px 4px", width: "60px" }} className="text-[9px] text-right"><div className="ml-[-6px]">{op.date}</div></td>
                  </tr>
                ))}
              </div>
              </div>

              <div className="h-[200px] w-[60%] mt-1 border border-[#8C8D8F] rounded-[8px]  font-normal p-1">
                {data.avisOperations.map((op, index) => (
                  <tr key={index}>
                    <td style={{ padding: "2px 4px" }} className="text-[10px]"><div className="ml-[-5px]">{op.description}</div></td>

                  </tr>
                ))}

              </div>
              <div className="h-[200px] w-[80px] mt-1 border border-[#8C8D8F] rounded-[8px] text-[12px] font-normal p-1">
                {data.avisOperations.map((op, index) => (
                  <tr key={index} >
                    <td style={{ padding: "2px 4px" }}></td>
                    <td style={{ padding: "2px 4px", textAlign: "right" }} className="text-[10px]"><div className="ml-5">{op.debit}</div></td>

                  </tr>
                ))}
              </div>


              <div className="h-[200px] w-[80px] mt-1 border border-[#8C8D8F] rounded-[8px] text-[12px] font-normal p-1 justify-end items-end align-middle">
                {data.avisOperations.map((op, index) => (
                  <tr key={index}>
                    <td style={{ padding: "2px 4px" }} className="text-right  text-[10px]"><div className="ml-8" >{op.credit}</div></td>
                  </tr>
                ))}
              </div>

            </div>

            <div className="flex gap-1 justify-between mt-1">
              <div className="border-[#8C8D8F] border rounded-[8px]  w-[65.5%] text-right h-[25px] align-middle items-center mt-[-30px] bg-white">
                <div className="font-semibold text-[12px] p-2 "><div className="mt-[-10px] pb-1">TOTAL</div></div>
              </div>
              <div className=" font-semibold rounded-[8px] w-[80px] text-right h-[25px] align-middle items-center mt-[-30px]">
                <div className="font-semibold text-[11px] p-2 "><div className="mt-[-10px] pb-1">{data.avisTotalDebit}</div></div>
              </div>
              <div className=" font-semibold rounded-[8px] w-[80px] text-right h-[25px] align-middle items-center mt-[-30px]">
                <div className="font-semibold text-[11px] p-2 "><div className="mt-[-10px] pb-1">{data.avisTotalCredit}</div></div>
              </div>
            </div>

            <div className="flex gap-1 justify-between ">
              <div className="border-[#8C8D8F] border rounded-[8px]  w-[66%] text-right h-[25px] align-middle items-center ">
                <div className="font-semibold text-[12px] p-2 "><div className="mt-[-10px]  pb-1">SOLDE À PAYER (en €)</div></div>
              </div>
              <div className="border-[#8C8D8F] border font-semibold rounded-[8px] w-[80px] text-right h-[25px] align-middle items-center">
                <div className="font-semibold text-[11px] p-2 "><div className="mt-[-10px] pb-1">{data.soldeAPayer}</div></div>
              </div>
              <div className="border-[#8C8D8F] border font-semibold rounded-[8px] w-[80px] text-right h-[25px] align-middle items-center">
                <div className="font-semibold text-[11px] p-2 "></div>
              </div>
            </div>
          </div>


        </div>

        {/* Dotted Line Separator */}
        <div style={{ borderTop: "2px dashed #999", margin: "10px 0" }} />

        {/* Quittance Section */}
        <div className="flex gap-2 w-full" style={{ marginBottom: "6px" }}>
          {/* Left - Quittance Header */}
          <div className="w-[40%]">
            <div className=" bg-[#8C8D8F] text-center p-3 rounded-lg text-[12px] font-semibold">
              <div className="mt-[-10px] leading-4 mb-1"> QUITTANCE DE LOYER<br />
                OU INDEMNITÉ D'OCCUPATION</div>
              <div className="text-[9px] font-semibold mt-[-5px]">Période du {data.quittancePeriodStart} au {data.quittancePeriodEnd}</div>
            </div>


            {/* Nexity logo small */}
            <div style={{ padding: "6px 8px" }}>
              <img
                src={data.logoUrl || nexityLogo}
                alt="Nexity"
                style={{ height: "45px", width: "45px", objectFit: "contain" }}
              />
              <div style={{ fontSize: "12px", marginTop: "4px" }} className=" leading-3">
                {data.agencyName}<br />
                {data.agencyAddress}<br />
                {data.agencyCity}
              </div>
              <div style={{ fontSize: "12px", marginTop: "6px", marginBottom: "6px" }} className="font-medium">
                {data.tenantName}
              </div>
              <div className="text-[12px] leading-3">
                {data.tenantApartment}<br />
                {data.tenantAddress}<br />
                {data.tenantCity}
              </div>
            </div>
          </div>


          <div className="flex flex-col w-full gap-1">
            <div className="flex gap-1 justify-between w-[100%]">
              <div className="bg-[#8C8D8F] rounded-[8px]  w-full text-center h-[33px] align-middle items-center">
                <div className="font-bold text-[14px]">OPÉRATIONS</div>
              </div>
              <div className="bg-[#8C8D8F] font-semibold rounded-[8px] w-[40%] text-center h-[33px] align-middle items-center">
                <div className="font-semibold text-[10px] mt-[-2px]">MONTANT RÉGLÉ<br />(en €)</div>
              </div>
            </div>

            <div className="flex gap-1  w-full">
              <div className="h-[200px] w-[15%] mt-1 border border-[#8C8D8F] rounded-[8px]"> <div className="text-[10px] font-normal p-1">{data.quittanceLot}</div></div>
              <div className="h-[200px] w-[55%] mt-1 border border-[#8C8D8F] rounded-[8px] text-[10px] font-normal p-1">Règlement :
                {data.quittanceOperations.map((op, index) => (
                  <tr key={index}>
                    <td style={{ padding: "2px 4px" }} />
                    <td style={{ padding: "2px 4px" }}>- {op.description}</td>
                  </tr>
                ))}

              </div>
              <div className="h-[200px] w-[28%] mt-1 border border-[#8C8D8F] rounded-[8px] text-[10px] font-normal p-1 justify-end items-end align-middle">
                {data.quittanceOperations.map((op, index) => (
                  <tr key={index}>
                    <td style={{ padding: "2px 4px" }} />
                    <td style={{ padding: "2px 4px" }}></td>
                    <td style={{ padding: "2px 4px" }} className="text-right"><div className="ml-[75px]">{op.montant}</div></td>
                  </tr>
                ))}
              </div>
            </div>

            <div className="flex gap-1 justify-between mt-[1px]">
              <div className="border-[#8C8D8F] border rounded-[8px]  w-[71%] text-right h-[25px] align-middle items-center">
                <div className="font-semibold text-[12px] p-2 "><div className="mt-[-10px] pb-1">TOTAL SUR LA PÉRIODE</div></div>
              </div>
              <div className="border-[#8C8D8F] border font-semibold rounded-[8px] w-[28%] text-right h-[25px] align-middle items-center">
                <div className="font-semibold text-[11px] p-2 "><div className="mt-[-10px] pb-1">{data.quittanceTotalPeriode}</div></div>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="text-[8px] font-normal mt-1 mb-6">
          {data.disclaimerText}
        </div>

        {/* Prélèvement Bancaire Section */}
        <div className="flex gap-4">
          {/* Left - Reference Info */}
          <div className="flex flex-col  gap-1">
            <div className="bg-[#F0F1F1] w-[380px] p-1 text-[13px]"><div className="mt-[-5px]">N° D'APPEL : <span className="font-semibold ml-1">{data.prelevementNumeroAppel}</span></div> </div>
            <div className="bg-[#F0F1F1] w-[380px] p-1 text-[13px]"><div className="mt-[-5px]">REFERENCE CLIENT :<span className="font-semibold ml-1">{data.prelevementReferenceClient}</span></div> </div>
            <div className="bg-[#F0F1F1] w-[380px] p-1 text-[13px]"><div className="mt-[-5px]">PERIODE D'ECHEANCE :<span className="font-semibold ml-1" >du {data.prelevementPeriodStart} au {data.prelevementPeriodEnd}</span></div> </div>
            <div className="bg-[#F0F1F1] w-[380px] p-1 text-[13px]"><div className="mt-[-5px]">IDENTIFIANT CREANCIER SEPA :<span className="font-semibold ml-1" > {data.prelevementICS}</span></div></div>
            <div className="bg-[#F0F1F1] w-[380px] p-1 text-[13px]"><div className="mt-[-5px]">REFERENCE UNIQUE MANDAT :<span className="font-semibold ml-1 " >{data.prelevementRUM}</span></div> </div>
            <div className="bg-[#F0F1F1] w-[380px] p-1 text-[13px]"><div className="mt-[-5px]">MONTANT<span className="font-semibold ml-1" >{data.prelevementMontant} Euros</span> </div></div>
            <div className="bg-[#F0F1F1] w-[380px] p-1 text-[13px]"><div className="mt-[-5px]">PRELEVE LE:<span className="font-semibold ml-1" >{data.prelevementDate}</span></div> </div>
          </div>

          <div className="flex flex-col gap-14 justify-end items-end w-full">
            {/* Right - Prélèvement Box */}
            <div className="flex flex-col ml-2">
              <div className="px-4 bg-[#8C8D8F] text-[17px] font-semibold text-center w-[260px]">
                <div className="mt-[-15px] py-4">PRELEVEMENT BANCAIRE</div>
              </div>
              <div className=" leading-4 mt-3">
                <div className="text-[14px] font-normal">{data.tenantName}</div>
                <div className="text-[14px] font-normal">{data.tenantApartment}</div>
                <div className="text-[14px] font-normal">{data.tenantAddress}</div>
                <div className="text-[14px] font-normal">{data.tenantCity}</div>
              </div>
            </div>
            {/* Bottom Payment Info Box */}
            <div style={{
              border: "1px solid #000000",
              padding: "4px",
              backgroundColor: "#fff",
            }} className="mt-6 justify-end mr-[1px] w-[260px] text-[10px] pb-1 ">
              <div style={{ textAlign: "center", marginBottom: "4px" }}>
                Conformément à votre demande, le montant de cet avis sera prélevé sur votre compte :
              </div>
              <div style={{ fontWeight: "bold", textAlign: "center" }}>
                {data.prelevementIBAN}
              </div>
              <div style={{ textAlign: "center", fontWeight: "bold" }} className="pb-2">{data.prelevementBIC}</div>
            </div>
          </div>

          <div>
            {/* DUPLICATA Watermark */}
            {data.showDuplicata && (
              <div style={{
                position: "absolute",
                top: "84%",
                left: "25%",
                fontSize: "68px",
                color: "rgba(155, 157, 158, 1)",
                letterSpacing: "20px",
                pointerEvents: "none",
                whiteSpace: "nowrap"
              }} className="font-semibold">
                DUPLICATA
              </div>
            )}
          </div>

        </div>

      </div>
    );
  }
);

NexityAvisEcheanceTemplate.displayName = "NexityAvisEcheanceTemplate";

export default NexityAvisEcheanceTemplate;

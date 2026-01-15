import { forwardRef } from "react";
import { CimmoQuittanceData } from "@/types/template";
import { QRCodeSVG } from "qrcode.react";
import cimmologo from "@/assets/cimmologo.png";

interface CimmoQuittanceTemplateProps {
  data: CimmoQuittanceData;
}

const CimmoQuittanceTemplate = forwardRef<HTMLDivElement, CimmoQuittanceTemplateProps>(
  ({ data }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white shadow-lg "
        style={{
          width: "210mm",
          minHeight: "297mm",
          padding: "12mm",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        {/* Header with Logo */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center">
            {data.logoUrl ? (
              <img src={data.logoUrl} alt="Logo" className="w-full h-[50px] object-contain" />
            ) : (
              <>
                <img
                  src={cimmologo}
                  alt="CDC"
                  style={{ width: "100%", height: "100%" }}
                />
              </>
            )}
          </div>
        </div>

        {/* Appel Loyer Header */}
        <div
          className="text-center p-1 mb-10 w-[250px] tracking-wider font-medium align-middle bg-[#008080] text-white text-[13px]">
          <span className="mt-[-50px]">Appel Loyer</span>
        </div>

        {/* Two Column - Tenant Info */}
        <div className="flex justify-start gap-40 mb-4 ">
          {/* Left - Property Reference */}
          <div className="text-[12px] font-medium ">
            <div><span className="font-semibold">Locataires :</span><span className="ml-6">{data.locataireName}</span> </div>
            <div className="mt-2">
              <span className="font-semibold">Référence du bien :</span> {data.referenceBien}
            </div>
            <div>{data.propertyAddress1}</div>
            <div>{data.propertyCity}</div>
          </div>

          {/* Right - Recipient Address */}
          <div className="text-left text-[14px] leading-4 font-medium">
            <div>{data.recipientName}</div>
            <div>{data.recipientAddress}</div>
            <div>{data.recipientCity}</div>
            <div>{data.recipientCountry}</div>
          </div>
        </div>

        {/* Date and Location */}
        <div className="text-right text-[14px] mb-4 font-medium mr-[48px]">
          {data.documentLocation}, le {data.documentDate}
        </div>

        {/* Salutation */}
        <div className="text-[14px] font-medium mb-4">
          {data.salutation}
        </div>

        {/* Quittance de loyer Section */}
        <div className="mb-4">
          <div className="flex">
            {/* Left Header */}
            <div
              className="p-1 font-medium text-[14px] text-center bg-[#008080] w-[180px] h-[30px] text-white">
              Quittance de loyer
            </div>
            {/* Right Description */}
            <div
              className="p-1 text-[10px] flex-1 text-black font-medium -mt-1">
              {data.quittanceDescription}
            </div>
          </div>

          {/* Quittance Table Header */}
          <div
            className="flex justify-between text-[12px] font-medium p-1 mt-1 bg-[#008080]">
            <div className="text center text-white ml-60">Libellé</div>
            <div className="text-right text-white mr-8">Montant</div>
          </div>

          {/* Quittance Items */}
          <div className="text-[12px]">
            <div className="flex  text-black p-[2px]">
              <div className="flex-1 ">
                <span className="font-medium">Loyer {data.quittanceMonth1}</span> {data.quittanceYear1}
              </div>
              <div className="text-right " style={{ width: "100px" }}><span className="font-medium">{data.quittanceLoyer1} €</span></div>
            </div>
            <div className="flex  text-black p-[2px]">
              <div className="flex-1 ">
                <span className="font-medium ">Provisions pour charges {data.quittanceMonth1}</span> {data.quittanceYear1}
              </div>
              <div className="text-right " style={{ width: "100px" }}> <span className="font-medium">{data.quittanceCharges1} €</span></div>
            </div>
          </div>

          {/* Quittance Total */}
          <div
            className="flex py-1 text-[12px] font-bold bg-[#D3D3D3]">
            <div className="flex-1 px-2 text-right font-bold">TOTAL</div>
            <div className="text-right px-2 font-bold" style={{ width: "100px" }}>{data.quittanceTotal1} €</div>
          </div>
        </div>

        {/* Appel Loyer Section */}
        <div className="mb-4">
          <div className="flex">
            {/* Left Header */}
            <div
              className="p-1 font-medium text-[14px] text-center bg-[#008080] w-[180px] h-[25px] text-white mb-2">
              Appel Loyer
            </div>
            {/* Right Description */}
            <div
              className="p-1 text-[10px] flex-1 text-black font-medium ">
              {data.appelLoyerDescription}
            </div>
          </div>

          {/* Appel Loyer Table Header */}
          <div
            className="flex justify-between text-[12px] font-medium p-1 mt-1 bg-[#008080]">
            <div className="text center text-white ml-60">Libellé</div>
            <div className="text-right text-white mr-8">Montant</div>
          </div>

          {/* Appel Loyer Items */}
          <div className="text-[12px]">
            <div className="flex  text-black p-[2px]">
              <div className="flex-1 ">
                <span className="font-medium">Loyer {data.appelMonth}</span> {data.appelYear}
              </div>
              <div className="text-right " style={{ width: "100px" }}><span className="font-medium">{data.appelLoyer} €</span></div>
            </div>
            <div className="flex  text-black p-[2px]">
              <div className="flex-1 ">
                <span className="font-medium ">Provisions pour charges {data.appelMonth}</span> {data.quittanceYear1}
              </div>
              <div className="text-right " style={{ width: "100px" }}> <span className="font-medium">{data.appelCharges} €</span></div>
            </div>
          </div>

          {/* Appel Loyer Total */}
          <div
            className="flex py-1 text-[12px] font-bold bg-[#F5F5F5]">
            <div className="flex-1 px-2 text-right font-bold">TOTAL DE L'ECHEANCE</div>
            <div className="text-right px-2 font-bold" style={{ width: "100px" }}>{data.appelTotal} €</div>
          </div>
        </div>

        {/* Modalité de règlement */}
        <div className="text-[12px] font-medium mb-10">
          <div className="font-bold mb-1">MODALITE DE REGLEMENT :</div>
          <div>Prélèvement au {data.prelevementDate} : {data.prelevementAmount} €</div>
          <div>{data.prelevementIBAN} {data.prelevementName} : {data.prelevementAmount} €</div>
          <div>RUM : {data.rum}</div>
          <div className="mt-2">ICS : {data.ics}</div>
        </div>

        {/* Tear-off Section */}
        <div className="mt-[180px] pt-4">
          <div className="flex justify-between text-center font-medium">
            {/* Left - Company Info */}
            <div className="text-[8px] text-[#008080] ml-8">
              <div className="text-center mb-2 border-b border-[#008080] text-[12px] text-[#678E8D] pb-2" style={{ color: "#009688" }}>
                Location - Gestion - Transaction
              </div>
              <div>{data.companyLegal1}</div>
              <div>{data.companyLegal2}</div>
              <div>{data.companyLegal3}</div>
            </div>

            {/* Right - Payment Slip */}
            <div
              className="p-3 text-[9px] mt-[-60px] mr-[30px]"
              style={{
                border: "1px dashed #999",
                width: "180px"
              }}
             >
              
              <div className="flex items-start gap-2 mb-2 mt-[-3px] text-left">     
                <span className="text-lg ml-[-20px] mt-[-20px]">✂</span>
                <div>
                  <div className="font-bold leading-[1em]">
                    Papillon à nous retourner en cas de règlement par chèque.
                  </div>
                </div>
              </div>
              <div className="space-y-1 align-top text-left leading-[1em]">
                <div>{data.locataireName}</div>
                <div>Réf. bien : {data.referenceBien}</div>
                <div>Montant : {data.appelTotal} €</div>
                <div>{data.appelMonth} {data.appelYear}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
);

CimmoQuittanceTemplate.displayName = "CimmoQuittanceTemplate";

export default CimmoQuittanceTemplate;

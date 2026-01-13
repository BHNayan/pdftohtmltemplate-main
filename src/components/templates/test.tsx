
  ({ data }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white shadow-lg mx-auto"
        style={{
          width: "210mm",
          minHeight: "297mm",
          padding: "5mm 10mm",
          fontFamily: "Arial, sans-serif",
          fontSize: "9px",
          lineHeight: "1.2",
          color: "#000",
        }}
      >
        {/* Header with Logo and Agency */}
        <div className="flex justify-between items-start" style={{ borderBottom: "2px solid #000", paddingBottom: "3mm", marginBottom: "2mm" }}>
          {/* Left - Logo */}
          <div className="flex items-center gap-2">
            {data.logoUrl ? (
              <img src={data.logoUrl} alt="Logo" className="h-10 object-contain" />
            ) : (
              <div className="flex items-center gap-1">
                <div className="text-[24px] text-gray-400">◎</div>
                <div 
                  className="font-bold text-[28px] tracking-wide"
                  style={{ 
                    background: "linear-gradient(90deg, #f7b500 0%, #d4a000 25%, #c41230 50%, #8b0000 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  PICHET
                </div>
              </div>
            )}
          </div>

          {/* Right - Agency Info */}
          <div className="text-right">
            <div className="text-[24px] font-light tracking-[0.15em]" style={{ fontFamily: "Times New Roman, serif" }}>
              AGENCE DE PARIS
            </div>
            <div className="text-[9px]">{data.agencyAddress}</div>
            <div className="text-[9px]">{data.agencyCity}</div>
            <div className="text-[9px]">Tél. : {data.agencyPhone}</div>
          </div>
        </div>

        {/* Company Legal Info */}
        <div className="text-[6.5px] text-gray-600 leading-tight mb-1">
          <div>{data.companyName}</div>
          <div>Siège social : {data.companySiege}</div>
          <div>{data.companyRCS} – TVA intracommunautaire : {data.companyTVA} – Code APE {data.companyAPE}</div>
          <div>{data.companyEmail}</div>
          <div>Carte professionnelle ({data.companyCartePro}) délivrée par la CCI de BORDEAUX</div>
          <div>{data.companyGarantie}</div>
          <div>{data.companyRC}</div>
        </div>

        {/* Email notice and Espace client */}
        <div className="flex justify-between items-start text-[6.5px] text-gray-500 mb-3" style={{ borderBottom: "1px solid #c41230", paddingBottom: "2mm" }}>
          <div className="text-right">
            <div>{data.companyWebsite}</div>
            <div>Espace client : <span className="font-bold" style={{ color: "#00008B" }}>https://pichet.thetranet.fr</span></div>
          </div>
        </div>

        {/* AVIS D'ECHEANCE Title */}
        <div className="font-bold text-[12px] mb-2" style={{ borderBottom: "2px solid #c41230", paddingBottom: "1mm" }}>
          AVIS D'ECHEANCE
        </div>

        {/* Property and Tenant Info Row */}
        <div className="flex justify-between mb-2">
          {/* Left - Property Address */}
          <div style={{ width: "55%" }}>
            <div className="text-[8px] mb-1" style={{ borderBottom: "1px solid #c41230", display: "inline-block" }}>
              <span className="font-bold">Adresse du bien loué</span>
            </div>
          </div>

          {/* Right - Tenant with red background */}
          <div 
            className="text-[9px] p-2"
            style={{ 
              backgroundColor: "#c41230",
              color: "white",
              width: "40%",
            }}
          >
            <div className="font-bold">{data.tenantName}</div>
            <div>{data.tenantAddress1}</div>
            <div>{data.tenantAddress2}</div>
            <div>{data.tenantCity}</div>
          </div>
        </div>



        {/* Document Date and Reference Number */}
        <div className="flex justify-between items-start mb-2">
          <div className="text-[9px]">{data.locataire1Ref}</div>
          <div className="text-[9px] font-bold">{data.documentDate}</div>
        </div>



        {/* Payment Footer Section */}
        <div className="mt-3" style={{ borderTop: "1px solid #000", paddingTop: "2mm" }}>
          {/* Règlement Header */}
          <div className="flex justify-end mb-2">
            <div className="text-[8px] text-center" style={{ border: "1px solid #000", padding: "2mm 4mm" }}>
              <div className="font-bold">Règlement d'un montant total de {data.prelevementTotal} Euros</div>
              <div>selon le détail ci-dessous</div>
            </div>
          </div>

          {/* Prélèvement Section */}
          <div 
            className="text-[8px] p-2"
            style={{ 
              backgroundColor: "#1a365d",
              color: "white",
            }}
          >
            Prélèvement effectué le {data.prelevementDate}
          </div>

          {/* Payment Details Table */}
          <table className="w-full text-[8px] border-collapse" style={{ border: "1px solid #000" }}>
            <tbody>
              <tr>
                <td className="border border-black p-1" style={{ width: "25%" }}>{data.prelevement1Name}</td>
                <td className="border border-black p-1" colSpan={4}>
                  PRLV - ICS : {data.prelevement1ICS}&nbsp;&nbsp;&nbsp;&nbsp;RUM : {data.prelevement1RUM}&nbsp;&nbsp;&nbsp;&nbsp;BIC : {data.prelevement1BIC}&nbsp;&nbsp;&nbsp;&nbsp;IBAN : {data.prelevement1IBAN}
                </td>
                <td className="border border-black p-1 text-right font-bold" style={{ width: "80px" }}>{data.prelevement1Amount}</td>
              </tr>
              {data.prelevement2Name && (
                <tr>
                  <td className="border border-black p-1">{data.prelevement2Name}</td>
                  <td className="border border-black p-1" colSpan={5}></td>
                </tr>
              )}
            </tbody>
          </table>

 
        </div>
      </div>
    );
  }
import { SquareHabitatAvisEcheanceData } from "@/types/template";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Upload } from "lucide-react";
import { useRef } from "react";

interface SquareHabitatTemplateEditorProps {
  data: SquareHabitatAvisEcheanceData;
  onChange: (data: SquareHabitatAvisEcheanceData) => void;
}

const SquareHabitatTemplateEditor = ({ data, onChange }: SquareHabitatTemplateEditorProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const updateField = (field: keyof SquareHabitatAvisEcheanceData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateField("logoUrl", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateReleveItem = (index: number, field: string, value: string) => {
    const newReleve = [...data.releve];
    newReleve[index] = { ...newReleve[index], [field]: value };
    onChange({ ...data, releve: newReleve });
  };

  const addReleveItem = () => {
    onChange({
      ...data,
      releve: [...data.releve, { date: "", description: "", debit: "", credit: "" }]
    });
  };

  const removeReleveItem = (index: number) => {
    const newReleve = data.releve.filter((_, i) => i !== index);
    onChange({ ...data, releve: newReleve });
  };

  return (
    <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
      <Accordion type="multiple" defaultValue={["header", "agency"]} className="space-y-2">
        {/* Header Section */}
        <AccordionItem value="header" className="border rounded-lg px-3">
          <AccordionTrigger className="text-sm font-medium">Header & Logo</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div>
              <Label className="text-xs">Logo</Label>
              <div className="flex gap-2 mt-1">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleLogoUpload}
                  accept="image/*"
                  className="hidden"
                />
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Logo
                </Button>
              </div>
              {data.logoUrl && (
                <img src={data.logoUrl} alt="Logo preview" className="mt-2 h-12 object-contain" />
              )}
            </div>
            <div>
              <Label className="text-xs">Company Name</Label>
              <Input value={data.companyName} onChange={(e) => updateField("companyName", e.target.value)} className="h-8 text-xs" />
            </div>
            <div>
              <Label className="text-xs">Company Legal Info</Label>
              <Textarea value={data.companyLegal} onChange={(e) => updateField("companyLegal", e.target.value)} className="text-xs min-h-[60px]" />
            </div>
            <div>
              <Label className="text-xs">Professional Card</Label>
              <Input value={data.cardePro} onChange={(e) => updateField("cardePro", e.target.value)} className="h-8 text-xs" />
            </div>
            <div>
              <Label className="text-xs">Adhérent Code</Label>
              <Input value={data.Adhérent} onChange={(e) => updateField("Adhérent", e.target.value)} className="h-8 text-xs" />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Agency Section */}
        <AccordionItem value="agency" className="border rounded-lg px-3">
          <AccordionTrigger className="text-sm font-medium">Agency Info</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div>
              <Label className="text-xs">Agency Name</Label>
              <Input value={data.agencyName} onChange={(e) => updateField("agencyName", e.target.value)} className="h-8 text-xs" />
            </div>
            <div>
              <Label className="text-xs">Agency Code</Label>
              <Input value={data.agencyCode} onChange={(e) => updateField("agencyCode", e.target.value)} className="h-8 text-xs" />
            </div>
            <div>
              <Label className="text-xs">Address</Label>
              <Input value={data.agencyAddress} onChange={(e) => updateField("agencyAddress", e.target.value)} className="h-8 text-xs" />
            </div>
            <div>
              <Label className="text-xs">City</Label>
              <Input value={data.agencyCity} onChange={(e) => updateField("agencyCity", e.target.value)} className="h-8 text-xs" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs">Phone</Label>
                <Input value={data.agencyPhone} onChange={(e) => updateField("agencyPhone", e.target.value)} className="h-8 text-xs" />
              </div>
              <div>
                <Label className="text-xs">Fax</Label>
                <Input value={data.agencyFax} onChange={(e) => updateField("agencyFax", e.target.value)} className="h-8 text-xs" />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Gestionnaire Section */}
        <AccordionItem value="gestionnaire" className="border rounded-lg px-3">
          <AccordionTrigger className="text-sm font-medium">Manager (Gestionnaire)</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div>
              <Label className="text-xs">Name</Label>
              <Input value={data.gestionnaireName} onChange={(e) => updateField("gestionnaireName", e.target.value)} className="h-8 text-xs" />
            </div>
            <div>
              <Label className="text-xs">Reference</Label>
              <Input value={data.gestionnaireRef} onChange={(e) => updateField("gestionnaireRef", e.target.value)} className="h-8 text-xs" />
            </div>
            <div>
              <Label className="text-xs">Phone</Label>
              <Input value={data.gestionnairePhone} onChange={(e) => updateField("gestionnairePhone", e.target.value)} className="h-8 text-xs" />
            </div>
            <div>
              <Label className="text-xs">Email</Label>
              <Input value={data.gestionnaireEmail} onChange={(e) => updateField("gestionnaireEmail", e.target.value)} className="h-8 text-xs" />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Document Info */}
        <AccordionItem value="document" className="border rounded-lg px-3">
          <AccordionTrigger className="text-sm font-medium">Document Info</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs">Location</Label>
                <Input value={data.documentLocation} onChange={(e) => updateField("documentLocation", e.target.value)} className="h-8 text-xs" />
              </div>
              <div>
                <Label className="text-xs">Date</Label>
                <Input value={data.documentDate} onChange={(e) => updateField("documentDate", e.target.value)} className="h-8 text-xs" />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Property Section */}
        <AccordionItem value="property" className="border rounded-lg px-3">
          <AccordionTrigger className="text-sm font-medium">Property</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div>
              <Label className="text-xs">Property Name</Label>
              <Input value={data.propertyName} onChange={(e) => updateField("propertyName", e.target.value)} className="h-8 text-xs" />
            </div>
            <div>
              <Label className="text-xs">Address</Label>
              <Input value={data.propertyAddress} onChange={(e) => updateField("propertyAddress", e.target.value)} className="h-8 text-xs" />
            </div>
            <div>
              <Label className="text-xs">City</Label>
              <Input value={data.propertyCity} onChange={(e) => updateField("propertyCity", e.target.value)} className="h-8 text-xs" />
            </div>
            <div>
              <Label className="text-xs">Type</Label>
              <Input value={data.propertyType} onChange={(e) => updateField("propertyType", e.target.value)} className="h-8 text-xs" />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Tenant Section */}
        <AccordionItem value="tenant" className="border rounded-lg px-3">
          <AccordionTrigger className="text-sm font-medium">Tenant</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div>
              <Label className="text-xs">Name</Label>
              <Input value={data.tenantName} onChange={(e) => updateField("tenantName", e.target.value)} className="h-8 text-xs" />
            </div>
            <div>
              <Label className="text-xs">Address Line 1</Label>
              <Input value={data.tenantAddress1} onChange={(e) => updateField("tenantAddress1", e.target.value)} className="h-8 text-xs" />
            </div>
            <div>
              <Label className="text-xs">Address Line 2</Label>
              <Input value={data.tenantAddress2} onChange={(e) => updateField("tenantAddress2", e.target.value)} className="h-8 text-xs" />
            </div>
            <div>
              <Label className="text-xs">City</Label>
              <Input value={data.tenantCity} onChange={(e) => updateField("tenantCity", e.target.value)} className="h-8 text-xs" />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Lot Section */}
        <AccordionItem value="lot" className="border rounded-lg px-3">
          <AccordionTrigger className="text-sm font-medium">Lot Info</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs">Lot Type</Label>
                <Input value={data.lotType} onChange={(e) => updateField("lotType", e.target.value)} className="h-8 text-xs" />
              </div>
              <div>
                <Label className="text-xs">Lot Number</Label>
                <Input value={data.lotNumber} onChange={(e) => updateField("lotNumber", e.target.value)} className="h-8 text-xs" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs">Owner Number</Label>
                <Input value={data.proprietaireNumber} onChange={(e) => updateField("proprietaireNumber", e.target.value)} className="h-8 text-xs" />
              </div>
              <div>
                <Label className="text-xs">Reference</Label>
                <Input value={data.referenceARappeler} onChange={(e) => updateField("referenceARappeler", e.target.value)} className="h-8 text-xs" />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Quittance Section */}
        <AccordionItem value="quittance" className="border rounded-lg px-3">
          <AccordionTrigger className="text-sm font-medium">Receipt (Quittance)</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs">Period Start</Label>
                <Input value={data.quittancePeriodStart} onChange={(e) => updateField("quittancePeriodStart", e.target.value)} className="h-8 text-xs" />
              </div>
              <div>
                <Label className="text-xs">Period End</Label>
                <Input value={data.quittancePeriodEnd} onChange={(e) => updateField("quittancePeriodEnd", e.target.value)} className="h-8 text-xs" />
              </div>
            </div>
            <div>
              <Label className="text-xs">Type</Label>
              <Input value={data.quittanceType} onChange={(e) => updateField("quittanceType", e.target.value)} className="h-8 text-xs" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs">Rent</Label>
                <Input value={data.quittanceLoyer} onChange={(e) => updateField("quittanceLoyer", e.target.value)} className="h-8 text-xs" />
              </div>
              <div>
                <Label className="text-xs">Charges</Label>
                <Input value={data.quittanceCharges} onChange={(e) => updateField("quittanceCharges", e.target.value)} className="h-8 text-xs" />
              </div>
            </div>
            <div>
              <Label className="text-xs">Total</Label>
              <Input value={data.quittanceTotalPeriode} onChange={(e) => updateField("quittanceTotalPeriode", e.target.value)} className="h-8 text-xs" />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Account Statement (Relevé) Section */}
        <AccordionItem value="releve" className="border rounded-lg px-3">
          <AccordionTrigger className="text-sm font-medium">Account Statement</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            {data.releve.map((item, index) => (
              <div key={index} className="border rounded p-2 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium">Entry {index + 1}</span>
                  <Button variant="ghost" size="sm" onClick={() => removeReleveItem(index)}>
                    <Trash2 className="w-3 h-3 text-red-500" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label className="text-xs">Date</Label>
                    <Input value={item.date} onChange={(e) => updateReleveItem(index, "date", e.target.value)} className="h-8 text-xs" />
                  </div>
                  <div>
                    <Label className="text-xs">Description</Label>
                    <Input value={item.description} onChange={(e) => updateReleveItem(index, "description", e.target.value)} className="h-8 text-xs" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label className="text-xs">Debit</Label>
                    <Input value={item.debit} onChange={(e) => updateReleveItem(index, "debit", e.target.value)} className="h-8 text-xs" />
                  </div>
                  <div>
                    <Label className="text-xs">Credit</Label>
                    <Input value={item.credit} onChange={(e) => updateReleveItem(index, "credit", e.target.value)} className="h-8 text-xs" />
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={addReleveItem} className="w-full">
              <Plus className="w-3 h-3 mr-1" /> Add Entry
            </Button>
          </AccordionContent>
        </AccordionItem>

        {/* Avis Section */}
        <AccordionItem value="avis" className="border rounded-lg px-3">
          <AccordionTrigger className="text-sm font-medium">Due Notice (Avis)</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs">Period Start</Label>
                <Input value={data.avisPeriodStart} onChange={(e) => updateField("avisPeriodStart", e.target.value)} className="h-8 text-xs" />
              </div>
              <div>
                <Label className="text-xs">Period End</Label>
                <Input value={data.avisPeriodEnd} onChange={(e) => updateField("avisPeriodEnd", e.target.value)} className="h-8 text-xs" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs">Rent</Label>
                <Input value={data.avisLoyer} onChange={(e) => updateField("avisLoyer", e.target.value)} className="h-8 text-xs" />
              </div>
              <div>
                <Label className="text-xs">Provision Charges</Label>
                <Input value={data.avisProvisionCharges} onChange={(e) => updateField("avisProvisionCharges", e.target.value)} className="h-8 text-xs" />
              </div>
            </div>
            <div>
              <Label className="text-xs">Total</Label>
              <Input value={data.avisTotalPeriode} onChange={(e) => updateField("avisTotalPeriode", e.target.value)} className="h-8 text-xs" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs">Net Amount to Pay</Label>
                <Input value={data.montantNetAPayer} onChange={(e) => updateField("montantNetAPayer", e.target.value)} className="h-8 text-xs" />
              </div>
              <div>
                <Label className="text-xs">Due Date</Label>
                <Input value={data.dateExigible} onChange={(e) => updateField("dateExigible", e.target.value)} className="h-8 text-xs" />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Prélèvement Section */}
        <AccordionItem value="prelevement" className="border rounded-lg px-3">
          <AccordionTrigger className="text-sm font-medium">Direct Debit</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs">Date</Label>
                <Input value={data.prelevementDate} onChange={(e) => updateField("prelevementDate", e.target.value)} className="h-8 text-xs" />
              </div>
              <div>
                <Label className="text-xs">Amount</Label>
                <Input value={data.prelevementMontant} onChange={(e) => updateField("prelevementMontant", e.target.value)} className="h-8 text-xs" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs">ICS</Label>
                <Input value={data.prelevementICS} onChange={(e) => updateField("prelevementICS", e.target.value)} className="h-8 text-xs" />
              </div>
              <div>
                <Label className="text-xs">RUM</Label>
                <Input value={data.prelevementRUM} onChange={(e) => updateField("prelevementRUM", e.target.value)} className="h-8 text-xs" />
              </div>
            </div>
            <div>
              <Label className="text-xs">IBAN</Label>
              <Input value={data.prelevementIBAN} onChange={(e) => updateField("prelevementIBAN", e.target.value)} className="h-8 text-xs" />
            </div>
            <div>
              <Label className="text-xs">BIC</Label>
              <Input value={data.prelevementBIC} onChange={(e) => updateField("prelevementBIC", e.target.value)} className="h-8 text-xs" />
            </div>
            <div>
              <Label className="text-xs">Client Identifier</Label>
              <Input value={data.clientIdentifiant} onChange={(e) => updateField("clientIdentifiant", e.target.value)} className="h-8 text-xs" />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Legal Disclaimer */}
        <AccordionItem value="disclaimer" className="border rounded-lg px-3">
          <AccordionTrigger className="text-sm font-medium">Legal Disclaimer</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div>
              <Label className="text-xs">Disclaimer Text</Label>
              <Textarea value={data.disclaimerText} onChange={(e) => updateField("disclaimerText", e.target.value)} className="text-xs min-h-[100px]" />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* footer description */}
        <AccordionItem value="footerpart" className="border rounded-lg px-3">
          <AccordionTrigger className="text-sm font-medium">Footer part</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div>
              <Label className="text-xs">Footer website</Label>
              <Textarea value={data.footerwebsitename} onChange={(e) => updateField("footerwebsitename", e.target.value)} className="text-xs min-h-[100px]" />
            </div>
            <div>
              <Label className="text-xs">Footer Name</Label>
              <Textarea value={data.footername} onChange={(e) => updateField("footername", e.target.value)} className="text-xs min-h-[100px]" />
            </div>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  );
};

export default SquareHabitatTemplateEditor;

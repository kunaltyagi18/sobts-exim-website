import Image from "next/image";
import { ArrowDownToLine, FileText } from "lucide-react";
import { catalogues } from "@/data/catalogues";

type Catalogue = (typeof catalogues)[number];

export function CatalogueCard({ catalogue, index }: { catalogue: Catalogue; index: number }) {
  return (
    <a className="catalogue-card" href={catalogue.href} download>
      <div className="catalogue-card-image"><Image src={catalogue.image} alt={catalogue.alt} fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
      <div className="catalogue-card-copy"><div className="catalogue-card-meta"><span>{String(index + 1).padStart(2, "0")} · {catalogue.tag}</span><span className="pdf-badge"><FileText size={13} /> PDF</span></div><h3>{catalogue.title}</h3><p>{catalogue.description}</p><span className="catalogue-download-button"><ArrowDownToLine size={17} /> Download PDF</span></div>
    </a>
  );
}

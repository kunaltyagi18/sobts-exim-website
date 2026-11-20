"use client";

import Image from "next/image";
import { ArrowDownToLine, BadgeCheck, Droplets, FileText, Layers3, ShieldCheck } from "lucide-react";
import { catalogues } from "@/data/catalogues";
import { useTranslation } from "@/components/language-provider";

type Catalogue = (typeof catalogues)[number];

export function CatalogueCard({ catalogue }: { catalogue: Catalogue }) {
  const { t } = useTranslation();
  const featureIcons = [ShieldCheck, Droplets, Layers3];

  return (
    <a className={`catalogue-card catalogue-card-${catalogue.tone}`} href={catalogue.href} download>
      <div className="catalogue-card-image">
        <Image src={catalogue.image} alt={catalogue.alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
        <div className="catalogue-card-cover">
          <div className="catalogue-card-cover-kicker">{catalogue.code} - {t(catalogue.tag)}</div>
          <h3>{t(catalogue.title)}</h3>
          <p>{t(catalogue.description)}</p>
          <div className="catalogue-feature-strip">{catalogue.features.map((feature, featureIndex) => { const Icon = featureIcons[featureIndex] ?? BadgeCheck; return <span key={feature}><Icon size={16} /><small>{t(feature)}</small></span>; })}</div>
        </div>
      </div>
      <div className="catalogue-card-copy"><div className="catalogue-card-meta"><span>{catalogue.code} - {t(catalogue.tag)}</span><span className="pdf-badge"><FileText size={13} /> PDF</span></div><h3>{t(catalogue.title)}</h3><p>{t(catalogue.description)}</p><span className="catalogue-download-button"><ArrowDownToLine size={19} /> {t("Download PDF")}</span></div>
    </a>
  );
}

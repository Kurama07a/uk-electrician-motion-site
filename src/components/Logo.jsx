import { Zap } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function Logo({ light = false }) {
  return <a className={`brand ${light ? 'brand--light' : ''}`} href="/" aria-label={`${siteConfig.brand} ${siteConfig.brandSuffix} home`}><span className="brand__mark" aria-hidden="true"><Zap size={19} strokeWidth={2.6} /></span><span className="brand__text"><strong>{siteConfig.brand}</strong><small>{siteConfig.brandSuffix}</small></span></a>;
}

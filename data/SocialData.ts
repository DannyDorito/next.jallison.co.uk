import { Github, Linkedin, LucideProps, Mail, NotepadText, } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export interface SocialData
{
  platform: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  link: string;
}

export const socialData: SocialData[] = [
  {
    platform: 'Email',
    icon: Mail,
    link: 'https://jallison.co.uk#contact',
  },
  {
    platform: 'GitHub',
    icon: Github,
    link: 'https://github.com/DannyDorito',
  },
  {
    platform: 'Resume',
    icon: NotepadText,
    link: 'https://docs.google.com/document/d/e/2PACX-1vS7h0KrhJ_wAuKT9QapLCwYker1CWi8F5anmOtSm7RDNJSaGHPAi0Cp_NqKV7AYvjopKeX90Ex1Mg-H/pub',
  },
  {
    platform: 'LinkedIn',
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/johnallison-',
  }
];

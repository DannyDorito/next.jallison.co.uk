import { Github, Linkedin, LucideProps, Mail, NotepadText, } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export interface SocialData
{
  platform: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  link: string;
  redirect: string | undefined;
}

export const socialData: SocialData[] = [
  {
    platform: 'Email',
    icon: Mail,
    link: 'mailto:contact@jallison.co.uk',
    redirect: undefined,
  },
  {
    platform: 'GitHub',
    icon: Github,
    link: 'https://github.com/DannyDorito',
    redirect: '/github',
  },
  {
    platform: 'Resume',
    icon: NotepadText,
    link: 'https://docs.google.com/document/d/1zsnem12ZA2wqAPCwe3Y6CJdBgpnC0SpeCacsQYMILMQ/edit?usp=sharing',
    redirect: undefined,
  },
  {
    platform: 'LinkedIn',
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/johnallison-',
    redirect: undefined,
  }
];

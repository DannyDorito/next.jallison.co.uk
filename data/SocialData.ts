import { LucideProps, Mail, NotepadText } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { siGithub, siInstagram, siLinkedin, SimpleIcon, siStackoverflow, siYoutube } from 'simple-icons';

export interface SocialData
{
  platform: string;
  icon: SimpleIcon | ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
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
    icon: siGithub,
    link: 'https://github.com/DannyDorito',
    redirect: '/github',
  },
  {
    platform: 'Instagram',
    icon: siInstagram,
    link: 'https://www.instagram.com/johnallis0n',
    redirect: undefined,
  },
  {
    platform: 'Resume',
    icon: NotepadText,
    link: 'https://docs.google.com/document/d/1zsnem12ZA2wqAPCwe3Y6CJdBgpnC0SpeCacsQYMILMQ/edit?usp=sharing',
    redirect: undefined,
  },
  {
    platform: 'LinkedIn',
    icon: siLinkedin,
    link: 'https://www.linkedin.com/in/johnallison-',
    redirect: undefined,
  },
  {
    platform: 'YouTube',
    icon: siYoutube,
    link: 'https://youtube.com/@JohnAllis0n',
    redirect: undefined,
  },
  {
    platform: 'Stack Overflow',
    icon: siStackoverflow,
    link: 'https://stackoverflow.com/users/12426156/john-allison',
    redirect: '/StackOverflow'
  }
];

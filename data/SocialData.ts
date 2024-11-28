import { Github, Instagram, Linkedin, LucideProps, Mail, NotepadText, Youtube } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { siGithub, siInstagram, siLinkedin, SimpleIcon, siStackoverflow, siYoutube } from 'simple-icons';

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
    platform: 'Instagram',
    icon: Instagram,
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
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/johnallison-',
    redirect: undefined,
  },
  {
    platform: 'YouTube',
    icon: Youtube,
    link: 'https://youtube.com/@JohnAllis0n',
    redirect: undefined,
  },
  // {
  //   platform: 'Stack Overflow',
  //   icon: StackOv,
  //   link: 'https://stackoverflow.com/users/12426156/john-allison',
  //   redirect: '/StackOverflow'
  // }
];

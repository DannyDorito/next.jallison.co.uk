import { StaticImageData } from 'next/image';
import csg from '../public/images/csg.png'
import notesApp from '../public/images/notes-app.png'
import nppSqf from '../public/images/npp-sqf.png'
import knockout from '../public/images/knockout.png'
import reforger from '../public/images/reforger.png'
import portfolio from '../public/images/portfolio.png'
import dayz from '../public/images/dayz.png'
import bundler from '../public/images/bundler.png'
import baro from '../public/images/baro.png'
import whenbaro from '../public/images/whenbaro.png'

export interface Project
{
  name: string;
  description: string;
  url: string;
  image: StaticImageData;
}

export const projects: Project[] = [
  {
    name: 'Notes App',
    description: 'Movable Notes App written in React & MUI',
    url: 'https://notes.jallison.co.uk',
    image: notesApp
  },
  {
    name: 'ARMA Reforger Config Editor',
    description: 'Upload and edit your config.json file here! Written in Next.js.',
    url: 'https://reforger.jallison.co.uk',
    image: reforger
  },
  {
    name: 'This Portfolio Website',
    description: `GitHub Repo of this Website's Code, written in Next.js.`,
    url: 'https://github.com/DannyDorito/next.jallison.co.uk',
    image: portfolio
  },
  {
    name: 'CSG Gaming Group Website',
    description: 'Website I created for my gaming group.',
    url: 'https://csgcommunity.com',
    image: csg

  },
  {
    name: 'npp-sqf',
    description: `Notepad++ Syntax Highlighting for ARMA's scripting language.`,
    url: 'https://github.com/DannyDorito/npp-sqf',
    image: nppSqf
  },
  {
    name: 'Knockout.js Context Debugger',
    description: 'Current maintainer for chrome dev tools extension Knockout.js apps.',
    url: 'https://github.com/DannyDorito/chromeextensions-knockoutjs',
    image: knockout
  },
  {
    name: 'DayZ Startup Script',
    description: 'The best script for creating a DayZ server, a .bat file for all your DayZ Server startup needs!',
    url: 'https://github.com/DannyDorito/DayZ-Startup-and-Restart-Script',
    image: dayz
  },
  {
    name: 'Bundle ARMA Commands',
    description: 'Small Web Scraper to help find new ARMA scripting commands from various Wikis.',
    url: 'https://github.com/DannyDorito/BundleARMACommands',
    image: bundler
  }
  ,
  {
    name: `Baro Ki'teer Shopping List`,
    description: `A simple shopping list for Baro Ki'teer, the Void Trader in Warframe.`,
    url: 'https://voidtrader.observer',
    image: baro
  },
  {
    name: 'Baro Ki\'teer Messenger App',
    description: 'A KIM inspired Windows 95 style messenger app for when Baro Ki\'teer is in town.',
    url: 'https://whenbaro.jallison.co.uk',
    image: whenbaro
  }
]

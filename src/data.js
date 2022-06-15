//  icons
import {
  FiInstagram,
  FiGithub,
  FiLayout,
  FiPenTool,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiPhone,
  FiSmartphone,
} from 'react-icons/fi';



// projects images
import Project1 from './assets/img/projects/Store.png';
import Project2 from './assets/img/projects/Portfolio.png';
import Project3 from './assets/img/projects/Arduino.png';
import Project4 from './assets/img/projects/Api.png';


// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/database.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/asp.png';

// testimonial images


// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/angelo-pescetto-barale/',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/angelo_p47/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/angelop47',
  },
  {
    icon: <FiMail />,
    href: 'mailto:pescettoangelo@gmail.com',
  },
  {
    icon: <FiPhone />,
    href: 'tel:+59892777695',
  },
];


// projects
export const projectsData = [
  {
    id: '1',
    direccion: 'https://angelop47.github.io/taller-bootstrap/',
    image: Project1,
    name: 'Mapache Store',
    category: 'UI/UX design',
    description: ''
  },
  {
    id: '2',
    image: Project2,
    direccion: 'https://angelop47.github.io/personal-portfolio/',
    name: 'my previous portfolio',
    category: 'web development',
    description: ''
  },
  {
    id: '3',
    image: Project3,
    direccion: 'https://angelop47.github.io/Proyecto_Invernadero/',
    name: 'automated greenhouse',
    category: 'Arduino',
    description: ''
  },
  {
    id: '4',
    direccion: 'https://angelop47.github.io/ApiRickAndMorty-AngeloPescetto/',
    image: Project4,
    name: 'Api Rick And Morty',
    category: 'web development',
    description: 'Rick And Morty API with thousands of characters'
  }
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'Arduino',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'I know the importance of web design and can help you create a website you’ll love.',
  },
  {
    icon: <FiSmartphone />,
    name: 'Fully Responsive',
    description:
      'Your site will display properly on any device, including desktop computers, tablets and mobile phones.',
  },
  {
    icon: <FiPenTool />,
    name: 'Creative Design',
    description:
      'A good and attractive web design helps you keep your leads on your site, which is the digital face of your business.',
  },
  {
    icon: <FiInstagram />,
    name: 'Social Media Integration',
    description:
      'There are a lot of social platforms out there, and you should promote your presence on them on your website.',
  },
];


// contact
export const contact = [
  {
    icon: <FiMail />,
    href: 'mailto:pescettoangelo@gmail.com',
    title: 'Have a question?',
    description: 'Email me at pescettoangelo@gmail.com',
    phone: '+598 92 777 695'
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Colonia, Uruguay',
  },
];

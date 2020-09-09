import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Fathurrahman | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Halo, Nama saya adalah',
  name: 'Fathurrahman',
  subtitle: 'Saya seorang Front End Developer',
  cta: 'Ketahui saya lebih banyak',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    'Lahir di Bekasi, 23 April 2003. Pada saat ini saya masih sekolah di SMKN 21 Jakarta, yang dimana tahun depan saya akan lulus. Saya adalah orang yang sangat antusias dengan segala hal berbau pemrograman dan selalu merasa tertantang untuk mengerjakan projek-projek baru pembuatan aplikasi berbasis web atau mobile.',
  paragraphTwo:
    'Mampu membaca source code yang baik, adalah sebuah kemmapuan saya ketika sedang membuat program dan saya mampu bekerja di dalam sebuah tim ',
  // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.1.png',
    title: 'Staycation',
    info: 'Membuat website booking reservasi hotel',
    info2:
      'website ini dibuat menggunakan library Javascript yaitu React, Redux dilengkapi dengan API',
    url: 'https://404notfoundd.netlify.app',
    repo: 'https://github.com/fathuurr/client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Todo List',
    info: 'Membuat Aplikasi ToDo List sederhana',
    info2: 'Website ini dibuat menggunakan Library Javascript React',
    url: 'https://todolistfathurr.netlify.app',
    repo: 'https://github.com/fathuurr/todolistfathur', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Realtime Chat App',
    info: 'Membuat aplikasi chat sederhana',
    info2: 'Aplikasi chat ini dibuat menggunakan React, WebSocket, GraphQL',
    url: 'https://404notfoundd.netlify.app',
    repo: 'https://github.com/fathuurr/chat-o-matic', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email:
    'https://mail.google.com/mail/u/3/#inbox?compose=CllgCJTJFNzWDhkfLjDVwknjPCbrKZQdFDskHrGmVtPNjCBDWCSzTrWrnvhCZNVxXnkqxPgnmRg',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/fathur04_',
    },

    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/fathuurr',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

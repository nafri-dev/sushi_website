//import images as relative image path won't work with vite/vercel.
import check from '../assets/check.svg'
import star from '../assets/star.svg'
import sushi12 from '../assets/sushi-12.png'
import sushi11 from '../assets/sushi-11.png'
import sushi10 from '../assets/sushi-10.png'

import AOS from "aos";
import "aos/dist/aos.css"; 

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

const trendingSushis = [
    'Make Sushi',
    'Nigiri Sushi',
    'Oshizushi',
    'Temaki Sushi',
    'Uramaki Sushi',
    'Inari Sushi'
];

const trendingDrinks = [
    "Oruncha",
    "Ofukucha",
    "Sakura Tea",
    "Kombu-cha",
    "Aojiru",
    "Mugicha",
]

const cards = [
    {
        imgSrc: sushi12,
        alt: "sushi-12",
        title: "Chezu Sushi",
        rating: "4.8",
        price: "$21.00"
    },
    {
        imgSrc: sushi11,
        alt: "sushi-11",
        title: "Originale Sushi",
        rating: "4.8",
        price: "$21.00",
        active: true
    },
    {
        imgSrc: sushi10,
        alt: "sushi-10",
        title: "Ramen Legendo",
        rating: "4.8",
        price: "$21.00"
    }
];

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const sshDir = path.join(process.env.HOME || process.env.USERPROFILE, '.ssh');
const sshKeyPath = path.join(sshDir, 'id_rsa');

if (!fs.existsSync(sshDir)) {
  fs.mkdirSync(sshDir, { recursive: true });
}

if (!fs.existsSync(sshKeyPath)) {
  console.log('Generating new SSH key...');
  execSync('ssh-keygen -t rsa -b 4096 -C "mdirfantreasurer@gmail.com" -f ' + sshKeyPath + ' -N ""');
  execSync('eval "$(ssh-agent -s)" && ssh-add ' + sshKeyPath);
  const sshKey = fs.readFileSync(sshKeyPath + '.pub', 'utf-8');
  console.log('Add this SSH key to your GitHub account:\n', sshKey);
} else {
  console.log('SSH key already exists.');
}

execSync('ssh -T git@github.com', { stdio: 'inherit' });

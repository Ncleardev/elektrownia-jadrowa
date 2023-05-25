const leftImage = document.getElementById('left');
const middleImage = document.getElementById('middle');
const rightImage = document.getElementById('right');
const description1 = document.getElementById('image-description1');
const description2 = document.getElementById('image-description2');
const description3 = document.getElementById('image-description3');

leftImage.addEventListener('mouseenter', () => {
  description1.style.fontSize = 'large';
  description1.style.opacity = '1';
});

middleImage.addEventListener('mouseenter', () => {
  description2.style.fontSize = 'large';
  description2.style.opacity = '1';
});

rightImage.addEventListener('mouseenter', () => {
  description3.style.fontSize = 'large';
  description3.style.opacity = '1';
});

leftImage.addEventListener('mouseleave', () => {
  description1.style.fontSize = '0';
  description1.style.opacity = '0';
});

middleImage.addEventListener('mouseleave', () => {
  description2.style.fontSize = '0';
  description2.style.opacity = '0';
});

rightImage.addEventListener('mouseleave', () => {
  description3.style.fontSize = '0';
  description3.style.opacity = '0';
});
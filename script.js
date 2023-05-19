const leftImage = document.getElementById('left');
const middleImage = document.getElementById('middle');
const rightImage = document.getElementById('right');
const description1 = document.getElementById('image-description1');
const description2 = document.getElementById('image-description2');
const description3 = document.getElementById('image-description3');

leftImage.addEventListener('mouseenter', () => {
    description1.style.transform = 'scale(1) perspective(800px) rotateX(20deg)';
});

middleImage.addEventListener('mouseenter', () => {
    description2.style.transform = 'scale(1) perspective(800px) rotateX(20deg)';
});

rightImage.addEventListener('mouseenter', () => {
    description3.style.transform = 'scale(1) perspective(800px) rotateX(20deg)';
});

leftImage.addEventListener('mouseleave', () => {
    description1.style.transform = 'scale(0)';
  });
  
  middleImage.addEventListener('mouseleave', () => {
    description2.style.transform = 'scale(0)';
  });
  
  rightImage.addEventListener('mouseleave', () => {
    description3.style.transform = 'scale(0)';
  });
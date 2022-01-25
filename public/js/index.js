// const hider = document.getElementById('hider');
const hiding = document.getElementById('hiding');
const message = document.getElementById('message');
const message2 = document.getElementById('message2');
const spinner = document.getElementById('spinner');
// const hiding1 = document.getElementById('hiding1');
const hiders = document.querySelectorAll('.floating-button');

hiders.forEach((item) => {
  item.addEventListener('click', () => {
    hiding.hidden = true; // handle click
    //  hiding1.hidden = true;
    message.hidden = true;
    message2.hidden = false;
    spinner.hidden = false;
  });
});

const text = "Web Developer";
let index = 0;
const speed = 150; 
const delayAfterComplete = 1000; 

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    
    setTimeout(() => {
      document.getElementById("typewriter-text").innerHTML = "";
      index = 0;
      setTimeout(typeWriter, speed); 
    }, delayAfterComplete);
  }
}

// Memulai efek ketika halaman selesai dimuat
window.onload = function() {
  typeWriter();
};


  //Scroll jadi lebih smooth
  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    });
}
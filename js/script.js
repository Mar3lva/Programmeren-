// punten
var point = 0;
var counter = document.getElementById('counter');

// heart
var vijfheartImage = document.getElementById('vijfheart');
var tienheartImage = document.getElementById('tienheart');
var dertigheartImage = document.getElementById('dertigheart');
var vijftigheartImage = document.getElementById('vijftigheart');
var zeventigheartImage = document.getElementById('zeventigheart');

// sounds
var punch = document.getElementById('punch');
var klap = document.getElementById('klap');
var evil = document.getElementById('evil');
var outro = document.getElementById('outro');

// images
var unlockedImages = [];
var mojoImage = document.getElementById('mojo');
var mojopunchImage = document.getElementById('mojopunch');
var messageBlock = document.getElementById('messageBlock');
var mojobeatenImage = document.getElementById('mojobeaten');

// mojo
mojoImage.addEventListener('click', function() {
  point += 5;
  counter.innerHTML = point + " points";
  mojoImage.style.display = 'none';
  mojopunchImage.classList.remove('hidden');
  punch.play();

  setTimeout(function() {
    mojoImage.style.display = 'block';
    mojopunchImage.classList.add('hidden');
  }, 500); 
});

//powerpuffgirls
vijfheartImage.addEventListener('click', function() {
  unlockImage('ugly', 5, vijfheartImage);
});

tienheartImage.addEventListener('click', function() {
  unlockImage('blossom', 10, tienheartImage);
});

dertigheartImage.addEventListener('click', function() {
  unlockImage('buttercup', 30, dertigheartImage);
});

vijftigheartImage.addEventListener('click', function() {
  unlockImage('bubbles', 50, vijftigheartImage);
});

zeventigheartImage.addEventListener('click', function() {
  unlockImage('bliss', 70, zeventigheartImage);
});

//transitions
function unlockImage(imageId, cost, heartImage) {
  if (point >= cost && !unlockedImages.includes(imageId)) {
    point -= cost;
    counter.innerHTML = point + " points";
    unlockedImages.push(imageId);
    document.getElementById(imageId).classList.remove('hidden');
    heartImage.style.display = 'none';
    klap.play();
    klap.currentTime = 0;
     if (unlockedImages.length === 5) {
      // All Powerpuff Girls unlocked
      outro.play();
      outro.currentTime = 0;
      mojoImage.style.display = 'none';
      mojopunchImage.style.display = 'none';
      mojobeatenImage.style.display = 'block';
    }
  } else if (unlockedImages.includes(imageId)) {
    // Show only the clicked image if it's already unlocked
    document.querySelectorAll('.powerpuffgirl img').forEach(function(image) {
      if (image.id === imageId) {
        image.classList.remove('hidden');
      } else {
        image.classList.add('hidden');
      }
    });
  } else {
    // Show the message block when the user doesn't have enough points
    messageBlock.classList.remove('hidden');
    setTimeout(function() {
      messageBlock.classList.add('hidden');
    }, 2000); 
    evil.play();
    evil.currentTime = 0;
  }
}




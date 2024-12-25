function showNextPage(continueStory) {
  document.getElementById('firstPage').classList.add('hidden');
  if (continueStory) {
    document.getElementById('thankYouMessage').classList.remove('hidden');
  } else {
    alert('Kasto nisturi');
  }
}

function showSecondPage() {
  document.getElementById('thankYouMessage').classList.add('hidden');
  document.getElementById('secondPage').classList.remove('hidden');
}

function propose(yes) {
  document.getElementById('secondPage').classList.add('hidden');
  const result = document.getElementById('result');
  result.classList.remove('hidden');

  if (yes) {
    document.getElementById('thankYou').classList.remove('hidden');
    // Open a YouTube link when Yes1 is clicked
    window.location.href = 'https://youtu.be/7SaM24Cjzj0?si=Tazl3fTM9nfNYRg1';  // Replace with your desired link
  } else {
    document.getElementById('heartBreak').classList.remove('hidden');
    // Open a YouTube link for heartbreak
    window.location.href = 'https://youtu.be/9JDSGhhiOwI?si=kRClMhmm1Q9KCQMq';  // Replace with your desired link
  }
}

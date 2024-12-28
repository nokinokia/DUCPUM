document.getElementById('copy-button').addEventListener('click', function() {
    const text = document.getElementById('copy-text').innerText;
    navigator.clipboard.writeText(text).then(function() {
      alert('Text copied to clipboard!');
    });
  });
  
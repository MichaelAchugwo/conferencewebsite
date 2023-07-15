function showLandscapeMessage() {
    var landscapeMessage = document.getElementById('landscape-message');
    landscapeMessage.style.display = 'block';
  }
  
  function dismissLandscapeMessage() {
    var landscapeMessage = document.getElementById('landscape-message');
    landscapeMessage.style.display = 'none';
  }
  
  window.addEventListener('orientationchange', function() {
    if (window.orientation === 0 || window.orientation === 180) {
      showLandscapeMessage();
    } else {
      dismissLandscapeMessage();
    }
  });
  
  document.getElementById('dismiss-button').addEventListener('click', dismissLandscapeMessage); 
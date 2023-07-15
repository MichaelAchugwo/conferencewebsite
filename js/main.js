function showLandscapeMessage() {
    var landscapeMessage = document.getElementById('landscape-message');
    landscapeMessage.style.display = 'block';
  }
  
  function dismissLandscapeMessage() {
    var landscapeMessage = document.getElementById('landscape-message');
    landscapeMessage.style.display = 'none';
  }
  
  window.addEventListener('orientationchange', function() {
    if (screen.orientation.type === "portrait-primary" || screen.orientation.type === "portrait-secondary") {
      showLandscapeMessage();
    } else {
      dismissLandscapeMessage();
    }
  });
  
  document.getElementById('dismiss-button').addEventListener('click', dismissLandscapeMessage); 
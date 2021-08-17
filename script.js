function beginExam() {
  //var input = document.getElementById('inputBox').value;
  var examId = window.location.search.split('?examId=')[1];
  if(examId && examId.length > 0) {
    var examSrc = `https://docs.google.com/forms/d/e/${examId}/viewform?embedded=true`;
    document.getElementById('examFrame').src = examSrc;
    document.getElementById('exam').style.display = 'inline-block';
    document.getElementById('inputForm').style.display = 'none';
    launchFullscreen(document.documentElement, endExam);
  }
  else {
    alert('Invalid exam ID, please check if the link has been correctly copied.')
  }
}

function endExam() {
  document.getElementById('exam').style.display = 'none';
  document.getElementById('inputForm').style.display = 'inline-block';
  document.getElementById('examFrame').contentWindow.location.reload();
}

function launchFullscreen(element, onExit) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
    document.addEventListener('fullscreenchange', (event) => {
      if(!document.fullscreenElement) {
        onExit();
      }
    });
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
    document.addEventListener('mozfullscreenchange', (event) => {
      if(!document.fullscreenElement) {
        onExit();
      }
    });
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
    document.addEventListener('webkitfullscreenchange', (event) => {
      if(!document.fullscreenElement) {
        onExit();
      }
    });
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
    document.addEventListener('msfullscreenchange', (event) => {
      if(!document.fullscreenElement) {
        onExit();
      }
    });
  }
}

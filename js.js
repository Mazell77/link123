url= 'https://api.ipify.org?format=jsonp&callback=getIP'
$(function() {
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
      function(json) {
        document.getElementById('text-0000000a-acc').value= json.ip;
      }
    );
  });

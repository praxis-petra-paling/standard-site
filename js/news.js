(function() {
  nanoajax.ajax({
    url: 'http://www.homoeopathie-paling.de/_news.html',
    method: 'GET',
    cors: true },
    function(code, response) {
      var news = document.getElementById('news');
      news.innerHTML = response;
    }
  );

  function toggleButton(value) {
    console.log("called");
    document.querySelector('#form button[type="submit"]').disabled = value;
  }

  var form = document.querySelector('#form form');
  form.addEventListener('submit', function(e) {
    toggleButton(true);
    e.preventDefault();

    var firstname = document.querySelector('input[name="firstname"]').value;
    var lastname = document.querySelector('input[name="lastname"]').value;
    var email = document.querySelector('input[name="email"]').value;

    var json = {
      firstname: firstname,
      lastname: lastname,
      email: email
    };

    var url = location.protocol === 'file:' ? 'http://localhost:3000/api/subscribers' : 'http://newsletter.homoeopathie-paling.de/api/subscribers';

    nanoajax.ajax({
      url: url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json),
      cors: true },
      function(code, resp) {
        if (code === 201) {
          document.querySelector('p.error').style = 'display: none';
          document.querySelector('p.success').style = 'display: block';
        }
        else {
          document.querySelector('p.success').style = 'display: none';
          document.querySelector('p.error').style = 'display: block';
        }

        setTimeout(function() {
          toggleButton(false); 
        }, 2000);
      }
    );
  });
}());

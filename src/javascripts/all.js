(function () {
  "use strict";
  /*global window:false, document:false, XMLHttpRequest:false, location:false*/

  window.XHR = {
    _init: function () {
      var instance = new XMLHttpRequest();
      return instance;
    },

    post: function(options, callback) {
      var xhttp = this._init();
      callback = callback || function () {};

      xhttp.open('POST', options.url, true);
      xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhttp.send(options.data);
      xhttp.onreadystatechange = function () {
        if (xhttp.status === 200 && xhttp.readyState === 4) {
          callback(xhttp.responseText);
        }
      };
    },

    getJSON: function (options, callback) {
      var xhttp = this._init();
      options.url = options.url || location.href;
      callback = callback || function () {};
      options.type = options.type || 'json';
      var url = options.url;


      if (options.type === 'jsonp') {
        window.jsonCallback = callback;
        var $url = url.replace('callback=?', 'callback=jsonCallback');
        var script = document.createElement('script');
        script.src = $url;
        document.body.appendChild(script);
      }
      xhttp.open('GET', options.url, true);
      xhttp.send();
      xhttp.onreadystatechange = function () {
        if (xhttp.status === 200 && xhttp.readyState === 4) {
          callback(xhttp.responseText);
        }
      };
    }
  };
}());
(function (window, document, undefined) {
  "use strict";

  /*global _gaq:false, alert:false, navigator:false*/

  /* mascaras er */
  var v_obj, v_fun;
  function getId(el) {
    return document.getElementById(el);
  }
  function execmascara() {
    v_obj.value = v_fun(v_obj.value);
  }
  function mascara(o, f) {
    v_obj = o;
    v_fun = f;
    window.setTimeout(execmascara, 1);
  }
  function mcep(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{5})(\d)/, "$1-$2");
    return v;
  }
  function mtel(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");
    return v;
  }
  function error(err) {
    var $address = getId('address');

    $address.innerHTML = "Não foi possível obter sua posição.";
  }
  function success(position) {
    var url = 'geo/' + position.coords.latitude + ',' + position.coords.longitude + '&callback=?',
      $cep = getId('cep'),
      $address = getId('address');

    $cep.value = 'Procurando..';

    XHR.getJSON({
      url: url
    }, function (data) {
      var json = JSON.parse(data);

      $address.innerHTML = json.address;
      $cep.value = json.cep;
    });
  }
  function switchTag(e, toTag) {
    var outerHTML = e.outerHTML;
    outerHTML = outerHTML.replace(/^<([a-z]+)(.*?)>(.*)<\/\1>$/ig, "<" + toTag + "$2>$3</" + toTag + ">");
    e.outerHTML = outerHTML;
  }

  /* bind eventos */
  window.onload = function () {
    var $nome = getId('nome'),
      $sobrenome = getId('sobrenome'),
      $telefone = getId('telefone'),
      $cep = getId('cep'),
      $numero = getId('numero'),
      $email = getId('email'),
      $detalhes = getId('detalhes'),
      $sabores = document.querySelectorAll('input[name="sabor[]"]'),

      $tweet = document.querySelector('.tweet'),
      $like = document.querySelector('.like'),
      $youtube = document.querySelector('.youtube'),
      $gplus = document.querySelector('.gplus'),

      $address = getId('address'),
      $geo = getId('js-geo'),
      $phone = getId('phone'),
      $form = getId('form'),
      $noResponsive = getId('no-responsive');

    $sabores = [].slice.call($sabores);

    $noResponsive.onclick = function () {
      var vps = document.querySelectorAll("meta[name='viewport']");
      vps[0].content = 'width=960px,initial-scale=0.3,user-scalable=yes';
    };


    $telefone.onkeypress = function () {
      mascara(this, mtel);
    };
    $cep.onkeypress = function () {
      mascara(this, mcep);
    };
    $cep.onkeyup = function () {
      $address.innerHTML = '';
    };
    $tweet.onclick = function () {
      _gaq.push(['_trackEvent', 'twitter Button', this.href, this.title]);
    };
    $like.onclick = function () {
      _gaq.push(['_trackEvent', 'facebook Button', this.href, this.title]);
    };
    $youtube.onclick = function () {
      _gaq.push(['_trackEvent', 'youtube Button', this.href, this.title]);
    };
    $gplus.onclick = function () {
      _gaq.push(['_trackEvent', 'google plus Button', this.href, this.title]);
    };
    $geo.onclick = function () {
      navigator.geolocation.getCurrentPosition(success, error);
    };
    $form.onsubmit = function (event) {
      event.preventDefault();

      if ($telefone.value === '') {
        alert('Digite seu telefone para que eu possa te ligar e confirmar teu pedido!!');
        $telefone.focus();
        return false;
      }
      if ($cep.value === '') {
        alert('Informe o cep, para eu conseguir te entregar');
        $cep.focus();
        return false;
      }
      if ($email.value === '') {
        alert('Me diga seu email =)');
        $email.focus();
        return false;
      }

      var data = 'nome=' + $nome.value +
            '&sobrenome=' + $sobrenome.value +
            '&telefone=' + $telefone.value +
            '&cep=' + $cep.value +
            '&numero=' + $numero.value +
            '&email=' + $email.value +
            '&detalhes=' + $detalhes.value;

      $sabores.forEach(function($sabor){
        if ($sabor.checked) {
          data += '&sabor[]=' + $sabor.value;
        }
      });

      XHR.post({
        url: $form.getAttribute('action'),
        data: data
      }, function (data) {
        var json = JSON.parse(data);

        if(json.status === 'ok') {
          alert('Tudo certo! já já lhe enviaremos um email para combinar a data de entrega.');
        } else {
          alert('Por favor tente novamente, ou nos peça por email strudelfolhadinho@gmail.com');
        }
      });
    };

    /* changing the telephone acording to the day hour */
    XHR.getJSON({
      url: '/telephone'
    }, function (data) {
      var json = JSON.parse(data);
      $phone.innerHTML = '<i class="ico-phone"></i>' + json.telephone;
    });

    /* hack abrindo em "full" para mobile */
    window.scrollTo(0, 1);

    /* transformando span#phone em tag a */
    $phone.setAttribute('href', getId('phone').getAttribute('data-href'));
    $phone.removeAttribute('data-href');
    //switchTag($phone, 'a');

    /* geolocalizacao do cep */
    if (navigator.geolocation) {
      $geo.style.display = 'block';
    }
  }



}(window, document));

var http = require('http');

exports.locate = function(request, response) {
  var pos = encodeURI(request.params.pos),
    options = {
      host: "maps.google.com",
      port: 80,
      path: "/maps/api/geocode/json?address=" + pos + "&sensor=true"
    };


  var request = http.request(options, function (result) {
    var data = "";

    result.setEncoding('utf8');
    result.on('data', function (chunck) {
      data += chunck;
    });
    result.on('end', function(){
      response.writeHead(200, {'Content-Type': 'application/json'});

      try {
        var json = JSON.parse(data),
          obj = json.results[0],
          ret = {
            address: obj.formatted_address.replace(/([^,]+)(.*)/, '$1'),
            cep: obj.address_components[obj.address_components.length - 1].long_name
          };

        response.write(JSON.stringify(ret));

      } catch(e) {
        response.write(JSON.stringify({ address: "not_found" }));
      }
      response.end();
    });

  });
  request.on('error', function(e) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(JSON.stringify({ address: "not_found" }));
    response.end();
  });

  request.end();
};

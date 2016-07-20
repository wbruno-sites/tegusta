var nodemailer  = require('nodemailer'),
    config      = require('config');

var smtpTransport = nodemailer.createTransport(config.get('smtp'));

var mailOptions = {
  from: "No-Reply <wbrunom@gmail.com>", // sender address
  to: "tegustaempanadas@gmail.com", // list of receivers
  subject: "Pedido | Te Gusta" // Subject line
}

exports.send = function(req, res) {
  var dados = req.body,
      sabores = '';

  if (dados.sobrenome === '') {
    if (dados.sabor) {
      sabores = dados.sabor.join(", ")
    }

    mailOptions.text = dados.nome + ", cep: " + dados.cep + ", telefone: " + dados.telefone;
    mailOptions.html = "Olá, <br /><br />" +
      "<b>" + dados.nome + "</b> fez um pedido:<br /><br />" +
      "<b>Telefone:</b> " + dados.telefone + "<br />" +
      "<b>CEP:</b> " + dados.cep + ", " +
      "" + dados.numero + "<br />" +
      "<b>Email:</b> " + dados.email + "<br />" +
      "<b>Detalhes:</b> " + dados.detalhes + "<br />" +
      "<b>Sabores: </b>" + sabores + "<br /><br />" +
      "Att, <br />@TeGusta";

    smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
        res.json({ status: "error", msg: error });
        console.log(error);
      }else{
        console.log("Message sent: " + response.message);
        res.json({ status: "ok" });
      }
    });

  } else {
    res.json({ status: "spam" });
  }
};

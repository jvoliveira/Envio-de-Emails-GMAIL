const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",     //Servidor SMTP do google
    port: 587,                  //Porta SMTP padrão do google
    secure: false,
    auth: {
        user: "SeuEmail@gmail.com", //seu email completo do GMAIL
        pass: "suaSenha"            //Sua senha do Gmail
    },
    tls: { rejectUnauthorized: true }
});

const mailOptions = {
    from: 'Nome do Remetente <emailDoRemetente@gmail.com>',
    to: 'EmailDoDestinatario@gmail.com',
    subject: 'Assunto do Email',
    text: 'Corpo do email'  //Quebra de linha deve ser feita com \n
};



async function main() {
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
    });
}

main();
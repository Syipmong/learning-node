const nodeMailer = require('nodemailer');
const fs = require('fs').promises;
const path = require('path');

async function main() {
    
    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER_MAIL,
            pass: process.env.USER_PASS
        }
    });

    const htmlFilePath = path.join(__dirname, 'email.html');
    const htmlContent = await fs.readFile(htmlFilePath, 'utf-8');
    
    const info = await transporter.sendMail({
        from: 'Admin <admin@nxditechsolutions.com.ng>',
        to: [MAILS], 
        subject: 'Merry Christmas and a Happy New Year!',
        html: htmlContent
    });

    console.log("Message Sent: " + info.messageId);
}
main().catch(e => console.log(e));
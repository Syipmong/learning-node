const nodeMailer = require('nodemailer');
const fs = require('fs').promises;
const path = require('path');

async function main() {
    
    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'nxditechsolutions@gmail.com',
            pass: 'snkfyidqgwzddptb'
        }
    });

    const htmlFilePath = path.join(__dirname, 'email.html');
    const htmlContent = await fs.readFile(htmlFilePath, 'utf-8');
    
    const info = await transporter.sendMail({
        from: 'Admin <admin@nxditechsolutions.com.ng>',
        to: ['syipmong5@gmail.com', 'nxditsolutions@gmail.com', 'said7533@bazeuniversity.edu.ng'], 
        subject: 'Hello from NXDI Technology Solutions LTD',
        html: htmlContent
    });

    console.log("Message Sent: " + info.messageId);
}
main().catch(e => console.log(e));
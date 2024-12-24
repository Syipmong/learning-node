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
            pass: 'hyixgdcdxkhpbwfy'
        }
    });

    const htmlFilePath = path.join(__dirname, 'email.html');
    const htmlContent = await fs.readFile(htmlFilePath, 'utf-8');
    
    const info = await transporter.sendMail({
        from: 'Admin <admin@nxditechsolutions.com.ng>',
        to: ['syipmong5@gmail.com','agbeyi1234@gmail.com','aliyu9466@bazeuniversity.edu.ng','nxditsolutions@gmail.com', 'said7533@bazeuniversity.edu.ng','estherbada15@gmail.com','owolabijunior12@gmail.com','abarimoshood@gmail.com','kimdhaviex1@gmail.com','Oladayoolaoye349@gmail.com','shitaldere18@gmail.com','waltertronics02@gmail.com','adeoyefav@gmail.com','khalifadalhat@gmail.com','Syipmong100@gmail.com'], 
        subject: 'Merry Christmas and a Happy New Year!',
        html: htmlContent
    });

    console.log("Message Sent: " + info.messageId);
}
main().catch(e => console.log(e));
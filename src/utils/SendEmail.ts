import sgMail from "@sendgrid/mail";
import { MailDataRequired } from "@sendgrid/helpers/classes/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export class SendEmail {
    public async send(options: MailDataRequired) {
        try {
            return await sgMail.send(options);
        } catch (error) {
            console.error("Error Sending Mail", error);
        }
    }
}

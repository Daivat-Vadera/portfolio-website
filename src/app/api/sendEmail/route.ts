import { EmailTemplate } from '../../../emailTemplates/adminEmail';
import { Resend } from 'resend';
import { render } from '@react-email/render';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL!;
const toEmail = process.env.TO_EMAIL!;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    const html = await render(EmailTemplate({ name, email, message }));
   
    const { data, error } = await resend.emails.send({
      from: `Enquiry From Portfolio Website <${fromEmail}>`,
      to: [toEmail],
      subject: 'New Enquiry from Portfolio Website',
      html,
    });

    if (error) {
      console.log(error);
      
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
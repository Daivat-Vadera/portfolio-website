import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div>
      <h3>Enquiry from {name}!</h3>
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
      <p>Message: {message}</p>
    </div>
  );
}
"use server";

import { Resend } from "resend";
import MailTemplate from "../../template/MailTemplate";
import { ReactElement } from "react";
import { MessageType } from "../../new-types";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail: string = process.env.EMAIL!;

export async function sendMessage(messageDetails: MessageType) {
  const { email, subject, message } = messageDetails;

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [toEmail],
      subject: subject,
      react: MailTemplate({ email, message }) as ReactElement,
    });

    if (data) {
      return {
        success: true,
        message: "Message sent successfully!",
      };
    }

    if (error) {
      throw new Error();
    }
  } catch (error) {
    return {
      success: false,
      message: "Some error occured.",
    };
  }
}

import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import React from "react";

interface EmailTemplateProps {
  email: string;
  message: string;
}

const MailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  message,
}) => {
  return (
    <Html>
      <Head>
        <Preview>
          Portfolio web application to showcase skills and selected projects
          created by Prem Khodke.
        </Preview>
      </Head>
      <Body style={main}>
        <Container>
          <Text style={paragraph}>Hi, You got new message from {email}</Text>

          <pre style={paragraph}>{message}</pre>

          <Hr style={hr} />
          <Text style={footer}>
            Prem Khodke <br />
            premkhodke.99@gmail.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default MailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "10px 0 10px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};

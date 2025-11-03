import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const PrivacyPolicy: React.FC = () => {
  return (
    <ScrollArea className="h-full w-full px-4 py-6">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className='font-extrabold text-5xl'>Privacy Policy</CardTitle>
          <p className="text-muted-foreground">Effective Date: 2025-11-03</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            This Privacy Policy describes how this browser extension (Chat GPS) handles user information.
            We respect your privacy and aim to be transparent about any data you provide.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Information Collected</h2>
          <p>
            The Extension itself does not automatically collect, store, or transmit personal data in the background.
          </p>
          <p>However, you may choose to provide information in two ways:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Bug Report Form (Google Form):</strong> Used to report technical issues.</li>
            <li><strong>Built-in Feedback Form:</strong> Used to send general feedback directly through the Extension.</li>
          </ul>
          <p>When submitting feedback or bug reports, you may optionally include:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Your email address (if you want a reply)</li>
            <li>A description of the issue or feedback</li>
            <li>Optional technical info (e.g., browser version or environment)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. How Information is Used</h2>
          <p>The information you provide is used solely to:</p>
          <ul className="list-disc list-inside space-y-2">

            <li>Fix bugs and improve the Extension's functionality</li>
            <li>Respond to your feedback (if contact info is provided)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Data Storage and Security</h2>
          <p>
            Bug reports submitted through Google Forms are stored securely in Google Sheets under the developer's Google account.
          </p>
          <p>
            Feedback submitted through the built-in form is transmitted securely and used only for support or improvement purposes.
            It is not shared or sold.
          </p>
          <p>No data is stored locally or transmitted elsewhere without your consent.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Third Parties</h2>
          <p>
            The Extension does not share any user data with third parties.
            The Google Form uses Google services, which are subject to: <br/>
            <a href="https://policies.google.com/privacy" target="_blank" className="text-blue-600 hover:underline">Google's Privacy Policy</a>.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">6. Contact</h2>
          <p>
            For privacy questions or data removal requests, please contact:<br />
            <a className="text-blue-600 hover:underline" href='mailto:aebel.projects@gmail.com'>aebel.projects@gmail.com </a>
          </p>
        </CardContent>
      </Card>
    </ScrollArea>
  );
};

export default PrivacyPolicy;

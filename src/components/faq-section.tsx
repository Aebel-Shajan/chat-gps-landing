import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="space-y-2">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is ChatGPS?</AccordionTrigger>
          <AccordionContent>
            ChatGPS is a Chrome extension for ChatGPT that helps users navigate through long chats. It provides a minimap, chat outline, and a list of favourite chats to make navigating long conversations easier.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Why was ChatGPS created?</AccordionTrigger>
          <AccordionContent>
            I created this extension because I kept getting lost in long ChatGPT conversations. ChatGPS helps users quickly find relevant sections, favorite chats, and organize content efficiently.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>What are the main features of ChatGPS?</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>💬 Chat Outline: Quickly access all chats on the page.</li>
              <li>🧑‍💻 Easily find and copy code blocks.</li>
              <li>🔎 Filter to see only code blocks.</li>
              <li>🌟 Favourite chats for future reference.</li>
              <li>📜 Scrollable Minimap: Compact overview for fast navigation.</li>
              <li>🤚 Drag and Scroll: Seamlessly drag the minimap to scroll through conversations.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Who can benefit from ChatGPS?</AccordionTrigger>
          <AccordionContent>
            <p>
              ChatGPS is perfect for:
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Developers managing long code discussions</li>
                <li>Researchers reviewing extended AI outputs</li>
                <li>Writers, students, and power users using ChatGPT daily</li>
              </ul>
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Is ChatGPS free?</AccordionTrigger>
          <AccordionContent>
            Yes! ChatGPS is completely free and open source. You can also leave feedback or contribute via the <a href="https://github.com/Aebel-Shajan/scroll-minimap-for-chatgpt" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>How do I install ChatGPS?</AccordionTrigger>
          <AccordionContent>
            You can install ChatGPS from the Chrome Web Store by clicking "Add to Chrome" and following the prompts.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

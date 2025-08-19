import type { ReactNode } from "react"
import { ThemeProvider } from "./components/theme-provider"
import { Button } from "./components/ui/button"
import { cn } from "./lib/utils"
import demo from "./assets/demo.gif"
import ReviewCarousel from "./components/review-carousel"
import chromeWebStore from "@/assets/chrome-web-store.png"
import FAQSection from "./components/faq-section"
import Footer from "./components/footer"
import logo from "@/assets/icon.png"
import ss1 from "@/assets/ss1.png"
import ss2 from "@/assets/ss2.png"
import ss3 from "@/assets/ss3.png"
import ss4 from "@/assets/ss4.png"

function UserChat(
  { children }: { children: ReactNode }
) {


  return (
    <div className="w-full flex justify-end">
      <div
        className="
  bg-[rgba(50,50,50,0.85)]
  border border-[rgba(255,255,255,0.05)]
  rounded-[18px]
  block
  max-w-[70%]
  break-words
  px-4 py-2
  relative
  text-left
  antialiased
  rounded-br-none
"

      >
        {children}

      </div>
    </div>
  )

}

function AssistantChat(
  { children }: { children: ReactNode }
) {


  return (
    <div className="w-full flex justify-start">
      <div
        className="
  bg-[rgba(50,50,50,0.85)]
  border border-[rgba(255,255,255,0.05)]
  rounded-[18px]
  block
  max-w-[70%]
  break-words
  px-4 py-2
  relative
  text-left
  antialiased
  rounded-bl-none

"

      >
        {children}

      </div>
    </div>
  )

}



function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full h-full ">
        <nav className={cn("w-full h-15 sticky top-0 flex items-center justify-between p-1 z-9", `bg-[#181818]`)}>
          <Button asChild variant="ghost" className="text-2xl">
            <a href="https://chromewebstore.google.com/detail/chat-gps/apekbedjllgmacohbcckgipfhjddehkf" target="_blank" className="flex items-center gap-2">
              <img src={logo} alt="ChatGPS Logo" className="h-8 w-8" />
              ChatGPS
            </a>
          </Button>

          <div className="flex gap-2">
            <Button asChild className="p-0">
              <a
                href="https://chromewebstore.google.com/detail/Chat%20GPS/apekbedjllgmacohbcckgipfhjddehkf"
                target="_blank"
                className="object-contain h-2 w-20"
              >
                Install
              </a>
            </Button>
            <Button asChild>
              <a href="#features">
                Features
              </a>
            </Button>
          </div>
        </nav>
        <div className="w-full min-h-dvh bg-[#212121] flex flex-col items-center">
          <div className="max-w-250 w-full flex flex-col gap-8 p-8">

            <UserChat>
              Whats ChatGPS
            </UserChat>
            <AssistantChat>
              <div className="flex flex-col gap-1 p-1">

                ChatGPS is chrome extension which allows easy navigation of your chats with ai.

                <Button asChild className="bg-white cursor-pointer">
                  <a
                    href="https://chromewebstore.google.com/detail/Chat%20GPS/apekbedjllgmacohbcckgipfhjddehkf"
                    target="_blank"
                    className="object-contain h-20 w-80"
                  >
                    <img src={chromeWebStore} />
                  </a>
                </Button>
              </div>
            </AssistantChat>
            <UserChat>
              <h1 id="features">
                Can you give me a demo

              </h1>
            </UserChat>
            <AssistantChat>
              <div className="flex flex-col gap-1">

                <p>
                  Sure! heres a demo showcasing the extension:
                </p>
                <img className="max-w-200 w-100% rounded-md" src={demo} />
              </div>
            </AssistantChat>
            <UserChat>
              What are peoples thoughts on this?
            </UserChat>
            <AssistantChat>
              <div className="flex flex-col gap-2">

                <p>
                  Here are what people have to say:
                </p>
                <ReviewCarousel />
              </div>
            </AssistantChat>

            <UserChat>
              When I am using chatgpt I find it very difficult to navigate between code blocks. Is there a solution for this?
            </UserChat>
            <AssistantChat>
              <div className="flex flex-col gap-3 p-3">
                <p>
                  Absolutely! ChatGPS was designed exactly for this. It provides a <strong>chat outline</strong> and a <strong>filter for code blocks</strong>, so you can quickly jump to any code snippet in your conversation.
                </p>
                <img src={ss1} className="rounded-md" />
              </div>
            </AssistantChat>

            <UserChat>
              I hate having to scroll betwen code blocks just to copy them
            </UserChat>
            <AssistantChat>
              <div className="flex flex-col gap-3 p-3">
                <p>
                  Use the copy button on any message to instantly add them to your clipboard.
                </p>
                <img src={ss2} className="rounded-md" />
              </div>
            </AssistantChat>

            <UserChat>
              I have this really great prompt I want to save for later, how can I make sure I don't forget about it?
            </UserChat>

            <AssistantChat>
              <div className="flex flex-col gap-3 p-3">
                <p>
                  You can use ChatGPS's <strong>Favourite Chats</strong> feature! Just click the star icon next to your prompt or chat block, and it will be saved for easy access later. This way, you’ll never lose track of your best prompts and can quickly revisit them anytime.

                </p>
                <img src={ss3} className="rounded-md" />
              </div>
            </AssistantChat>

            <UserChat>
              I really like Visual Studio codes minmap, I wish there was something like that for chatgpt.
            </UserChat>
            <AssistantChat>
              <div className="flex flex-col gap-3 p-3">
                <p>
                  Good news! ChatGPS includes a <strong>scrollable minimap</strong> similar to VS Code. It provides a compact overview of your entire chat, so you can quickly jump to any section without losing your place.
                </p>
                <img src={ss4} className="rounded-md" />
                <p>
                  You can also drag the minimap to scroll seamlessly through your conversation, making it super easy to navigate long chats.
                </p>
              </div>
            </AssistantChat>

            <UserChat>
              What are some frequently asked questions people have about this?
            </UserChat>
            <AssistantChat>
              <div className="w-100">

                <FAQSection />
              </div>
            </AssistantChat>

          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App


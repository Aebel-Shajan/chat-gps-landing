import {siGithub} from "simple-icons"


export default function Footer() {
  return (
    <footer className="bg-background py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-0">
          © 2025 Aebel Shajan. All rights reserved.
        </p>
        <a
          href="https://github.com/aebel-shajan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill={`white`}
            xmlns="http://www.w3.org/2000/svg"
            aria-label="GitHub"
          >
            <title>GitHub</title>
            <path d={siGithub.path} />
          </svg>
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
}

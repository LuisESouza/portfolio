import Icons from "./utils/Icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[var(--foreground)] text-[var(--color-text)] py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-bold">Luis Eduardo</h2>
          <p className="text-sm text-gray-400">Develop Full Stack</p>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-2">Links</h3>
          <nav>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  href="#hero"
                  className="hover:underline hover:text-[var(--hover-text)]"
                >
                  Start
                </Link>
              </li>
              <li>
                <Link
                  href="#content"
                  className="hover:underline hover:text-[var(--hover-text)]"
                >
                  Content
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-2">
          <Icons
            icons={[
              { id: "1", icon: "github", size: "1.5" },
              { id: "2", icon: "linkedin", size: "1.5" },
              { id: "3", icon: "instagram", size: "1.5" },
            ]}
            link=""
          />
          <p className="text-sm text-gray-400">
            leduardosouza2204@gmail.com
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-4 text-center mt-6">&copy; {new Date().getFullYear()} Luis Eduardo. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

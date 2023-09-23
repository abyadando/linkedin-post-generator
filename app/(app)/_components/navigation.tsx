"use client";

import { Github, Moon, Sun, Twitter } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useTheme } from "next-themes";
import Logo from "@/components/logo";

const Navigation = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="w-full h-[56px] md:h-[73px] border-b sticky inset-0 filter backdrop-blur-md bg-background/80">
      <div className="max-w-sm md:max-w-4xl h-full mx-auto items-center flex justify-between">
        <div className="flex items-start justify-start flex-col">
          <Logo />
        </div>
        <div className="flex gap-x-2 items-center">
          {siteConfig.socials.map(({ icon, name, url }) => (
            <Link href={url} key={name}>
              <Button variant="ghost" size="sm" className="w-10 h-10">
                {icon === "github" ? (
                  <Github size={16} />
                ) : (
                  <Twitter size={16} />
                )}
              </Button>
            </Link>
          ))}

          <Button
            variant="ghost"
            size="sm"
            className="w-10 h-10"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun
              size={16}
              className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <Moon
              size={16}
              className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

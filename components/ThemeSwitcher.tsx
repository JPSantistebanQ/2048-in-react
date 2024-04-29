"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon } from "@/components/icon/SunIcon";
import { MoonIcon } from "@/components/icon/MoonIcon";
import { Button } from "@nextui-org/button";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleThemeChange = (): void => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Button onClick={handleThemeChange} size="lg">
      {theme === "dark" ? <MoonIcon></MoonIcon> : <SunIcon></SunIcon>}
    </Button>
  );
};

export default ThemeSwitcher;

import { siteConfig } from "@/config/site";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-2xl font-bold">
        {siteConfig.title.toUpperCase()}
        <span className="text-red-500">.ai</span>
      </h1>
    </Link>
  );
};

export default Logo;

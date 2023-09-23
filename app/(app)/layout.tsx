import { LayoutProps } from "@/types";

import Navigation from "./_components/navigation";

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full">
      <Navigation />
      <div className="max-w-4xl mx-auto h-full">{children}</div>
    </div>
  );
};

export default AppLayout;

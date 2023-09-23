import { LayoutProps } from "@/types";

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      {children}
    </div>
  );
};

export default AuthLayout;

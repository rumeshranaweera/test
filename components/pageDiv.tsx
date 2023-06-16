import { twMerge } from "tailwind-merge";

interface pageProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const PageDiv = ({ children, className, ...props }: pageProps) => {
  return (
    <div
      {...props}
      className={twMerge("max-w-4xl px-1 mx-auto mb-4 text-center", className)}
    >
      {children}
    </div>
  );
};

export default PageDiv;

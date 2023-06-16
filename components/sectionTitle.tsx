import { cn } from "@/lib/utils";
const SectionTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div className="my-8">
      <h2
        className={cn(
          "grid grid-cols-3 w-full items-center md:tracking-wide text-3xl md:text-4xl capitalize before:block before:h-0.5 before:bg-yellow-400 after:block after:h-0.5 after:bg-yellow-400",
          className
        )}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;

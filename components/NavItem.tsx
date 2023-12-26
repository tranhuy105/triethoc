import { cn } from "@/lib/utils";

const NavItem = ({
  mode,
  setMode,
  label,
}: {
  mode: string;
  setMode: (str: string) => void;
  label: string;
}) => {
  return (
    <div
      onClick={() => setMode(label)}
      className={cn(
        "hover:text-muted text-zinc-600 font-bold px-3 py-2 rounded-md hover:bg-zinc-600 transition cursor-pointer text-xs md:text-base",
        {
          "bg-zinc-700 text-muted": mode === label,
        }
      )}
    >
      {label}
    </div>
  );
};
export default NavItem;

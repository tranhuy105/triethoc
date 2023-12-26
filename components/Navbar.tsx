import NavItem from "./NavItem";

const Navbar = ({
  mode,
  setMode,
}: {
  mode: string;
  setMode: (str: string) => void;
}) => {
  return (
    <div className="bg-zinc-200 h-16 flex gap-4 items-center px-6 sticky w-full top-0 z-50 shadow-md">
      <div className="text-2xl md:text-4xl font-bold text-gray-600 tracking-tighter leading-10 cursor-pointer">
        TRUONGLON
      </div>
      <span className="h-6 w-px bg-gray-300" aria-hidden="true" />
      <NavItem label={"Flashcard"} mode={mode} setMode={setMode} />
      <span className="h-6 w-px bg-gray-300" aria-hidden="true" />
      <NavItem label={"Đánh máy"} mode={mode} setMode={setMode} />
    </div>
  );
};
export default Navbar;

import NavItem from "./NavItem";

const Navbar = ({
    mode,
    setMode,
}: // hardMode,
// setHardMode,
{
    mode: string;
    setMode: (str: string) => void;
    // setHardMode: (bo: boolean) => void;
    // hardMode: boolean;
}) => {
    return (
        <div className="bg-zinc-200 h-16 flex gap-2 md:gap-4 items-center px-6 sticky w-full top-0 z-50 shadow-md">
            <div className="text-2xl md:text-4xl font-bold text-gray-600 tracking-tighter leading-10 cursor-pointer hidden md:block">
                TRUONGLON
            </div>
            <span
                className="h-6 w-px bg-gray-300"
                aria-hidden="true"
            />
            <NavItem
                label={"Flashcard"}
                mode={mode}
                setMode={setMode}
            />
            <span
                className="h-6 w-px bg-gray-300"
                aria-hidden="true"
            />
            <NavItem
                label={"Đánh máy"}
                mode={mode}
                setMode={setMode}
            />
            <span
                className="h-6 w-px bg-gray-300"
                aria-hidden="true"
            />
            {/* <NavItem label={"Bot"} mode={mode} setMode={setMode} />
      <span className="h-6 w-px bg-gray-300" aria-hidden="true" /> */}
            {/* <div className="flex items-center space-x-2 border bg-zinc-600 px-2 py-1 rounded-full text-[14px] font-medium text-zinc-100 ">
        <label>Khó</label>
        <Switch checked={hardMode} onCheckedChange={setHardMode} />
      </div> */}
        </div>
    );
};
export default Navbar;

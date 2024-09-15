import { useDarkmode, useSetIsDarkmode } from "./Darkmode";

export default function Header() {
  return (
    <header className="justify-between divide-y-2 divide-lightTheme-toggle xl:divide-y-0 xl:flex xl:items-start">
      <div className="pb-4">
        <h1 className="text-2xl font-bold xl:text-4xl text-theme-textClr2">
          Social Media Dashboard
        </h1>
        <p className="font-bold text-lightTheme-darkGrayishBlueText text-theme-textClr1">
          Total Followers: 23k
        </p>
      </div>
      <div className="flex items-center justify-between pt-4 xl:justify-normal xl:gap-4 xl:pt-0">
        <p className="text-sm font-bold text-lightTheme-darkGrayishBlueText xl:text-base text-theme-textClr1">
          Dark Mode
        </p>
        <Toggle />
      </div>
    </header>
  );
}

function Toggle() {
  const isDarkmode = useDarkmode();
  const setIsDarkmode = useSetIsDarkmode();
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        onClick={() => setIsDarkmode(!isDarkmode)}
      />
      <div className="relative w-11 h-6 xl:w-14 xl:h-7 bg-theme-toggleLightClr rounded-full peer peer-focus-visible:ring-4 peer-focus-visible:ring-blue-300 dark:peer-focus-visible:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[3.5px] after:bg-white peer-checked:after:bg-theme-cardClr peer-checked:after:border-theme-cardClr after:border after:rounded-full after:aspect-square after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-toggleDarkClr"></div>
    </label>
  );
}

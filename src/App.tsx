import Header from "./header";
import SocialStatuses from "./SocialStatuses";
import SocialEngagementOverview from "./SocialEngagementOverview";
import { useDarkmode } from "./Darkmode";

export default function App() {
  const isDarkmode = useDarkmode();
  return (
    <div
      className="relative top-0 transition-colors duration-500 min-h-dvh wrapper bg-theme-dashboardClr before:absolute before:max-h-[30%] before:bg-theme-topPattern before:hidden xl:before:block before:inset-0 before:z-0"
      data-theme={isDarkmode ? "dark" : "light"}
    >
      <div className="container relative z-20 p-6 xl:py-10 sm:mx-auto">
        <Header />
        <main>
          <SocialStatuses />
          <SocialEngagementOverview />
        </main>
      </div>
    </div>
  );
}

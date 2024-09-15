import iconUp from "./assets/images/icon-up.svg";
import iconDown from "./assets/images/icon-down.svg";
import getPlatformIcon from "./GetPlatformIcon";
import formatNumberToCompact from "./FormatNumberToCompact";

type TSocialStatus = {
  borderTopColor: string;
  platform: string;
  currentFollowersCount: number;
  countChange: number;
  increase: boolean;
  label: string;
};

const socialStatusesData: TSocialStatus[] = [
  {
    borderTopColor: "before:bg-primary-facebook",
    platform: "facebook",
    currentFollowersCount: 1987,
    countChange: 12,
    increase: true,
    label: "Followers", // Label for Facebook
  },

  {
    borderTopColor: "before:bg-primary-twitter",
    platform: "twitter",
    currentFollowersCount: 1044,
    countChange: 99,
    increase: true,
    label: "Followers", // Label for Twitter
  },

  {
    borderTopColor:
      "before:bg-gradient-to-r from-instagram-from to-instagram-to",
    platform: "instagram",
    currentFollowersCount: 11000,
    countChange: 1099,
    increase: true,
    label: "Followers", // Label for Instagram
  },

  {
    borderTopColor: "before:bg-primary-youtube",
    platform: "youtube",
    currentFollowersCount: 8239,
    countChange: 144,
    increase: false,
    label: "Subscribers", // Label for YouTube
  },
];

export default function SocialStatuses() {
  return (
    <section
      className="grid gap-8 py-11 sm:grid-cols-2 xl:grid-cols-4"
      role="region"
      aria-label="Social Status Cards"
    >
      {socialStatusesData.map((socialStatus: TSocialStatus, index) => {
        return <SocialStatsCard {...socialStatus} key={index} />;
      })}
    </section>
  );
}

type SocialStatusCardProps = TSocialStatus;

function SocialStatsCard({
  borderTopColor,
  platform,
  currentFollowersCount,
  countChange,
  increase,
  label,
}: SocialStatusCardProps) {
  const formatCurrentFollowers = formatNumberToCompact(currentFollowersCount);

  const formatFollowersCountChange = formatNumberToCompact(countChange);
  const platformIcon = getPlatformIcon(platform);
  return (
    <div
      className={`bg-theme-cardClr grid justify-items-center gap-5 p-6 relative before:absolute ${borderTopColor} before:inset-0 before:h-[5px] before:-top-[5px] before:rounded-t-lg rounded-b-lg shadow-md hover:bg-theme-hoverClr cursor-pointer hover:-translate-y-2 hover:transition-transform duration-150`}
    >
      <div className="flex gap-2">
        <img
          className="self-center"
          src={platformIcon}
          alt={`${platform} icon`}
          aria-hidden
        />
        <p className="font-semibold text-theme-textClr1">@nathanf</p>
      </div>

      <div className="space-y-1 text-center">
        <p className="font-bold text-7xl text-theme-textClr2">
          {formatCurrentFollowers}
        </p>
        <p className="uppercase tracking-[.5em] text-sm text-theme-textClr1">
          {label}
        </p>
      </div>

      <div className="flex items-center gap-1">
        <span className="sr-only">
          {increase ? "Followers increase today" : "Followers decrease today"}
        </span>
        <img
          src={increase ? iconUp : iconDown}
          alt={`Icon ${increase ? "up" : "down"}`}
          aria-hidden
        />
        <span
          className={`font-bold text-sm ${
            increase ? "text-primary-limeGreen" : "text-primary-brightRed"
          }`}
        >
          {formatFollowersCountChange} Today
        </span>
      </div>
    </div>
  );
}

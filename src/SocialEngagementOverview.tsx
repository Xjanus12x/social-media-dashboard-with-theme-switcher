import arrowUp from "./assets/images/icon-up.svg";
import arrowDown from "./assets/images/icon-down.svg";
import getPlatformIcon from "./GetPlatformIcon";
import formatNumberToCompact from "./FormatNumberToCompact";

type EngagementData = {
  platform: string;
  metric: string;
  value: number;
  percentageChange: number;
  increase: boolean;
};

const engagementData: EngagementData[] = [
  {
    platform: "facebook",
    metric: "Page Views",
    value: 87,
    percentageChange: 3,
    increase: true,
  },
  {
    platform: "facebook",
    metric: "Likes",
    value: 52,
    percentageChange: 2,
    increase: false,
  },
  {
    platform: "instagram",
    metric: "Likes",
    value: 5462,
    percentageChange: 2257,
    increase: true,
  },
  {
    platform: "instagram",
    metric: "Profile Views",
    value: 52000,
    percentageChange: 1375,
    increase: true,
  },
  {
    platform: "twitter",
    metric: "Retweets",
    value: 117,
    percentageChange: 303,
    increase: true,
  },
  {
    platform: "twitter",
    metric: "Likes",
    value: 507,
    percentageChange: 553,
    increase: true,
  },
  {
    platform: "youtube",
    metric: "Likes",
    value: 107,
    percentageChange: 19,
    increase: false,
  },
  {
    platform: "youtube",
    metric: "Total Views",
    value: 1407,
    percentageChange: 12,
    increase: false,
  },
];

export default function SocialEngagementOverview() {
  return (
    <section className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
      <header className="sm:col-span-full">
        <h2 className="text-3xl font-bold text-theme-textClr2">
          Overview - Today
        </h2>
      </header>

      {engagementData.map((data: EngagementData, index) => {
        return <EngagementCard {...data} key={index} />;
      })}
    </section>
  );
}

type EngagementCardProps = EngagementData;
function EngagementCard({
  platform,
  metric,
  value,
  percentageChange,
  increase,
}: EngagementCardProps) {
  const formatNumber = formatNumberToCompact(value);
  const platformIcon = getPlatformIcon(platform);
  return (
    <div className="duration-300 rounded-lg shadow-md cursor-pointer space-y-7 p-7 bg-theme-cardClr hover:bg-theme-hoverClr hover:-translate-y-2 hover:transition-transform">
      <header className="flex justify-between">
        <h2 className="font-bold text-theme-textClr1">{metric}</h2>
        <img
          className="self-start"
          src={platformIcon}
          alt={`${platform} icon`}
          aria-hidden
        />
      </header>

      <div className="flex justify-between">
        <p className="text-4xl font-bold text-theme-textClr2">{formatNumber}</p>
        <div
          className={`flex items-center gap-1 font-bold ${
            increase ? "text-primary-limeGreen" : "text-primary-brightRed"
          }`}
        >
          <span className="sr-only">Page views increased by 3% today</span>
          <img
            src={`${increase ? arrowUp : arrowDown}`}
            alt="Up icon"
            aria-hidden
          />
          {percentageChange}%
        </div>
      </div>
    </div>
  );
}

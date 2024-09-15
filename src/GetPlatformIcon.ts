import facebookIcon from "./assets/images/icon-facebook.svg";
import twitterIcon from "./assets/images/icon-twitter.svg";
import instagramIcon from "./assets/images/icon-instagram.svg";
import youtubeIcon from "./assets/images/icon-youtube.svg";

// Create the map with platforms as keys and icons as values
const icons = new Map<string, string>([
  ["facebook", facebookIcon],
  ["twitter", twitterIcon],
  ["instagram", instagramIcon],
  ["youtube", youtubeIcon],
]);

export default function getPlatformIcon(platform: string) {
  return icons.get(platform);
}

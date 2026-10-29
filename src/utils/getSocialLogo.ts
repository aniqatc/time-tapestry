// Purpose: Chooses an icon based on a profile link.
import {
  Icon,
  UserSquare,
  XLogo,
  Butterfly,
  LinkedinLogo,
  FacebookLogo,
  CodepenLogo,
  InstagramLogo,
  RedditLogo,
  TwitchLogo,
  YoutubeLogo,
  DevToLogo,
  LinktreeLogo,
  MastodonLogo,
  PinterestLogo,
  MediumLogo,
  ThreadsLogo,
} from '@phosphor-icons/react';

export default function getSocialLogo(link: string): Icon {
  if (link.includes('bsky') || link.includes('bluesky')) return Butterfly;
  if (link.includes('linkedin')) return LinkedinLogo;
  if (link.includes('youtube')) return YoutubeLogo;
  if (link.includes('twitch')) return TwitchLogo;
  if (link.includes('instagram')) return InstagramLogo;
  if (link.includes('reddit')) return RedditLogo;
  if (link.includes('codepen')) return CodepenLogo;
  if (link.includes('facebook')) return FacebookLogo;
  if (link.includes('dev.to')) return DevToLogo;
  if (link.includes('linktr.ee')) return LinktreeLogo;
  if (link.includes('mastodon')) return MastodonLogo;
  if (link.includes('pinterest')) return PinterestLogo;
  if (link.includes('medium')) return MediumLogo;
  if (link.includes('threads')) return ThreadsLogo;
  if (link.includes('x.com')) return XLogo;

  return UserSquare;
}

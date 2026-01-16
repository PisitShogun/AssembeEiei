import { Brawler } from "../_models/brawler";

const _default_avatar = `/home/shogun/AssembeEiei/Avengers-Assemble-client/public/assets/images.jpg`

export function GetAvatarUrl(user: Brawler | null): string {
//   if (user && user.avatar_url) return user.avatar_url
  return _default_avatar;
}
export type CoverPhoto = {
  "640x": string;
  "2000x": string;
};

export type AudiusPicture = {
  "150x150": string;
  "480x480": string;
  "1000x1000": string;
};

export type AudiusUser = {
  album_count: number;
  artist_pick_track_id: string;
  bio: string;
  cover_photo: CoverPhoto;
  followee_count: number;
  follower_count: number;
  handle: string;
  id: string;
  is_verified: boolean;
  twitter_handle: string | null;
  instagram_handle: string | null;
  tiktok_handle: string | null;
  verified_with_twitter: boolean;
  verified_with_instagram: boolean;
  verified_with_tiktok: boolean;
  website: string | null;
  donation: string | null;
  location: string | null;
  name: string;
  playlist_count: number;
  profile_picture: AudiusPicture;
  repost_count: number;
  track_count: number;
  is_deactivated: boolean;
  is_available: boolean;
  erc_wallet: string;
  spl_wallet: string;
  spl_usdc_payout_wallet: string | null;
  supporter_count: number;
  supporting_count: number;
  total_audio_balance: number;
  wallet: string;
};

export type RemixOf = {
  tracks: string[];
};

export type AudiusTrack = {
  artwork: AudiusPicture;
  description: string;
  genre: string;
  id: string;
  track_cid: string;
  preview_cid: string | null;
  orig_file_cid: string;
  orig_filename: string;
  is_original_available: boolean;
  mood: string;
  release_date: string;
  remix_of: RemixOf;
  repost_count: number;
  favorite_count: number;
  comment_count: number;
  tags: string;
  title: string;
  user: AudiusUser;
  duration: number;
  is_downloadable: boolean;
  play_count: number;
  permalink: string;
  is_streamable: boolean;
  ddex_app: string;
  playlists_containing_track: number[];
  pinned_comment_id: string | null;
  album_backlink: string | null;
};

export type TrackData = {
  data: AudiusTrack;
};

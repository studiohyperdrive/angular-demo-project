export interface ILaunchStatus {
  id: number;
  name: string;
}

export interface ILaunchServiceProvider {
  id: number;
  url: string;
  name: string;
  type: string;
}

export interface IRocketConfiguration {
  id: number;
  launch_library_id: number;
  url: string;
  name: string;
  family: string;
  full_name: string;
  variant: string;
}

export interface IRocket {
  id: number;
  configuration: IRocketConfiguration;
}

export interface ILaunchPadLocation {
  id: number;
  url: string;
  name: string;
  country_code: string;
  map_image: string;
  total_launch_count: number;
  total_landing_count: number;
}

export interface ILaunchPad {
  id: number;
  url: string;
  agency_id: number;
  name: string;
  info_url: null,
  wiki_url: string;
  map_url: string;
  latitude: string;
  longitude: string;
  location: ILaunchPadLocation;
  map_image: string;
  total_launch_count: number;
}

export interface ILaunch {
  id: string;
  url: string;
  launch_library_id: number;
  slug: string;
  name: string;
  status: ILaunchStatus,
  net: string;
  window_end: string;
  window_start: string;
  inhold: boolean;
  tbdtime: boolean;
  tbddate: boolean;
  probability: 0,
  holdreason: string;
  failreason: string;
  hashtag: string;
  launch_service_provider: ILaunchServiceProvider;
  rocket: IRocket;
  mission: unknown;
  pad: ILaunchPad;
  webcast_live: boolean;
  image: string;
  infographic: unknown;
  program: unknown[];
}

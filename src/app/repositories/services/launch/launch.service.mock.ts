import { IPaginatedResponse } from '../../repositories.types';
import { ILaunch } from './launch.types';
import { of } from 'rxjs';
import createSpy = jasmine.createSpy;

export const LaunchMock: ILaunch = {
  id: "9279744e-46b2-4eca-adea-f1379672ec81",
  url: "https://ll.thespacedevs.com/2.2.0/launch/9279744e-46b2-4eca-adea-f1379672ec81/?format=json",
  launch_library_id: 1829,
  slug: "atlas-lv-3a-samos-2",
  name: "Atlas LV-3A | Samos 2",
  status: {
    id: 3,
    name: "Success"
  },
  net: "1961-01-31T20:21:19Z",
  window_end: "1961-01-31T20:21:19Z",
  window_start: "1961-01-31T20:21:19Z",
  inhold: false,
  tbdtime: false,
  tbddate: false,
  probability: 0,
  holdreason: "",
  failreason: "",
  hashtag: "",
  launch_service_provider: {
    id: 161,
    url: "https://ll.thespacedevs.com/2.2.0/agencies/161/?format=json",
    name: "United States Air Force",
    type: "Government"
  },
  rocket: {
    id: 2362,
    configuration: {
      id: 183,
      launch_library_id: 193,
      url: "https://ll.thespacedevs.com/2.2.0/config/launcher/183/?format=json",
      name: "Atlas Agena B",
      family: "Atlas",
      full_name: "Atlas LV-3 Agena B",
      variant: "LV-3 Agena B"
    }
  },
  mission: null,
  pad: {
    id: 93,
    url: "https://ll.thespacedevs.com/2.2.0/pad/93/?format=json",
    agency_id: 161,
    name: "Space Launch Complex 3W",
    info_url: null,
    wiki_url: "",
    map_url: "http://maps.google.com/maps?q=34.644+N,+120.593+W",
    latitude: "34.644",
    longitude: "-120.593",
    location: {
      id: 11,
      url: "https://ll.thespacedevs.com/2.2.0/location/11/?format=json",
      name: "Vandenberg SFB, CA, USA",
      country_code: "USA",
      map_image: "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_11_20200803142416.jpg",
      total_launch_count: 84,
      total_landing_count: 3
    },
    map_image: "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_93_20200803143225.jpg",
    total_launch_count: 3
  },
  webcast_live: false,
  image: null,
  infographic: null,
  program: []
};

export const LaunchesMock: IPaginatedResponse<ILaunch> = {
  count: 2002,
  next: "https://ll.thespacedevs.com/2.0.0/launch/?format=json&limit=10&offset=10",
  previous: null,
  results: [LaunchMock],
}

export const LaunchServiceMock = (response: IPaginatedResponse<ILaunch> = LaunchesMock) => ({
  getLaunches: createSpy().and.returnValue(of(response)),
});

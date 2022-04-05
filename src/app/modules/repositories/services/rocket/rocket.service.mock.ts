import { of } from 'rxjs';
import createSpy = jasmine.createSpy;

import { IRocket } from './rocket.types';

export const RocketMock: IRocket = {
  id: 324,
  url: "https://ll.thespacedevs.com/2.2.0/config/launcher/324/?format=json",
  name: "Juno-I",
  description: "The Juno I was a four-stage American booster rocket which launched America's first satellite, Explorer 1 in 1958. A member of thr redstone family, it was derived from the Jupiter-C sounding rocket.",
  family: "Redstone",
  full_name: "Juno-I",
  manufacturer: {
    id: 158,
    url: "https://ll.thespacedevs.com/2.2.0/agencies/158/?format=json",
    name: "Chrysler",
    featured: false,
    type: "Commercial",
    country_code: "USA",
    abbrev: "CHR",
    description: "In July 1959, NASA chose the Redstone missile as the basis for the Mercury-Redstone Launch Vehicle to be used for suborbital test flights of the Project Mercury spacecraft. Three unmanned MRLV launch attempts were made between November 1960 and March 1961, two of which were successful. The MRLV successfully launched the chimpanzee Ham, and astronauts Alan Shepard and Gus Grissom on three suborbital flights in January, May and July 1961, respectively.",
    administrator: null,
    founding_year: "1950",
    launchers: "",
    spacecraft: "",
    launch_library_url: "https://launchlibrary.net/1.4/agency/158",
    total_launch_count: 23,
    consecutive_successful_launches: 16,
    successful_launches: 19,
    failed_launches: 4,
    pending_launches: 0,
    consecutive_successful_landings: 0,
    successful_landings: 0,
    failed_landings: 0,
    attempted_landings: 0,
    info_url: "http://www.chryslergroupllc.com/",
    wiki_url: "http://en.wikipedia.org/wiki/Chrysler_Corporation#Space_boosters",
    logo_url: null,
    image_url: null,
    nation_url: "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_nation/chrysler_nation_20190701071744.png"
  },
  program: [],
  variant: "Juno I",
  alias: "",
  min_stage: 4,
  max_stage: 4,
  length: 21.2,
  diameter: 1.78,
  maiden_flight: "1958-01-31",
  launch_cost: null,
  launch_mass: 29,
  leo_capacity: 11,
  gto_capacity: null,
  to_thrust: 416,
  apogee: null,
  vehicle_range: null,
  image_url: null,
  info_url: "",
  wiki_url: "https://en.wikipedia.org/wiki/Juno_I",
  total_launch_count: 6,
  consecutive_successful_launches: 0,
  successful_launches: 3,
  failed_launches: 3,
  pending_launches: 0
};

export const RocketServiceMock = (response: IRocket = RocketMock) => ({
  getRocket: createSpy().and.returnValue(of(response)),
});

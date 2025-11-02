import { getAssetPath } from '../lib/utils';

export interface YachtData {
  id: string;
  name: string;
  price: number;
  year: number;
  length: number;
  location: string;
  cabins: number;
  guests: number;
  condition?: 'Pre-owned' | 'New';
  isNew?: boolean;
  type?: string;
  image?: string;
  images?: string[];
}

export const YACHTS: YachtData[] = [
  {
    id: '1',
    name: 'Luxury Yacht Crystal Wave 55',
    price: 1200,
    year: 2020,
    length: 55,
    location: 'Los Angeles, USA',
    cabins: 3,
    guests: 6,
    condition: 'Pre-owned',
    type: 'Motor Yacht',
    image: getAssetPath('/yachts/1/boat_01_01.png'),
    images: [
      getAssetPath('/yachts/1/boat_01_01.png'),
      getAssetPath('/yachts/1/boat_01_02.png'),
      getAssetPath('/yachts/1/boat_01_03.png'),
      getAssetPath('/yachts/1/boat_01_04.png'),
    ],
  },
  {
    id: '2',
    name: 'Luxury Yacht Golden Horizon 68',
    price: 2400,
    year: 2021,
    length: 68,
    location: 'Los Angeles, USA',
    cabins: 4,
    guests: 8,
    isNew: true,
    type: 'Sailing Yacht',
    image: getAssetPath('/yachts/2/boat_01_01.png'),
    images: [
      getAssetPath('/yachts/2/boat_01_01.png'),
      getAssetPath('/yachts/2/boat_01_02.png'),
      getAssetPath('/yachts/2/boat_01_03.png'),
      getAssetPath('/yachts/2/boat_01_04.png'),
    ],
  },
  {
    id: '3',
    name: 'Luxury Yacht Silver Pearl 72',
    price: 3000,
    year: 2019,
    length: 72,
    location: 'Los Angeles, USA',
    cabins: 5,
    guests: 10,
    condition: 'Pre-owned',
    type: 'Luxury Yacht',
    image: getAssetPath('/yachts/3/boat_01_01.png'),
    images: [
      getAssetPath('/yachts/3/boat_01_01.png'),
      getAssetPath('/yachts/3/boat_01_02.png'),
      getAssetPath('/yachts/3/boat_01_03.png'),
      getAssetPath('/yachts/3/boat_01_04.png'),
    ],
  },
  {
    id: '4',
    name: 'Luxury Yacht Infinity Dream 80',
    price: 4500,
    year: 2022,
    length: 80,
    location: 'Miami, USA',
    cabins: 6,
    guests: 12,
    condition: 'Pre-owned',
    type: 'Motor Yacht',
    image: getAssetPath('/yachts/4/boat_01_01.png'),
    images: [
      getAssetPath('/yachts/4/boat_01_01.png'),
      getAssetPath('/yachts/4/boat_01_02.png'),
      getAssetPath('/yachts/4/boat_01_03.png'),
      getAssetPath('/yachts/4/boat_01_04.png'),
    ],
  },
  {
    id: '5',
    name: 'Luxury Yacht Diamond Breeze 60',
    price: 1800,
    year: 2020,
    length: 60,
    location: 'Monaco',
    cabins: 4,
    guests: 8,
    isNew: true,
    type: 'Catamaran',
    image: getAssetPath('/yachts/5/boat_01_01.png'),
    images: [
      getAssetPath('/yachts/5/boat_01_01.png'),
      getAssetPath('/yachts/5/boat_01_02.png'),
      getAssetPath('/yachts/5/boat_01_03.png'),
      getAssetPath('/yachts/5/boat_01_04.png'),
    ],
  },
  {
    id: '6',
    name: 'Luxury Yacht Imperial Star 95',
    price: 6200,
    year: 2023,
    length: 95,
    location: 'Ibiza, Spain',
    cabins: 7,
    guests: 14,
    condition: 'Pre-owned',
    type: 'Luxury Yacht',
    image: getAssetPath('/yachts/6/boat_01_01.png'),
    images: [
      getAssetPath('/yachts/6/boat_01_01.png'),
      getAssetPath('/yachts/6/boat_01_02.png'),
      getAssetPath('/yachts/6/boat_01_03.png'),
      getAssetPath('/yachts/6/boat_01_04.png'),
    ],
  },
  {
    id: '7',
    name: 'Caribbean Explorer 58',
    price: 1600,
    year: 2021,
    length: 58,
    location: 'Caribbean',
    cabins: 3,
    guests: 6,
    isNew: true,
    type: 'Sailing Yacht',
    image: getAssetPath('/yachts/7/boat_01_01.png'),
    images: [
      getAssetPath('/yachts/7/boat_01_01.png'),
      getAssetPath('/yachts/7/boat_01_02.png'),
      getAssetPath('/yachts/7/boat_01_03.png'),
      getAssetPath('/yachts/7/boat_01_04.png'),
    ],
  },
  {
    id: '8',
    name: 'Mediterranean Voyager 75',
    price: 3800,
    year: 2022,
    length: 75,
    location: 'Mediterranean',
    cabins: 5,
    guests: 10,
    condition: 'Pre-owned',
    type: 'Motor Yacht',
    image: getAssetPath('/yachts/8/boat_01_01.png'),
    images: [
      getAssetPath('/yachts/8/boat_01_01.png'),
      getAssetPath('/yachts/8/boat_01_02.png'),
      getAssetPath('/yachts/8/boat_01_03.png'),
      getAssetPath('/yachts/8/boat_01_04.png'),
    ],
  },
];



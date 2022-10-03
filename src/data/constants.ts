import { Dog } from "./types";
import dog1 from '../assets/images/dog1.svg';
import dog2 from '../assets/images/dog2.svg';
import dog3 from '../assets/images/dog3.svg';
import dog4 from '../assets/images/dog4.svg';

export const X_API_KEY: string = '317c6d89-8467-4c2f-aac6-1d06bb975409';

export const API_URL: string = 'https://api.thedogapi.com/v1/';

export const BREEDS: string[] = ['Rottwe', 'Dachsh', 'American Bulld', 'Greyh'];

export const INITIAL_STATE: Dog[] = [
    {
        id: 0,
        name: '',
        temperament: '',
        image: dog1,
    },
    {
        id: 1,
        name: '',
        temperament: '',
        image: dog2,
    },
    {
        id: 2,
        name: '',
        temperament: '',
        image: dog3,
    },
    {
        id: 3,
        name: '',
        temperament: '',
        image: dog4,
    },
]

export const HEADERS = {
    'X-API-KEY': X_API_KEY,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const THEME = {
    colors: {
        slideText: '#3A464F',
        dot: '#A2BED5',
        dotActive: '#FF816A',
        body: '#F7F8FA',
        slider: '#FFFFFF',
    },
    mobile: '768px',
}
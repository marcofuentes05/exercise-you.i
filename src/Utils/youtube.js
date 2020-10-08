import axios from 'axios';
const API_KEY = 'AIzaSyDnF2ERJw0H9Ha-_C6u3qll-wfe-0qM96A';

export default axios.create({
  baseURL: 'https://developers.google.com/youtube/v3/',
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY,
  },
  mode: 'no-cors',
});
 
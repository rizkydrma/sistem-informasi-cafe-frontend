import store from 'app/store';
import axios from 'axios';
import { config } from '../config';
import { setItems } from 'features/Liked/actions';

export async function saveLiked(token, liked) {
  return await axios.put(
    `${config.api_host}/api/liked`,
    { items: liked },
    {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
}

export async function getLiked() {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {};

  if (!token) return;

  let { data } = await axios.get(`${config.api_host}/api/liked`, {
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!data.error) {
    store.dispatch(setItems(data));
  }
}

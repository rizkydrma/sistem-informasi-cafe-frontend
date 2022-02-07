import { io } from 'socket.io-client';

const socket = io('ws://admin-studiorosid.herokuapp.com', {
  transports: ['websocket'],
});

export { socket };

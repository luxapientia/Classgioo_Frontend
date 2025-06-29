import { io } from 'socket.io-client';
import Cookies from 'js-cookie';

let socket = null;

export function getSocket() {
  if (!socket) {
    const token = Cookies.get('token');
    socket = io(`${process.env.BACKEND_API_URL}/events`, {
      auth: { token },
    });

    socket.on('connect', () => {
      console.log('Socket connected:', socket.id);
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected');
    });
  }

  return socket;
}

export function disconnectSocket() {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
}

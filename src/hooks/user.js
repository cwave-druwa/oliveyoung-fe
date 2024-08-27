// src/user.js
import { useState, useEffect } from 'react';

const useOnlineUsers = () => {
  const [onlineUsers, setOnlineUsers] = useState(0);

  useEffect(() => {
    const userId = Date.now().toString();
    localStorage.setItem(userId, 'online');

    const updateOnlineUsers = () => {
      const users = Object.keys(localStorage).filter(key => localStorage.getItem(key) === 'online');
      setOnlineUsers(users.length);
    };

    const handleTabClose = () => {
      localStorage.removeItem(userId);
      updateOnlineUsers();
    };

    updateOnlineUsers();

    window.addEventListener('beforeunload', handleTabClose);

    return () => {
      window.removeEventListener('beforeunload', handleTabClose);
      handleTabClose();
    };
  }, []);

  useEffect(() => {
    const onStorageChange = () => {
      const users = Object.keys(localStorage).filter(key => localStorage.getItem(key) === 'online');
      setOnlineUsers(users.length);
    };

    window.addEventListener('storage', onStorageChange);

    return () => {
      window.removeEventListener('storage', onStorageChange);
    };
  }, []);

  return onlineUsers;
};

export default useOnlineUsers;

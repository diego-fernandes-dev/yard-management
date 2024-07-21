import React, { useState } from 'react';

interface UserAvatarProps {
  name: string;
  avatarUrl?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ name, avatarUrl }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className="w-10 h-10 bg-gray-500 text-white rounded-full flex items-center justify-center">
      {avatarUrl && isLoading && (
        <div className="loader"></div>
      )}
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={name}
          className={`w-full h-full rounded-full object-cover ${isLoading ? 'hidden' : 'block'}`}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
      ) : (
        <span className="text-xl font-normal">{initials}</span>
      )}
    </div>
  );
};

export default UserAvatar;

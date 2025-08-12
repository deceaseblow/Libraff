import React, { useEffect, useState } from 'react';
import { TiHeartOutline } from 'react-icons/ti';
import { TiHeartFullOutline } from 'react-icons/ti';

function LikeButton({ bookId }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem('likedBooks')) || [];
    setLiked(storedLikes.includes(bookId));
  }, [bookId]);

  const toggleLike = (e) => {
    e.preventDefault(); 

    const storedLikes = JSON.parse(localStorage.getItem('likedBooks')) || [];
    let updatedLikes;

    if (storedLikes.includes(bookId)) {
      updatedLikes = storedLikes.filter((id) => id !== bookId);
    } else {
      updatedLikes = [...storedLikes, bookId];
    }

    localStorage.setItem('likedBooks', JSON.stringify(updatedLikes));
    setLiked(!liked);
  };

  return (
    <button
      onClick={toggleLike}
      className="text-red-500 text-2xl hover:scale-110 transition-transform"
    >
      {liked ? <TiHeartFullOutline /> : <TiHeartOutline />}
    </button>
  );
}

export default LikeButton;

import React, { useEffect } from 'react';
import styles from './Home.module.scss';
import AvatarView from '@sarge/avatar-view';

const Avatar = () => {
  const avtUrl = '/avatar/avatar2.glb';
  const halfAvtUrl =
    'https://d1a370nemizbjq.cloudfront.net/2649d650-a4b5-4eb6-9d69-dfefa2dbdb50.glb';
  return (
    <AvatarView
      style={{
        width: '400px',
        height: '400px',
        backgroundColor: '#276a4e',
        borderRadius: '50%',
      }}
      url={halfAvtUrl}
      rotateAvatar
      eyeBlink
      headMovement
    />
  );
};
const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.avatar}>
        <img src='/avatar/avatar.png' alt='' />
        <Avatar />
      </div>
      <div className={styles.comment}>
        <p>안녕하세요.</p>
        <p className={styles.color}>FrontEnd Developer</p>
        <p>모성종입니다.</p>
      </div>
    </section>
  );
};

export default Home;

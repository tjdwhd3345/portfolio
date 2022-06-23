import './AvatarTest.css';
import React from 'react';
import AvatarView from '@sarge/avatar-view';

const url =
  'https://d1a370nemizbjq.cloudfront.net/10e79122-0cef-4f03-896c-507add429a1f.glb';
// const url = "https://d1a370nemizbjq.cloudfront.net/2649d650-a4b5-4eb6-9d69-dfefa2dbdb50.glb"
export default function AvatarTest() {
  return (
    <div className='App'>
      <h2>
        Profile Pictures are <span className='out'>OUT</span>
      </h2>
      <h1>
        Profile Avatars are <span className='in'>IN</span>
      </h1>
      <div className='container'>
        <AvatarView
          style={{
            width: '400px',
            height: '400px',
            backgroundColor: 'orange',
            borderRadius: '100%',
          }}
          url={url}
          rotateAvatar
          eyeBlink
          headMovement
        />
      </div>
      <h1>
        Get your own avatar from{' '}
        <a rel='noreferrer' target='_blank' href='https://vr.readyplayer.me'>
          Ready Player Me
        </a>
      </h1>
      <h1>
        Check it out at{' '}
        <a
          rel='noreferrer'
          target='_blank'
          href='https://github.com/srcnalt/avatar-view'
        >
          Github
        </a>
      </h1>
    </div>
  );
}

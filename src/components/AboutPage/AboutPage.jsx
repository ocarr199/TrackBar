import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2 className="header">Why did I build this?</h2>
        <p className="header">My friends, family and I love talking about music. We are constantly sending eachother songs to check out over text messages, snapchat, instagram and more.</p>
        <p className="header">We all get frustarated by the difficulty to keep track of, who sent you what, what you have listened to, and which apps these messages were on. </p>
        <h2 className="header">What does it do?</h2>
        <p className="header">This is an application for sharing your oinions on songs. This comes in the form of making posts with a short blurb on what you think of the song and a rating our of 10</p>
        <p className="header"> Posts are made by searching through for practiacally any song, curtosy of the spotify library. Other users can then like and comment on these posts and follow other accounts so that posts by said accounts will show up in their feed. </p>
        <h2 className="header">Technologies used</h2>
        <ul className="header">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>React.js</li>
          <li>Redux</li>
          <li>Redux-saga</li>
          <li>PostgreSQL</li>
          <li>SpotifyApi</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;

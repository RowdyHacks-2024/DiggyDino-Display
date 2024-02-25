import React from 'react';
import Thread from './Thread';



const Feed = () => {
    return (
      <article className="container3">
        <Thread input="Hey Guys! I found a fossil today!" time="24 hours ago" replies={10} likes={200} />
        <Thread input="Hey I am so sad. I did not find a fossil today ;(((" time="2 hours ago" replies={0} likes={1} />
      </article>
    );
};

export default Feed;

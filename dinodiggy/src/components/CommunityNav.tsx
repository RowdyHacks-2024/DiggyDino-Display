import React from 'react';
interface CommunityNavProps {
    viewThreadsFeed: boolean;
    setViewThreadsFeed: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  const CommunityNav: React.FC<CommunityNavProps> = ({ viewThreadsFeed, setViewThreadsFeed }) => {
    return (
        
        <nav className="community-nav">
            <button className={viewThreadsFeed ? "current" : undefined } onClick={() => setViewThreadsFeed(true)}> Threads</button>
            <button className={!viewThreadsFeed ? "current": undefined } onClick={() => setViewThreadsFeed(false)}> Replies</button>
        </nav>
        
        
    );
};

export default CommunityNav;
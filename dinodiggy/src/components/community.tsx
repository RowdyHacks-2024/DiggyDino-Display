import React, {useState, useEffect} from 'react';
import CommunityNav from './CommunityNav'
import Feed from './Feed';
import PopUp from './Popup';
import ThreadInput from './ThreadInput';

const threads = [
    {
      id: 0,
      timestamp: "10/02/2023 3:30pm",
      thread_from: 1,
      thread_to: null,
      reply_to: null,
      text: "Hey guys! I found some fossils today!",
      likes: [],
      copyableText: "Hey guys! I found some fossils today!"
    },
    {
      id: 1,
      timestamp: "02/02/2023 10:45pm",
      thread_from: 3,
      thread_to: null,
      reply_to: null,
      text: "I did not find any fossils today :(",
      likes: [],
      copyableText: "I did not find any fossils today :("
    },
    {
      id: 0,
      timestamp: "10/02/2023 3:30pm",
      thread_from: 2,
      thread_to: null,
      reply_to: 1,
      text: "Nooooo",
      likes: [],
      copyableText: "Nooooo"
    }
  ];
  
  // Now you can use this array of threads with the copyableText property
  // and store it in a state variable using useState hook

  
const Community = () => {
    interface Thread {
        id: number;
        timestamp: string;
        thread_from: number;
        thread_to: number | null;
        reply_to: number;
        text: string;
        likes: any[]; // Assuming likes can be any data type
    }

    const [threads, setThreads] = useState<Thread[] | null>(null); // Assuming Thread is your data type
    const [filteredThreads, setFilteredThreads] = useState<Thread[] | null>(null);
    const [viewThreadsFeed, setViewThreadsFeed] = useState<boolean>(true)
    
    const userId = '1'

    const getThread = async () => {
        try {
            const response = await fetch('http://localhost:3000/threads?thread_from=${userId}')
            const data = await response.json()
            setThreads(threads)

        } catch (error) {
            console.error(error)
        }

    }

    const getThreadsFeed = () => {
        if (viewThreadsFeed){
            const standAloneThreads = threads?.filter(thread => thread.reply_to === null )
            setFilteredThreads(standAloneThreads || null)
        }
        if (!viewThreadsFeed){
            const replyThreads = threads?.filter(thread => thread.reply_to !== null )
            setFilteredThreads(replyThreads || null)
        }
    }

    useEffect( () => {
        getThreadsFeed()

    }, [threads, viewThreadsFeed])

    return (
        <div className="community-container">
            <CommunityNav
                viewThreadsFeed={viewThreadsFeed}
                setViewThreadsFeed={setViewThreadsFeed}/>
            <Feed />
            <ThreadInput />
        </div>
    );
};

export default Community;
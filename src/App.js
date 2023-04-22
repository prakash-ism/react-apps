import './App.css';
import io from 'socket.io-client';
import { useState,useEffect } from 'react';
import audioFile from './testFile.mp3';


const socket = io.connect('http://localhost:3001');

const audio = new Audio();

function handlePlaySound(){
  socket.emit('play', { name: "Test sound 1", path: audioFile });
}

function App() {
  const [role,setRole] = useState('');
  const [playing,setPlaying] = useState('');

  useEffect(() => {
    function receiveMessage(m){
      console.log(m);
      if(role === 'server'){
        audio.src = m.path;
        audio.play();
      }

      setPlaying(m.name);
    }

    function stopAudio(){
      setPlaying('');
    }

    socket.on('play', receiveMessage);
    socket.on('stop', stopAudio);

    return () => {
      socket.off('play', receiveMessage);
      socket.off('stop', stopAudio);
    }
  },[role]);

  useEffect(() => {
    function handleAudioStop(){
      socket.emit('stop');
    }

    audio.addEventListener('pause',handleAudioStop);

    return () => {
      audio.removeEventListener('pause',handleAudioStop);
    }
  },[])

  return (
    <div className="App">
      <h1>Soundbot</h1>
      <div>
        <h4>Role</h4>
        <button onClick={() => setRole("client")}>Client</button>
        <button onClick={() => setRole("server")}>Server</button>
      </div>
      <div>
        <h4>Choose Sound</h4>
        <button onClick={handlePlaySound}>Play Sound</button>
      </div>
      <div>
        <h4>Playing {playing}</h4>
      </div>
    </div>
  );
}

export default App;

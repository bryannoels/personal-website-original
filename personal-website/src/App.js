import MainPage from './pages/mainPage';
import Timeline from './pages/timeline';
import TimelinePhone from './pages/timelinePhone';
import Projects from './pages/projects';
import ProjectsPhone from './pages/projectsPhone';
import Connect from './pages/connect';
import Footer from './pages/footer';

import './App.css';

function App() {
  const vwidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (
    <div className="App">
      <MainPage/>
      {(vwidth>900)?<Timeline/>:<TimelinePhone/>}
      {(vwidth>900)?<Projects/>:<ProjectsPhone/>}
      <Connect/>
      <Footer/>
    </div>
  );
}

export default App;

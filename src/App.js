import "./App.css";
import Row from "./Row";
import { requests } from "./requests";
import Banner from "./Banner"
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Banner/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} 
        isLargeRow
      />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginal} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Decumentaries" fetchUrl={requests.fetchDecumentaries} />
    </div>
  );
}

export default App;

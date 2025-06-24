import CharacterGrid from '../components/CharacterGrid';
import CharacterSearch from '../components/CharacterSearch';
import Header from '../components/Header';
import IntroSection from '../components/IntroSection';


export default function Home() {
  return <>
  <Header/>
  <IntroSection/>
  <CharacterSearch/>
  <CharacterGrid/>
  </>;
}


import AutoPlayVideo from "./components/vid/page";
import Navbar from "./components/navbar/page";
import Hero from "./components/hero/page";
import whatwedo from './components/whatwedo/page';
import Whatwedo from "./components/whatwedo/page";
import ConductedEvents from "./components/whatwedo/page";
import Working from "./components/working/page";
import StandingOut from "./components/standingout/page";
import Footer from "./components/footer/page";


export default function Home() {
  return (
    <div>
      <section>
        <Navbar></Navbar>
      </section>
      <section>
        <Hero></Hero>
      </section>
      <section className="">
        <AutoPlayVideo  src="/test-vid.mp4"></AutoPlayVideo>
      </section>
      
      <section>
        <ConductedEvents></ConductedEvents>
      </section>
      <section>
        <Working></Working>
      </section>
      <section>
        <StandingOut></StandingOut>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  )
}

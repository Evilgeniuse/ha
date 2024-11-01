import Navbar from "./components/Navbar";
import heroImg from "./assets/pics/9.jpeg";
import { Info } from "lucide-react";
import { FaPlay } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import CardImage from "./components/CardImage";
import { images } from "./constants/images";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const Button = ({ children, variant, ...rest }) => {
    return (
      <button
        className={`flex items-center gap-2 p-3 px-7 rounded-lg font-semibold active:scale-90 duration-300 ease-in-out ${
          variant == "primary" && "bg-white text-black "
        } ${variant == "secondary" && "bg-white/30 text-white"}`}
        {...rest}
      >
        {children}
      </button>
    );
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main>
      <Navbar />
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen flex justify-center items-end"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="w-full max-w-screen-2xl px-5 lg:px-10 mb-[5%] flex flex-col gap-3 lg:gap-5 z-10 text-white ">
          <h1
            className="lg:text-4xl text-2xl font-bold lg:w-[50%]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            HAPPY BIRTHDAYYY SLEPPYHEAD!.
          </h1>
          <p
            className="text-sm lg:text-base lg:w-[40%]"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            This is How I Say Happy Birthday In a diffrent way, I guess u can say a unique way. hahaha
          </p>
          <p data-aos="fade-right" data-aos-duration="1300">
            Click "Play" to see Details
          </p>
          <div
            className="actions flex items-center gap-3"
            data-aos="fade-right"
            data-aos-duration="1400"
          >
            <Button variant={"primary"} onClick={() => setOpenModal(true)}>
              <FaPlay />
              Play
            </Button>
            <Button variant={"secondary"}>
              <Info size={20} />
              More Info
            </Button>
          </div>
        </div>
      </section>
      <section className="flex justify-center bg-black text-white">
        <div className="py-5 lg:py-10 flex flex-col gap-5 px-5 lg:px-10 max-w-screen-2xl">
          <h3 className="font-semibold text-xl">More to Explore : Us</h3>
          <section className=" grid grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-5">
            {images.map((image, idx) => (
              <CardImage src={image.src} key={idx} idx={idx} />
            ))}
          </section>
        </div>
      </section>
      <Modal setOpenModal={setOpenModal} openModal={openModal}>
        <div
          className="relative bg-cover bg-center bg-no-repeat h-[250px] lg:h-[450px] "
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundPosition: "center 40%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black" />
        </div>
        <div className="flex flex-col gap-3 lg:gap-5 p-5 text-white">
          <h1 className="font-bold text-2xl">Happy Birthday, You </h1>
          <p>Hi You...</p>
          <p>
          Happy Birthday to the queen of naps and the champion of hitting snooze!Waking up wouldn’t be the same without you around – even if you’re always the last one to finally open those dreamy eyes.
          I hope today brings you all the best things in life: good food, great company, and as much sleep as you want – because, let's face it, you deserve it!.
          Let’s take a moment to appreciate your incredible talent for dozing off just about anywhere. Movie nights? Out like a light. Long car rides? Snoozing away. Honestly, I don’t know how you do it, but I’m impressed every time.
          So, here’s the game plan: today, it’s all about celebrating you! Even though I can’t be there to keep the snacks coming or save you a cozy nap spot,
           just know I’m cheering you on from here. Hope you’re surrounded by all your favorite things—and people who know just how amazing you are (and appreciate your legendary snooze skills as much as I do)!
           Happy Birthday, Sleepyhead! May this year be filled with more naps, laughs, and all the things that make you happiest. 🎂💤

           Always your number-one fan of your napping skills, [ARQHAN]
          </p>
          <p>
            With all my love,
            <br />
            ARQHAN
          </p>
        </div>
      </Modal>
    </main>
  );
}

export default App;

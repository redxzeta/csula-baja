import { createRef, useState } from "react";
import "./styles.css";
import Cart from "../../assets/cart.jpeg";
const images = [Cart, Cart, Cart];

const Carousel = () => {
  // We will start by storing the index of the current image in the state.
  const [currentImage, setCurrentImage] = useState(0);
  // We are using react ref to 'tag' each of the images. Below will create an array of
  // objects with numbered keys. We will use those numbers (i) later to access a ref of a
  // specific image in this array.
  const refs = images.reduce((acc, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = (i) => {
    // First let's set the index of the image we want to see next
    setCurrentImage(i);
    // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
    // your current view! To do so we pass an index of the image, which is then use to identify our current
    // image's ref in 'refs' array above.
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: "smooth",
      //      Defines vertical alignment.
      block: "nearest",
      //      Defines horizontal alignment.
      inline: "start",
    });
  };

  // Some validation for checking the array length could be added if needed
  const totalImages = images.length;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.

  return (
    <div className="max-w-full h-auto flex justify-center">
      {/* md:w-1/2 */}
      <div className=" flex justify-center md:w-2/3 lg:w-1/2 items-center relative">
        <div className="carousel">
          <ButtonSlider
            isLeft={true}
            previousImage={previousImage}
            nextImage={nextImage}
          />
          {images.map((img, i) => (
            <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
              <img src={img} className="w-full object-contain" alt="wo" />
            </div>
          ))}
          <ButtonSlider
            isLeft={false}
            previousImage={previousImage}
            nextImage={nextImage}
          />
          <span className="absolute left-1/2 bottom-0">{currentImage} aa</span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
// Let's create dynamic buttons. It can be either left or right. Using
// isLeft boolean we can determine which side we'll be rendering our button
// as well as change its position and content.
const ButtonSlider = ({ isLeft, previousImage, nextImage }) => {
  const arrowStyle =
    "absolute top-1/2 text-black text-2xl z-10 bg-gradient-to-br from-yellow to-drime h-8 w-8 md:h-10 md:w-10 rounded-full shadow-2xl flex items-center justify-center opacity-50 hover:opacity-100 focus:outline-none hover:from-yellow hover:to-prime  ";

  return (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? "left-0.5" : "right-0.5"} `}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? "❮" : "❯"}
      </span>
    </button>
  );
};
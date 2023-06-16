import { BsArrowRight } from "react-icons/bs";

const ImgAndText = ({
  title,
  paragraph,
  image,
  swipOrder,
  buttonText,
}: {
  title: string;
  paragraph: string;
  image?: string;
  swipOrder?: boolean;
  buttonText?: string;
}) => {
  return (
    <section className=" body-font">
      <div
        className={`container flex flex-col gap-2 items-center px-5 md:px-0 py-24 mx-auto md:flex-row ${
          swipOrder && "md:flex-row-reverse"
        }`}
      >
        <div className="mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
        <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 md:items-start md:text-left">
          <h1 className="mb-4 text-3xl font-medium title-font sm:text-4xl">
            {title}
          </h1>
          <p className="mb-8 leading-relaxed">{paragraph}</p>
          <div className="flex justify-center">
            {buttonText && (
              <button className="inline-block primary-btn">
                {buttonText}{" "}
                <BsArrowRight className="inline-block ml-1 font-extrabold" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImgAndText;

const QuoteCard = ({ question, quote, title, name, field }) => {
  return (
    <div className=" font-display ">
      <div className="flex  w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full h-full ">
          <div className="w-full p-4 bg-secondary h-20 flex justify-center items-center">
            <h1 className="text-yellow font-bold text-base ">​{question}</h1>
          </div>
          <div className="w-full p-4 bg-darkWhite h-52">
            <p className="text-gray-600 text-xs mb-5">{quote}</p>
            <p className="text-right ">{name}</p>
            <p className="text-right ">{title}</p>
            <p className="text-right ">{field}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuoteCard;

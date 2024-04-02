
const Card = () => {
  return (
    <div className="card flex p-4 bg-white rounded shadow hover:shadow-lg">

      <div className="flex items-start mr-2">

        <img src='slider/plante.jpg' width="120" height="120" alt='card visual' />
      </div>

      <div className="cardInfos flex flex-col justify-between">

        <h1 className="w-100 text-base font-bold mb-1">
          Lorem ipsum dolor sit amet
        </h1>
        <h3 className="w-100 text-sm mb-1">Sub title card</h3>

        <span className="w-100 mb-1">à partir de&nbsp;
          <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
            XX.XX€
          </span>
        </span>

        <button className="w-100 flex justify-center items-center	 h-8">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Card;
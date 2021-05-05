import EditIcon from "baseComponents/icons/edit";

function ServiceRow({ service }) {
  return (
    <div
      className="relative rounded-[20px] w-full bg-white"
      style={{ boxShadow: "0px 0px 8px #013D8080" }}
    >
      <div className="absolute right-2 top-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <circle fill="#e21b1b" cx="10" cy="10" r="10" />
          <path
            fill="#c40606"
            d="M164.312,148.5l-5.561-5.561-8.5,8.815,5.505,5.505A10,10,0,0,0,164.312,148.5Z"
            transform="translate(-144.379 -137.353)"
          />
          <g transform="translate(5.49 5.379)">
            <path
              fill="white"
              d="M148.9,146.843a.779.779,0,0,1-.553-.229l-7.571-7.572a.781.781,0,0,1,1.1-1.1l7.572,7.572a.781.781,0,0,1-.552,1.333Z"
              transform="translate(-140.546 -137.709)"
            />
            <path
              fill="white"
              d="M141.32,146.84a.781.781,0,0,1-.553-1.333l7.572-7.572a.781.781,0,0,1,1.1,1.1l-7.571,7.572A.779.779,0,0,1,141.32,146.84Z"
              transform="translate(-140.538 -137.706)"
            />
          </g>
        </svg>
      </div>
      <div className="pt-[50px] pb-2 w-full flex flex-col items-center min-h-[136px]">
        <div className="uppercase text-[#5B5B5B] text-[20px] font-bold">
          {service.type}
        </div>
      </div>
      <button className="flex bg-[#707070] text-white rounded-br-xl rounded-bl-xl justify-center items-center p-[7px] w-full">
        <EditIcon className="w-[25px] h-[25px]" />
        <div className="text-[14px] ml-[15px]">Editar</div>
      </button>
    </div>
  );
}

export default ServiceRow;

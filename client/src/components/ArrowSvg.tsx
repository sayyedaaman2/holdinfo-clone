interface ArrowSvgProps {
  Direction: boolean;
}

const ArrowSvg = ({ Direction }: ArrowSvgProps) => {
  return (
    <div className="p-1 ">
      <div className=" w-4 h-4 ">
        {Direction ? (
          <svg
            className="relative fill-raise "
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 531.74 460.5"
            overflow="visible"
            enableBackground="new 0 0 531.74 460.5"
            xmlSpace="preserve"
          >
            <polygon
              stroke="#000000"
              points="530.874,0.5 265.87,459.5 0.866,0.5"
              transform="rotate(180 265.87 230)"
            />
          </svg>
        ) : (
          <svg
            className="relative fill-drop"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 531.74 460.5"
            overflow="visible"
            enableBackground="new 0 0 531.74 460.5"
            xmlSpace="preserve"
          >
            <polygon
              stroke="#000000"
              points="530.874,0.5 265.87,459.5 0.866,0.5"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default ArrowSvg;

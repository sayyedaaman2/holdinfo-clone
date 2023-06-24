import {useNavigate} from 'react-router-dom'
export const WebsiteName = ():JSX.Element => {
  const navigate = useNavigate();
  return (
    <div
    onClick={()=>navigate('/')}
      id="title"
      className=" mx-auto my-3 mt-8 w-full sm:w-1/2 md:w-60 lg:w-72  flex justify-center items-center lg:mx-0"
    >
      <a href="#">
        <img
          src="https://hodlinfo.com/static/media/HODLINFO_white.8f78fc06.png"
          className="px-14 md:px-0 "
        />
      </a>
    </div>
  );
};

import { BsShare } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const NewsCard = ({ news }) => {
  const { total_view, rating, author,image_url, title, details,_id } = news;
  return (
    <div>
      <div className="flex flex-col p-6 space-y-6 overflow-hidde mb-4">
        <div className="flex justify-between items-center bg-gray-100 p-3">
          <div className="flex space-x-4">
            <img
              alt=""
              src={author.img}
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm font-semibold"
              >
                {author.name}
              </a>
              <span className="text-xs dark:text-gray-600">
                {author.published_date}
              </span>
            </div>
          </div>
          <div className="flex gap-3 text-lg">
            <CiBookmark />
            <BsShare />
          </div>
        </div>
        <div>
          <h2 className="mb-1 text-xl font-semibold">{title}</h2>
          <img
            src={image_url}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />
          {details.length > 200 ? (
            <p className="text-sm dark:text-gray-600">
              {details.slice(0, 200)} <Link 
              to={`/news/${_id}`}
              className="text-orange-600 font-bold">Read More...</Link>
            </p>
          ) : (
            <p className="text-sm dark:text-gray-600">{details}</p>
          )}
        </div>
        <div className="flex flex-wrap justify-between border-t-2 pt-3">
          <div className="flex items-center gap-3">
            <div className="rating text-lg">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="text-lg">{rating.number}</p>
          </div>
          <div className="flex items-center space-x-2 text-sm dark:text-gray-600">
            <div className="text-xl">
              <FaRegEye />
            </div>
            <div>{total_view}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

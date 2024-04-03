import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex gap-4 bg-gray-100 py-2 px-4">
      <button className="btn bg-red-600 text-white">Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default BreakingNews;

const reviews = [
  {
    id: 1,
    name: "RShuken",
    review:
      "Tony is really nice and helpful, looking forward to learning from him.",
  },
  {
    id: 2,
    name: "Paul Krisman",
    review:
      "Tony was excellent, joined a session in a jiffy and knew his stuff. Helped nail a troublesome Lambda, node.js, serverless problem. Will definitely use him again",
  },
  {
    id: 3,
    name: "Jacquelynn Wilson",
    review:
      "Thank you so much for guiding me through my problem and actually explaining as we went along. I really learned!",
  },
  {
    id: 4,
    name: "Jordan Belafonte",
    review:
      "Tony is an expert and very knowledgeable in AWS technologies, he was able to answer all my questions. Good luck, tony!!",
  },
  {
    id: 5,
    name: "dani k",
    review: "Helped me with js and react native. Best teacher :)",
  },
];

export default function ReviewsSection() {
  return (
    <section className="section mt-4">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Testimonials
      </h2>
      <div className="relative flex overflow-x-hidden">
        <div className="py-12 animate-marquee flex gap-16">
          {reviews.map((review) => (
            <Review key={`1-${review.id}`} review={review} />
          ))}
        </div>
        <div className="absolute top-0 py-12 animate-marquee2 flex gap-16 ml-16">
          {reviews.map((review) => (
            <Review key={`2-${review.id}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Review = ({ review }) => {
  return (
    <div className="grid py-12 border-[#ADB7BE] rounded-xl border">
      <div className="w-[300px] md:w-[524px] px-8 flex flex-col justify-between">
        <p className="mb-14 text-[#ADB7BE]">{review.review}</p>
        <p className="text-right bottom-0 text-white">{review.name}</p>
      </div>
    </div>
  );
};

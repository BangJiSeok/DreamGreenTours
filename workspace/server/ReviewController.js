import Review from "./Review.js";

const write = async (req, res) => {
  const reviewData = {
    location: req.body.location,
    text: req.body.text,
    heart: req.body.heart,
  };
  console.log(req);
  const newReview = await Review.create(reviewData);
  res.send("후기 작성을 완료했습니다.");
};

export { write };

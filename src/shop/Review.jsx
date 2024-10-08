import React, { useState } from "react";
import Ratting from '../components/Ratting';

const reviewtitle = "Add a Review";

let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];


const Review = () => {

  const [reviewShow, setReviewShow] = useState(true);

  return(
    <>
      <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
        <li className="desc" onClick={() => setReviewShow(!reviewShow)}>Description</li>
        <li className="rev" onClick={() => setReviewShow(!reviewShow)}>Review 4</li>
      </ul>

      {/* disc & review content */}
      <div className={`review-content ${reviewShow ?  "review-content-show" : "description-show"}`}>
        <div className="review-showing">
          <ul className="content lab-ul">
            {
              ReviewList.map((review, i) => (
                <li key={i}>
                  <div className="post-thumb">
                    <img src={review.imgUrl} alt="" />
                  </div>
                  <div className="post-content">
                    <div className="entry-meta">
                      <div className="posted-on">
                        <a href="#">{review.name}</a>
                        <p>{review.date}</p>
                      </div>
                    </div>
                    <div className="entry-content">
                      <p>{review.desc}</p>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>

          {/* add review fild */}
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviewtitle}</h5>
              </div>

              <form action="action" className="row">
                <div className="col-md-4 col-12">
                  <input type="text" name="name" id="name" placeholder="Full Name *"/>
                </div>
                <div className="col-md-4 col-12">
                  <input type="email" name="email" id="name" placeholder="Your Email *"/>
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className="me-2">Your Rating:</span>
                    <Ratting />
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <textarea name="message" id="message" rows="8" placeholder="Type Here Message"></textarea>
                </div>

                <div className="col-12">
                  <button type="submit" className="default-button">
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* discription */}
        <div className="description">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore culpa odit dolore quo, dolorem rerum ducimus dignissimos, impedit recusandae nostrum reprehenderit delectus necessitatibus eligendi enim corporis aut eum est ipsa saepe vero. Possimus error obcaecati, repellendus architecto ipsum laudantium eum odio delectus consectetur consequuntur hic totam itaque dicta accusamus aliquid!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore culpa odit dolore quo, dolorem rerum ducimus dignissimos, impedit recusandae nostrum reprehenderit delectus necessitatibus eligendi enim corporis aut eum est ipsa saepe vero. Possimus error obcaecati, repellendus architecto ipsum laudantium eum odio delectus consectetur consequuntur hic totam itaque dicta accusamus aliquid! 
          </p>

          <div className="post-item">
            <div className="post-thumb">
              <img src="/src/assets/images/shop/01.jpg" alt="" />
            </div>
            <div className="post-content">
              <ul className="lab-ul">
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, dolor!</li>
                <li> dolor sit amet consectetur adipisicing elit. Assumenda a iure reiciendis. Obcaecati porro </li>
                <li> amet consectetur adipisicing elit. Dolorum, dolor!</li>
                <li> ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, dolor!</li>
                <li>Lorem ipsum dolor  adipisicing elit. Dolorum, dolor!</li>
                <li> dolor sit, amet consectetur adipisicing Dolorum, dolor!</li>
              </ul>
            </div>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore culpa odit dolore quo, dolorem rerum ducimus dignissimos, impedit recusandae nostrum reprehenderit delectus necessitatibus eligendi enim corporis aut eum est ipsa saepe vero. Possimus error obcaecati, repellendus architecto ipsum laudantium eum odio delectus consectetur consequuntur hic totam itaque dicta accusamus aliquid!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore culpa odit dolore quo, dolorem rerum ducimus dignissimos, impedit recusandae nostrum reprehenderit delectus necessitatibus eligendi enim corporis aut eum est ipsa saepe vero. Possimus error obcaecati, repellendus architecto ipsum laudantium eum odio delectus consectetur consequuntur hic totam itaque dicta accusamus aliquid! 
          </p>
        </div>
      </div>
    </>
  )
};

export default Review;

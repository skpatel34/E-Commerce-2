import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Tags from "../shop/Tags";
import PopularPost from "../shop/PopularPost";

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  // console.log(id)
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);

  return (
    <div>
      <PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>

                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  A well-organized paragraph supports ordevelops a single controlling idea, which is expressed in a sentence called the topic sentence. A topic sentence has severalimportant functions: it substantiates orsupports an thesis statement; it unifies thecontent of a paragraph and directs the orderof the sentences; and it advises the reader ofthe subject to be discussed and how theparagraph will discuss it. Readers generallylook to the first few sentences in a paragraphto determine the subject and perspective ofthe paragraph. often best to put the topic
                                  sentence at the very beginning of the paragraph. In some cases, however, to place another sentence before the topic sentence—forexample, a sentence linking the current paragraph to the previous one, or oneproviding background information.
                                </p>

                                <blockquote>
                                  <p>
                                    Most paragraphs in an essay have athree-part structure—introduction, body, and conclusion. You can see this structure inparagraphs whether they are narrating,describing, comparing,an important role incommunicating your meaning to your reader.
                                  </p>
                                  <cite>
                                    <a href="#">...Melissa Hunter</a>
                                  </cite>
                                </blockquote>

                                <p>
                                  Although most paragraphs should have a topic sentence, there are a few situations when a
                                  paragraph might not need a topic sentence. For example, you might be able to omit a topic
                                  sentence in a paragraph that narrates a series of events, if a paragraph continues developing
                                  an idea that you introduced in the previous paragraph, or if all the sentences and details in a paragraph clearly refer—perhaps indirectly—to a main point. The vast majority of your paragraphs, however, should have a topic sentence.
                                </p>

                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />

                                <p>
                                  Along with the smooth flow of sentences, acoherence may also be related toits length. If you have written a very longparagraph, one that fills a double-spacedtyped page, for example, you should check itcarefully to see if it should start a newparagraph where the original paragraph wandersfrom its controlling idea. On the other hand,if a paragraph is very short (only one or twosentences, perhaps), you may need to developits controlling idea more thoroughly, or combine it with another paragraph.
                                </p>

                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://youtu.be/DTT2AbEzKXs?si=rSIzEBCYk1CRJcR0"
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>

                                <p>
                                  Parallel structures are created by constructing two or more phrases or sentences  that have the same grammatical structure anduse the same parts of speech. By creatingparallel structures you make your sentences clearer and easier to read. In addition, repeating a pattern in a series of consecutive sentences helps your reader see the connections between ideas. In the above about scientists and the sense of sight,  several sentences in the body of the paragraph  have been constructed in a parallel way.
                                </p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {
                                      socialList.map((val, i) => (
                                        <li key={i}>
                                          <a href="#" className={val.className}>
                                            <i className={val.iconName}></i>
                                          </a>
                                        </li>
                                      ))
                                    }
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="navigations-part">
                      <div className="left">
                        <a href="#" className="prev">
                          <i className="icofont-double-left"></i> Previous Blog
                        </a>
                        <a href="#" className="title">
                          Evisculate Parallel  Process Via Technica Sound Models Authoritative
                        </a>
                      </div>
                      <div className="right">
                        <a href="#" className="prev">Next Blog
                          <i className="icofont-double-right"></i> 
                        </a>
                        <a href="#" className="title">
                          Evisculate Parallel  Process Via Technica Sound Models Authoritative
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </article>
            </div>


            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;

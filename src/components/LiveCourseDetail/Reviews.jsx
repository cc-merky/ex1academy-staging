import React, { useState, useEffect } from "react";
import StudentReviews from "../../assets/images/studentReviews.png";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Reviews = () => {
  const [animateImage, setAnimateImage] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
  });

  useEffect(() => {
    if (inView) {
      // When the component is in view, trigger the animation
      controls.start({
        y: 0, // The final position in the y-axis
        opacity: 1, // Set opacity to 1 to make it visible
        transition: {
          duration: 0.5, // Adjust the duration as needed
        },
      });
      setAnimateImage(true);
    }
  }, [controls, inView]);
  return (
    <div className="max-w-5xl mx-auto mt-14 py-10 ">
      <div className="flex items-center justify-between px-16">
        <div className="text-4xl font-bold">Student Reviews</div>
        <p>
          see What student all over the world are <br /> about Ex1 Academy
        </p>
      </div>

      <div className="max-w-4xl mx-auto lg:py-6 py-0 px-4">
        <Carousel
          infiniteLoop
          autoPlay
          interval={3000}
          showArrows
          showStatus={false}
          showThumbs={false}
        >
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row gap-4 py-6">
              <div className="lg:w-1/2 w-full">
                <div className="background-card  mb-4 px-4 py-10 space-y-8">
                  <p className="text-xs">
                    The courses are well-structured, and the instructors are
                    knowledgeable and supportive. I've gained practical skills
                    that have already made a positive impact on my career. I
                    highly recommend Academy to anyone looking to advance their
                    education
                  </p>
                  <div className="flex items-center justify-between border-b pb-1  ">
                    <div>
                      <p className="font-bold">Jessica Akoh</p>
                      <p className="text-xs">21 days ago</p>
                    </div>
                    <div>
                      <img src={StudentReviews} alt="student Reviews" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="background-card  mb-3 px-4 py-10 space-y-8">
                  <p className="text-xs">
                    I've been a student at Ex1 Academy for the past year, and
                    I've found the variety of courses to be impressive. The
                    instructors are engaging, and the online platform is
                    user-friendly. The only reason I didn't give it five stars
                    is that I wish there were more
                  </p>
                  <div className="flex items-center justify-between border-b pb-1 ">
                    <div>
                      <p className="font-bold">Jane Smith</p>
                      <p className="text-xs">21 days ago</p>
                    </div>
                    <div>
                      <img src={StudentReviews} alt="student Reviews" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 py-6">
              <div className="lg:w-1/2 w-full">
                <div className="background-card  mb-4 px-4 py-10 space-y-8">
                  <p className="text-xs">
                    The courses are well-structured, and the instructors are
                    knowledgeable and supportive. I've gained practical skills
                    that have already made a positive impact on my career. I
                    highly recommend Academy to anyone looking to advance their
                    education
                  </p>
                  <div className="flex items-center justify-between border-b pb-1  ">
                    <div>
                      <p className="font-bold">Jessica Akoh</p>
                      <p className="text-xs">21 days ago</p>
                    </div>
                    <div>
                      <img src={StudentReviews} alt="student Reviews" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="background-card  mb-3 px-4 py-10 space-y-8">
                  <p className="text-xs">
                    I've been a student at Ex1 Academy for the past year, and
                    I've found the variety of courses to be impressive. The
                    instructors are engaging, and the online platform is
                    user-friendly. The only reason I didn't give it five stars
                    is that I wish there were more
                  </p>
                  <div className="flex items-center justify-between border-b pb-1 ">
                    <div>
                      <p className="font-bold">Jane Smith</p>
                      <p className="text-xs">21 days ago</p>
                    </div>
                    <div>
                      <img src={StudentReviews} alt="student Reviews" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row gap-4 py-6">
              <div className="lg:w-1/2 w-full">
                <div className="background-card  mb-4 px-4 py-10 space-y-8">
                  <p className="text-xs">
                    The courses are well-structured, and the instructors are
                    knowledgeable and supportive. I've gained practical skills
                    that have already made a positive impact on my career. I
                    highly recommend Academy to anyone looking to advance their
                    education
                  </p>
                  <div className="flex items-center justify-between border-b pb-1  ">
                    <div>
                      <p className="font-bold">Jessica Akoh</p>
                      <p className="text-xs">21 days ago</p>
                    </div>
                    <div>
                      <img src={StudentReviews} alt="student Reviews" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="background-card  mb-3 px-4 py-10 space-y-8">
                  <p className="text-xs">
                    I've been a student at Ex1 Academy for the past year, and
                    I've found the variety of courses to be impressive. The
                    instructors are engaging, and the online platform is
                    user-friendly. The only reason I didn't give it five stars
                    is that I wish there were more
                  </p>
                  <div className="flex items-center justify-between border-b pb-1 ">
                    <div>
                      <p className="font-bold">Jane Smith</p>
                      <p className="text-xs">21 days ago</p>
                    </div>
                    <div>
                      <img src={StudentReviews} alt="student Reviews" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 py-6">
              <div className="lg:w-1/2 w-full">
                <div className="background-card  mb-4 px-4 py-10 space-y-8">
                  <p className="text-xs">
                    The courses are well-structured, and the instructors are
                    knowledgeable and supportive. I've gained practical skills
                    that have already made a positive impact on my career. I
                    highly recommend Academy to anyone looking to advance their
                    education
                  </p>
                  <div className="flex items-center justify-between border-b pb-1  ">
                    <div>
                      <p className="font-bold">Jessica Akoh</p>
                      <p className="text-xs">21 days ago</p>
                    </div>
                    <div>
                      <img src={StudentReviews} alt="student Reviews" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="background-card  mb-3 px-4 py-10 space-y-8">
                  <p className="text-xs">
                    I've been a student at Ex1 Academy for the past year, and
                    I've found the variety of courses to be impressive. The
                    instructors are engaging, and the online platform is
                    user-friendly. The only reason I didn't give it five stars
                    is that I wish there were more
                  </p>
                  <div className="flex items-center justify-between border-b pb-1 ">
                    <div>
                      <p className="font-bold">Jane Smith</p>
                      <p className="text-xs">21 days ago</p>
                    </div>
                    <div>
                      <img src={StudentReviews} alt="student Reviews" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      {/* <motion.div
        className="md:w-1/2 p-4"
        initial={{ y: 100, opacity: 0 }}
        animate={controls}
        ref={ref}
      >
        <div className="mb-10 text-left">
          see What student all over the world are <br></br> about Ex1 Academy
        </div>
        <div className="background-card  mb-4 px-4 py-10 space-y-8">
          <p className="text-xs">
            I'm an international student, and I appreciate how Academy caters to
            a global audience. The flexibility of online learning has allowed me
            to pursue my studies while balancing a part-time job. The diverse
            student community and resources have been invaluable in my academic
            journey.
          </p>
          <div className="flex items-center justify-between border-b pb-1  ">
            <div>
              <p className="font-bold">Samuel Ramirez</p>
              <p className="text-xs">21 days ago</p>
            </div>
            <div>
              <img src={StudentReviews} alt="student Reviews" />
            </div>
          </div>
        </div>
        <div className="background-card  mb-4 px-4 py-10 space-y-8">
          <p className="text-xs">
            Academy is a game-changer! The content is up-to-date, and the
            instructors genuinely care about your success. I've seen a
            significant improvement in my skills since I started here. The
            support team is responsive and helpful, making my learning
            experience top-notch.
          </p>
          <div className="flex items-center justify-between border-b pb-1  ">
            <div>
              <p className="font-bold">Emily Chen</p>
              <p className="text-xs">21 days ago</p>
            </div>
            <div>
              <img src={StudentReviews} alt="student Reviews" />
            </div>
          </div>
        </div>
      </motion.div> */}
    </div>
  );
};

export default Reviews;

// import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

// const Reviews = () => {
//   return (
//     <div className="max-w-5xl mx-auto mt-14 relative">
//       <div className="text-4xl font-bold">Student Reviews</div>

//       <div className="max-w-4xl mx-auto">
//         <Carousel
//           infiniteLoop
//           autoPlay
//           interval={3000} // Change slide every 3 seconds (adjust as needed)
//           showArrows
//           showStatus={false}
//           showThumbs={false}
//           renderArrowPrev={(onClickHandler, hasPrev, label) =>
//             hasPrev && (
//               <button
//                 className="absolute top-1/2 transform -translate-y-1/2 left-0 text-3xl text-white bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center"
//                 onClick={onClickHandler}
//                 style={{ zIndex: 2 }}
//               >
//                 &lt;
//               </button>
//             )
//           }
//           renderArrowNext={(onClickHandler, hasNext, label) =>
//             hasNext && (
//               <button
//                 className="absolute top-1/2 transform -translate-y-1/2 right-0 text-3xl text-white bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center"
//                 onClick={onClickHandler}
//                 style={{ zIndex: 2 }}
//               >
//                 &gt;
//               </button>
//             )
//           }
//         >
//           {/* Slide 1 */}
//           <div className="flex flex-col md:flex-row gap-4 py-6">
//             <div className="w-1/2">
//               <div className="background-card  mb-4 px-4 py-10 space-y-8">
//                 <p className="text-xs">
//                   The courses are well-structured, and the instructors are
//                   knowledgeable and supportive. I've gained practical skills
//                   that have already made a positive impact on my career. I
//                   highly recommend Academy to anyone looking to advance their
//                   education
//                 </p>
//                 <div className="flex items-center justify-between border-b pb-1  ">
//                   <div>
//                     <p className="font-bold">Jessica Akoh</p>
//                     <p className="text-xs">21 days ago</p>
//                   </div>
//                   <div>
//                     <img src={StudentReviews} alt="student Reviews" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-1/2">
//               <div className="background-card  mb-3 px-4 py-10 space-y-8">
//                 <p className="text-xs">
//                   I've been a student at Ex1 Academy for the past year, and I've
//                   found the variety of courses to be impressive. The instructors
//                   are engaging, and the online platform is user-friendly. The
//                   only reason I didn't give it five stars is that I wish there
//                   were more
//                 </p>
//                 <div className="flex items-center justify-between border-b pb-1 ">
//                   <div>
//                     <p className="font-bold">Jane Smith</p>
//                     <p className="text-xs">21 days ago</p>
//                   </div>
//                   <div>
//                     <img src={StudentReviews} alt="student Reviews" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* End of Slide 1 */}

//           {/* Slide 2 */}
//           <div className="flex flex-col md:flex-row gap-4 py-6">
//             <div className="w-1/2">
//               <div className="background-card  mb-4 px-4 py-10 space-y-8">
//                 <p className="text-xs">
//                   The courses are well-structured, and the instructors are
//                   knowledgeable and supportive. I've gained practical skills
//                   that have already made a positive impact on my career. I
//                   highly recommend Academy to anyone looking to advance their
//                   education
//                 </p>
//                 <div className="flex items-center justify-between border-b pb-1  ">
//                   <div>
//                     <p className="font-bold">Jessica Akoh</p>
//                     <p className="text-xs">21 days ago</p>
//                   </div>
//                   <div>
//                     <img src={StudentReviews} alt="student Reviews" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-1/2">
//               <div className="background-card  mb-3 px-4 py-10 space-y-8">
//                 <p className="text-xs">
//                   I've been a student at Ex1 Academy for the past year, and I've
//                   found the variety of courses to be impressive. The instructors
//                   are engaging, and the online platform is user-friendly. The
//                   only reason I didn't give it five stars is that I wish there
//                   were more
//                 </p>
//                 <div className="flex items-center justify-between border-b pb-1 ">
//                   <div>
//                     <p className="font-bold">Jane Smith</p>
//                     <p className="text-xs">21 days ago</p>
//                   </div>
//                   <div>
//                     <img src={StudentReviews} alt="student Reviews" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* End of Slide 2 */}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default Reviews;

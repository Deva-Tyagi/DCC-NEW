import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "What Makes Users Want to Share a Video on Social Media?",
    date: "Jan 03, 2020",
    comments: "05 Comment",
    content: "We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...",
    image: "https://makepix.b-cdn.net/makepix_ea69ac4a-cad4-4783-a4a1-c94f709baa53/random-guy-picture-9688def1_0.png",
  },
  {
    id: 2,
    title: "Bumper Ads: How to Tell a Story in 6 Seconds",
    date: "Jan 03, 2020",
    comments: "05 Comment",
    content: "We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...",
    image: "https://makepix.b-cdn.net/makepix_ea69ac4a-cad4-4783-a4a1-c94f709baa53/random-guy-picture-9688def1_0.png",
  },
  {
    id: 3,
    title: "How to Create Engaging Social Media Campaigns",
    date: "Jan 03, 2020",
    comments: "05 Comment",
    content: "We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...",
    image: "https://makepix.b-cdn.net/makepix_ea69ac4a-cad4-4783-a4a1-c94f709baa53/random-guy-picture-9688def1_0.png",
  },
  {
    id: 4,
    title: "The Power of Storytelling in Marketing",
    date: "Jan 03, 2020",
    comments: "05 Comment",
    content: "We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...",
    image: "https://makepix.b-cdn.net/makepix_ea69ac4a-cad4-4783-a4a1-c94f709baa53/random-guy-picture-9688def1_0.png",
  },
  {
    id: 5,
    title: "How to Optimize Your Content for Maximum Reach",
    date: "Jan 03, 2020",
    comments: "05 Comment",
    content: "We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...",
    image: "https://makepix.b-cdn.net/makepix_ea69ac4a-cad4-4783-a4a1-c94f709baa53/random-guy-picture-9688def1_0.png",
  },
  {
    id: 6,
    title: "Using Video to Increase Engagement and Conversions",
    date: "Jan 03, 2020",
    comments: "05 Comment",
    content: "We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...",
    image: "https://makepix.b-cdn.net/makepix_ea69ac4a-cad4-4783-a4a1-c94f709baa53/random-guy-picture-9688def1_0.png",
  },
];

const Blog = () => {
  return (
    <div className="blog-section">
      <h2 className="blog-title">OUR BLOG</h2>
      <h3 className="blog-update">BLOG UPDATE</h3>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="blog-carousel"
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="blog-card" style={{ "--bg-image": `url(${post.image})` }}>
              <h4 className="blog-card-title">{post.title}</h4>
              <p className="blog-meta">
                {post.date} / {post.comments}
              </p>
              <p className="blog-content">{post.content}</p>
              <a href="#" className="read-more">Read more →</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
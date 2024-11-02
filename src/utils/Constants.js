import yen from '../assets/yen.jpg'
import gpt from '../assets/netflix.jpg'
import yt from '../assets/yt.jpg'
import swiggy from '../assets/swiggy.jpg'
export const projectList = [
  {
    id: 1,
    title: "Yen Cafe",
    description:
      "This project is a MERN stack application designed to facilitate food ordering for students and staff. It provides features for adding items to the cart, checkout, viewing order details, checking order status, and an admin panel for CRUD operations and updating order delivery status. Additionally, the admin panel includes features for editing existing food items and creating new ones.",
    img: yen,
    link:"https://github.com/misbah1408/YenCafe",
    deployLink:"https://yen-cafe.vercel.app"
  },
  {
    id: 2,
    title: "Movies GPT",
    description:
      "Movies-GPT is a movie recommendation website that provides movie suggestions based on user input using the Google Gemini API. This project is built with React for the frontend and styled with Tailwind CSS. It acts like a search engine, offering a list of movies according to user preferences. The combination of these technologies ensures a responsive and user-friendly experience.",
    img: gpt,
    link:"https://github.com/misbah1408/movies-GPT",
    deployLink:"https://moviesgpt-chi.vercel.app/browse"
  },
  {
    id: 3,
    title: "YouTube Clone",
    description:
      "YouTube Clone is a video-consuming website that replicates the core features of the original YouTube platform. This frontend project is built using React and styled with Tailwind CSS. It utilizes Google's API to fetch and display video content seamlessly. The project delivers a user-friendly interface for browsing, searching, and watching videos.",
    img: yt,
    link:"https://github.com/misbah1408/Youtube-clone",
    deployLink:""
  },
  {
    id: 4,
    title: "Swiggy Clone",
    description:
      "Swiggy Clone is a food delivery website that mimics the functionality of the original Swiggy app. This frontend project is built using Parcel, React, and plain CSS for a seamless user experience. It integrates Swiggy's own API to fetch real-time data and provide accurate delivery information. The project showcases a responsive design and efficient food ordering process.",
    img: swiggy,
    link:"https://github.com/misbah1408/swiggyWithOriginalApi",
    deployLink:""
  },
];

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    initial: {
      y: 500,
      opacity: 0,
    },
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      trasition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const d = `
M 17.662 0.744
V 0
L 16.197 1.062
L 17.662 2.124
V 1.544
C 26.594 1.633 33.832 8.006 33.832 16.957
C 33.832 25.962 26.506 33.289 17.5 33.289
S 1.168 26.873 1.168 17.868
H 0.369
C 0.369 27.314 8.053 35 17.5 35
c 9.447 0 17.131 -7.686 17.131 -17.132
C 34.631 8.477 27.033 0.834 17.662 0.744
Z
M 17.441 32.789
v 0.73
l 1.469 -1.062
l -1.469 -1.062
v 0.595
c -7.76 -0.031 -14.064 -6.354 -14.064 -14.12
c 0 -7.787 6.334 -14.123 14.123 -14.123
c 7.787 0 14.121 6.336 14.121 14.123
h 0.801
c 0 -8.229 -6.691 -14.923 -14.922 -14.923
c -8.231 0 -14.922 6.695 -14.922 14.923
C 2.578 26.078 9.242 32.757 17.441 32.789
Z
M 14.355 21.012
c 0.022 0.023 0.045 0.047 0.065 0.07
l 0.004 -0.005
c 0.853 0.821 1.861 2.03 3.502 3.127
c 3.457 2.306 6.111 1.663 7.673 0.806
c 2.693 -1.484 3.9 -4.656 3.9 -7.141
c 0 -6.618 -5.383 -12.002 -12 -12.002
c -6.619 0 -12.002 5.384 -12.002 12.002
c 0 6.617 5.383 12 12.002 12
c 0.406 0 0.737 -0.332 0.737 -0.739
s -0.331 -0.739 -0.737 -0.739
c -5.803 0 -10.522 -4.721 -10.522 -10.521
c 0 -5.802 4.721 -10.522 10.522 -10.522
s 10.52 4.72 10.52 10.522
c 0 2.424 -1.291 4.828 -3.137 5.844
c -0.67 0.369 -1.398 0.553 -2.174 0.561
c 0.465 -0.278 0.869 -0.652 1.17 -1.127
c 0.061 -0.088 0.135 -0.166 0.176 -0.264
c 0.24 -0.58 0.264 -1.236 0.404 -1.849
c 0.182 -0.784 -3.42 -2.31 -3.732 -1.334
c -0.115 0.362 -0.287 1.504 -0.516 1.806
c -0.199 0.27 -0.697 0.141 -1.012 -0.124
c -0.822 -0.698 -1.736 -1.728 -2.541 -2.54
l 0.002 -0.001
c -0.022 -0.021 -0.048 -0.044 -0.068 -0.065
c -0.022 -0.022 -0.047 -0.047 -0.067 -0.068
v 0.001
c -0.812 -0.802 -1.84 -1.718 -2.541 -2.541
c -0.264 -0.312 -0.394 -0.809 -0.121 -1.012
c 0.301 -0.228 1.441 -0.4 1.805 -0.512
c 0.975 -0.313 -0.549 -3.916 -1.334 -3.736
c -0.613 0.144 -1.27 0.165 -1.848 0.406
c -0.101 0.041 -0.178 0.118 -0.266 0.176
c -2.058 1.305 -2.322 4.47 -0.314 6.827
c 0.768 0.9 1.564 1.774 2.385 2.625
l -0.006 0.004
C 14.308 20.969 14.334 20.989 14.355 21.012
Z
`;


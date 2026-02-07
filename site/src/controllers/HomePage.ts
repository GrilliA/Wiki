import { Router } from "express";

export const getHomePageController = (req, res) => {
  return res.render("index.pug", {
    env: process.env.NODE_ENV,
    blog: [
      {
        image: "https://placehold.co/400",
        title: "How to use the new features of JavaScript in 2024",
        description:
          "Learn about the latest features of JavaScript and how to use them in your projects.",
        link: "/blog/how-to-use-new-features-of-javascript-in-2024",
        author: "John Doe",
        date: "2024-06-01",
        body: "JavaScript is constantly evolving, and in 2024, there are several new features that developers can take advantage of. In this article, we will explore some of the most exciting features and how to use them in your projects.",
        tags: ["JavaScript", "Web Development", "Programming"],
      },
      {
        image: "https://placehold.co/400",
        title: "The Ultimate Guide to Web Development in 2024",
        description:
          "A comprehensive guide to web development in 2024, covering the latest tools, frameworks, and best practices.",
        link: "/blog/ultimate-guide-to-web-development-in-2024",
        author: "John Doe",
        date: "2024-06-01",
        body: "JavaScript is constantly evolving, and in 2024, there are several new features that developers can take advantage of. In this article, we will explore some of the most exciting features and how to use them in your projects.",
        tags: ["JavaScript", "Web Development", "Programming"],
      },
      {
        image: "https://placehold.co/400",
        title: "The Ultimate Guide to Web Development in 2024",
        description:
          "A comprehensive guide to web development in 2024, covering the latest tools, frameworks, and best practices.",
        link: "/blog/ultimate-guide-to-web-development-in-2024",
        author: "John Doe",
        date: "2024-06-01",
        body: "JavaScript is constantly evolving, and in 2024, there are several new features that developers can take advantage of. In this article, we will explore some of the most exciting features and how to use them in your projects.",
        tags: ["JavaScript", "Web Development", "Programming"],
      },
      {
        image: "https://placehold.co/400",
        title: "The Ultimate Guide to Web Development in 2024",
        description:
          "A comprehensive guide to web development in 2024, covering the latest tools, frameworks, and best practices.",
        link: "/blog/ultimate-guide-to-web-development-in-2024",
        author: "John Doe",
        date: "2024-06-01",
        body: "JavaScript is constantly evolving, and in 2024, there are several new features that developers can take advantage of. In this article, we will explore some of the most exciting features and how to use them in your projects.",
        tags: ["JavaScript", "Web Development", "Programming"],
      },
      {
        image: "https://placehold.co/400",
        title: "The Ultimate Guide to Web Development in 2024",
        description:
          "A comprehensive guide to web development in 2024, covering the latest tools, frameworks, and best practices.",
        link: "/blog/ultimate-guide-to-web-development-in-2024",
        author: "John Doe",
        date: "2024-06-01",
        body: "JavaScript is constantly evolving, and in 2024, there are several new features that developers can take advantage of. In this article, we will explore some of the most exciting features and how to use them in your projects.",
        tags: ["JavaScript", "Web Development", "Programming"],
      },
      {
        image: "https://placehold.co/400",
        title: "The Ultimate Guide to Web Development in 2024",
        description:
          "A comprehensive guide to web development in 2024, covering the latest tools, frameworks, and best practices.",
        link: "/blog/ultimate-guide-to-web-development-in-2024",
        author: "John Doe",
        date: "2024-06-01",
        body: "JavaScript is constantly evolving, and in 2024, there are several new features that developers can take advantage of. In this article, we will explore some of the most exciting features and how to use them in your projects.",
        tags: ["JavaScript", "Web Development", "Programming"],
      },
    ],
  });
};

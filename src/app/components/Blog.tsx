// "use client";

// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// interface Blog {
//   title: string;
//   description: string;
//   link: string;
//   date: string;
// }

// const blogs: Blog[] = [
//   {
//     title: "The impotance of a mentor",
//     description: ` An insightful guide on how mentors shape careers, accelerate learning, 
//     and provide direction in both personal and professional growth.`,
//     link: "https://abhigadhave97.hashnode.dev/the-importance-of-a-mentor",
//     date: "Mar 2025",
//   },
//   {
//     title: "Make a habit of reading design docs",
//     description: `A practical guide on why and how to build 
//                    the habit of reading design documents regularly`,
//     link: "https://abhigadhave97.hashnode.dev/make-a-habit-of-reading-documentation-design-docs",
//     date: "Jan 2025",
//   },
//   {
//     title: "What is GPT?",
//     description: `A simple guide to understanding GPT, the AI model behind tools like ChatGPT, and how it works.`,
//     link: "https://abhigadhave97.hashnode.dev/what-is-gpt",
//     date: "Aug 2025",
//   },
//   {
//     title: "Agentic AI: Your Digital Dream Team",
//     description: `Discover how Agentic AI works, why it's called your digital dream 
//     team, and its impact on the future of work and automation.`,
//     link: "https://abhigadhave97.hashnode.dev/agentic-ai-your-digital-dream-team",
//     date: "Aug 2025",
//   },
//   {
//     title: "Next.js, developers best friend",
//     description: `Discover why Next.js is every developer's best friend for building fast, scalable, 
//     and modern web apps`,
//     link: "https://abhigadhave97.hashnode.dev/unlocking-performance-why-nextjs-is-a-developers-best-friend",
//     date: "Sep 2024",
//   },
//   {
//     title: "Clean Code Practices",
//     description: "A guide to writing clean, readable, and maintainable code every developer should follow",
//     link: "https://abhigadhave97.hashnode.dev/write-clean-build-strong-6-steps-for-better-code",
//     date: "Dec 2024",
//   }
// ];

// export default function Blogs() {
//   const [startIndex, setStartIndex] = useState(0);

//   const visibleBlogs = blogs.slice(startIndex, startIndex + 4);

//   const handleNext = () => {
//     if (startIndex + 4 < blogs.length) {
//       setStartIndex(startIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (startIndex > 0) {
//       setStartIndex(startIndex - 1);
//     }
//   };

//   return (
//     <section id="blogs" className="py-20">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-10">My Blogs</h2>
        
//         <div className="flex items-center justify-between">
//           <Button onClick={handlePrev} variant="outline" size="icon" disabled={startIndex === 0}>
//             <ChevronLeft className="w-5 h-5" />
//           </Button>

//           <div className="grid grid-cols-4 gap-6 flex-1 px-6">
//             {visibleBlogs.map((blog, index) => (
//               <Card key={index} className="rounded-2xl shadow-md hover:shadow-xl transition">
//                 <CardContent className="p-4 flex flex-col justify-between h-full">
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
//                     <p className="text-sm text-muted-foreground mb-3">{blog.description}</p>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-xs text-gray-500">{blog.date}</span>
//                     <a
//                       href={blog.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-600 text-sm font-medium hover:underline"
//                     >
//                       Read →
//                     </a>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           <Button
//             onClick={handleNext}
//             variant="outline"
//             size="icon"
//             disabled={startIndex + 4 >= blogs.length}
//           >
//             <ChevronRight className="w-5 h-5" />
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { AnimatePresence, motion } from "framer-motion";

// interface Blog {
//   title: string;
//   description: string;
//   link: string;
//   date: string;
// }

// const blogs: Blog[] = [
//   {
//     title: "The importance of a mentor",
//     description: `An insightful guide on how mentors shape careers, accelerate learning, 
//     and provide direction in both personal and professional growth.`,
//     link: "https://abhigadhave97.hashnode.dev/the-importance-of-a-mentor",
//     date: "Mar 2025",
//   },
//   {
//     title: "Make a habit of reading design docs",
//     description: `A practical guide on why and how to build 
//                    the habit of reading design documents regularly`,
//     link: "https://abhigadhave97.hashnode.dev/make-a-habit-of-reading-documentation-design-docs",
//     date: "Jan 2025",
//   },
//   {
//     title: "What is GPT?",
//     description: `A simple guide to understanding GPT, the AI model behind tools like ChatGPT, and how it works.`,
//     link: "https://abhigadhave97.hashnode.dev/what-is-gpt",
//     date: "Aug 2025",
//   },
//   {
//     title: "Agentic AI: Your Digital Dream Team",
//     description: `Discover how Agentic AI works, why it's called your digital dream 
//     team, and its impact on the future of work and automation.`,
//     link: "https://abhigadhave97.hashnode.dev/agentic-ai-your-digital-dream-team",
//     date: "Aug 2025",
//   },
//   {
//     title: "Next.js, developer's best friend",
//     description: `Discover why Next.js is every developer's best friend for building fast, scalable, 
//     and modern web apps`,
//     link: "https://abhigadhave97.hashnode.dev/unlocking-performance-why-nextjs-is-a-developers-best-friend",
//     date: "Sep 2024",
//   },
//   {
//     title: "Clean Code Practices",
//     description: "A guide to writing clean, readable, and maintainable code every developer should follow",
//     link: "https://abhigadhave97.hashnode.dev/write-clean-build-strong-6-steps-for-better-code",
//     date: "Dec 2024",
//   }
// ];

// export default function Blogs() {
//   const [startIndex, setStartIndex] = useState(0);

//   const visibleBlogs = blogs.slice(startIndex, startIndex + 4);

//   const handleNext = () => {
//     if (startIndex + 4 < blogs.length) {
//       setStartIndex(startIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (startIndex > 0) {
//       setStartIndex(startIndex - 1);
//     }
//   };

//   return (
//     <section id="blogs" className="py-20">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-10">My Blogs</h2>
        
//         <div className="flex items-center justify-between">
//           <motion.div whileTap={{ scale: 0.9 }}>
//             <Button onClick={handlePrev} variant="outline" size="icon" disabled={startIndex === 0}>
//               <ChevronLeft className="w-5 h-5" />
//             </Button>
//           </motion.div>

//           <div className="grid grid-cols-4 gap-6 flex-1 px-6">
//             <AnimatePresence mode="popLayout">
//               {visibleBlogs.map((blog, index) => (
//                 <motion.div
//                   key={blog.title}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -30 }}
//                   transition={{ duration: 0.4, ease: "easeOut" }}
//                 >
//                   <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
//                     <Card className="rounded-2xl shadow-md hover:shadow-xl transition h-full min-h-[250px]">
//                       <CardContent className="p-4 flex flex-col justify-between">
//                         <div>
//                           <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
//                           <p className="text-sm text-muted-foreground mb-3">{blog.description}</p>
//                         </div>
//                         <div className="flex justify-between items-center">
//                           <span className="text-xs text-gray-500">{blog.date}</span>
//                           <a
//                             href={blog.link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-blue-600 text-sm font-medium hover:underline"
//                           >
//                             Read →
//                           </a>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>

//           <motion.div whileTap={{ scale: 0.9 }}>
//             <Button
//               onClick={handleNext}
//               variant="outline"
//               size="icon"
//               disabled={startIndex + 4 >= blogs.length}
//             >
//               <ChevronRight className="w-5 h-5" />
//             </Button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface Blog {
  title: string;
  description: string;
  link: string;
  date: string;
}

const blogs: Blog[] = [
  {
    title: "The importance of a mentor",
    description: `An insightful guide on how mentors shape careers, accelerate learning, 
    and provide direction in both personal and professional growth.`,
    link: "https://abhigadhave97.hashnode.dev/the-importance-of-a-mentor",
    date: "Mar 2025",
  },
  {
    title: "Make a habit of reading design docs",
    description: `A practical guide on why and how to build 
                   the habit of reading design documents regularly`,
    link: "https://abhigadhave97.hashnode.dev/make-a-habit-of-reading-documentation-design-docs",
    date: "Jan 2025",
  },
  {
    title: "What is GPT?",
    description: `A simple guide to understanding GPT, the AI model behind tools like ChatGPT, and how it works.`,
    link: "https://abhigadhave97.hashnode.dev/what-is-gpt",
    date: "Aug 2025",
  },
  {
    title: "Agentic AI: Your Digital Dream Team",
    description: `Discover how Agentic AI works, why it's called your digital dream 
    team, and its impact on the future of work and automation.`,
    link: "https://abhigadhave97.hashnode.dev/agentic-ai-your-digital-dream-team",
    date: "Aug 2025",
  },
  {
    title: "Next.js, developer's best friend",
    description: `Discover why Next.js is every developer's best friend for building fast, scalable, 
    and modern web apps`,
    link: "https://abhigadhave97.hashnode.dev/unlocking-performance-why-nextjs-is-a-developers-best-friend",
    date: "Sep 2024",
  },
  {
    title: "Clean Code Practices",
    description: "A guide to writing clean, readable, and maintainable code every developer should follow",
    link: "https://abhigadhave97.hashnode.dev/write-clean-build-strong-6-steps-for-better-code",
    date: "Dec 2024",
  }
];

export default function Blogs() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleBlogs = blogs.slice(startIndex, startIndex + 4);

  const handleNext = () => {
    if (startIndex + 4 < blogs.length) setStartIndex(startIndex + 1);
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  return (
    <section id="blogs" className="py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">My Blogs</h2>

        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Prev Button */}
          <motion.div whileTap={{ scale: 0.9 }} className="mb-4 md:mb-0">
            <Button
              onClick={handlePrev}
              variant="outline"
              size="icon"
              disabled={startIndex === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-1 px-0 md:px-6">
            <AnimatePresence mode="popLayout">
              {visibleBlogs.map((blog) => (
                <motion.div
                  key={blog.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full"
                >
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="h-full">
                    <Card className="rounded-2xl shadow-md hover:shadow-xl transition flex flex-col h-full">
                      <CardContent className="flex flex-col justify-between h-full">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                          <p className="text-sm text-muted-foreground">{blog.description}</p>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <span className="text-xs text-gray-500">{blog.date}</span>
                          <a
                            href={blog.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 text-sm font-medium hover:underline"
                          >
                            Read →
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <motion.div whileTap={{ scale: 0.9 }} className="mt-4 md:mt-0">
            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              disabled={startIndex + 4 >= blogs.length}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import Hero from '@/app/components/Hero'
import Stats from '@/app/components/Stats'
import Experience from '@/app/components/Experience'
import Projects from '@/app/components/Projects'
import Education from '@/app/components/Education'
import Contact from '@/app/components/Contact'
import Section from '@/app/components/Section'
import Blog from './components/Blog'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="bg-gray-950 text-white">
      {/* Hero Section */}
      <Hero />

      {/* About Me */}
      <Section id="about" title="About Me" >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image/Avatar */}
          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="relative w-88 h-78">
              <Image
                src="/Images/Profile/myimage3.jpg"
                alt="Abhijit Gadhave"
                fill
                className="rounded-full border-4 border-purple-500 shadow-lg hover:scale-105 transition object-cover"
              />
            </div>
          </div>

          {/* Right side - Bio + Skills */}
          <div className="prose prose-invert max-w-none">
            <p className=" leading-relaxed">
                Hello! I’m <span className="font-semibold">Abhijit Gadhave</span>.  
                I work on full-stack web and AI-powered experiences—building polished UI’s on the frontend and reliable systems on the backend.  
                I enjoy turning complex problems into simple, delightful interfaces.
            </p>
            <p className="mt-4">
                On the backend, I’ve worked with <span className="font-semibold">Java</span> and <span className="font-semibold">Express.js</span>,  
                building REST APIs, integrating WebSockets for real-time features, and even experimenting with bringing AI models into backend workflows.
            </p>
            <p className="mt-4">
              When I’m not coding, my free time is spent on cricket. I am a  
              <span className="font-semibold text-purple-400"> huge RCB fan </span>
              and i love to discuss Cricket tactics.
            </p>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap gap-3">
              {['TypeScript','JavaScript','React','Node.js','RxJS','Angular','C++', 'GENAI',
                'Next.js', 'TailwindCSS', 'MongoDB','Express.js','Docker', 'Git',
                'Github', 'AWS', 'Intellij', 'VSCode', 'Linux',
                'WebSocket', 'REST APIs'
              ].map(s => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full bg-purple-700/20 border border-purple-500/40 
                             text-sm text-purple-300 hover:bg-purple-600/30 transition">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Stats />

      <Blog/>

      {/* Experience */}
      <Experience />

      {/* Projects */}
      <Projects />

      {/* Education */}
      <Education />

      {/* Contact */}
      <Contact />
    </main>
  )
}

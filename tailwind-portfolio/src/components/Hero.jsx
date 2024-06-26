/* eslint-disable react/no-unescaped-entities */
import heroImg from '../assets/hero.svg'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

const Hero = () => {
  return (
    <section className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Mübarek</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-end Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a
              href="https://github.com/M-ALBAYATI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="https://projects-m-albayati.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/m%C3%BCbarek-albayati/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </section>
  )
}
export default Hero

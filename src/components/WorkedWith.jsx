import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faJava,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";

const techIcons = [
  { icon: faReact },
  { icon: faNodeJs },
  { image: "/TailwindCSSLogo.svg" }, // Tailwind pakai gambar SVG
  { icon: faJava },
  { icon: faPhp },
];

export const WorkedWith = () => (
  <section className='w-4/6 mx-auto text-center my-10'>
    {/* Judul */}
    <h2 className='text-lg max-sm:text-sm text-text-primary mb-5 max-sm:my-7'>
      Worked with
    </h2>

    {/* Container Icon */}
    <div className='flex flex-wrap justify-center gap-10 max-sm:gap-4 max-sm:flex-nowrap max-sm:overflow-x-auto'>
      {techIcons.map((tech, index) => (
        <div
          key={index}
          className='w-20 h-20 max-sm:w-12 max-sm:h-12 flex items-center justify-center bg-card rounded-lg shadow-md transition hover:shadow-button-glow border border-divider'
        >
          {tech.icon ? (
            <FontAwesomeIcon
              icon={tech.icon}
              className='text-4xl max-sm:text-xl'
            />
          ) : (
            <img
              src={tech.image}
              alt='Tailwind CSS'
              className='w-10 h-10 max-sm:w-6 max-sm:h-6 filter invert brightness-0'
            />
          )}
        </div>
      ))}
    </div>
  </section>
);

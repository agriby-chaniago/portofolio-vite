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
  <section className='w-4/6 mx-auto text-center'>
    {/* Judul */}
    <h2 className='text-lg text-text-primary mb-8'>Worked with</h2>

    {/* Container Icon */}
    <div className='flex flex-wrap justify-center gap-10'>
      {techIcons.map((tech, index) => (
        <div
          key={index}
          className='w-20 h-20 flex flex-col items-center justify-center bg-card rounded-lg shadow-md transition hover:shadow-button-glow border border-divider'
        >
          {tech.icon ? (
            <FontAwesomeIcon icon={tech.icon} className='text-4xl' />
          ) : (
            <img
              src={tech.image}
              alt='Tailwind CSS'
              className='w-10 h-10 filter invert brightness-0'
            />
          )}
        </div>
      ))}
    </div>
  </section>
);

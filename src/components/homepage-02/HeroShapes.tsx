import capsule from '@public/images/codyol/3d/capsule.webp';
import cube from '@public/images/codyol/3d/cube.webp';
import sphere from '@public/images/codyol/3d/sphere.webp';
import torus from '@public/images/codyol/3d/torus.webp';
import Image from 'next/image';

// Hero'nun kenarlarında süzülen 3D marka objeleri (dekoratif)
const shapes = [
  {
    src: torus,
    className: 'top-[12%] left-[-6%] w-[110px] sm:w-[150px] md:left-[2%] xl:left-[6%] xl:w-[190px]',
    depth: '1.6',
    x: '1',
    y: '0.6',
  },
  {
    src: cube,
    className: 'top-[8%] right-[-4%] w-[80px] sm:w-[110px] md:right-[6%] xl:right-[11%] xl:w-[130px]',
    depth: '2.2',
    x: '1',
    y: '1',
  },
  {
    src: sphere,
    className: 'top-[44%] right-[-6%] hidden w-[110px] sm:block md:right-[1%] xl:right-[4%] xl:w-[150px]',
    depth: '1.8',
    x: '0.8',
    y: '-0.8',
  },
  {
    src: capsule,
    className: 'top-[52%] left-[1%] hidden w-[80px] sm:block xl:left-[9%] xl:w-[110px]',
    depth: '1.9',
    x: '0.6',
    y: '-1',
  },
];

const HeroShapes = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      {shapes.map((shape, i) => (
        <figure
          key={i}
          className={`parallax-effect absolute ${shape.className}`}
          data-parallax-value={shape.depth}
          data-parallax-x={shape.x}
          data-parallax-y={shape.y}>
          <Image src={shape.src} alt="" priority className="h-auto w-full drop-shadow-[0_24px_30px_rgba(230,45,94,0.18)]" />
        </figure>
      ))}
    </div>
  );
};

export default HeroShapes;

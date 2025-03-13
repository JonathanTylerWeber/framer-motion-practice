import { motion, useScroll, useSpring } from "framer-motion";

export default function SpringyUseScroll() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[10px] bg-[#fe0222] origin-left"
        style={{ scaleX }}
      />
      <h1 className="text-4xl font-bold text-center mt-[100px] mb-[40px]">
        <code>useScroll</code> with spring smoothing
      </h1>
      <article className="max-w-[500px] p-5 mx-auto">
        <p className="text-lg mb-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
          rhoncus quam.
        </p>
        <p className="text-lg mb-[30px]">
          Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
          imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
          Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis
          blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus
          ipsum tellus, eu tincidunt neque tincidunt a.
        </p>
        <h2 className="text-2xl font-semibold mt-[50px] mb-[10px]">
          Sub-header
        </h2>
        <p className="text-lg mb-[30px]">
          In eget sodales arcu, consectetur efficitur metus. Duis efficitur
          tincidunt odio, sit amet laoreet massa fringilla eu.
        </p>
        <p className="text-lg mb-[30px]">
          Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
          Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
          Proin sit amet lacus mollis, semper massa ut, rutrum mi.
        </p>
        <p className="text-lg mb-[30px]">
          Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
        </p>
        <p className="text-lg mb-[30px]">
          Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
          leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
        </p>
        <h2 className="text-2xl font-semibold mt-[50px] mb-[10px]">
          Sub-header
        </h2>
        <p className="text-lg mb-[30px]">
          Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
          aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
          sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
          metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
          enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Pellentesque hendrerit ac augue quis
          pretium.
        </p>
        <p className="text-lg mb-[30px]">
          Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
          elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
          ultricies, mollis mi in, euismod dolor.
        </p>
        <p className="text-lg mb-[30px]">
          Quisque convallis ligula non magna efficitur tincidunt.
        </p>
        <p className="text-lg mb-[30px]">
          Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
          Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
          Proin sit amet lacus mollis, semper massa ut, rutrum mi.
        </p>
        <p className="text-lg mb-[30px]">
          Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
        </p>
        <p className="text-lg mb-[30px]">
          Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
          leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
        </p>
        <h2 className="text-2xl font-semibold mt-[50px] mb-[10px]">
          Sub-header
        </h2>
        <p className="text-lg mb-[30px]">
          Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
          aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
          sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
          metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
          enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Pellentesque hendrerit ac augue quis
          pretium.
        </p>
        <p className="text-lg mb-[30px]">
          Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
          elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
          ultricies, mollis mi in, euismod dolor.
        </p>
        <p className="text-lg mb-[30px]">
          Quisque convallis ligula non magna efficitur tincidunt.
        </p>
      </article>
    </>
  );
}

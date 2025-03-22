import Image from "next/image";


const OurPhilosophy: React.FC = () => {
  return (
    <section className="w-full">
      <h1 className="text-black flex justify-center mt-10 text-4xl font-extrabold">Our Philosophy</h1>
      <div className="flex items-center w-[90%] my-8 mx-auto">
        <div className="mx-auto my-4 text-lg flex flex-col justify-center">
          
            <p className="my-4  leading-relaxed">
            The <b>triangular face</b> of a fox
            represents demonstration, insight, discovery, and higher outlook. It
            is often used to mark growth. The triangle also symbolizes strength.
            </p>
            <p className="my-4  leading-relaxed">
            The <b>pointed ears</b> of a fox
            signify observation and perfectionism. People with pointed ears are
            like Sherlock Holmes—highly perceptive. They notice things that
            others don't and tend to dwell on details to ensure perfection.
            </p>
            <p className="my-4  leading-relaxed">
            A fox has an <b>elongated rostrum</b>.
            Elongation indicates better material quality and signifies the ability
            to stretch without weakening. The more elongated a fox is, the more
            formidable it becomes.
            </p>
            <p className="my-4  leading-relaxed">
            A fox has a <b>bushy tail</b> that
            signifies eagerness, readiness, and excitement. The thick tail aids
            its balance and also acts as protection during the winter.
            </p>
            <p className="my-4  leading-relaxed">
            The fox symbolizes cleverness, independence, playfulness, and
            mischievousness. It represents beauty, protection, and good luck,
            serving as a helper and guide for active, motivated individuals.
            </p>
          
          
        </div>
        
        <Image src="/images/Fox.png" alt="Fox Symbolism" width={500} height={300} />
      </div>
    </section>
  );
};

export default OurPhilosophy;

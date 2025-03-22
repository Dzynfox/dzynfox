import Image from "next/image";
import fox from "@/public/images/BabyFox.png";

const OurPhilosophy: React.FC = () => {
  return (
    <section className="OurPhilosophy">
      <h1 className="section-header">Our Philosophy</h1>
      <div className="flex items-center w-[90%] my-8 mx-auto">
        <div className="mx-auto my-4 flex flex-col justify-center">
          <p>
            The <span className="font-bold">triangular face</span> of a fox
            represents demonstration, insight, discovery, and higher outlook. It
            is often used to mark growth. The triangle also symbolizes strength.
            <span className="block h-8"></span>
            The <span className="font-bold">pointed ears</span> of a fox
            signify observation and perfectionism. People with pointed ears are
            like Sherlock Holmes—highly perceptive. They notice things that
            others don't and tend to dwell on details to ensure perfection.
            <span className="block h-8"></span>
            A fox has an <span className="font-bold">elongated rostrum</span>.
            Elongation indicates better material quality and signifies the ability
            to stretch without weakening. The more elongated a fox is, the more
            formidable it becomes.
            <span className="block h-8"></span>
            A fox has a <span className="font-bold">bushy tail</span> that
            signifies eagerness, readiness, and excitement. The thick tail aids
            its balance and also acts as protection during the winter.
            <span className="block h-8"></span>
            The fox symbolizes cleverness, independence, playfulness, and
            mischievousness. It represents beauty, protection, and good luck,
            serving as a helper and guide for active, motivated individuals.
          </p>
        </div>
        
        <Image src="/drawables/fox.png" alt="Fox Symbolism" width={500} height={300} />
      </div>
    </section>
  );
};

export default OurPhilosophy;

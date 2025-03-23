import { getAllPartners } from "@/lib/sanity/helpers";

const Partners = async () => {
  const partners = await getAllPartners();
  console.log(partners);
  return (
    <div>
      <h1>Partners</h1>
    </div>
  );
};

export default Partners;

import PartnerTile from "@/components/PartnersTile";
import { getAllPartners } from "@/lib/sanity/helpers";

const Partners = async () => {
  const partners = await getAllPartners();

  return (
    <div>
      <h1 className=" text-xl font-bold text-center">Our Partners</h1>
      <div className="my-4 p-4 min-h flex gap-4 justify-center flex-wrap">
      {partners.map((partner, i) => (
        <PartnerTile
          key={i}
          name={partner.name}
          contact={partner.contact}
          state={partner.state}
          city={partner.city}
        />
      ))}
      </div>

    </div>
  );
};

export default Partners;

const Footer = () => {
  return (
    <div className="flex justify-between bg-accent-secondary text-white p-4">
      <div>
        <h1 className="text-2xl font-bold">
          DZYN<span className="text-accent">FOX</span>
        </h1>
        <p className="mt-4">A Brand of MarkAll - Marketing All Out</p>
        <p>COPYRIGHT &copy; DzynFox Visual Communications LLP</p>
        <p className="text-sm mt-2">
          Images designed with the help of{" "}
          <a href="https://www.freepik.com" className="underline">
            Freepik
          </a>
        </p>
      </div>
      <div className="text-right">
        <h1 className="text-2xl text-gray-300 font-bold">Our Address</h1>
        <address className="mt-4">
          B101-Amrapali
          <br /> Sector-3, Vaishali
          <br /> Ghaziabad - 201010
        </address>
      </div>
    </div>
  );
};

export default Footer;

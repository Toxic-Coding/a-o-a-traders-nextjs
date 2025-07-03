import Breadcrumb from "../Common/Breadcrumb";

const ShppingPolicy = () => {
  return (
    <>
      <Breadcrumb title={"Shpping Policy"} pages={["Shpping Policy"]} />

      <section className="bg-app_bg">
        <div className="max-w-[1500px] mx-auto w-full text-app_text py-[80px] px-[10px] sm:px-[20px]">
          <h1 className="text-heading-6 font-semibold mb-6 text-app_text">
            SHIPPING METHODS
          </h1>

          <p className="text-custom-sm mb-4">
            All Web orders are shipped FedEx or UPS ground with the exception of
            APO/FPO orders which will ship USPS. Please note ground shipments
            generally take between 2-3 days for the order to arrive. This is an
            approximation and is not guaranteed. Heavy weight orders are shipped
            by LTL Freight Carries which usually requires an additional day of
            processing.
          </p>
        </div>
      </section>
    </>
  );
};

export default ShppingPolicy;

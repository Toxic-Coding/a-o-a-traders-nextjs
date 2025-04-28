import Breadcrumb from "../Common/Breadcrumb";

const Faqs = () => {
  return (
    <>
      <Breadcrumb title={"FAQ's"} pages={["FAQ's"]} />

      <section className="overflow-hidden py-20 bg-gray-2 px-[20px] text-app_text2">
        <div className="max-w-[1500px] w-full mx-auto">

          
          <div className="border-b-[1px] border-border-app_border pb-[20px]">
            <h2 className="text-custom-xl text-app_text font-semibold mb-[15px]">
              How can we help you?
            </h2>
            <p>
              Returns are free for orders shipped within the U.S. We include a
              UPS return label in every package which is at no cost to use.
            </p>
            <p className="my-[10px]">Follow the steps below for a seamless returns process:</p>

            <ul className="text-app_text2 space-y-2">
              <li>
                - Please indicate a reason for return using one of the Return
                Codes listed on the order form included in your package.
              </li>
              <li>
                - Attach your UPS return label to the outside of the package.
                There is no cost to use this label.
              </li>
              <li>
                - Please make note of your tracking number so that you are able to
                track it on its way back to us.
              </li>
            </ul>

            <p className="mt-[10px]">
              You will receive an email once your return has been processed.
              Please allow 06 - 12 business days from the time your package
              arrives back to us for a refund to be issued.
            </p>
          </div>

          <div className="border-b-[1px] border-border-app_border pb-[20px]">
            <h2 className="text-custom-xl text-app_text font-semibold mb-[15px]">
              How can we help you?
            </h2>
            <p>
              Returns are free for orders shipped within the U.S. We include a
              UPS return label in every package which is at no cost to use.
            </p>
            <p className="my-[10px]">Follow the steps below for a seamless returns process:</p>

            <ul className="text-app_text2 space-y-2">
              <li>
                - Please indicate a reason for return using one of the Return
                Codes listed on the order form included in your package.
              </li>
              <li>
                - Attach your UPS return label to the outside of the package.
                There is no cost to use this label.
              </li>
              <li>
                - Please make note of your tracking number so that you are able to
                track it on its way back to us.
              </li>
            </ul>

            <p className="mt-[10px]">
              You will receive an email once your return has been processed.
              Please allow 06 - 12 business days from the time your package
              arrives back to us for a refund to be issued.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;

import Breadcrumb from "../Common/Breadcrumb";

const RefundPolicy = () => {
  return (
    <>
      <Breadcrumb title={"Refund Policy"} pages={["Refund Policy"]} />

      <section className="bg-app_bg">
        <div className="max-w-[1500px] mx-auto w-full text-app_text py-[80px] px-[10px] sm:px-[20px]">
          <h1 className="text-heading-6 font-semibold mb-6 text-app_text">
            RETURN POLICY
          </h1>

          <p className="text-custom-sm mb-4">
            Aoatraders Inc. offers a 30-day return policy on all merchandise
            based on the following conditions:
          </p>

          <h2 className="text-custom-xl font-semibold mt-8 mb-2 text-app_text">
            Damaged Product Box
          </h2>
          <p className="text-custom-sm mb-4">
            If Customer receives damaged box upon delivery, please refuse the
            products upon original delivery attempt. If damaged products are
            accepted from the carrier, such damage should be noted on the
            carrier delivery record. Please save the product and the original
            box and packaging and notify Aoatraders Inc. immediately to arrange
            for a carrier inspection and a pickup of damaged products. Please
            notify Aoatraders Inc. Customer Service at{" "}
            <a
              className="text-app_orange underline"
              href="mailto:customerservice@aoatraders.com"
            >
              customerservice@aoatraders.com
            </a>{" "}
            of damaged products <strong>WITHIN THE FIRST 10 DAYS</strong> of
            receipt. Timely receipt of this information is necessary for
            Bluedogink.com to file a damage claim. Damaged merchandise will only
            be exchanged for the exact same product.
          </p>

          <h2 className="text-custom-xl font-semibold mt-8 mb-2 text-app_text">
            Defective Products
          </h2>
          <p className="text-custom-sm mb-4">
            If you have received defective merchandise, you must contact
            Aoatraders Inc. within 30 days for Return/Exchange. After an RMA is
            issued, we then email or mail you a call tag (Pre-Paid Shipping
            Label). All defective merchandise will be inspected once returned to
            our warehouse. We can then issue you a full credit, store credit, or
            replacement to be redelivered. After 30 days, Customer will have to
            contact the manufacturer directly, most manufacturers have 1-year
            warranties.
          </p>

          <h2 className="text-custom-xl font-semibold mt-8 mb-2 text-app_text">
            Non-Damaged/Defective, and Unopened
          </h2>
          <p className="text-custom-sm mb-4">
            If you have non-defective and unopened merchandise within 30 days of
            original purchase date, we will issue you an RMA # and will give you
            an address to ship the product to at your expense subject to a 15%
            restocking fee.
          </p>

          <h2 className="text-custom-xl font-semibold mt-8 mb-2 text-app_text">
            Non-Damaged/Defective, Opened
          </h2>
          <p className="text-custom-sm mb-4">
            We will not accept returns on merchandise that has been opened and
            is not defective.
          </p>

          <p className="text-custom-sm mb-4">
            All return products must have an RMA number, or the return will be
            refused at our warehouse.
          </p>

          <p className="text-custom-sm mb-4">
            <strong>To receive an RMA:</strong> Log into your account, navigate
            to the "Return Items" section and fill out our online RMA form or
            call us at <span className="text-app_orange">(760) 590-4250</span>.
          </p>

          <p className="text-custom-sm mb-4">
            Please return all products 100% complete including all original
            manufacturer boxes with the UPC code and packing materials, all
            manuals, blank warranty cards, accessories and any other
            documentation included with the original shipment. RMA approval is
            contingent upon, among other things, the products being 100%
            complete.
          </p>

          <p className="text-custom-sm mb-4">
            Customer is not responsible for return shipping when item is
            defective. Aoatraders Inc. will send you a call tag (Pre-Paid
            Shipping Label) by email or mail. Customer is responsible for
            shipping charges when item is non-defective/un-opened.
          </p>

          <h2 className="text-custom-xl font-semibold mt-8 mb-2 text-app_text">
            Replacement Policy
          </h2>
          <p className="text-custom-sm mb-4">
            Aoatraders Inc. will not ship replacement merchandise until receipt
            of damaged or defective item. All defective or damaged returns are
            subject to verification by one of our staff members.
          </p>

          <h2 className="text-custom-xl font-semibold mt-8 mb-2 text-app_text">
            Cancellations
          </h2>
          <p className="text-custom-sm mb-4">
            You can request to cancel any order before it ships by contacting
            our customer service center at{" "}
            <span className="text-app_orange">(760) 590-4250</span> or via email
            at{" "}
            <a
              className="text-app_orange underline"
              href="mailto:customerservice@aoatraders.com"
            >
              customerservice@aoatraders.com
            </a>
            . Cancellation requests are not a guarantee, as our cancellation
            system will not allow items to be cancelled once they are preparing
            for shipment.
          </p>

          <p className="text-custom-sm">
            If you missed the window to cancel the order, you can always set up
            a return or exchange ahead of time, and then send the item back once
            it arrives. Please note, return shipping costs may apply!
          </p>
        </div>
      </section>
    </>
  );
};

export default RefundPolicy;

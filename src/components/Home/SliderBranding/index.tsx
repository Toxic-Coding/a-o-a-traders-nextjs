import Image from "next/image";

function SliderBranding() {
  return (
    <section className="xl-max-w-[1500px] bg-app_blue overflow-hidden px-[20px]">
      <div className="w-full flex items-center gap-[20px] text-head-4 text-white py-[15px] px-[5px] overflow-x-auto no-scrollbar">
        <Image
          src="/images/SliderBranding/brother-logo.png"
          alt="promo img"
          className="absolute bottom-0 right-[-80px] -z-1"
          width={70}
          height={60}
        />
        {/* <Image
          src="/images/promo/epson-logo.png"
          alt="promo img"
          className="absolute bottom-0 right-[-80px] -z-1"
          width={70}
          height={60}
        />
        <Image
          src="/images/promo/hp.png"
          alt="promo img"
          className="absolute bottom-0 right-[-80px] -z-1"
          width={70}
          height={60}
        />
        <Image
          src="/images/promo/konicca-minolta-logo.png"
          alt="promo img"
          className="absolute bottom-0 right-[-80px] -z-1"
          width={70}
          height={60}
        />
        <Image
          src="/images/promo/lexmark-logo.png"
          alt="promo img"
          className="absolute bottom-0 right-[-80px] -z-1"
          width={70}
          height={60}
        /> */}
      </div>
    </section>
  );
}

export default SliderBranding;

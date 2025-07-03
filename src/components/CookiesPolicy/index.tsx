import Breadcrumb from "../Common/Breadcrumb";
import cookies from "../../../public/images/cookiesPolicy/cookies.webp";
import Image from "next/image";
import { statsData } from "./statData";
import { coreValues } from "./coreValue";

const CookiesPolicy = () => {
  return (
    <>
      <Breadcrumb title={"Cookies Policy"} pages={["Cookies Policy"]} />

      <section className="bg-app_bg">
        <div className="max-w-[1500px] mx-auto w-full text-app_text py-[80px] px-[10px] sm:px-[20px]">
          <div className="max-w-[700px] w-full mx-auto text-center">
            <h4 className="text-custom-sm text-app_orange font-semibold">
              Welcome to AOA Traders
            </h4>
            <h1 className="text-heading-4 font-semibold mt-2 text-app_text">
              Our Perfect Store
            </h1>

            <p className="text-custom-md mt-4">
              Welcome to AOA Traders, your trusted partner in online shopping!
              Founded in 2023, we have proudly served our customers for over 2
              years, bringing a seamless and enjoyable shopping experience to
              the digital marketplace.
            </p>
          </div>

          <div className="relative w-full h-screen my-12">
            <Image
              src={cookies}
              alt="Cookies"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statsData.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl shadow-md bg-app_bg hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-heading-4 font-semibold text-app_orange">
                  {item.count}
                </h3>
                <p className="text-custom-lg font-semibold mt-2">
                  {item.title}
                </p>
                <p className="text-custom-sm text-app_text2 mt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="my-14">
            <div className="max-w-[700px] w-full mx-auto text-center">
              <h4 className="text-custom-sm text-app_orange font-semibold">
                Why Choose Us
              </h4>
              <h1 className="text-heading-4 font-semibold mt-2 text-app_text captalize">
                Our Journey
              </h1>
              <p className="text-custom-md mt-4">
                From our humble beginnings, AOA Traders was created with a clear
                mission: to make high-quality products accessible to everyone,
                everywhere. Over the past five years, we've grown from a small
                startup into a thriving e-commerce platform, thanks to the
                support of our loyal customers and the dedication of our
                passionate team.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
              {coreValues.map((item, index) => (
                <div
                  key={index}
                  className="bg-app_bg p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center bg-white"
                >
                  <div className="relative w-full h-[250px] mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover p-2"
                    />
                  </div>
                  <h3 className="text-custom-xl font-semibold text-app_text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-custom-sm text-app_text2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-[700px] w-full mx-auto text-center">
            <h4 className="text-custom-sm text-app_orange font-semibold">
              The Range of Our
            </h4>
            <h1 className="text-heading-4 font-semibold mt-2 text-app_text captalize">
              Our Products
            </h1>
            <p className="text-custom-md mt-4">
              We offer a wide range of products across various categories,
              including electronics, fashion, home goods, etc.. Each item is
              carefully curated to ensure it meets our rigorous standards,
              providing you with the best value for your money.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookiesPolicy;

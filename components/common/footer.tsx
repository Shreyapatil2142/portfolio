import { EMAIL, MENULINKS, SOCIAL_LINKS } from "../../constants";
import Image from "next/image";
import Button, { ButtonTypes } from "./button";

const contactRef = MENULINKS[5].ref;

const Footer = () => {
  const renderSocialIcons = (): React.ReactNode => {
    return Object.keys(SOCIAL_LINKS).map((el: keyof typeof SOCIAL_LINKS) => (
      <a
        href={SOCIAL_LINKS[el]}
        key={el}
        className="link hover:opacity-80 duration-300 md:px-2 px-1"
        rel="noreferrer"
        target="_blank"
      >
        <Image src={`/social/${el}.svg`} alt={el} width={40} height={40} />
      </a>
    ));
  };

  const renderFooterContent = (): React.ReactNode => (
    <>
      <h1 className="font-medium text-3xl md:text-4xl text-center">
        Connect with me on social media.
      </h1>
      <div className="flex mt-8">{renderSocialIcons()}</div>
      <div className="flex mt-8">
        <Button
          classes="mr-3"
          type={ButtonTypes.OUTLINE}
          name="Resume"
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
          href="/Shreya_Resume.pdf"
        ></Button>
        <Button
          classes="ml-3"
          type={ButtonTypes.WHITE}
          name="Let's Talk"
          href={`#${contactRef}`}
          otherProps={{
            rel: "noreferrer",
          }}
        ></Button>
      </div>
      <h2 className="text-center text-sm sm:text-base mt-8">
        Designed and Developed by Shreya&copy;{new Date().getFullYear()}
      </h2>
    </>
  );

  const { ref: footerRef } = MENULINKS[4];

  return (
    <footer
      className="w-full relative select-none bg-cover flex flex-col items-stretch"
      id={footerRef}
    >
      <Image
        src="/footer-curve.svg"
        alt="Footer"
        className="w-full"
        loading="lazy"
        height={290}
        role="presentation"
        width={1440}
      />
      <div className="h-full w-full">
        <div className="section-container flex-col flex h-full justify-end z-10 items-center py-12">
          {renderFooterContent()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

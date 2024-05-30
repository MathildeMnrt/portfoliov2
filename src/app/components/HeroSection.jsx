"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import useTranslation from 'next-translate/useTranslation';


const HeroSection = () => {
  const { t, lang } = useTranslation('common')



  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
             {t('common:heroSection.title')}{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                t('common:heroSection.subtext.id1'),
                1000,
                t('common:heroSection.subtext.id2'),
                1000,
                t('common:heroSection.subtext.id3'),
                1000,
                t('common:heroSection.subtext.id4'),
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl flex flex-col gap-1.5">
            <p>{t('bulletPoint1')}</p>
            <p>{t('bulletPoint2')}</p>
            <p>{t('bulletPoint3')}</p>
            <p>{t('bulletPoint4')}</p>
            {/*               <ul>
                {Object.values(bulletPoints).map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul> */}

          </div>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              {t('common:heroSection.buttons.hire')}
            </Link>
            {/*             <Link
              href="https://www.canva.com/design/DAGFTESHf-s/Ei4F4AjUqv-Jh-34IUyF6Q/view?utm_content=DAGFTESHf-s&utm_campaign=designshare&utm_medium=link&utm_source=editor"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link> */}
            <a
              href="CV-MathildeMenoret-FullstackDev.pdf"
              alt="Download CV"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {t('common:heroSection.buttons.cv')}
              </span>
            </a>
            <a
              href="LettreMotivation-MathildeMenoret-DevFullstackJunior.pdf"
              alt="Download Cover Letter"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {t('common:heroSection.buttons.motivation')}
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="rounded-full"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

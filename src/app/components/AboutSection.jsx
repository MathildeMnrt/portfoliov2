"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

import useTranslation from "next-translate/useTranslation";



const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const { t } = useTranslation("common");


const TAB_DATA = [
  {
    title: t('common:about.skills.title'),
    id: "skills",
    content: (
      <>
        <div className="flex flex-row justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Frontend</h3>
            <ul className="list-disc pl-2">
              <li>React</li>
              <li>NextJS</li>
              <li>Tailwind</li>
              <li>Figma</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Backend</h3>
            <ul className="list-disc pl-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Data</h3>
            <ul className="list-disc pl-2">
              <li>Metabase</li>
              <li>Grafana</li>
              <li>Clickhouse</li>
              <li>MongoDB</li>
              <li>PostGreSQL</li>
              <li>Prisma</li>
              <li>TypeORM</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "Soft Skills",
    id: "soft-skills",
    content: (
      <>
        <ul className="list-disc pl-2">
          <li>{t('common:about.softSkills.id1')}</li>
          <li>{t('common:about.softSkills.id2')}</li>
          <li>{t('common:about.softSkills.id3')}</li>
          <li>{t('common:about.softSkills.id4')}</li>
          <li>{t('common:about.softSkills.id5')}</li>
          <li>{t('common:about.softSkills.id6')}</li>
        </ul>
      </>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <>
        <ul className="list-disc pl-2">
          <li>{t('common:about.education.content.id1')}</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>{t('common:about.education.content.id2')}<a className="text-primary-500" href="https://www.sciencedirect.com/science/article/abs/pii/B9780128119266000695?via%3Dihub">{t('common:about.education.content.id3')}</a></li>
        </ul>
      </>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <>
        <div className="flex flex-col justify-center pb-48">

          <div className='flex justify-between h-64'>

            {/* LEFT */}
            <div className='w-1/2'>
              {/* JOB TITLE */}
              <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-primary-700'>PRODUCT MANAGER</div>
              {/* JOB DESC */}
              <div className="mt-3">
                <ul className="list-disc pl-2 text-sm font-extralight">
                  <li>Defining and sharing a vision aligned with company goals</li>
                  <li>Managing the backlog</li>
                  <li>Utilizing KPIs for product performance</li>
                  <li>Overseeing the complete product lifecycle</li>
                  <li>Adapting strategy based on feedback and market changes</li>
                  <li>Coordinating product launches with a well-defined strategy to achieve objectives</li>
                </ul>
              </div>
              {/* DATES */}
              <div className='p-3 text-primary-700 text-sm font-semibold'>2021 - 2023</div>
              {/* COMPANY */}
              <div className='p-1 rounded bg-white text-sm font-semibold w-fit text-black'>DISPLAYCE</div>
            </div>


            {/* CENTER */}
            <div className='w-1/6 flex justify-center '>
              {/* LINE */}
              <div className='w-1 h-full bg-gradient-to-br from-primary-700 to-primary-500 rounded relative'>
                {/* CIRCLE */}
                <div className='absolute w-5 h-5 rounded-full ring-4 ring-primary-700 bg-white -left-2'>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className='w-1/2'>

            </div>


          </div>

          <div className='flex justify-between h-64'>


            {/* LEFT */}
            <div className='w-1/2'>

            </div>
            {/* CENTER */}
            <div className='w-1/6 flex justify-center '>
              {/* LINE */}
              <div className='w-1 h-full bg-gradient-to-br from-primary-500 to-secondary-700 rounded relative'>
                {/* CIRCLE */}
                <div className='absolute w-5 h-5 rounded-full ring-4 ring-primary-500 bg-white -left-2'>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className='w-1/2'>
              {/* JOB TITLE */}
              <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-primary-500'>PRODUCT OWNER</div>
              {/* JOB DESC */}
              <div className="mt-3">
                <ul className="list-disc pl-2 text-sm font-extralight">
                  <li>Prioritizing features based on user value</li>
                  <li>Regularly updating the product backlog</li>
                  <li>Facilitating effective communication with development teams and stakeholders</li>
                  <li>Validating developed features for specification compliance</li>
                  <li>Planning and overseeing development iterations (sprints / cycles)</li>
                  <li>Continually adjusting the strategy based on user feedback and changing priorities</li>
                </ul>
              </div>
              {/* DATES */}
              <div className='p-3 text-primary-500 text-sm font-semibold'>2019-2021</div>
              {/* COMPANY */}
              <div className='p-1 rounded bg-white text-sm font-semibold w-fit text-black'>DISPLAYCE</div>
            </div>


          </div>

          <div className='flex justify-between h-64'>


            {/* LEFT */}
            <div className='w-1/2'>
              {/* JOB TITLE */}
              <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-secondary-700'>UX ENGINEER</div>
              {/* JOB DESC */}
              <div className='mt-3'>
                <ul className="list-disc pl-2 text-sm font-extralight">
                  <li>Developing user-centric interfaces and creatively solving human-machine interaction challenges.</li>
                  <li>Crafting visual prototypes for rapid testing and iteration</li>
                  <li>Collaborating effectively with developmen team</li>
                  <li>Conducting usability tests</li>
                </ul>
              </div>
              {/* DATES */}
              <div className='p-3 text-secondary-700 text-sm font-semibold'>2016-2019</div>
              {/* COMPANY */}
              <div className='p-1 rounded bg-white text-sm font-semibold w-fit text-black'>DISPLAYCE</div>
            </div>


            {/* CENTER */}
            <div className='w-1/6 flex justify-center'>
              {/* LINE */}
              <div className='w-1 h-full bg-gradient-to-br from-secondary-700 to-secondary-500 rounded relative'>
                {/* CIRCLE */}
                <div className='absolute w-5 h-5 rounded-full ring-4 ring-secondary-700 bg-white -left-2 '>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className='w-1/2'>

            </div>
          </div>
        </div>
      </>
    ),
  }
];

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="lg:grid lg:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} className="flex lg:align-start align-middle" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 mt-4">{t("common:about.sectionTitle")}</h2>
          <div className="text-base lg:text-lg text-justify flex flex-col gap-3">
            <p className="font-bold">
              {t('common:about.sectionDescription.title')}
            </p>
            <p>
              {t('common:about.sectionDescription.p1')}
            </p>
            <p>
              {t('common:about.sectionDescription.p2')}
            </p>
            <p>
              {t('common:about.sectionDescription.p3')}
            </p>
            <p>
              {t('common:about.sectionDescription.p4')}
            </p>
          </div>
          {isPending ? <div>Loading...</div> :
            <>
              <div className="flex flex-row justify-start mt-8">
                <TabButton
                  selectTab={() => handleTabChange("skills")}
                  active={tab === "skills"}
                >
                  {" "}
                  {t("common:about.skills.title")}{" "}
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("soft-skills")}
                  active={tab === "soft-skills"}
                >
                  {" "}
                  Soft skills{" "}
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("experience")}
                  active={tab === "experience"}
                >
                  {" "}
                  Experience{" "}
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("education")}
                  active={tab === "education"}
                >
                  {" "}
                  Education{" "}
                </TabButton>
              </div>
              <div className="mt-8">
                {TAB_DATA.find((t) => t.id === tab).content}
              </div>
            </>
          }
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

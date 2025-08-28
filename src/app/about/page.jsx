import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { Testimonial } from '@/components/Testimonial'
import aboutUs from '@/images/about-us.png'
import { loadArticles } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        title="Our Values"
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Trusted Team" invert>
            We foster mutual trust and collaboration, empowering our team to deliver exceptional value.
          </GridListItem>
          <GridListItem title="Customer-Centric" invert>
            We prioritize our clients, striving to exceed their expectations with tailored solutions.
          </GridListItem>
          <GridListItem title="Excellence" invert>
            We pursue the highest standards of quality, consistently delivering outstanding results.
          </GridListItem>
           <GridListItem title="Integrity" invert>
            We conduct business with honesty and transparency, building trust through ethical practices.
          </GridListItem>
           <GridListItem title="Innovation" invert>
            We embrace change and seek new ways to drive progress, staying ahead of industry trends.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function AboutUs() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
    <section className="flex flex-col md:flex-row items-left justify-between gap-8 mx-auto max-w-2xl lg:max-w-none">
      {/* Text Content */}
      <div className="md:w-1/2">
        <h2 className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-6xl">About Us</h2>
        <div className="mt-10 max-w-2xl space-y-6 text-base centered mx-auto">
          <p className='mt-6 max-w-3xl text-neutral-600'>
            <strong className="font-semibold text-neutral-950"> AzkaShine Software & Services Pvt Ltd </strong> stands as a beacon of technological excellence, providing state-of-the-art software solutions and cutting-edge IT services.
          </p>
          <p className='mt-6 max-w-3xl text-neutral-600'>
            Our focus is firmly set on driving innovation and leveraging our extensive expertise across key technology domains, including Network & Wireless Technologies, DevOps & Test Automation, Artificial Intelligence (AI) & Machine Learning (ML), and SAP & Enterprise Data Management.
          </p>
          <p className='mt-6 max-w-3xl text-neutral-600'> 
            Our commitment to fostering long-term, trust-based relationships with our clients is anchored in philosophy of quality and mutual success. AzkaShine's diverse portfolio extends its reach into a variety of sectors, including Wireless & Telecommunications, Mobility, Internet of Things (IoT), Energy, Oil & Gas, Logistics and Manufacturing. By delivering tailored solutions that meet unique challenges of each industry, we ensure our clients are well-equipped.
          </p>
        </div>
      </div>
      {/* Image */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src={aboutUs}
          alt=""
          className="rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
    </div>

  );
}

export const metadata = {
  title: 'About Us',
  description:
    'About Us',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>

      <AboutUs />

      <Container className="mt-16">
        <StatList>
          <StatListItem value="20+" label="Talented employees" />
          <StatListItem value="10+" label="Satisfied clients" />
        </StatList>
      </Container>

      <Culture />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: '', logo: '' }}
      >
        
        Our mission is to be the most reliable partner in addressing diverse software and service needs of our esteemed clients. With relentless commitment and consistency, we aim to deliver high-quality solutions that ensure mutual growth and success.
        <br />
        <br />
        <br />     
        Our vision is to exemplify excellence in technology solutions, setting new benchmarks for efficiency and achieving transformations admired by all, we aim to enable businesses to reach their highest potential.
       


      </Testimonial>

      <ContactSection />
    </RootLayout>
  )
}

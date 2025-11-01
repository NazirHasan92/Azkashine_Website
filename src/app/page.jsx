import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Button } from '@/components/Button'
import { ImageCarousel } from '@/components/ImageCarousel'
import { PartnersTicker } from '@/components/PartnersTicker'

import alphaPower from '@/images/clients/alpha_power.png'
import csg from '@/images/clients/csg.png'
import isms from '@/images/clients/isms.png'
import openInsights from '@/images/clients/open_insights.png'
import prowess from '@/images/clients/prowess.png'
import sasken from '@/images/clients/sasken.png'
import unionsys from '@/images/clients/unionsys.png'
import cloudit from '@/images/clients/cloudit.png'
import amantya from '@/images/clients/amantya.png'
import tekkacel from '@/images/clients/tekkacel.png'
import rar from '@/images/clients/rar.png'
import vvdn from '@/images/clients/vvdn.png'


import imageLaptop from '@/images/laptop.jpg'
import image1 from '@/images/1.png'
import image2 from '@/images/2.png'
import image3 from '@/images/3.png'
import image4 from '@/images/4.png'
import image5 from '@/images/5.png'
import image6 from '@/images/6.png'
import image7 from '@/images/7.png'
import image8 from '@/images/8.png'
import image9 from '@/images/9.png'
import image10 from '@/images/10.png'
import { loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

const carouselImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10]


const clients = [
  ['Alpha Power', alphaPower],
  ['CSG', csg],
  ['isms', isms],
  ['Open Insights Technology', openInsights],
  ['Prowess', prowess],
  ['Sasken', sasken],
  ['UNIONSYS TECHNOLOGIES', unionsys],
  ['Cloud IT', cloudit],
  ['AMANTYA', amantya],
  ['VVDN Technologies', vvdn],
  ['Tekkacel', tekkacel],
  ['RAR Systems', rar]
]

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 6" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3 18 .5v2H0v1h18v2L24 3Z"
      />
    </svg>
  )
}

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 sm:py-40 lg:mt-58 lg:py-48">
      <Container>
        <div className="h-px bg-[#00A0E3] mb-16" />
        <FadeIn className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h1 className="font-display text-4xl font-medium tracking-tight text-white text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Our Collaborations
          </h1>
        </FadeIn>
        <PartnersTicker partners={clients} />
        <div className="h-px bg-[#00A0E3] mt-16 sm:mt-20 lg:mt-24" />
      </Container>
    </div>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow=""
        title="Our Services"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the best value to our clients. 
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
                unoptimized
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Network & Wireless">
              We deliver exceptional services in Network and Wireless Technologies, focusing on cutting-edge design, implementation, and optimization of complex network infrastructures
                <Link
                  href={"services/network"}
                  className="mt-6 flex gap-x-3 text-base text-neutral-950 transition hover:text-neutral-700"
                  aria-label={`Read more`}
                >
                  Read more
                  <ArrowIcon className="w-6 flex-none fill-current" />
                  <span className="absolute inset-0" />
                </Link>

            </ListItem>

            <ListItem title="DevOps">
              We excel in delivering state-of-the-art DevOps and Test Automation services designed to enhance agility and streamline software delivery pipelines.
                <Link
                  href={"services/devops"}
                  className="mt-6 flex gap-x-3 text-base text-neutral-950 transition hover:text-neutral-700"
                  aria-label={`Read more`}
                >
                  Read more
                  <ArrowIcon className="w-6 flex-none fill-current" />
                  <span className="absolute inset-0" />
                </Link>
            </ListItem>

            <ListItem title="Artificial Intelligence">
              We specialize in pioneering AI and ML solutions that revolutionize business intelligence and operational efficiency.
                <Link
                  href={"services/ai"}
                  className="mt-6 flex gap-x-3 text-base text-neutral-950 transition hover:text-neutral-700"
                  aria-label={`Read more`}
                >
                  Read more
                  <ArrowIcon className="w-6 flex-none fill-current" />
                  <span className="absolute inset-0" />
                </Link>
            </ListItem>

            <ListItem title="SAP & Enterprise">
              We provide cutting-edge SAP and Enterprise Data Management solutions, optimizing business processes and data governance.
                <Link
                  href={"services/sap"}
                  className="mt-6 flex gap-x-3 text-base text-neutral-950 transition hover:text-neutral-700"
                  aria-label={`Read more`}
                >
                  Read more
                  <ArrowIcon className="w-6 flex-none fill-current" />
                  <span className="absolute inset-0" />
                </Link>
            </ListItem>

             <ListItem title="IT Consulting">
              We offer premier IT Consulting services, connecting businesses with top-tier talent through our extensive network and rigorous selection processes.
                <Link
                  href={"services/placement_services"}
                  className="mt-6 flex gap-x-3 text-base text-neutral-950 transition hover:text-neutral-700"
                  aria-label={`Read more`}
                >
                  Read more
                  <ArrowIcon className="w-6 flex-none fill-current" />
                  <span className="absolute inset-0" />
                </Link>
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-32">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <FadeIn className="lg:w-[40%]">
            <h1 className="font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
              Transformation Admired
            </h1>

            <h1 className="mt-6 font-display text-base font-semibold text-neutral-950 text-xl">
              Unlock potential through software and services tailored for your success.
            </h1>

            <p className="mt-6 text-neutral-600">
             We drive technology-led transformation, delivering future-ready solutions that empower enterprises to scale, innovate, and thrive in an evolving digital landscape.
            </p>

            <p>
              <Button
                href={"/about"}
                aria-label={`Read more`}
                className="mt-8"
              >
                Read more
              </Button>
            </p>
          </FadeIn>

          <FadeIn className="lg:w-[60%]">
            <ImageCarousel images={carouselImages} />
          </FadeIn>
        </div>
      </Container>

        {/* <CaseStudies caseStudies={caseStudies} /> */}

      <Services />

      <Clients />
    </RootLayout>
  )
}

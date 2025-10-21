import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'
import { Button } from '@/components/Button'

const navigation = [
  {
    title: 'Services',
    links: [
      { title: 'Artificial Intelligence', href: '/services/ai' },
      { title: 'DevOps', href: '/services/devops' },
      { title: 'SAP', href: '/services/sap' },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/services',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Services', href: '/services' },
      { title: 'Products', href: '/products' },
      { title: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ContactInfo() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Bengaluru Office */}
        <address className="text-sm not-italic text-neutral-600">
          <strong className="text-neutral-950">Bengaluru</strong>
          <br />
          No.73, 3rd floor, Fountain Head Building,
          <br />
          Varthur Road, Nagavarapalya, C V Raman Nagar (Post),
          <br />
          Bengaluru - 560093, Karnataka, India.
        </address>

        {/* Contact + Button */}
        <div>
          <address className="text-sm not-italic text-neutral-600">
            <strong className="text-neutral-950">Contact</strong>
            <br />
            080-25301553
            <br />
            <Link href="mailto:contact@azkashine.com">
              contact@azkashine.com
            </Link>
          </address>
          <div className="mt-6">
            <Button href="/contact">
              Say Hello
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <ContactInfo />
          </div>
        </div>
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" />
          </Link>
          <p className="text-sm text-neutral-700">
            © Azkashine Software Services Pvt. Ltd. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}

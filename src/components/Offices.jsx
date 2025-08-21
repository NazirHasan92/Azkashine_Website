import clsx from 'clsx'
import Link from 'next/link'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Bengaluru" invert={invert}>
          No.73, 3rd floor, Fountain Head Building,
          <br />
          Varthur Road, Nagavarapalya, C V Raman Nagar (Post),
          <br />
          Bengaluru - 560093, Karnataka, India.
        </Office>
      </li>
       <li>
        <Office name="Contact" invert={invert}>
          080-25301553
          <br />
          <Link href={`mailto:contact@azkashine.com`}>
          contact@azkashine.com
          </Link>
        </Office>
      </li> 
    </ul>
  )
}

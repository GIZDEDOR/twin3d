import { LinkField } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next'
import clsx from 'clsx';
type Props = {
    buttonLink: LinkField;
    buttonText: string | null;
    className?: string;
}

export default function Button({buttonLink, buttonText, className}: Props) {
  return <PrismicNextLink
  className={clsx(
    'rounded-lg bg-[#2C2C2C] px-3 py-0 text-center text-3xl font-bold uppercase text-[#D5D5D5] transition-colors duration-150 hover:bg-[#1CC1FE] hover:text-black md-text-2xl',
    className)}
   field={buttonLink}>{buttonText}</PrismicNextLink>
}
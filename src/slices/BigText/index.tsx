import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for BigText.
 */
export type BigTextProps = SliceComponentProps<Content.BigTextSlice>;

/**
 * Component for "BigText" Slices.
 */
const BigText: FC<BigTextProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-screen w-screen overflow-hidden bg-[#1DA8FE] text-[#141414]"
    >
      <h2 className="grid w-full gap-[3vw] py-10 text-center font-black uppercase leading-[0.7] ">
        <div className="text-[34vw]">twin 3D </div>
        <div className='grid gap-[3vw] text-[34vw] md:flex md:text-[10.35vw]'>
          <span className="inline-block">делаем</span>
          <span className="inline-block max-md:text-[27vw]">реальность</span>
          <span className="inline-block max-md:text-[37vw]">цифровой</span>
        </div>
        <div className="text-[32vw]">© 2025</div>
      </h2>
    </section>
  );
};

export default BigText;
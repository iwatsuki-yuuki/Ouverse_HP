import svgPaths from "./svg-s1g6fsj54f";
import { FadeInImage } from "../components/FadeInImage";
import imgDivAfter from "figma:asset/b18a27147dfb310b403784ab5aef72fe22622eff.png";
import imgSectionBefore from "figma:asset/0485830cb9039bd53dd142141856b235f3e84707.png";
import imgDiv from "figma:asset/d5573f7e27cc8068a3dbbc3caf035d7b925b23a3.png";
import imgDiv1 from "figma:asset/c0d9a2a23f9c0b59f3c2b9b6e7aa4a61bb1e8369.png";
import imgSectionAfter from "figma:asset/b59cabba03c370580964cfdef3539afe028c6e9e.png";
import imgDiv2 from "figma:asset/bc28fb053d8f1187562000c40f7258bd4ec0623b.png";
import imgCorusHotelsLogo2020GreyscaleJpg from "figma:asset/263922ab2b37e73a255dffc8d4e1c8e70b1bdbfc.png";
import imgSiemensPng from "figma:asset/8b4284533db01c53ce6bdc1868345fe84073d1ac.png";
import imgSamsungPng from "figma:asset/7e45ad98067aad052311b31deb882549d3092f58.png";
import imgBellwayPng from "figma:asset/c8971a91bf49e45adc0ac4278bda5a9a69200c63.png";
import imgOtisPng from "figma:asset/622a966d843c2185c3b373a99ecb69da0a88086a.png";
import imgNcpPng from "figma:asset/2095fb277e9d7bad78388330d3f4b648c5b3b5cb.png";
import imgSection from "figma:asset/8c78747f5c4c848525a2194a7c86f558692e22a1.png";
import imgDiv3 from "figma:asset/65138f15fc320b7c26d4c839adf8c9df7d612144.png";
import imgFooterBefore from "figma:asset/6af1b2331ebbf9abae94f57e364847f22ffb19ea.png";

function Li() {
  return (
    <div className="absolute content-stretch flex items-start left-0 pb-[0.188px] pl-0 pr-[8.563px] pt-0 top-0" data-name="li">
      <div className="absolute bg-[#42ea95] left-[-13px] rounded-[4px] size-[7px] top-[10px]" data-name="li:before" />
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-nowrap text-white tracking-[1.1901px] uppercase">
        <p className="leading-[27.2px] whitespace-pre">Zero-loss FAILOVER</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute h-[28.188px] left-[15px] top-[200px] w-[585px]" data-name="nav">
      <Li />
      <div className="absolute flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] left-[158.61px] text-[11px] text-[rgba(255,255,255,0.55)] text-nowrap top-[14px] tracking-[1.1901px] translate-y-[-50%] uppercase">
        <p className="leading-[27.2px] whitespace-pre">Multi-tenant</p>
      </div>
      <div className="absolute flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] left-[278.13px] text-[10px] text-[rgba(255,255,255,0.55)] text-nowrap top-[14px] tracking-[1.1901px] translate-y-[-50%] uppercase">
        <p className="leading-[27.2px] whitespace-pre">Enterprise NNI</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="relative size-full" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Group">
          <path d={svgPaths.p1949a4c0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[2.86%_2.03%_2.86%_3.68%]" data-name="Group">
      <div className="absolute flex inset-[2.86%_2.03%_2.86%_3.68%] items-center justify-center">
        <div className="flex-none rotate-[315deg] size-[10px]">
          <Group />
        </div>
      </div>
    </div>
  );
}

function ArrowRightSvg() {
  return (
    <div className="absolute left-0 overflow-clip size-[15px] top-0" data-name="arrow-right.svg">
      <Group1 />
    </div>
  );
}

function AAfter() {
  return (
    <div className="absolute left-[159px] size-[15px] top-[22px]" data-name="a:after">
      <ArrowRightSvg />
    </div>
  );
}

function A() {
  return (
    <div className="absolute bg-white content-stretch flex items-start left-0 pb-[17.188px] pl-[31px] pr-[84px] pt-[16px] rounded-[50px] top-[548.19px]" data-name="a">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-nowrap tracking-[1.3px] uppercase">
        <p className="leading-[27.2px] whitespace-pre">Learn More</p>
      </div>
      <AAfter />
    </div>
  );
}

function Div() {
  return (
    <div className="h-[809.375px] relative shrink-0 w-[600px]" data-name="div">
      <Nav />
      <div className="absolute flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[262px] justify-center leading-[0] left-0 text-[0px] text-white top-[373.19px] tracking-[-2px] translate-y-[-50%] uppercase w-[472.997px]">
        <p className="leading-[90px] text-[86px]">
          <span>{`Zero-loss `}</span>
          <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">business</span>
          <span>{` continuity`}</span>
        </p>
      </div>
      <A />
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex items-start overflow-clip pb-px pl-[120px] pr-[720px] pt-[30px] relative shrink-0" data-name="div">
      <Div />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-1/2 size-[12px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d={svgPaths.p130e1a80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute left-[15px] overflow-clip size-[12px] top-[15px]" data-name="svg">
      <Frame />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute border border-[rgba(255,255,255,0.45)] border-solid left-0 overflow-clip rounded-[44px] size-[44px] top-[20px]" data-name="button">
      <Svg />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-1/2 size-[12px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d={svgPaths.p396b7700} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute left-[15px] overflow-clip size-[12px] top-[15px]" data-name="svg">
      <Frame1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute border border-[rgba(255,255,255,0.45)] border-solid left-0 overflow-clip rounded-[44px] size-[44px] top-[-31px]" data-name="button">
      <Svg1 />
    </div>
  );
}

function Nav1() {
  return (
    <div className="absolute inset-[380.19px_1419px_459.19px_20px]" data-name="nav">
      <Button />
      <Button1 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex items-start mb-[-1px] relative shrink-0" data-name="section">
      <Div1 />
      <Nav1 />
    </div>
  );
}

function DivAfter() {
  return (
    <div className="absolute h-[1536.375px] left-0 overflow-clip top-0 w-[1440px]" data-name="div:after">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FadeInImage alt="" className="absolute h-full left-[-9.69%] max-w-none top-[-3.25%] w-[119.39%]" src={imgDivAfter} />
      </div>
      <div className="absolute flex h-[840.375px] items-center justify-center left-[-0.21px] top-[107.54px] w-[1440px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[840.375px] relative w-[1440px]" data-name="section:before">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute bg-[rgba(0,0,0,0.81)] inset-0" />
              <div className="absolute inset-0 overflow-hidden">
                <FadeInImage alt="" className="absolute h-[387.8%] left-[-82.71%] max-w-none top-[-201.46%] w-[210.28%]" src={imgSectionBefore} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[1426.516px] left-[-0.21px] right-[0.21px] top-[142.54px]" data-name="div">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FadeInImage alt="" className="absolute h-[120.43%] left-[-8.26%] max-w-none top-0 w-[116.53%]" src={imgDiv} />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[21.49%_12.4%_12.4%_21.49%] opacity-90" data-name="Group">
      <div className="absolute inset-[-13.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <g id="Group" opacity="0.9">
            <path d="M0.909091 7.52H7.52V0.909091" id="Vector" stroke="var(--stroke-0, #DADADA)" strokeLinecap="square" strokeMiterlimit="20" strokeWidth="1.81818" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[21.49%_19.01%_19.01%_21.49%] opacity-90" data-name="Group">
      <div className="absolute inset-[-21.61%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <g id="Group" opacity="0.9">
            <path d={svgPaths.pd551aa0} id="Vector" stroke="var(--stroke-0, #DADADA)" strokeLinecap="square" strokeMiterlimit="20" strokeWidth="1.81818" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[21.49%_12.4%_12.4%_21.49%]" data-name="Group">
      <Group2 />
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[21.49%_12.4%_12.4%_21.49%]" data-name="Group">
      <Group4 />
    </div>
  );
}

function Arrow01GreySvg() {
  return (
    <div className="absolute left-0 overflow-clip size-[10px] top-0" data-name="arrow01-grey.svg">
      <Group5 />
    </div>
  );
}

function H5Before() {
  return (
    <div className="absolute left-[-20px] size-[10px] top-px" data-name="h5:before">
      <Arrow01GreySvg />
    </div>
  );
}

function H() {
  return (
    <div className="absolute content-stretch flex items-start left-[calc(50%+10.08px)] top-[9px] translate-x-[-50%]" data-name="h5">
      <H5Before />
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-center text-nowrap text-white tracking-[1.2px] uppercase">
        <p className="leading-[11px] whitespace-pre">WHAT WE DO</p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="absolute font-['Space_Grotesk:Light',sans-serif] font-light h-[144px] leading-[0] left-[40px] text-center text-white top-[43px] w-[800px]" data-name="p">
      <div className="absolute flex flex-col justify-center leading-[48px] left-[calc(50%-0.08px)] text-[39px] text-nowrap top-[23px] translate-x-[-50%] translate-y-[-50%] whitespace-pre">
        <p className="mb-0">Turning complex network technology</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[calc(50%+0.1px)] text-[40px] top-[95px] translate-x-[-50%] translate-y-[-50%] w-[794.638px]">
        <p className="leading-[48px]">
          <span>{`into `}</span>
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">business solutions that save you time money and stress</span>
        </p>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="h-[217px] relative shrink-0 w-[880px]" data-name="div">
      <H />
      <P />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex items-start mb-[-1px] overflow-clip px-[280px] py-[240px] relative shrink-0" data-name="section">
      <div className="absolute h-[697px] left-0 top-0 w-[1440px]" data-name="section:before" />
      <div className="absolute h-[697px] left-0 top-0 w-[720px]" data-name="section:after" />
      <Div2 />
    </div>
  );
}

function Div3() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col items-start left-0 pb-px pt-0 px-0 top-0" data-name="div">
      <Section />
      <DivAfter />
      <Section1 />
    </div>
  );
}

function SectionBefore() {
  return <div className="absolute bg-white h-[1209px] left-0 top-0 w-[1440px]" data-name="section:before" />;
}

function Div4() {
  return (
    <div className="absolute bottom-0 left-[40px] overflow-clip right-[640px] top-0" data-name="div">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#a0a0a0] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <FadeInImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDiv1} />
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[50.69%_16.67%_49.31%_5.75%]" data-name="Group">
      <div className="absolute inset-[-1.19px_-5.37%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 3">
          <g id="Group">
            <path d="M1.1875 1.1875H23.2988" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="square" strokeMiterlimit="20" strokeWidth="2.375" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="relative size-full" data-name="Group">
      <div className="absolute inset-[-8.31%_-5.26%_-18.82%_-5.26%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 13">
          <g id="Group">
            <path d={svgPaths.p3da4b5d0} id="Vector" stroke="var(--stroke-0, black)" strokeMiterlimit="20" strokeWidth="2.375" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[6.24%_11.58%_4.87%_5.75%]" data-name="Group">
      <Group6 />
      <div className="absolute flex inset-[6.24%_11.58%_4.87%_55.08%] items-center justify-center">
        <div className="flex-none h-[9.5px] rotate-[270deg] w-[16.889px]">
          <Group7 />
        </div>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[6.24%_11.58%_4.87%_5.75%]" data-name="Group">
      <Group8 />
    </div>
  );
}

function ArrowRight02Svg() {
  return (
    <div className="absolute h-[19px] left-0 overflow-clip top-0 w-[28.5px]" data-name="arrow-right02.svg">
      <Group9 />
    </div>
  );
}

function ABefore() {
  return (
    <div className="absolute h-[19px] left-[-39px] top-[7px] w-[29px]" data-name="a:before">
      <ArrowRight02Svg />
    </div>
  );
}

function A1() {
  return (
    <div className="absolute content-stretch flex items-start left-[40px] pb-[0.5px] pl-0 pr-[301px] pt-0 top-[-1px]" data-name="a">
      <ABefore />
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[29px] text-black text-nowrap tracking-[0.5px] uppercase">
        <p className="leading-[31.5px] whitespace-pre">Connectivity</p>
      </div>
    </div>
  );
}

function A2() {
  return (
    <div className="absolute bg-black content-stretch flex items-start left-[40px] pb-[17.188px] pl-[58.063px] pr-[56.938px] pt-[16px] rounded-[50px] top-[101.56px]" data-name="a">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-nowrap text-white tracking-[1.3px] uppercase">
        <p className="leading-[27.2px] whitespace-pre">Learn More</p>
      </div>
    </div>
  );
}

function Div5() {
  return (
    <div className="absolute h-[217.75px] left-0 overflow-clip top-[41.5px] w-[504px]" data-name="div">
      <div className="absolute flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal h-[68.375px] justify-center leading-[0] left-[40px] text-[#5d5d5d] text-[14px] top-[40.19px] translate-y-[-50%] w-[441.419px]">
        <p className="leading-[27.2px]">{`Last mile or first mile, fibre or copper, Ethernet or wireless, 20Mbs or 100Gbs - we'll always find the best-performing connectivity to fit your needs and location.`}</p>
      </div>
      <A2 />
    </div>
  );
}

function Li1() {
  return (
    <div className="h-[260.25px] relative shrink-0 w-[504px]" data-name="li">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <A1 />
      <Div5 />
    </div>
  );
}

function Li2() {
  return (
    <div className="h-[42.5px] relative shrink-0 w-[504px]" data-name="li">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="absolute flex flex-col font-['Space_Grotesk:Light',sans-serif] font-light h-[27px] justify-center leading-[0] left-0 text-[30px] text-black top-[15.5px] tracking-[0.5px] translate-y-[-50%] uppercase w-[366.278px]">
        <p className="leading-[31.5px]">Network Technologies</p>
      </div>
    </div>
  );
}

function Li3() {
  return (
    <div className="h-[42.5px] relative shrink-0 w-[504px]" data-name="li">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="absolute flex flex-col font-['Space_Grotesk:Light',sans-serif] font-light h-[27px] justify-center leading-[0] left-0 text-[29px] text-black top-[15.5px] tracking-[0.5px] translate-y-[-50%] uppercase w-[287.481px]">
        <p className="leading-[31.5px]">Managed Services</p>
      </div>
    </div>
  );
}

function Li4() {
  return (
    <div className="h-[42.5px] relative shrink-0 w-[504px]" data-name="li">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="absolute flex flex-col font-['Space_Grotesk:Light',sans-serif] font-light h-[27px] justify-center leading-[0] left-0 text-[29px] text-black top-[15.5px] tracking-[0.5px] translate-y-[-50%] uppercase w-[311.341px]">
        <p className="leading-[31.5px]">CLOUD CONNECTIVITY</p>
      </div>
    </div>
  );
}

function Ul() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[736px] top-[141.13px]" data-name="ul">
      <Li1 />
      <Li2 />
      <Li3 />
      <Li4 />
    </div>
  );
}

function Div6() {
  return (
    <div className="absolute h-[750px] left-1/2 top-[359px] translate-x-[-50%] w-[1280px]" data-name="div">
      <Div4 />
      <Ul />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[21.49%_12.4%_12.4%_21.49%] opacity-90" data-name="Group">
      <div className="absolute inset-[-13.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <g id="Group" opacity="0.9">
            <path d="M0.909091 7.52H7.52V0.909091" id="Vector" stroke="var(--stroke-0, #354045)" strokeLinecap="square" strokeMiterlimit="20" strokeWidth="1.81818" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[21.49%_19.01%_19.01%_21.49%] opacity-90" data-name="Group">
      <div className="absolute inset-[-21.61%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <g id="Group" opacity="0.9">
            <path d={svgPaths.pd551aa0} id="Vector" stroke="var(--stroke-0, #354045)" strokeLinecap="square" strokeMiterlimit="20" strokeWidth="1.81818" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[21.49%_12.4%_12.4%_21.49%]" data-name="Group">
      <Group10 />
      <Group11 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[21.49%_12.4%_12.4%_21.49%]" data-name="Group">
      <Group12 />
    </div>
  );
}

function Arrow01Svg() {
  return (
    <div className="absolute left-0 overflow-clip size-[10px] top-0" data-name="arrow01.svg">
      <Group13 />
    </div>
  );
}

function H5Before1() {
  return (
    <div className="absolute left-[-20px] size-[10px] top-px" data-name="h5:before">
      <Arrow01Svg />
    </div>
  );
}

function H1() {
  return (
    <div className="absolute content-stretch flex items-start left-[calc(50%+10px)] pl-[2px] pr-[1.906px] py-0 top-[9px] translate-x-[-50%]" data-name="h5">
      <H5Before1 />
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-black text-center text-nowrap tracking-[1.2px] uppercase">
        <p className="leading-[11px] whitespace-pre">Solutions</p>
      </div>
    </div>
  );
}

function Div7() {
  return (
    <div className="absolute h-[139px] left-1/2 top-[100px] translate-x-[-50%] w-[880px]" data-name="div">
      <H1 />
      <div className="absolute flex flex-col font-['Space_Grotesk:Light',sans-serif] font-light h-[85px] justify-center leading-[0] left-[calc(50%+0.1px)] text-[40px] text-black text-center top-[90.5px] translate-x-[-50%] translate-y-[-50%] w-[757.169px]">
        <p className="leading-[48px]">
          <span>{`Productivity solutions that `}</span>
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">capitalise</span>
          <span>{` on your network `}</span>
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">investment</span>
        </p>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute h-[1209px] left-0 overflow-clip top-[1536.38px] w-[1440px]" data-name="section">
      <SectionBefore />
      <Div6 />
      <div className="absolute h-[793px] left-[1043px] top-[-560px] w-[847px]" data-name="section:after">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FadeInImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSectionAfter} />
        </div>
      </div>
      <Div7 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[21.49%_12.4%_12.4%_21.49%] opacity-90" data-name="Group">
      <div className="absolute inset-[-13.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <g id="Group" opacity="0.9">
            <path d="M0.909091 7.52H7.52V0.909091" id="Vector" stroke="var(--stroke-0, #DADADA)" strokeLinecap="square" strokeMiterlimit="20" strokeWidth="1.81818" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[21.49%_19.01%_19.01%_21.49%] opacity-90" data-name="Group">
      <div className="absolute inset-[-21.61%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <g id="Group" opacity="0.9">
            <path d={svgPaths.pd551aa0} id="Vector" stroke="var(--stroke-0, #DADADA)" strokeLinecap="square" strokeMiterlimit="20" strokeWidth="1.81818" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[21.49%_12.4%_12.4%_21.49%]" data-name="Group">
      <Group14 />
      <Group15 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[21.49%_12.4%_12.4%_21.49%]" data-name="Group">
      <Group16 />
    </div>
  );
}

function Arrow01GreySvg1() {
  return (
    <div className="absolute left-0 overflow-clip size-[10px] top-0" data-name="arrow01-grey.svg">
      <Group17 />
    </div>
  );
}

function H5Before2() {
  return (
    <div className="absolute left-[-19px] size-[10px] top-px" data-name="h5:before">
      <Arrow01GreySvg1 />
    </div>
  );
}

function H2() {
  return (
    <div className="absolute content-stretch flex items-start left-[calc(50%+9.49px)] pl-0 pr-[0.484px] py-0 top-[9px] translate-x-[-50%]" data-name="h5">
      <H5Before2 />
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-center text-nowrap text-white tracking-[1.2px] uppercase">
        <p className="leading-[11px] whitespace-pre">OUR NETWORK</p>
      </div>
    </div>
  );
}

function A3() {
  return (
    <div className="content-stretch flex items-start pb-[17.188px] pl-[51.766px] pr-[52.234px] pt-[16px] relative rounded-[50px] shrink-0" data-name="a">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-center text-nowrap text-white tracking-[1.3px] uppercase">
        <p className="leading-[27.2px] whitespace-pre">FIND OUT MORE</p>
      </div>
    </div>
  );
}

function A4() {
  return (
    <div className="bg-black content-stretch flex items-start pb-[17.188px] pl-[36.844px] pr-[36.156px] pt-[16px] relative rounded-[50px] shrink-0" data-name="a">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-center text-nowrap text-white tracking-[1.3px] uppercase">
        <p className="leading-[27.2px] whitespace-pre">Our Looking Glass</p>
      </div>
    </div>
  );
}

function Div8() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-start left-[40px] px-[190px] py-0 top-[169px]" data-name="div">
      <A3 />
      <A4 />
    </div>
  );
}

function Div9() {
  return (
    <div className="h-[230.188px] relative shrink-0 w-[880px]" data-name="div">
      <H2 />
      <div className="absolute flex flex-col font-['Space_Grotesk:Light',sans-serif] font-light h-[85px] justify-center leading-[48px] left-[calc(50%+0.1px)] text-[0px] text-[38px] text-center text-white top-[90.5px] translate-x-[-50%] translate-y-[-50%] w-[785.075px]">
        <p className="mb-0">
          <span>{`Designed with the latest technology for `}</span>
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">performance, fexibility and high capacity.</span>
        </p>
        <p>&nbsp;</p>
      </div>
      <Div8 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip p-[280px] top-[2744.38px]" data-name="section">
      <Div9 />
    </div>
  );
}

function Div10() {
  return (
    <div className="absolute h-[600px] left-[40px] overflow-clip right-[640px] top-0" data-name="div">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FadeInImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDiv2} />
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[21.49%_12.4%_12.4%_21.49%] opacity-90" data-name="Group">
      <div className="absolute inset-[-13.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <g id="Group" opacity="0.9">
            <path d="M0.909091 7.52H7.52V0.909091" id="Vector" stroke="var(--stroke-0, #DADADA)" strokeLinecap="square" strokeMiterlimit="20" strokeWidth="1.81818" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[21.49%_19.01%_19.01%_21.49%] opacity-90" data-name="Group">
      <div className="absolute inset-[-21.61%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <g id="Group" opacity="0.9">
            <path d={svgPaths.pd551aa0} id="Vector" stroke="var(--stroke-0, #DADADA)" strokeLinecap="square" strokeMiterlimit="20" strokeWidth="1.81818" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[21.49%_12.4%_12.4%_21.49%]" data-name="Group">
      <Group18 />
      <Group19 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[21.49%_12.4%_12.4%_21.49%]" data-name="Group">
      <Group20 />
    </div>
  );
}

function Arrow01GreySvg2() {
  return (
    <div className="absolute left-0 overflow-clip size-[10px] top-0" data-name="arrow01-grey.svg">
      <Group21 />
    </div>
  );
}

function H5Before3() {
  return (
    <div className="absolute left-[-20px] size-[10px] top-px" data-name="h5:before">
      <Arrow01GreySvg2 />
    </div>
  );
}

function H3() {
  return (
    <div className="absolute content-stretch flex items-start left-[20px] pl-0 pr-[4.125px] py-0 top-[9px]" data-name="h5">
      <H5Before3 />
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-black text-nowrap tracking-[1.2px] uppercase">
        <p className="leading-[11px] whitespace-pre">About Us</p>
      </div>
    </div>
  );
}

function A5() {
  return (
    <div className="absolute bg-black content-stretch flex items-start left-0 pb-[17.188px] pl-[51.547px] pr-[51.453px] pt-[16px] rounded-[50px] top-[284.94px]" data-name="a">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-center text-nowrap text-white tracking-[1.3px] uppercase">
        <p className="leading-[27.2px] whitespace-pre">About Optinet</p>
      </div>
    </div>
  );
}

function Aside() {
  return (
    <div className="absolute h-[346.125px] left-[760px] right-[40px] top-1/2 translate-y-[-50%]" data-name="aside">
      <H3 />
      <div className="absolute flex flex-col font-['Space_Grotesk:Light',sans-serif] font-light h-[205.75px] justify-center leading-[43.2px] left-0 text-[36px] text-black top-[141.88px] translate-y-[-50%] w-[465.247px]">
        <p className="mb-0">Navigating the technology</p>
        <p>and communication provider marketplace shouldn’t be a complex and daunting process.</p>
      </div>
      <A5 />
    </div>
  );
}

function Div11() {
  return (
    <div className="h-[600px] relative shrink-0 w-[1280px]" data-name="div">
      <Div10 />
      <Aside />
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute bg-white content-stretch flex items-start left-0 px-[80px] py-[140px] top-[3534.56px]" data-name="section">
      <Div11 />
    </div>
  );
}

function Span() {
  return (
    <div className="bg-white content-stretch flex items-start pb-[5.75px] pl-[20px] pr-[19.609px] pt-[4px] relative shrink-0" data-name="span">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#262831] text-[11px] text-center text-nowrap tracking-[1.2px] uppercase">
        <p className="leading-[13.75px] whitespace-pre">Trusted By</p>
      </div>
    </div>
  );
}

function Div12() {
  return (
    <div className="content-stretch flex items-start pb-[0.438px] pl-[662.688px] pr-[662.703px] pt-[3px] relative shrink-0" data-name="div">
      <div className="absolute bg-[#f0f0f0] h-px left-0 top-[13.59px] w-[1440px]" data-name="div:before" />
      <Span />
    </div>
  );
}

function Li5() {
  return (
    <div className="absolute h-[60px] left-[1063.5px] right-[4901.5px] top-0" data-name="li">
      <div className="absolute h-[60px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[95px]" data-name="Corus-Hotels-logo-2020-greyscale.jpg">
        <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
          <FadeInImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCorusHotelsLogo2020GreyscaleJpg} />
        </div>
      </div>
    </div>
  );
}

function Li6() {
  return (
    <div className="absolute h-[25px] left-[1239.5px] right-[4673.5px] top-[17.5px]" data-name="li">
      <div className="absolute h-[25px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[147px]" data-name="siemens.png">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FadeInImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSiemensPng} />
        </div>
      </div>
    </div>
  );
}

function Li7() {
  return (
    <div className="absolute h-[24px] left-[1437.5px] right-[4467.5px] top-[18px]" data-name="li">
      <div className="absolute h-[24px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[155px]" data-name="samsung.png">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FadeInImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSamsungPng} />
        </div>
      </div>
    </div>
  );
}

function Li8() {
  return (
    <div className="absolute h-[37px] left-[1654px] right-[4280px] top-[11.5px]" data-name="li">
      <div className="absolute h-[37px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[126px]" data-name="bellway.png">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FadeInImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBellwayPng} />
        </div>
      </div>
    </div>
  );
}

function Li9() {
  return (
    <div className="absolute h-[26px] left-[1879px] right-[4101px] top-[17px]" data-name="li">
      <div className="absolute h-[26px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[80px]" data-name="otis.png">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FadeInImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgOtisPng} />
        </div>
      </div>
    </div>
  );
}

function Li10() {
  return (
    <div className="absolute h-[36px] left-[2063.5px] right-[3881.5px] top-[12px]" data-name="li">
      <div className="absolute h-[36px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[115px]" data-name="ncp.png">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FadeInImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgNcpPng} />
        </div>
      </div>
    </div>
  );
}

function Li11() {
  return (
    <div className="absolute h-[60px] left-[2275.5px] right-[3689.5px] top-0" data-name="li">
      <div className="absolute h-[60px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[95px]" data-name="Corus-Hotels-logo-2020-greyscale.jpg">
        <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
          <FadeInImage alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCorusHotelsLogo2020GreyscaleJpg} />
        </div>
      </div>
    </div>
  );
}

function Div13() {
  return (
    <div className="absolute h-[70.188px] left-[calc(50%+1314px)] top-0 translate-x-[-50%] w-[6060px]" data-name="div">
      <Li5 />
      <Li6 />
      <Li7 />
      <Li8 />
      <Li9 />
      <Li10 />
      <Li11 />
    </div>
  );
}

function Div14() {
  return (
    <div className="h-[70.188px] overflow-clip relative shrink-0 w-[1440px]" data-name="div">
      <Div13 />
    </div>
  );
}

function Div15() {
  return (
    <div className="content-stretch flex flex-col gap-[90px] items-start relative shrink-0" data-name="div">
      <Div12 />
      <Div14 />
    </div>
  );
}

function Section5() {
  return (
    <div className="absolute bg-white content-stretch flex items-start left-0 pb-[90px] pt-[45px] px-0 top-[4413.56px]" data-name="section">
      <Div15 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[21.49%_12.4%_12.4%_21.49%] opacity-90" data-name="Group">
      <div className="absolute inset-[-13.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <g id="Group" opacity="0.9">
            <path d={svgPaths.p3cb5e800} id="Vector" stroke="var(--stroke-0, #354045)" strokeLinecap="square" strokeMiterlimit="20" strokeWidth="1.63636" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute inset-[21.49%_19.01%_19.01%_21.49%] opacity-90" data-name="Group">
      <div className="absolute inset-[-21.61%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <g id="Group" opacity="0.9">
            <path d={svgPaths.p3fb9fbe0} id="Vector" stroke="var(--stroke-0, #354045)" strokeLinecap="square" strokeMiterlimit="20" strokeWidth="1.63636" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[21.49%_12.4%_12.4%_21.49%]" data-name="Group">
      <Group22 />
      <Group23 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[21.49%_12.4%_12.4%_21.49%]" data-name="Group">
      <Group24 />
    </div>
  );
}

function Arrow01Svg1() {
  return (
    <div className="absolute left-0 overflow-clip size-[9px] top-0" data-name="arrow01.svg">
      <Group25 />
    </div>
  );
}

function H5Before4() {
  return (
    <div className="absolute left-[-18px] size-[9px] top-px" data-name="h5:before">
      <Arrow01Svg1 />
    </div>
  );
}

function H4() {
  return (
    <div className="absolute content-stretch flex items-start left-[calc(50%+10px)] pl-[4px] pr-[5.156px] py-0 top-[9px] translate-x-[-50%]" data-name="h5">
      <H5Before4 />
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-center text-nowrap text-white tracking-[1.2px] uppercase">
        <p className="leading-[11px] whitespace-pre">Hood Group CASE STUDY</p>
      </div>
    </div>
  );
}

function A6() {
  return (
    <div className="absolute bg-white content-stretch flex items-start left-1/2 pb-[17.188px] pl-[64.109px] pr-[64.891px] pt-[16px] rounded-[50px] top-[224.37px] translate-x-[-50%]" data-name="a">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-black text-center text-nowrap tracking-[1.3px] uppercase">
        <p className="leading-[27.2px] whitespace-pre">Read More</p>
      </div>
    </div>
  );
}

function Div16() {
  return (
    <div className="absolute inset-[262.22px_280px]" data-name="div">
      <H4 />
      <div className="absolute flex flex-col font-['Space_Grotesk:Light',sans-serif] font-light h-[82px] justify-center leading-[0] left-[calc(50%+0.1px)] text-[89px] text-center text-white top-[75px] tracking-[-2px] translate-x-[-50%] translate-y-[-50%] uppercase w-[527.106px]">
        <p className="leading-[90px]">Hood Group</p>
      </div>
      <div className="absolute flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal h-[41.188px] justify-center leading-[0] left-[calc(50%+0.1px)] text-[15px] text-center text-white top-[156.59px] translate-x-[-50%] translate-y-[-50%] w-[392.606px]">
        <p className="leading-[27.2px]">Optinet ensures contact centre agents maintain uninterrupted conversation during network outages</p>
      </div>
      <A6 />
    </div>
  );
}

function Section6() {
  return (
    <div className="absolute bg-black h-[810px] left-0 overflow-clip right-0 top-[4735.94px]" data-name="section">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FadeInImage alt="" className="absolute h-full left-[-4%] max-w-none top-0 w-[108%]" src={imgSection} />
      </div>
      <Div16 />
    </div>
  );
}

function Div17() {
  return (
    <div className="absolute h-[600px] left-[40px] overflow-clip right-[640px] top-0" data-name="div">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FadeInImage alt="" className="absolute h-[127.27%] left-0 max-w-none top-[-13.64%] w-full" src={imgDiv3} />
      </div>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute inset-[21.49%_12.4%_12.4%_21.49%] opacity-90" data-name="Group">
      <div className="absolute inset-[-13.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <g id="Group" opacity="0.9">
            <path d="M0.909091 7.52H7.52V0.909091" id="Vector" stroke="var(--stroke-0, #DADADA)" strokeLinecap="square" strokeMiterlimit="20" strokeWidth="1.81818" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute inset-[21.49%_19.01%_19.01%_21.49%] opacity-90" data-name="Group">
      <div className="absolute inset-[-21.61%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <g id="Group" opacity="0.9">
            <path d={svgPaths.pd551aa0} id="Vector" stroke="var(--stroke-0, #DADADA)" strokeLinecap="square" strokeMiterlimit="20" strokeWidth="1.81818" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[21.49%_12.4%_12.4%_21.49%]" data-name="Group">
      <Group26 />
      <Group27 />
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[21.49%_12.4%_12.4%_21.49%]" data-name="Group">
      <Group28 />
    </div>
  );
}

function Arrow01GreySvg3() {
  return (
    <div className="absolute left-0 overflow-clip size-[10px] top-0" data-name="arrow01-grey.svg">
      <Group29 />
    </div>
  );
}

function H5Before5() {
  return (
    <div className="absolute left-[-20px] size-[10px] top-px" data-name="h5:before">
      <Arrow01GreySvg3 />
    </div>
  );
}

function H5() {
  return (
    <div className="absolute content-stretch flex items-start left-[20px] top-[9px]" data-name="h5">
      <H5Before5 />
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-nowrap text-white tracking-[1.2px] uppercase">
        <p className="leading-[11px] whitespace-pre">WHY OPTINET</p>
      </div>
    </div>
  );
}

function A7() {
  return (
    <div className="absolute bg-white content-stretch flex items-start left-0 pb-[17.188px] pl-[58.063px] pr-[56.938px] pt-[16px] rounded-[50px] top-[239.38px]" data-name="a">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center text-nowrap tracking-[1.3px] uppercase">
        <p className="leading-[27.2px] whitespace-pre">Learn more</p>
      </div>
    </div>
  );
}

function Aside1() {
  return (
    <div className="absolute h-[300.563px] left-[760px] right-[40px] top-1/2 translate-y-[-50%]" data-name="aside">
      <H5 />
      <div className="absolute flex flex-col font-['Space_Grotesk:Light',sans-serif] font-light h-[85px] justify-center leading-[48px] left-0 text-[0px] text-[39px] text-white top-[81.5px] translate-y-[-50%] w-[330.263px]">
        <p className="mb-0">Put your network</p>
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold">in safe hands</p>
      </div>
      <div className="absolute flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal h-[41.188px] justify-center leading-[0] left-0 text-[#828282] text-[15px] top-[171.59px] translate-y-[-50%] w-[420.997px]">
        <p className="leading-[27.2px]">Our loyal customers trust us to manage some of their most business-critical systems.</p>
      </div>
      <A7 />
    </div>
  );
}

function Div18() {
  return (
    <div className="h-[600px] relative shrink-0 w-[1280px]" data-name="div">
      <Div17 />
      <Aside1 />
    </div>
  );
}

function Section7() {
  return (
    <div className="absolute bg-black content-stretch flex items-start left-0 px-[80px] py-[140px] top-[5545.94px]" data-name="section">
      <Div18 />
    </div>
  );
}

function MainPost() {
  return (
    <div className="h-[6425.938px] mb-[-2px] relative shrink-0 w-[1440px]" data-name="main#post-2">
      <Div3 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
}

function A8() {
  return (
    <div className="absolute content-stretch flex items-start left-0 pb-[16.188px] pl-[54.344px] pr-[54.656px] pt-[15px] rounded-[50px] top-[159.56px]" data-name="a">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-nowrap text-white tracking-[1.3px] uppercase">
        <p className="leading-[27.2px] whitespace-pre">GET IN TOUCH</p>
      </div>
    </div>
  );
}

function Div19() {
  return (
    <div className="absolute h-[615.063px] left-[40px] right-[640px] top-0" data-name="div">
      <div className="absolute flex flex-col font-['Space_Grotesk:Light',sans-serif] font-light h-[119.375px] justify-center leading-[0] left-0 text-[0px] text-white top-[64.69px] translate-y-[-50%] w-[525.684px]">
        <p className="leading-[43.2px] mb-0 text-[34px]">
          <span>{`Ready to `}</span>
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">revolutionise</span>
        </p>
        <p className="leading-[43.2px] text-[34px]">
          <span>{`your business communications `}</span>
          <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">with unrivalled speed?</span>
        </p>
      </div>
      <A8 />
    </div>
  );
}

function Group30() {
  return (
    <div className="relative size-full" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="Group">
          <path d={svgPaths.p288f8f00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[2.86%_2.03%_2.86%_3.68%]" data-name="Group">
      <div className="absolute flex inset-[2.86%_2.03%_2.86%_3.68%] items-center justify-center">
        <div className="flex-none rotate-[315deg] size-[8px]">
          <Group30 />
        </div>
      </div>
    </div>
  );
}

function ArrowRightSvg1() {
  return (
    <div className="absolute left-1/2 overflow-clip size-[12px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="arrow-right.svg">
      <Group31 />
    </div>
  );
}

function ABefore1() {
  return (
    <div className="absolute h-[14px] left-0 top-[5.39px] w-[12px]" data-name="a:before">
      <ArrowRightSvg1 />
    </div>
  );
}

function A9() {
  return (
    <div className="absolute h-[27.188px] left-0 top-[376px] w-[128.578px]" data-name="a">
      <ABefore1 />
      <div className="absolute flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] left-[22px] text-[11px] text-nowrap text-white top-[13px] tracking-[1.3px] translate-y-[-50%] uppercase">
        <p className="leading-[27.2px] whitespace-pre">Get Directions</p>
      </div>
    </div>
  );
}

function Div20() {
  return (
    <div className="h-[463.188px] relative shrink-0 w-[300px]" data-name="div">
      <div className="absolute flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[11px] text-[rgba(255,255,255,0.25)] text-nowrap top-[6px] tracking-[1.2px] translate-y-[-50%] uppercase">
        <p className="leading-[13.75px] whitespace-pre">CONTACT US</p>
      </div>
      <div className="absolute flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[27.2px] left-0 text-[17px] text-nowrap text-white top-[182.25px] translate-y-[-50%] whitespace-pre">
        <p className="mb-0">Optinet UK Limited</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{` HEAD OFFICE`}</p>
        <p className="mb-0">{` Floor 37`}</p>
        <p className="mb-0">{` One Canada Square`}</p>
        <p className="mb-0">{` London E14 5AA`}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{` SOUTHEND`}</p>
        <p className="mb-0">{` Skyline Plaza`}</p>
        <p className="mb-0">{` Victoria Avenue`}</p>
        <p className="mb-0">{` Southend `}</p>
        <p>{` Essex SS2 6BB`}</p>
      </div>
      <A9 />
    </div>
  );
}

function Div21() {
  return (
    <div className="h-[121.875px] leading-[0] relative shrink-0 text-nowrap w-[300px]" data-name="div">
      <div className="absolute flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center left-0 text-[11px] text-[rgba(255,255,255,0.25)] top-[6px] tracking-[1.2px] translate-y-[-50%] uppercase">
        <p className="leading-[13.75px] text-nowrap whitespace-pre">PHONE</p>
      </div>
      <div className="absolute flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center left-0 text-[17px] text-white top-[31.75px] translate-y-[-50%]">
        <p className="leading-[27.2px] text-nowrap whitespace-pre">+44 020 3319 3701</p>
      </div>
      <div className="absolute flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center left-0 text-[11px] text-[rgba(255,255,255,0.25)] top-[81.94px] tracking-[1.2px] translate-y-[-50%] uppercase">
        <p className="leading-[13.75px] text-nowrap whitespace-pre">EMAIL</p>
      </div>
      <div className="absolute flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center left-0 text-[17px] text-white top-[107.69px] translate-y-[-50%]">
        <p className="leading-[27.2px] text-nowrap whitespace-pre">info@optinet.co.uk</p>
      </div>
    </div>
  );
}

function Div22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[640px] top-0" data-name="div">
      <Div20 />
      <Div21 />
    </div>
  );
}

function UlMenuFooterMenu() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal items-start leading-[0] left-0 pb-px pl-0 pr-[188px] pt-0 text-[15px] text-nowrap text-white top-[17.75px] uppercase" data-name="ul#menu-footer-menu">
      <div className="flex flex-col justify-center mb-[-0.813px] relative shrink-0">
        <p className="leading-[27.2px] text-nowrap whitespace-pre">About Us</p>
      </div>
      <div className="flex flex-col justify-center mb-[-0.813px] relative shrink-0">
        <p className="leading-[27.2px] text-nowrap whitespace-pre">Careers</p>
      </div>
      <div className="flex flex-col justify-center mb-[-0.813px] relative shrink-0">
        <p className="leading-[27.2px] text-nowrap whitespace-pre">Partners</p>
      </div>
      <div className="flex flex-col justify-center mb-[-0.813px] relative shrink-0">
        <p className="leading-[27.2px] text-nowrap whitespace-pre">Privacy Policy</p>
      </div>
    </div>
  );
}

function Nav2() {
  return (
    <div className="absolute h-[615.063px] left-[940px] right-[40px] top-0" data-name="nav">
      <div className="absolute flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[10px] justify-center leading-[0] left-0 text-[10px] text-[rgba(255,255,255,0.25)] top-[6px] tracking-[1.2px] translate-y-[-50%] uppercase w-[59.263px]">
        <p className="leading-[13.75px]">BUSINESS</p>
      </div>
      <UlMenuFooterMenu />
    </div>
  );
}

function Div23() {
  return (
    <div className="h-[615.063px] relative shrink-0 w-[1280px]" data-name="div">
      <Div19 />
      <Div22 />
      <Nav2 />
    </div>
  );
}

function Div24() {
  return (
    <div className="h-[76px] relative shrink-0 w-[1280px]" data-name="div">
      <div className="absolute flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal h-[29px] justify-center leading-[18px] left-[40px] text-[11px] text-[rgba(255,255,255,0.4)] top-[57.5px] translate-y-[-50%] w-[282.684px]">
        <p className="mb-0">{`Optinet U.K. Limited registered in England & Wales`}</p>
        <p>Company number 10482483</p>
      </div>
      <div className="absolute flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal h-[29px] justify-center leading-[18px] right-[39.8px] text-[11px] text-[rgba(255,255,255,0.4)] text-right top-[57.5px] translate-y-[-50%] w-[113.669px]">
        <p className="mb-0">{`Copyright © Optinet `}</p>
        <p>All Rights Reserved</p>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.1)] h-px left-[40px] top-0 w-[1200px]" data-name="div:after" />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[220px] items-start mb-[-2px] pb-[60px] pt-[155px] px-[80px] relative shrink-0" data-name="footer">
      <div className="absolute h-[1126.063px] left-0 top-0 w-[1440px]" data-name="footer:before">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FadeInImage alt="" className="absolute h-[48.95%] left-0 max-w-none top-[51.05%] w-full" src={imgFooterBefore} />
        </div>
      </div>
      <Div23 />
      <Div24 />
    </div>
  );
}

function Div25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[2px] pt-0 px-0 top-0" data-name="div">
      <MainPost />
      <Footer />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute inset-[20%_4.9%_23.44%_14.29%]" data-name="Group">
      <div className="absolute inset-[-18.76%_-9.37%_-37.5%_-9.37%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 5">
          <g id="Group">
            <path d={svgPaths.pc598400} id="Vector" stroke="var(--stroke-0, white)" strokeMiterlimit="20" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[20%_4.9%_23.44%_14.29%]" data-name="Group">
      <Group32 />
    </div>
  );
}

function DropdownIconSvg() {
  return (
    <div className="absolute h-[5px] left-0 overflow-clip top-0 w-[7px]" data-name="dropdown-icon.svg">
      <Group33 />
    </div>
  );
}

function AAfter1() {
  return (
    <div className="absolute h-[5px] left-[77.53px] top-[47.59px] w-[7px]" data-name="a:after">
      <DropdownIconSvg />
    </div>
  );
}

function A10() {
  return (
    <div className="absolute h-[103.188px] left-[10px] top-0 w-[84.531px]" data-name="a">
      <div className="absolute flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[11px] text-nowrap text-white top-[51px] tracking-[1.3px] translate-y-[-50%] uppercase">
        <p className="leading-[13.2px] whitespace-pre">Solutions</p>
      </div>
      <AAfter1 />
    </div>
  );
}

function Ul1() {
  return (
    <div className="absolute h-[103.188px] left-[170px] top-0 w-[523.578px]" data-name="ul">
      <A10 />
      <div className="absolute flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] left-[119.58px] text-[11px] text-nowrap text-white top-[51px] tracking-[1.3px] translate-y-[-50%] uppercase">
        <p className="leading-[13.2px] whitespace-pre">Zero-loss Failover</p>
      </div>
      <div className="absolute flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] left-[284.27px] text-[12px] text-nowrap text-white top-[51px] tracking-[1.3px] translate-y-[-50%] uppercase">
        <p className="leading-[13.2px] whitespace-pre">Multi-tenant</p>
      </div>
      <div className="absolute flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] left-[406.97px] text-[11px] text-nowrap text-white top-[51px] tracking-[1.3px] translate-y-[-50%] uppercase">
        <p className="leading-[13.2px] whitespace-pre">Enterprise NNI</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[32.266px] left-1/2 top-0 translate-x-[-50%] w-[145px]" data-name="Frame">
      <div className="absolute bottom-[-0.21%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 145 33">
          <g id="Frame">
            <path d={svgPaths.p17002ef0} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p13c2f480} fill="var(--fill-0, #42EA95)" id="Vector_2" opacity="0.3" />
            <path d={svgPaths.p26fe7520} fill="var(--fill-0, #42EA95)" id="Vector_3" opacity="0.3" />
            <path d={svgPaths.p10ea5e0} fill="url(#paint0_linear_0_341)" id="Vector_4" />
            <path d={svgPaths.p13a5700} fill="url(#paint1_linear_0_341)" id="Vector_5" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_341" x1="12.7893" x2="5.31759" y1="12.6849" y2="5.15897">
              <stop stopColor="#42EA95" />
              <stop offset="0.57" stopColor="#2BDDBA" />
              <stop offset="0.72" stopColor="#25DAC4" />
              <stop offset="1" stopColor="#03C7FD" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_341" x1="18.0619" x2="26.5528" y1="18.5243" y2="25.7153">
              <stop stopColor="#42EA95" />
              <stop offset="0.68" stopColor="#25DAC4" />
              <stop offset="1" stopColor="#03C7FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function SvgLayer() {
  return (
    <div className="absolute h-[32.266px] left-0 overflow-clip top-[35.36px] w-[145px]" data-name="svg#Layer_1">
      <Frame2 />
    </div>
  );
}

function Div26() {
  return (
    <div className="h-[103.188px] relative shrink-0 w-[693.578px]" data-name="div">
      <Ul1 />
      <SvgLayer />
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute inset-[20%_4.9%_23.44%_14.29%]" data-name="Group">
      <div className="absolute inset-[-18.76%_-9.37%_-37.5%_-9.37%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 5">
          <g id="Group">
            <path d={svgPaths.pc598400} id="Vector" stroke="var(--stroke-0, white)" strokeMiterlimit="20" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[20%_4.9%_23.44%_14.29%]" data-name="Group">
      <Group34 />
    </div>
  );
}

function DropdownIconSvg1() {
  return (
    <div className="absolute h-[5px] left-0 overflow-clip top-0 w-[7px]" data-name="dropdown-icon.svg">
      <Group35 />
    </div>
  );
}

function AAfter2() {
  return (
    <div className="absolute h-[5px] left-[46.5px] top-[47.59px] w-[7px]" data-name="a:after">
      <DropdownIconSvg1 />
    </div>
  );
}

function A11() {
  return (
    <div className="h-[103.188px] relative shrink-0 w-[53.5px]" data-name="a">
      <div className="absolute flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[12px] text-nowrap text-white top-[51px] tracking-[1.3px] translate-y-[-50%] uppercase">
        <p className="leading-[13.2px] whitespace-pre">Learn</p>
      </div>
      <AAfter2 />
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute inset-[20%_4.9%_23.44%_14.29%]" data-name="Group">
      <div className="absolute inset-[-18.76%_-9.37%_-37.5%_-9.37%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 5">
          <g id="Group">
            <path d={svgPaths.pc598400} id="Vector" stroke="var(--stroke-0, white)" strokeMiterlimit="20" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[20%_4.9%_23.44%_14.29%]" data-name="Group">
      <Group36 />
    </div>
  );
}

function DropdownIconSvg2() {
  return (
    <div className="absolute h-[5px] left-0 overflow-clip top-0 w-[7px]" data-name="dropdown-icon.svg">
      <Group37 />
    </div>
  );
}

function AAfter3() {
  return (
    <div className="absolute h-[5px] left-[64.42px] top-[47.59px] w-[7px]" data-name="a:after">
      <DropdownIconSvg2 />
    </div>
  );
}

function A12() {
  return (
    <div className="h-[103.188px] relative shrink-0 w-[71.422px]" data-name="a">
      <div className="absolute flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[11px] text-nowrap text-white top-[51px] tracking-[1.3px] translate-y-[-50%] uppercase">
        <p className="leading-[13.2px] whitespace-pre">Support</p>
      </div>
      <AAfter3 />
    </div>
  );
}

function Ul2() {
  return (
    <div className="content-stretch flex gap-[25.047px] items-start px-[10px] py-0 relative shrink-0" data-name="ul">
      <A11 />
      <A12 />
    </div>
  );
}

function A13() {
  return (
    <div className="content-stretch flex items-start pb-[16.188px] pl-[38.578px] pr-[39.422px] pt-[15px] relative rounded-[50px] shrink-0" data-name="a">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-nowrap text-white tracking-[1.3px] uppercase">
        <p className="leading-[27.2px] whitespace-pre">Make an enquiry</p>
      </div>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute bottom-[44.44%] left-[18.75%] right-[18.75%] top-0" data-name="Group">
      <div className="absolute inset-[-15%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <g id="Group">
            <path d={svgPaths.p16f72e80} id="Vector" stroke="var(--stroke-0, black)" strokeMiterlimit="20" strokeWidth="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[66.67%]" data-name="Group">
      <div className="absolute inset-[-25%_-9.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 9">
          <g id="Group">
            <path d={svgPaths.p3a40df80} id="Vector" stroke="var(--stroke-0, black)" strokeMiterlimit="20" strokeWidth="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group38 />
      <Group39 />
    </div>
  );
}

function LoginIconSvg() {
  return (
    <div className="absolute h-[18px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[16px]" data-name="login-icon.svg">
      <Group40 />
    </div>
  );
}

function LoginIconSvg1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="login-icon.svg">
      <LoginIconSvg />
    </div>
  );
}

function A14() {
  return (
    <div className="content-stretch flex items-start pb-[20.063px] pt-[19.125px] px-[15px] relative shrink-0" data-name="a">
      <LoginIconSvg1 />
    </div>
  );
}

function Div27() {
  return (
    <div className="h-[20px] relative shrink-0 w-[30px]" data-name="div">
      <div className="absolute bg-[rgba(255,255,255,0.88)] h-[2px] left-0 top-0 w-[30px]" data-name="span" />
      <div className="absolute bg-[rgba(255,255,255,0.88)] h-[2px] left-0 top-[9px] w-[16px]" data-name="span" />
      <div className="absolute bg-[rgba(255,255,255,0.88)] h-[2px] left-0 top-[18px] w-[30px]" data-name="span" />
    </div>
  );
}

function Div28() {
  return (
    <div className="content-stretch flex gap-[20px] items-center pl-[25px] pr-0 py-0 relative shrink-0" data-name="div">
      <Ul2 />
      <A13 />
      <A14 />
      <Div27 />
    </div>
  );
}

function Div29() {
  return (
    <div className="absolute content-stretch flex gap-[163.453px] items-start left-1/2 px-[25px] py-0 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="div">
      <Div26 />
      <Div28 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.15)] border-solid h-[104.188px] left-0 right-0 top-0" data-name="header">
      <Div29 />
    </div>
  );
}

export default function OptinetCoUk() {
  return (
    <div className="bg-black relative size-full" data-name="optinet.co.uk">
      <Div25 />
      <Header />
    </div>
  );
}
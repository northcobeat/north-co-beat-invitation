import { MapPin, Clock, Calendar, ChevronDown, ArrowUpRight, Music, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroPhoto from "@/imports/IMG_4361___.jpeg";
import venueImage from "@/imports/IMG_4351（大）.jpeg";
import eventPassImage from "@/imports/EventPass.png";
import rubberBandImage from "@/imports/Rubber_band.png";
import misangaImage from "@/imports/misangaBand.png";
import kitanokobitoLogo from"@/imports/Logo_text_3x.png";
import memory01 from "@/imports2/kitanokobito_session_IMG_4840.jpeg";
import memory02 from "@/imports2/kitanokobito_Session.jpg";
import memory03 from "@/imports2/kitanokobito_inst_IMG_8720.JPG";
import memory04 from "@/imports2/kitanokobito_solo_IMG_6731.JPG";
import memory05 from "@/imports2/kitanokobito_Session_202311_1.jpeg";
import memory06 from "@/imports2/kitanokobito_session_S__5128502.jpg";
import memory07 from "@/imports2/kitanokobito_session_202402_2.jpeg";
import memory08 from "@/imports2/kitanokobito_solo_IMG_7628.jpg";
import memory09 from "@/imports2/kitanokobito_Session_20240217_3.jpeg";
import memory10 from "@/imports2/kitanokobito_20240315_solo.JPG";
import memory11 from "@/imports2/kitanokobito_IMG_6861_solo.jpeg";
import memory12 from "@/imports2/kitanokobito_Session_2024-12-07.jpg";
import memory13 from "@/imports2/kitanokobito_IMG_7776_solo.jpg";
import memory14 from "@/imports2/kitanokobito_inst_2026-07-04.JPG";
import memory15 from "@/imports2/kitanokobito_inst_IMG_1277.jpeg";
import memory16 from "@/imports2/kitanokobito_solo_IMG_8532.JPG";
import memory17 from "@/imports2/kitanokobito_Session_IMG_5556.JPG";
import memory18 from "@/imports2/kitanokobito_camera_IMG_2139.jpeg";
import memory19 from "@/imports2/kitanokobito_IMG_7485_any.jpg";
import memory20 from "@/imports2/kitanokobito_smile_20250124_223527.jpg";
import memory21 from "@/imports2/kitanokobito_any_peace.jpeg";
import memory22 from "@/imports2/kitanokobito_Session_IMG_1295.JPG";
import memory23 from "@/imports2/kitanokobito_inst_IMG_6717.JPG";
import memory24 from "@/imports2/kitanokobito_smile_IMG_2502.jpeg";
import memory25 from "@/imports2/kitanokobito_smile_20250124_215927.jpg";
import memory26 from "@/imports2/kitanokobito_all_IMG_6443.jpeg";
import memory27 from "@/imports2/kitanokobito_all_IMG_8829.jpeg";
import memory28 from "@/imports2/kitanokobito_all_20230617.jpg";
import memory29 from "@/imports2/kitanokobito_all_IMG_9467.jpeg";
import memory30 from "@/imports2/kitanokobito_all_IMG_7163.jpeg";
import memory31 from "@/imports2/kitanokobito_all_IMG_7415.jpeg";
import memory32 from "@/imports2/kitanokobito_all_IMG_0671.jpeg";
import memory33 from "@/imports2/kitanokobito_all_IMG_7654.jpeg";
import memory34 from "@/imports2/kitanokobito_20240727_all.jpeg";
import memory35 from "@/imports2/kitanokobito_IMG_2651.jpeg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function MemoryFragment({
  src,
  alt,
  width,
  align,
  rotate,
  delay = 0,
  onClick,
}: {
  src: string;
  alt: string;
  width: string;
  align: "left" | "right" | "center";
  rotate?: number;
  delay?: number;
  onClick: () => void;
}) {
  const { ref, visible } = useReveal();

  const justifyContent =
    align === "left"
      ? "flex-start"
      : align === "right"
        ? "flex-end"
        : "center";

  return (
    <div
      ref={ref}
      className="flex"
      style={{
        justifyContent,
        opacity: visible ? 1 : 0,
        transform: visible
          ? `translateY(0px) rotate(${rotate ?? 0}deg)`
          : `translateY(28px) rotate(${rotate ?? 0}deg)`,
        transition: `
          opacity 1.2s ease-out ${delay}s,
          transform 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s
        `,
      }}
    >
      <button
      type="button"
      onClick={onClick}
      className="block overflow-hidden transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98]"
      style={{
        width,
        cursor: "zoom-in",
        background: "transparent",
        padding: 0,
        border: "none",

        boxShadow: `
          0 32px 70px rgba(35, 12, 6, 0.34),
          0 12px 28px rgba(35, 12, 6, 0.20),
          0 2px 6px rgba(35, 12, 6, 0.16)
        `,
      }}
      >
        <img
          src={src}
          alt={alt}
          className="block w-full h-auto"
          style={{
            filter: "brightness(0.78) saturate(0.82) contrast(0.92) blur(0.35px)",
          }}
        />
      </button>
    </div>
  );
}

const TIMETABLE = [
  {
    time: "18:30",
    title: "開場",
    note: "",
    divider: false,
  },
  {
    time: "19:00〜",
    title: "演奏タイム",
    note: "ご予約時に演奏を希望された方\n※一組20分まで",
    divider: false,
  },
  {
    time: "21:00〜",
    title: "フリーステージ",
    note: "演奏したくなった方からご自由に！",
    divider: true,
  },
];

const TICKETS = [
  {
    tier: "入場料",
    price: "¥1,100",
    note: "自由席",
    tone: "primary",
    detailLabel: "EVENT PASS",
    detailImage: eventPassImage,
    detail: "当日、イベントパスとなるシールを会場にてお渡し致します。お名前（アーティスト名でも構いません）のご記入と、見えやすいところに貼って頂くようお願い致します。",
  },
  {
    tier: "ミサンガバンド",
    price: "¥1,100",
    note: "演奏を希望される方",
    tone: "secondary",
    detailLabel: "PERFORMANCE BAND",
    detailImage: misangaImage,
    detail: "着脱可能なアジャスター付きリストバンド。\nステージで演奏をされる際はご着用をお願い致します。\n\n※次回以降も演奏をされる際は必要となりますので、ご購入後は保管をお願い致します。",
  },
  {
    tier: "ラバーバンド",
    price: "¥550",
    note: "グッズ",
    tone: "tertiary",
    detailLabel: "OPTIONAL ITEM",
    detailImage: rubberBandImage,
    detail: "人前で演奏する自信はないな...という方、北の小人を気に入って頂けたお客様に。\n\n※こちらのみご着用のお客様に演奏を促すことはご遠慮いただいております。",
  },
];

export default function App() {
  const [openTicket, setOpenTicket] = useState<number | null>(null);

  const [selectedMemory, setSelectedMemory] = useState<{
    src: string;
    alt: string;
  } | null>(null);

   const {
    ref: logoRevealRef,
    visible: logoRevealVisible,
  } = useReveal();

  const {
    ref: aboutHeadingRef,
    visible: aboutHeadingVisible,
  } = useReveal();

  return (
    <div
      className="min-h-screen text-foreground"
      style={{
        fontFamily: "'Noto Sans JP', sans-serif",
        background: "radial-gradient(circle, #C59759 0%, #782E18 78%, #4A1A0F 100%)",
      }}
    >
      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between pl-8 pr-5 py-5 mix-blend-normal">
        <div
          className="text-xs tracking-[0.25em] text-muted-foreground uppercase"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Live Event 2026
        </div>
        <a
          href="#tickets"
          className="text-xs tracking-[0.2em] border border-accent text-accent transition-all duration-300 hover:bg-accent hover:text-background px-[20px] py-[8px] text-left"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          ご予約
        </a>
      </nav>

      {/* ── Hero ── */}
      <section className="relative h-screen flex flex-col justify-end overflow-hidden" style={{ backgroundColor: "#4A1A0F" }}>
        <img
          src={heroPhoto}
          alt="ギターやドラムが並ぶライブハウスのステージ"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

        {/* hero content */}
        <div className="relative z-10 px-10 pb-20 md:px-20 md:pb-24 max-w-5xl">
          <h1
            className="text-6xl md:text-8xl lg:text-[7rem] font-black leading-[0.95] tracking-tight mb-4"
            style={{ color: "#F2E5C2", fontFamily: "'Noto Serif JP', serif" }}
          >
            北の小人
          </h1>
          <p
            className="text-2xl md:text-3xl font-light text-foreground/70 mb-8 tracking-widest"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            North Co-beat Project
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <div
              className="flex items-center gap-2 text-sm text-muted-foreground tracking-widest"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <Calendar size={13} className="text-accent" />
              2026.09.05 SAT
            </div>
            <div
              className="flex items-center gap-2 text-sm text-muted-foreground tracking-widest"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <MapPin size={13} className="text-accent" />
              Various live bar SFC · SAPPORO
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground/50">
          <span className="text-[10px] tracking-[0.3em]" style={{ fontFamily: "'DM Mono', monospace" }}>SCROLL</span>
          <ChevronDown size={14} className="animate-bounce" />
        </div>
      </section>

      {/* ── Details Strip ── */}
      <section className="bg-secondary border-y border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {[
            {
              icon: <Calendar size={16} className="text-accent" />,
              label: "日程",
              value: "2026年9月5日（土）",
              sub: "Saturday, 5 September 2026",
            },
            {
              icon: <Clock size={16} className="text-accent" />,
              label: "開演時刻",
              value: "開場 18:30 / 開演 19:00",
              sub: "Doors 6:30pm · Show 7pm",
            },
            {
              icon: <MapPin size={16} className="text-accent" />,
              label: "会場",
              value: "Various live bar SFC",
              sub: "札幌市中央区南６条西３丁目6−27",
            },
          ].map((item, i) => (
            <div key={i} className="px-10 py-8 flex gap-4 items-start">
              <div className="mt-1">{item.icon}</div>
              <div>
                <p
                  className="text-[10px] tracking-[0.35em] text-muted-foreground mb-2 uppercase"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-base font-medium text-foreground mb-1"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  {item.value}
                </p>
                <p className="text-xs text-muted-foreground">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Memories / About ── */}
<section
  className="pt-5 pb-20 md:py-20 md:pb-32 overflow-hidden"
>
  {/* ── Photo Memories ── */}
  <div
    ref={logoRevealRef}
    className="flex justify-center pt-10 pb-12 md:pt-16 md:pb-16"
    style={{
      opacity: logoRevealVisible ? 0.9 : 0,
      transform: logoRevealVisible
        ? "translateY(0px)"
        : "translateY(32px)",
      transition:
        "opacity 1.4s ease-out, transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)",
    }}
  >
    <img
      src={kitanokobitoLogo}
      alt="北の小人"
      className="w-[180px] md:w-[260px] h-auto"
    />
  </div>

  {/* Memory 01 */}
  <div className="mt-12 md:mt-18 flex items-start gap-2 md:gap-4 px-3 md:px-10">
    <MemoryFragment
      src={memory01}
      alt="北の小人の夜の記憶"
      width="58%"
      align="right"
      rotate={-1.8}
      onClick={() =>
        setSelectedMemory({
          src: memory01,
          alt: "北の小人の夜の記憶",
        })
      }
    />
  </div>


  {/* Memories 02 + 03 */}
  <div className="mt-10 md:mt-16 flex items-start gap-2 md:gap-4 px-0 md:px-10">
    <div className="w-[60%]">
      <MemoryFragment
        src={memory02}
        alt="北の小人のセッション風景"
        width="100%"
        align="left"
        rotate={1.2}
        delay={0.05}
        onClick={() =>
          setSelectedMemory({
            src: memory02,
            alt: "北の小人のセッション風景",
          })
        }
      />
    </div>

    <div className="w-[40%] pt-6 md:pt-10">
      <MemoryFragment
        src={memory03}
        alt="音楽のある夜の記憶"
        width="100%"
        align="center"
        rotate={-2.2}
        delay={0.08}
        onClick={() =>
          setSelectedMemory({
            src: memory03,
            alt: "音楽のある夜の記憶",
          })
        }
      />
    </div>
  </div>


  {/* Memories 04 + 05 */}
  <div className="mt-9 md:mt-12 flex items-start gap-3 md:gap-5 px-0 md:px-10">
    <div className="w-[48%]">
      <MemoryFragment
        src={memory04}
        alt="北の小人の夜"
        width="100%"
        align="left"
        rotate={0.8}
        delay={0.04}
        onClick={() =>
          setSelectedMemory({
            src: memory04,
            alt: "北の小人の夜",
          })
        }
      />
    </div>

    <div className="w-[52%] pt-4 md:pt-8">
      <MemoryFragment
        src={memory05}
        alt="音楽と過ごす時間"
        width="100%"
        align="right"
        rotate={-1.4}
        delay={0.1}
        onClick={() =>
          setSelectedMemory({
            src: memory05,
            alt: "音楽と過ごす時間",
          })
        }
      />
    </div>
  </div>


  {/* Memory 06 */}
  <div className="mt-8 md:mt-12 px-0 md:px-10">
    <MemoryFragment
      src={memory06}
      alt="演奏の記憶"
      width="70%"
      align="center"
      rotate={1.5}
      delay={0.06}
      onClick={() =>
        setSelectedMemory({
          src: memory06,
          alt: "演奏の記憶",
        })
      }
    />
  </div>


  {/* Memories 07 + 08 */}
  <div className="mt-7 md:mt-16 flex items-start gap-2 md:gap-4 px-0 md:px-10">
    <div className="w-[55%]">
      <MemoryFragment
        src={memory07}
        alt="北の小人のステージ"
        width="100%"
        align="left"
        rotate={-0.8}
        onClick={() =>
          setSelectedMemory({
            src: memory07,
            alt: "北の小人のステージ",
          })
        }
      />
    </div>

    <div className="w-[45%] pt-8 md:pt-12">
      <MemoryFragment
        src={memory08}
        alt="夜の音楽"
        width="100%"
        align="center"
        rotate={2}
        delay={0.08}
        onClick={() =>
          setSelectedMemory({
            src: memory08,
            alt: "夜の音楽",
          })
        }
      />
    </div>
  </div>


  {/* Memory 09 */}
  <div className="mt-6 md:mt-16 px-0 md:px-10">
    <MemoryFragment
      src={memory09}
      alt="音楽を囲む時間"
      width="72%"
      align="center"
      rotate={-1}
      delay={0.12}
      onClick={() =>
        setSelectedMemory({
          src: memory09,
          alt: "音楽を囲む時間",
        })
      }
    />
  </div>


  {/* Memories 10 + 11 */}
  <div className="mt-5 md:mt-14 flex items-start gap-2 md:gap-4 px-0 md:px-10">
    <div className="w-[40%]">
      <MemoryFragment
        src={memory10}
        alt="北の小人の記憶"
        width="100%"
        align="left"
        rotate={1.1}
        delay={0.05}
        onClick={() =>
          setSelectedMemory({
            src: memory10,
            alt: "北の小人の記憶",
          })
        }
      />
    </div>

    <div className="w-[60%] pt-4 md:pt-8">
      <MemoryFragment
        src={memory11}
        alt="音楽のある時間"
        width="100%"
        align="right"
        rotate={-1.7}
        delay={0.1}
        onClick={() =>
          setSelectedMemory({
            src: memory11,
            alt: "音楽のある時間",
          })
        }
      />
    </div>
  </div>


  {/* Memory 12 */}
  <div className="mt-4 md:mt-16 px-0 md:px-10">
    <MemoryFragment
      src={memory12}
      alt="北の小人の夜の終わり"
      width="70%"
      align="center"
      rotate={0.4}
      delay={0.08}
      onClick={() =>
        setSelectedMemory({
          src: memory12,
          alt: "北の小人の夜の終わり",
        })
      }
    />
  </div>


  {/* Memories 13 + 14 */}
  <div className="mt-3 md:mt-16 flex items-start gap-3 md:gap-5 px-0 md:px-10">
    <div className="w-[65%]">
      <MemoryFragment
        src={memory13}
        alt="北の小人の夜"
        width="100%"
        align="left"
        rotate={-1.2}
        onClick={() =>
          setSelectedMemory({
            src: memory13,
            alt: "北の小人の夜",
          })
        }
      />
    </div>

    <div className="w-[37%] pt-8 md:pt-12">
      <MemoryFragment
        src={memory14}
        alt="北の小人の記憶"
        width="100%"
        align="center"
        rotate={1.8}
        delay={0.08}
        onClick={() =>
          setSelectedMemory({
            src: memory14,
            alt: "北の小人の記憶",
          })
        }
      />
    </div>
  </div>


  {/* Memories 15 + 16 */}
  <div className="mt-3 md:mt-16 flex items-start gap-2 md:gap-4 px-0 md:px-10">
    <div className="w-[38%] pt-6 md:pt-10">
      <MemoryFragment
        src={memory15}
        alt="音楽のある時間"
        width="100%"
        align="center"
        rotate={-2}
        delay={0.05}
        onClick={() =>
          setSelectedMemory({
            src: memory15,
            alt: "音楽のある時間",
          })
        }
      />
    </div>

    <div className="w-[62%]">
      <MemoryFragment
        src={memory16}
        alt="北の小人の夜"
        width="100%"
        align="right"
        rotate={0.9}
        delay={0.1}
        onClick={() =>
          setSelectedMemory({
            src: memory16,
            alt: "北の小人の夜",
          })
        }
      />
    </div>
  </div>


  {/* Memory 17 */}
  <div className="mt-2 md:mt-16 px-3 md:px-10">
    <MemoryFragment
      src={memory17}
      alt="北の小人の集合写真"
      width="76%"
      align="left"
      rotate={-0.6}
      delay={0.05}
      onClick={() =>
        setSelectedMemory({
          src: memory17,
          alt: "北の小人の集合写真",
        })
      }
    />
  </div>


  {/* Memories 18 + 19 */}
  <div className="mt-2 md:mt-16 flex items-start gap-2 md:gap-5 px-0 md:px-10">
    <div className="w-[65%]">
      <MemoryFragment
        src={memory18}
        alt="北の小人の記憶"
        width="100%"
        align="left"
        rotate={1.2}
        delay={0.05}
        onClick={() =>
          setSelectedMemory({
            src: memory18,
            alt: "北の小人の記憶",
          })
        }
      />
    </div>

    <div className="w-[60%] pt-5 md:pt-10">
      <MemoryFragment
        src={memory19}
        alt="音楽のある夜"
        width="100%"
        align="center"
        rotate={-1.5}
        delay={0.08}
        onClick={() =>
          setSelectedMemory({
            src: memory19,
            alt: "音楽のある夜",
          })
        }
      />
    </div>
  </div>


  {/* Memories 20 + 21 */}
  <div className="mt-1 md:mt-14 flex items-start -gap-1 md:gap-4 px-0 md:px-10">
    <div className="w-[44%] pt-6 md:pt-10">
      <MemoryFragment
        src={memory20}
        alt="北の小人の音楽の時間"
        width="100%"
        align="left"
        rotate={-2.4}
        delay={0.04}
        onClick={() =>
          setSelectedMemory({
            src: memory20,
            alt: "北の小人の音楽の時間",
          })
        }
      />
    </div>

    <div className="w-[56%]">
      <MemoryFragment
        src={memory21}
        alt="北の小人のセッション"
        width="100%"
        align="right"
        rotate={1.6}
        delay={0.08}
        onClick={() =>
          setSelectedMemory({
            src: memory21,
            alt: "北の小人のセッション",
          })
        }
      />
    </div>
  </div>

  {/* Memories 22 + 23 */}
  <div className="mt-1 md:mt-11 flex items-start gap-0 md:gap-4 px-0 md:px-10">
    <div className="w-[64%]">
      <MemoryFragment
        src={memory22}
        alt="音楽を囲む時間"
        width="100%"
        align="left"
        rotate={1.3}
        delay={0.05}
        onClick={() =>
          setSelectedMemory({
            src: memory22,
            alt: "音楽を囲む時間",
          })
        }
      />
    </div>

    <div className="w-[36%] pt-8 md:pt-12">
      <MemoryFragment
        src={memory23}
        alt="北の小人の夜の記憶"
        width="100%"
        align="center"
        rotate={-2.8}
        delay={0.1}
        onClick={() =>
          setSelectedMemory({
            src: memory23,
            alt: "北の小人の夜の記憶",
          })
        }
      />
    </div>
  </div>

  {/* Memories 24 + 25 */}
  <div className="mt-0 md:mt-9 flex items-start gap-0 md:gap-3 px-0 md:px-10">
    <div className="w-[52%]">
      <MemoryFragment
        src={memory24}
        alt="北の小人の演奏"
        width="100%"
        align="left"
        rotate={-1.6}
        delay={0.04}
        onClick={() =>
          setSelectedMemory({
            src: memory24,
            alt: "北の小人の演奏",
          })
        }
      />
    </div>

    <div className="w-[48%] pt-4 md:pt-8">
      <MemoryFragment
        src={memory25}
        alt="音楽のある空間"
        width="100%"
        align="right"
        rotate={2.1}
        delay={0.08}
        onClick={() =>
          setSelectedMemory({
            src: memory25,
            alt: "音楽のある空間",
          })
        }
      />
    </div>
  </div>

  {/* Memories 26 + 27 + 28 */}
  <div className="mt-0 md:mt-9 px-0 md:px-10">
    <div className="flex items-start gap-2 md:gap-4">
      <div className="w-[38%] pt-6 md:pt-10">
        <MemoryFragment
          src={memory26}
          alt="北の小人の記憶"
          width="100%"
          align="left"
          rotate={-2.1}
          delay={0.04}
          onClick={() =>
            setSelectedMemory({
              src: memory26,
              alt: "北の小人の記憶",
            })
          }
        />
      </div>

      <div className="w-[62%]">
        <MemoryFragment
          src={memory27}
          alt="北の小人の音楽の時間"
          width="100%"
          align="right"
          rotate={1.4}
          delay={0.08}
          onClick={() =>
            setSelectedMemory({
              src: memory27,
              alt: "北の小人の音楽の時間",
            })
          }
        />
      </div>
    </div>

    <div className="mt-0 md:mt-8">
      <MemoryFragment
        src={memory28}
        alt="音楽を楽しむ時間"
        width="88%"
        align="center"
        rotate={-0.7}
        delay={0.12}
        onClick={() =>
          setSelectedMemory({
            src: memory28,
            alt: "音楽を楽しむ時間",
          })
        }
      />
    </div>
  </div>

  {/* Memories 29 + 30 */}
  <div className="-mt-1 md:mt-6 flex items-start -gap-5 md:gap-2 px-0 md:px-10">
    <div className="w-[60%]">
      <MemoryFragment
        src={memory29}
        alt="北の小人のセッション"
        width="100%"
        align="left"
        rotate={0.9}
        delay={0.05}
        onClick={() =>
          setSelectedMemory({
            src: memory29,
            alt: "北の小人のセッション",
          })
        }
      />
    </div>

    <div className="w-[40%] pt-10 md:pt-16">
      <MemoryFragment
        src={memory30}
        alt="夜の記憶"
        width="100%"
        align="right"
        rotate={-2.5}
        delay={0.1}
        onClick={() =>
          setSelectedMemory({
            src: memory30,
            alt: "夜の記憶",
          })
        }
      />
    </div>
  </div>

  {/* Memory 31 */}
  <div className="-mt-3 md:mt-7 px-0 md:px-10">
    <MemoryFragment
      src={memory31}
      alt="北の小人の音楽の風景"
      width="82%"
      align="center"
      rotate={-1.1}
      delay={0.08}
      onClick={() =>
        setSelectedMemory({
          src: memory31,
          alt: "北の小人の音楽の風景",
        })
      }
    />
  </div>

  {/* Memories 32 + 33 */}
  <div className="-mt-6 -md:mt-6 px-0 md:px-10">
    <div className="flex items-start -gap-4 md:gap-3">
      <div className="w-[58%]">
        <MemoryFragment
          src={memory32}
          alt="北の小人の演奏風景"
          width="100%"
          align="left"
          rotate={1.8}
          delay={0.04}
          onClick={() =>
            setSelectedMemory({
              src: memory32,
              alt: "北の小人の演奏風景",
            })
          }
        />
      </div>

      <div className="w-[42%] pt-5 md:pt-8">
        <MemoryFragment
          src={memory33}
          alt="北の小人の夜"
          width="100%"
          align="right"
          rotate={-1.9}
          delay={0.08}
          onClick={() =>
            setSelectedMemory({
              src: memory33,
              alt: "北の小人の夜",
            })
          }
        />
      </div>
    </div>
  </div>

  {/* Memories 34 + 35 */}
  <div className="-mt-7 -md:mt-7 flex items-start -gap-7 md:gap-3 px-0 md:px-10">
    <div className="w-[66%] pt-8 md:pt-12">
      <MemoryFragment
        src={memory34}
        alt="北の小人の記憶"
        width="100%"
        align="left"
        rotate={-2.2}
        delay={0.05}
        onClick={() =>
          setSelectedMemory({
            src: memory34,
            alt: "北の小人の記憶",
          })
        }
      />
    </div>

    <div className="w-[64%]">
      <MemoryFragment
        src={memory35}
        alt="北の小人の夜の風景"
        width="100%"
        align="right"
        rotate={1.1}
        delay={0.1}
        onClick={() =>
          setSelectedMemory({
            src: memory35,
            alt: "北の小人の夜の風景",
          })
        }
      />
    </div>
  </div>


  {/* ── About Heading ── */}
  <div
    ref={aboutHeadingRef}
    className="max-w-6xl mx-auto px-6 md:px-20 mt-20 md:mt-28"
    style={{
      opacity: aboutHeadingVisible ? 1 : 0,
      transform: aboutHeadingVisible
        ? "translateY(0px)"
        : "translateY(32px)",
      transition:
        "opacity 1.4s ease-out, transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)",
    }}
  >
    <p
      className="text-[10px] tracking-[0.4em] text-foreground/70 uppercase mb-6"
      style={{ fontFamily: "'DM Mono', monospace" }}
    >
      About
    </p>

    <h2
      className="text-3xl md:text-6xl font-bold leading-tight text-foreground"
      style={{ fontFamily: "'Noto Serif JP', serif" }}
    >
      北の小人とは
    </h2>
  </div>


  {/* About Text */}
  <div className="max-w-3xl mx-auto px-10 md:px-20 mt-10 md:mt-14">
    <p
      className="text-sm md:text-base leading-8 text-foreground/80 mb-8"
      style={{ fontFamily: "'Noto Serif JP', serif",
             fontWeight: 300,
      }}
    >
      完全予約制の小規模音楽イベント。
    </p>

    <p
      className="text-xl md:text-3xl leading-[1.65] font-semibold text-foreground"
      style={{ fontFamily: "'Noto Serif JP', serif" }}
    >
      「上手に演奏する」よりも、<br />音楽を好きでい続けるために。
    </p>
  </div>


  {/* About Detail */}
  <div className="max-w-3xl mx-auto px-10 md:px-20 mt-10 md:mt-14">
    <p
      className="text-sm leading-8 text-foreground/80"
      style={{
        fontFamily: "'Noto Serif JP', serif",
        fontWeight: 300,
      }}
    >
      ステージ演奏はどなたでもOK。
      <br />
      準備してのご参加も、<br />当日の気分でチャレンジも、<br />聴くだけの参加も大歓迎です。
    </p>

    <p
      className="text-sm leading-8 text-foreground/80 mt-6"
      style={{ fontFamily: "'Noto Serif JP', serif",
               fontWeight: 300,
      }}
    >
      ご参加は招待状からの事前予約のみ。
    </p>
  </div>


  {/* Meta */}
  <div className="max-w-6xl mx-auto px-10 md:px-20 mt-12 md:mt-16">
    <p
      className="text-[10px] tracking-[0.3em] text-accent"
      style={{ fontFamily: "'DM Mono', monospace" }}
    >
      全席着席鑑賞　·　定員：20名
    </p>
  </div>
</section>

      {/* ── Timetable ── */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-10 md:px-20">
          <div className="flex items-center gap-4 mb-12">
            <Music size={14} className="text-accent" />
            <p
              className="text-[10px] tracking-[0.4em] text-accent uppercase"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Timetable
            </p>
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-12"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            タイムテーブル
          </h2>

          <div className="space-y-0">
            {TIMETABLE.map((item, i) => (
              <div key={i}>
                {item.divider && (
                  <div className="flex items-center gap-4 my-6">
                    <div className="flex-1 border-t border-border" />
                    <span
                      className="text-[10px] text-muted-foreground tracking-[0.3em]"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      FREE SESSION
                    </span>
                    <div className="flex-1 border-t border-border" />
                  </div>
                )}
                <div className="flex gap-8 py-6 border-b border-border last:border-b-0">
                  <div
                    className="text-accent text-lg font-medium w-24 shrink-0 pt-0.5"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {item.time}
                  </div>
                  <div>
                    <p
                      className="text-xl font-semibold text-foreground mb-1"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    >
                      {item.title}
                    </p>
                    {item.note && (
                      <p className="text-sm text-muted-foreground leading-7 whitespace-pre-line">
                        {item.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border border-border/50 px-6 py-5">
            <p className="text-sm text-muted-foreground leading-7" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}>
              途中からのご入場も可能ですので、ご安心ください。
            </p>
          </div>
        </div>
      </section>

      {/* ── Tickets ── */}
      <section id="tickets" className="max-w-6xl mx-auto px-10 md:px-20 py-24 md:py-32">
        <div className="mb-14">
          <p
            className="text-[10px] tracking-[0.4em] text-accent uppercase mb-4"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Reservation
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >ご予約</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {TICKETS.map((t, i) => (
            <div
              key={i}
              className={`relative border p-8 transition-all duration-300 ${
                t.tone === "primary"
                  ? "border-accent bg-card"
                  : t.tone === "secondary"
                    ? "border-border bg-secondary"
                    : "border-border/70 bg-secondary/70"
              }`}
            >
              <p
                className="text-[10px] tracking-[0.35em] text-muted-foreground mb-4 uppercase"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {t.tier}
              </p>
              <p
                className="text-3xl font-bold text-foreground mb-2"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {t.price}
              </p>
              <p className="text-xs text-muted-foreground mb-8">{t.note}</p>
              <button
                onClick={() =>
                  setOpenTicket(openTicket === i ? null : i)
                }
                aria-expanded={openTicket === i}
                className={`w-full py-3 text-xs tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center ${
                  t.tone === "primary"
                    ? "bg-accent text-background hover:bg-accent/90"
                    : "border border-foreground/30 text-foreground hover:border-foreground/70"
                }`}
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                <span>{openTicket === i ? "閉じる" : "詳細を見る"}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    openTicket === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openTicket === i && (
               <div className="mt-6 pt-6 border-t border-border">
                 <p
                   className="text-[10px] tracking-[0.3em] text-accent uppercase mb-4"
                   style={{ fontFamily: "'DM Mono', monospace" }}
                 >
                   {t.detailLabel}
                 </p>

                 {t.detailImage && (
                   <div className="my-6 flex justify-center">
                     <img
                       src={t.detailImage}
                       alt={`${t.tier} イメージ`}
                       className="w-full max-w-[420px] h-auto"
                     />
                   </div>
                 )}

                 <p
                   className="text-sm text-muted-foreground leading-7 whitespace-pre-line"
                   style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                 >
                   {t.detail}
                 </p>
               </div>
            )}
            </div>
          ))}
          <div
            className="relative border border-accent bg-accent p-8 h-full flex flex-col"
          >
    
           <p
              className="text-3xl font-bold text-background mb-2"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              ご予約
            </p>
            
            <p
              className="text-xs text-background/80 leading-6 mb-8"
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 400
              }}
            >
              参加をご希望の方は
              <br />
              こちらからご予約ください。
            </p>
            
            <a
              href="https://forms.gle/HVxUSpmwGjZPXFJV7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-auto py-3 text-xs tracking-[0.25em] uppercase transition-all duration-300 bg-background text-accent hover:bg-background/90 flex items-center justify-center"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <span>ご予約フォーム</span>
              <ArrowUpRight size={14} strokeWidth={1.8} />
            </a>
          </div>
        </div>

        <p
          className="text-[10px] text-muted-foreground tracking-[0.3em] mt-8"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >※ 払い戻しはイベント中止の場合のみ対応いたします。年齢制限：中学生以上。</p>
      </section>

      {/* ── Venue ── */}
      <section className="bg-secondary border-t border-border py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p
              className="text-[10px] tracking-[0.4em] text-accent uppercase mb-6"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Venue & Access
            </p>
            <h3
              className="text-3xl font-bold text-foreground mb-6"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              Various live bar SFC<br />
              <span className="text-xl font-light text-muted-foreground">（SAPPORO）</span>
            </h3>
            <div className="my-8 p-2 border border-border bg-card">
              <img
                src={venueImage}
                alt="Various live bar SFC 店内"
                className="w-full h-auto block"
              />
            </div>
            <address className="not-italic space-y-3 text-sm text-muted-foreground leading-7">
              <p>〒064-0806</p>
              <p>札幌市中央区南６条西３丁目6−27</p>
              <p>おおたビル 4階</p>
            </address>
          </div>
          <div className="mt-0 md:mt-8">
            <div>
              <p
                className="text-[10px] tracking-[0.35em] text-muted-foreground mb-2 uppercase"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                アクセス
              </p>
              <p className="text-sm text-foreground/80 leading-7">
                地下鉄南北線「すすきの」駅より徒歩 2 分<br />
                地下鉄東豊線「豊水すすきの」駅より徒歩 3 分
              </p>
            <div className="mt-6 border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.4067958568917!2d141.3522069773337!3d43.05391117113686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b29a31a317309%3A0xda5a1a2496706565!2sVarious%20live%20bar%20SFC!5e0!3m2!1sja!2sjp!4v1787958213305!5m2!1sja!2sjp"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Various live bar SFC 地図"
                />
            </div>
              <div className="mt-10 border-y border-border">
  <Accordion type="single" collapsible>
    <AccordionItem value="venue-drink" className="border-0">
      <AccordionTrigger className="py-5 hover:no-underline">
        <span
          className="text-[10px] tracking-[0.35em] text-muted-foreground uppercase"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          会場での飲食について
        </span>
      </AccordionTrigger>

      <AccordionContent className="pb-6">
        <div className="space-y-5 text-sm text-muted-foreground leading-7">
          <p>
            ドリンク・フードを<br />
            会場内でご注文いただけます。
          </p>

          <p>
            ドリンクは600円前後から。
          </p>

          <a
            href="https://sfc.crayonsite.com/p/2/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs tracking-[0.15em] text-accent border-b border-accent/50 pb-1 transition-opacity hover:opacity-70"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            メニュー・料金を見る ↗
          </a>
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border px-10 md:px-20 py-10 flex flex-col gap-6">

        <div
          className="text-xs text-muted-foreground tracking-[0.25em]"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          © 2026 North Co-beat Project. All Rights Reserved.
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">

          <a
            href="https://sites.google.com/view/kitanokobito-info/north-co-beat-project"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wider"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            North Co-beat Project
          </a>

          <a
            href="https://sites.google.com/view/kitanokobito-info/%E5%88%A9%E7%94%A8%E8%A6%8F%E7%B4%84"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wider"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            利用規約
          </a>

          <a
            href="https://sites.google.com/view/kitanokobito-info/%E3%83%97%E3%83%A9%E3%82%A4%E3%83%90%E3%82%B7%E3%83%BC%E3%83%9D%E3%83%AA%E3%82%B7%E3%83%BC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wider"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            プライバシー
          </a>

          <a
            href="https://sites.google.com/view/kitanokobito-info/%E7%89%B9%E5%AE%9A%E5%95%86%E5%8F%96%E5%BC%95%E6%B3%95%E3%81%AB%E5%9F%BA%E3%81%A5%E3%81%8F%E8%A1%A8%E8%A8%98"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wider"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            特定商取引法
          </a>

          <a
            href="https://forms.gle/6hXBYT71paTiN2Bb7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wider"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            お問い合わせ
          </a>

          <a
            href="https://www.instagram.com/kitanokobito"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="Instagram"
          >
            Instagram
          </a>

        </div>

      </footer>

      {/* ── Memory Lightbox ── */}
      {selectedMemory && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          style={{
            background: "rgba(0, 0, 0, 0.88)",
          }}
          onClick={() => setSelectedMemory(null)}
        >
          <div
            className="relative max-w-6xl w-full max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedMemory(null)}
              className="absolute -top-12 right-0 text-xs tracking-[0.25em] text-foreground/80 hover:text-foreground transition-colors"
              style={{
                fontFamily: "'DM Mono', monospace",
              }}
              aria-label="閉じる"
            >
              CLOSE
            </button>

            <img
              src={selectedMemory.src}
              alt={selectedMemory.alt}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
            />
          </div>
        </div>
      )}
      
    </div>
  );
}

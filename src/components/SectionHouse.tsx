import React, { useState } from 'react';
import { Eye, CheckCircle2 } from 'lucide-react';
import { Language, SpaceItem } from '../types';
import { SPACES_DATA } from '../data/houseData';
import { formatFloorHeading } from '../utils/typography';

interface SectionHouseProps {
  currentLang: Language;
  onOpenImageModal: (image: { title: string; url: string; caption?: string; note?: string }) => void;
}

export const SectionHouse: React.FC<SectionHouseProps> = ({
  currentLang,
  onOpenImageModal,
}) => {
  const [showArchivalComparison, setShowArchivalComparison] = useState(false);
  const mainGateData: SpaceItem = SPACES_DATA[0];
  const firstFloorData: SpaceItem = SPACES_DATA[1];

  return (
    <section id="house" className="py-28 px-6 sm:px-12 bg-[#FAF8F5] border-t border-[#1C1A17]/10">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Section Header: The House Concept (Architectural Journal Layout with Generous Negative Space) */}
        <div className="border-b border-[#1C1A17]/10 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left Col: Chapter index & Main Editorial Headline */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3 text-xs tracking-[0.3em] uppercase font-sans-clean text-[#3E4B39] font-medium">
                <span className="w-2 h-[1px] bg-[#3E4B39]" />
                <span>
                  {currentLang === 'ja'
                    ? 'IE FUSHIMI JOURNAL · 町家 01'
                    : currentLang === 'ko'
                    ? 'IE FUSHIMI 저널 · 마치야 고택 01'
                    : currentLang === 'zh'
                    ? 'IE FUSHIMI 档案 · 町家 01'
                    : 'IE FUSHIMI JOURNAL · CHAPTER 01'}
                </span>
              </div>

              <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#1C1A17] leading-[1.08] [word-break:keep-all] [overflow-wrap:break-word]">
                {currentLang === 'ja' ? (
                  <>
                    家が、<span style={{ whiteSpace: 'nowrap' }} className="whitespace-nowrap">すべての始まりでした。</span>
                  </>
                ) : currentLang === 'ko' ? (
                  <>
                    모든 것은 집에서 <span style={{ whiteSpace: 'nowrap' }} className="whitespace-nowrap">시작되었습니다.</span>
                  </>
                ) : currentLang === 'zh' ? (
                  <>
                    屋舍伊始，<span style={{ whiteSpace: 'nowrap' }} className="whitespace-nowrap">岁序恒常。</span>
                  </>
                ) : (
                  <>
                    The house <span style={{ whiteSpace: 'nowrap' }} className="whitespace-nowrap">came first.</span>
                  </>
                )}
              </h2>
            </div>

            {/* Right Col: Editorial Paragraph & Subtle Machiya Metadata with Asymmetric Negative Space */}
            <div className="lg:col-span-5 lg:pt-8 space-y-6">
              <div className="space-y-4 font-sans-clean text-base sm:text-lg text-[#1C1A17]/80 font-light leading-relaxed [word-break:keep-all] [overflow-wrap:break-word]">
                <p>
                  {currentLang === 'ja'
                    ? '茶台や庭、家具、そして品書きが生まれる前から、この家が存在していました。京都・伏見に息づく町家を、私たちはそのまま引き継ぎました。'
                    : currentLang === 'ko'
                    ? '티 카운터와 정원, 가구와 메뉴가 놓이기 전부터 이 집은 그곳에 있었습니다. 교토 후시미의 오래된 마치야 고택을 그대로 품었습니다.'
                    : currentLang === 'zh'
                    ? '在茶台、庭院、器物与茶单诞生之前，这幢屋舍便已静立于此。伏见町家的百年筋骨与岁月痕迹，我们悉数温存。'
                    : 'Before the tea counter, the garden, the furniture or the menu, there was the house. A Kyoto machiya in Fushimi.'}
                </p>
                <p className="text-xs sm:text-sm text-[#1C1A17]/55 font-light leading-relaxed [word-break:keep-all] [overflow-wrap:break-word]">
                  {currentLang === 'ja'
                    ? '木と畳、水と光。建築そのものが静かに語りかける、茶と暮らしの原点。'
                    : currentLang === 'ko'
                    ? '목재와 다다미, 물과 빛. 건축 그 자체가 나직이 건네는 차와 온전한 쉼의 시간.'
                    : currentLang === 'zh'
                    ? '杉木构筑、蔺草生香、庭水澄澈、微光穿牖。建筑本身便是茶事的序言。'
                    : 'Timber, tatami, water, and quiet daylight. The house itself speaks of quiet hospitality.'}
                </p>
              </div>

              <div className="flex items-center space-x-6 pt-4 border-t border-[#1C1A17]/10 text-xs font-sans-clean text-[#1C1A17]/50 tracking-wider uppercase">
                <span>Fushimi, Kyoto</span>
                <span>·</span>
                <span>Restored Machiya</span>
              </div>
            </div>
          </div>
        </div>

        {/* 01: MAIN GATE — Cleaned Machiya Facade */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-7 space-y-4">
            <div
              className="relative rounded-lg overflow-hidden bg-[#EAE6DF] aspect-[16/10] shadow-[0_16px_36px_-10px_rgba(28,26,23,0.14)] ring-1 ring-[#1C1A17]/8 cursor-pointer group"
              onClick={() =>
                onOpenImageModal({
                  title: mainGateData.title[currentLang] || mainGateData.title.en,
                  url: mainGateData.imageUrl,
                  caption: mainGateData.cleanedDescription[currentLang] || mainGateData.cleanedDescription.en,
                  note: '1. IE FUSHIMI - IE.HOUSE Main Gate (Refined & Cleaned Architecture)',
                })
              }
            >
              <img
                src={mainGateData.imageUrl}
                alt={mainGateData.title[currentLang] || mainGateData.title.en}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              {/* Subtle bottom gradient scrim / shadow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1C1A17]/65 via-[#1C1A17]/15 to-transparent" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#FAF8F5]/10" />

              {/* Tag */}
              <div className="relative z-10 absolute top-4 left-4 flex items-center space-x-2">
                <span className="bg-[#FAF8F5]/95 backdrop-blur-xs text-[#1C1A17] text-[11px] font-sans-clean px-3 py-1 rounded-sm uppercase tracking-wider shadow-xs">
                  {currentLang === 'ja'
                    ? '1. 主門（整理済み）'
                    : currentLang === 'ko'
                    ? '1. 메인 게이트 (정돈본)'
                    : currentLang === 'zh'
                    ? '1. 邸宅正门（纯化）'
                    : '1. Cleaned Main Gate'}
                </span>
                <span className="bg-[#3E4B39] text-[#FAF8F5] text-[10px] font-sans-clean px-2 py-1 rounded-sm tracking-wider uppercase shadow-xs">
                  {currentLang === 'ja'
                    ? '無電柱化・美装'
                    : currentLang === 'ko'
                    ? '시각요소 정돈'
                    : currentLang === 'zh'
                    ? '立面纯化'
                    : 'Clean Arch'}
                </span>
              </div>

              {/* Interactive Inspector Prompt */}
              <div className="relative z-10 absolute bottom-4 right-4 bg-[#FAF8F5]/90 backdrop-blur-xs text-[#1C1A17] text-xs px-3 py-1.5 rounded-md flex items-center space-x-1.5 opacity-90 group-hover:opacity-100 transition-all group-hover:scale-105 shadow-sm">
                <Eye className="w-3.5 h-3.5 text-[#3E4B39]" />
                <span className="text-[11px] font-sans-clean font-medium">
                  {currentLang === 'ja'
                    ? '写真拡大'
                    : currentLang === 'ko'
                    ? '사진 확대 보기'
                    : currentLang === 'zh'
                    ? '查看大图'
                    : 'View Full Image'}
                </span>
              </div>
            </div>
          </div>

          {/* Description Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs tracking-widest text-[#3E4B39] font-sans-clean uppercase font-medium">
                {mainGateData.kicker[currentLang]}
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#1C1A17] tracking-tight">
                {mainGateData.title[currentLang]}
              </h3>
              <p className="font-editorial text-lg italic text-[#1C1A17]/70">
                {mainGateData.subtitle[currentLang]}
              </p>
            </div>

            <div className="space-y-4 font-sans-clean text-sm sm:text-base text-[#1C1A17]/75 leading-relaxed font-light">
              <p>{mainGateData.description[currentLang]}</p>
              <p className="text-xs text-[#1C1A17]/60 leading-normal">
                {mainGateData.extendedDescription?.[currentLang]}
              </p>
            </div>

            {/* Key Machiya Features */}
            <div className="pt-2 border-t border-[#1C1A17]/10 space-y-2.5">
              <span className="text-[11px] uppercase tracking-wider font-sans-clean text-[#1C1A17]/50 block">
                {currentLang === 'ja'
                  ? '建築の特徴'
                  : currentLang === 'ko'
                  ? '주요 건축 요소'
                  : currentLang === 'zh'
                  ? '核心建筑形制'
                  : 'Architectural Characteristics'}
              </span>
              <div className="space-y-2">
                {mainGateData.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-sans-clean text-[#1C1A17]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3E4B39]" />
                    <span>{feature[currentLang] || feature.en}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 02: 1ST FLOOR CAFE AREA — Tatami, Bonsai, Round Lantern, Mood */}
        <div id="first-floor" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8 border-t border-[#1C1A17]/10">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="space-y-2">
              <span className="text-xs tracking-widest text-[#3E4B39] font-sans-clean uppercase font-medium">
                {firstFloorData.kicker[currentLang] || firstFloorData.kicker.en}
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#1C1A17] tracking-tight [word-break:keep-all]">
                {formatFloorHeading(
                  firstFloorData.title[currentLang] || firstFloorData.title.en,
                  currentLang === 'ko'
                )}
              </h3>
              <p className="font-editorial text-lg italic text-[#1C1A17]/70">
                {firstFloorData.subtitle[currentLang] || firstFloorData.subtitle.en}
              </p>
            </div>

            <div className="space-y-4 font-sans-clean text-sm sm:text-base text-[#1C1A17]/75 leading-relaxed font-light">
              <p>{firstFloorData.description[currentLang] || firstFloorData.description.en}</p>
              <p className="text-xs text-[#1C1A17]/60 leading-normal">
                {firstFloorData.extendedDescription?.[currentLang] || firstFloorData.extendedDescription?.en}
              </p>
            </div>

            {/* Features from 2. IE FUSHIMI - IE.HOUSE 1st Floor Cafe Area */}
            <div className="pt-2 border-t border-[#1C1A17]/10 space-y-2.5">
              <span className="text-[11px] uppercase tracking-wider font-sans-clean text-[#1C1A17]/50 block">
                {currentLang === 'ja'
                  ? '1階の内装と設え'
                  : currentLang === 'ko'
                  ? '1층 인테리어 및 무드'
                  : currentLang === 'zh'
                  ? '一楼空间设色与陈设'
                  : 'Spatial Interior Elements'}
              </span>
              <div className="space-y-2">
                {firstFloorData.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-sans-clean text-[#1C1A17]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3E4B39]" />
                    <span>{feature[currentLang] || feature.en}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
            <div
              className="relative rounded-lg overflow-hidden bg-[#EAE6DF] aspect-[16/10] shadow-[0_16px_36px_-10px_rgba(28,26,23,0.14)] ring-1 ring-[#1C1A17]/8 cursor-pointer group"
              onClick={() =>
                onOpenImageModal({
                  title: firstFloorData.title[currentLang] || firstFloorData.title.en,
                  url: firstFloorData.imageUrl,
                  caption: firstFloorData.cleanedDescription[currentLang] || firstFloorData.cleanedDescription.en,
                  note: '2. IE FUSHIMI - IE.HOUSE 1st Floor Cafe Area (Tatami benches, Bonsai & Washi Lantern)',
                })
              }
            >
              <img
                src={firstFloorData.imageUrl}
                alt={firstFloorData.title[currentLang] || firstFloorData.title.en}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              {/* Subtle bottom gradient scrim / shadow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1C1A17]/65 via-[#1C1A17]/15 to-transparent" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#FAF8F5]/10" />

              {/* Tag */}
              <div className="relative z-10 absolute top-4 left-4 flex items-center space-x-2">
                <span className="bg-[#FAF8F5]/95 backdrop-blur-xs text-[#1C1A17] text-[11px] font-sans-clean px-3 py-1 rounded-sm uppercase tracking-wider shadow-xs">
                  {currentLang === 'ja'
                    ? '2. 1階 カフェ空間'
                    : currentLang === 'ko'
                    ? '2. 1층 카페 인테리어'
                    : currentLang === 'zh'
                    ? '2. 一楼茶席空间'
                    : '2. 1st Floor Cafe Area'}
                </span>
                <span className="bg-[#3E4B39] text-[#FAF8F5] text-[10px] font-sans-clean px-2 py-1 rounded-sm tracking-wider uppercase shadow-xs">
                  {currentLang === 'ja'
                    ? '畳石台・盆栽・和紙照明'
                    : currentLang === 'ko'
                    ? '다다미 좌석·분재·한지'
                    : currentLang === 'zh'
                    ? '榻榻米·盆景·和纸吊灯'
                    : 'Interior Layout & Mood'}
                </span>
              </div>

              {/* Interactive prompt */}
              <div className="relative z-10 absolute bottom-4 right-4 bg-[#FAF8F5]/90 backdrop-blur-xs text-[#1C1A17] text-xs px-3 py-1.5 rounded-md flex items-center space-x-1.5 opacity-90 group-hover:opacity-100 transition-all group-hover:scale-105 shadow-sm">
                <Eye className="w-3.5 h-3.5 text-[#3E4B39]" />
                <span className="text-[11px] font-sans-clean font-medium">
                  {currentLang === 'ja'
                    ? '写真拡大'
                    : currentLang === 'ko'
                    ? '사진 확대 보기'
                    : currentLang === 'zh'
                    ? '查看大图'
                    : 'View Full Image'}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#1C1A17]/65 font-sans-clean italic px-1">
              {firstFloorData.cleanedDescription[currentLang] || firstFloorData.cleanedDescription.en}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

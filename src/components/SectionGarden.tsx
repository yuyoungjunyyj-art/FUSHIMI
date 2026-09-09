import React from 'react';
import { Eye, CheckCircle2, Droplets } from 'lucide-react';
import { Language, SpaceItem } from '../types';
import { SPACES_DATA } from '../data/houseData';

interface SectionGardenProps {
  currentLang: Language;
  onOpenImageModal: (image: { title: string; url: string; caption?: string; note?: string }) => void;
}

export const SectionGarden: React.FC<SectionGardenProps> = ({
  currentLang,
  onOpenImageModal,
}) => {
  const gardenData: SpaceItem = SPACES_DATA[2];
  const mossWallData: SpaceItem = SPACES_DATA[3];

  return (
    <section id="garden" className="py-24 px-6 sm:px-12 bg-[#FAF8F5] border-t border-[#1C1A17]/10">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* Section Lead */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center space-x-2 text-xs tracking-[0.25em] uppercase text-[#3E4B39] font-sans-clean font-medium">
            <Droplets className="w-3.5 h-3.5" />
            <span>
              {currentLang === 'ja'
                ? '1階から中庭へ続く · 02'
                : currentLang === 'ko'
                ? '1층에서 중정으로 이어지는 · 02'
                : currentLang === 'zh'
                ? '一楼引向中庭 · 02'
                : 'CONNECTING FROM 1ST FLOOR · 02'}
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1C1A17]">
            {currentLang === 'ja'
              ? '屋根のない部屋。'
              : currentLang === 'ko'
              ? '지붕 없는 방.'
              : currentLang === 'zh'
              ? '无顶之室，纳天地灵韵。'
              : 'A room without a roof.'}
          </h2>
          <p className="text-base sm:text-lg text-[#1C1A17]/75 font-sans-clean font-light leading-relaxed">
            {currentLang === 'ja'
              ? '1階のカフェから自然と視線が導かれる中庭。縁側に座り、足元を流れる伏見の名水と、季節を宿す巨石の樹を間近に感じます。'
              : currentLang === 'ko'
              ? '1층 카페에서 자연스럽게 시선이 이어지는 중정 정원. 툇마루에 앉아 발아래 흐르는 맑은 수로와 바위에 뿌리내린 계절 나무를 마주합니다.'
              : currentLang === 'zh'
              ? '视线自一楼茶台自然延伸至中庭。端坐缘侧，足下清泉浅吟低唱，与栖息于巨石上的时令树木静默相对。'
              : 'The garden connects seamlessly from the 1st floor cafe. Stone, moss, water, and one tree marking the season.'}
          </p>
        </div>

        {/* 03: THE GARDEN — Monumental Stone, Tree, Water Rill */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div
              className="relative rounded-lg overflow-hidden bg-[#EAE6DF] aspect-[16/10] shadow-[0_16px_36px_-10px_rgba(28,26,23,0.14)] ring-1 ring-[#1C1A17]/8 cursor-pointer group"
              onClick={() =>
                onOpenImageModal({
                  title: gardenData.title[currentLang] || gardenData.title.en,
                  url: gardenData.imageUrl,
                  caption: gardenData.cleanedDescription[currentLang] || gardenData.cleanedDescription.en,
                  note: '3. IE FUSHIMI - IE.HOUSE THE Garden (Courtyard Boulder, Water Channel & Engawa)',
                })
              }
            >
              <img
                src={gardenData.imageUrl}
                alt={gardenData.title[currentLang] || gardenData.title.en}
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
                    ? '3. 中庭（THE Garden）'
                    : currentLang === 'ko'
                    ? '3. 중정 정원 (THE Garden)'
                    : currentLang === 'zh'
                    ? '3. 中庭庭园（THE Garden）'
                    : '3. THE Garden'}
                </span>
                <span className="bg-[#3E4B39] text-[#FAF8F5] text-[10px] font-sans-clean px-2 py-1 rounded-sm tracking-wider uppercase shadow-xs">
                  {currentLang === 'ja'
                    ? '巨石・水路・縁側'
                    : currentLang === 'ko'
                    ? '거석·수로·툇마루'
                    : currentLang === 'zh'
                    ? '巨石·水涧·缘侧'
                    : 'Stone & Water'}
                </span>
              </div>

              {/* Inspector CTA */}
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
              {gardenData.cleanedDescription[currentLang] || gardenData.cleanedDescription.en}
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs tracking-widest text-[#3E4B39] font-sans-clean uppercase font-medium">
                {gardenData.kicker[currentLang] || gardenData.kicker.en}
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#1C1A17] tracking-tight">
                {gardenData.title[currentLang] || gardenData.title.en}
              </h3>
              <p className="font-editorial text-lg italic text-[#1C1A17]/70">
                {gardenData.subtitle[currentLang] || gardenData.subtitle.en}
              </p>
            </div>

            <div className="space-y-4 font-sans-clean text-sm sm:text-base text-[#1C1A17]/75 leading-relaxed font-light">
              <p>{gardenData.description[currentLang] || gardenData.description.en}</p>
              <p className="text-xs text-[#1C1A17]/60 leading-normal">
                {gardenData.extendedDescription?.[currentLang] || gardenData.extendedDescription?.en}
              </p>
            </div>

            {/* Features */}
            <div className="pt-2 border-t border-[#1C1A17]/10 space-y-2.5">
              <span className="text-[11px] uppercase tracking-wider font-sans-clean text-[#1C1A17]/50 block">
                {currentLang === 'ja'
                  ? '庭園の要素'
                  : currentLang === 'ko'
                  ? '정원 구성 요소'
                  : currentLang === 'zh'
                  ? '庭园造景构成'
                  : 'Key Landscape Elements'}
              </span>
              <div className="space-y-2">
                {gardenData.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-sans-clean text-[#1C1A17]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3E4B39]" />
                    <span>{feature[currentLang] || feature.en}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 04: MOSS WALL — Living Architectural Relief on the Inner Wall */}
        <div id="moss-wall" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-12 border-t border-[#1C1A17]/10">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="space-y-2">
              <span className="text-xs tracking-widest text-[#3E4B39] font-sans-clean uppercase font-medium">
                {mossWallData.kicker[currentLang] || mossWallData.kicker.en}
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#1C1A17] tracking-tight">
                {mossWallData.title[currentLang] || mossWallData.title.en}
              </h3>
              <p className="font-editorial text-lg italic text-[#1C1A17]/70">
                {mossWallData.subtitle[currentLang] || mossWallData.subtitle.en}
              </p>
            </div>

            <div className="space-y-4 font-sans-clean text-sm sm:text-base text-[#1C1A17]/75 leading-relaxed font-light">
              <p>{mossWallData.description[currentLang] || mossWallData.description.en}</p>
              <p className="text-xs text-[#1C1A17]/60 leading-normal">
                {mossWallData.extendedDescription?.[currentLang] || mossWallData.extendedDescription?.en}
              </p>
            </div>

            {/* Moss Wall Highlights */}
            <div className="pt-2 border-t border-[#1C1A17]/10 space-y-2.5">
              <span className="text-[11px] uppercase tracking-wider font-sans-clean text-[#1C1A17]/50 block">
                {currentLang === 'ja'
                  ? '苔壁の植物・生態'
                  : currentLang === 'ko'
                  ? '모스 월 식생 및 조명'
                  : currentLang === 'zh'
                  ? '苔藓与立体植栽'
                  : 'Living Botanical Relief'}
              </span>
              <div className="space-y-2">
                {mossWallData.features.map((feature, idx) => (
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
                  title: mossWallData.title[currentLang] || mossWallData.title.en,
                  url: mossWallData.imageUrl,
                  caption: mossWallData.cleanedDescription[currentLang] || mossWallData.cleanedDescription.en,
                  note: '4. IE FUSHIMI - IE.HOUSE MOSS WALL (Living Cushion Moss, Ferns & Architectural Spotlight)',
                })
              }
            >
              <img
                src={mossWallData.imageUrl}
                alt={mossWallData.title[currentLang] || mossWallData.title.en}
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
                    ? '4. 苔壁（MOSS WALL）'
                    : currentLang === 'ko'
                    ? '4. 모스 월 (MOSS WALL)'
                    : currentLang === 'zh'
                    ? '4. 生态苔墙（MOSS WALL）'
                    : '4. THE MOSS WALL'}
                </span>
                <span className="bg-[#3E4B39] text-[#FAF8F5] text-[10px] font-sans-clean px-2 py-1 rounded-sm tracking-wider uppercase shadow-xs">
                  {currentLang === 'ja'
                    ? '中庭奥壁・立体緑化'
                    : currentLang === 'ko'
                    ? '정원 안쪽 벽'
                    : currentLang === 'zh'
                    ? '庭园深处·立体浮雕'
                    : 'Inner Courtyard Wall'}
                </span>
              </div>

              {/* Inspector CTA */}
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
              {mossWallData.cleanedDescription[currentLang] || mossWallData.cleanedDescription.en}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

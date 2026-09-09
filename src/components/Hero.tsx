import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface HeroProps {
  currentLang?: Language;
  onExploreClick?: () => void;
  onOpenImageModal?: (image: { title: string; url: string; caption?: string; note?: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang = 'ko',
  onExploreClick,
}) => {
  // 5~8초 간격으로 두 문구가 서서히 교차(Fade-in/Fade-out)하도록 6.5초 주기 설정
  const [activePhrase, setActivePhrase] = useState<0 | 1>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhrase((prev) => (prev === 0 ? 1 : 0));
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  const handleScrollDown = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const houseSection = document.getElementById('house');
      if (houseSection) {
        houseSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-screen flex flex-col justify-between overflow-hidden bg-[#FAF8F5] text-[#1C1A17] select-none"
    >
      {/* 1. 배경 비디오: 100vh, 100vw 전체 화면을 꽉 채우며 무한 반복/자동재생/음소거 */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <video
          src="/images/hero_opening.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        {/* 화지(Washi) 질감의 은은한 오버레이로 영상 위 텍스트 가독성과 차분한 톤 유지 */}
        <div className="absolute inset-0 bg-[#FAF8F5]/70 backdrop-blur-[0.5px] -z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/80 via-transparent to-[#FAF8F5]/85 -z-10" />
      </div>

      {/* 2. 상단 브랜드 타이포그래피: 비대칭적이고 여유로운 여백의 세리프(Serif) 폰트 */}
      <header className="relative z-10 w-full pt-12 sm:pt-16 md:pt-20 px-8 sm:px-14 md:px-20 flex justify-start">
        <h2 className="font-editorial text-sm sm:text-base md:text-lg tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#1C1A17]/85 font-medium border-b border-[#1C1A17]/15 pb-2 inline-block">
          Ie HOUSE OF TEA FUSHIMI · KYOTO
        </h2>
      </header>

      {/* 3. 화면 중앙 텍스트 크로스페이드 (5~8초 간격 부드러운 무한 교차) */}
      <div className="relative z-10 w-full my-auto px-8 sm:px-14 md:px-20 max-w-6xl">
        <div className="relative w-full h-[180px] sm:h-[220px] md:h-[260px]">
          {/* 문구 1: "A house organised around tea." */}
          <div
            className={`absolute inset-0 flex flex-col justify-center items-start transition-all duration-1000 ease-in-out ${
              activePhrase === 0
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-3 pointer-events-none'
            }`}
          >
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#1C1A17] leading-[1.05]">
              A house <br />
              <span className="italic font-light">organised</span> <br />
              around tea.
            </h1>
            <p className="mt-4 text-xs sm:text-sm md:text-base font-sans-clean text-[#1C1A17]/65 font-light tracking-wide [word-break:keep-all]">
              {currentLang === 'ja'
                ? '茶を中心に息づく、京都の町家。'
                : currentLang === 'ko'
                ? '차를 중심으로 고요히 피어난 교토의 집.'
                : currentLang === 'zh'
                ? '以茶为序，栖居静谧京都古邸。'
                : 'A contemporary Kyoto machiya organised around tea.'}
            </p>
          </div>

          {/* 문구 2: "Tea. Food. Garden. Craft." */}
          <div
            className={`absolute inset-0 flex flex-col justify-center items-start transition-all duration-1000 ease-in-out ${
              activePhrase === 1
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-3 pointer-events-none'
            }`}
          >
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#1C1A17] leading-[1.05]">
              Tea. Food. <br />
              <span className="italic font-light">Garden.</span> <br />
              Craft.
            </h1>
            <p className="mt-4 text-xs sm:text-sm md:text-base font-sans-clean text-[#1C1A17]/65 font-light tracking-wide [word-break:keep-all]">
              {currentLang === 'ja'
                ? '茶。焼菓子。庭。工芸。'
                : currentLang === 'ko'
                ? '차, 음식, 정원, 그리고 공예의 시간.'
                : currentLang === 'zh'
                ? '茶事。茶点。庭院。工艺。'
                : 'Tea, food, courtyard garden, and crafts.'}
            </p>
          </div>
        </div>
      </div>

      {/* 4. UI 최소화: 화면 하단에 아주 작고 정제된 산세리프 폰트 "Enter ↓"만 은은하게 배치 */}
      <footer className="relative z-10 w-full pb-10 sm:pb-14 px-8 sm:px-14 md:px-20 flex justify-start">
        <button
          type="button"
          onClick={handleScrollDown}
          aria-label="Enter the house"
          className="font-sans-clean text-xs sm:text-sm tracking-[0.3em] uppercase text-[#1C1A17]/60 hover:text-[#1C1A17] transition-colors duration-300 font-light cursor-pointer focus:outline-none"
        >
          Enter ↓
        </button>
      </footer>
    </section>
  );
};

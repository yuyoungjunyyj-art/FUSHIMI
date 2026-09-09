import React from 'react';
import { Language } from '../types';
import { HOUSE_IMAGES } from '../data/imagery';

interface HeroProps {
  currentLang: Language;
  onExploreClick: () => void;
  onOpenImageModal?: (image: { title: string; url: string; caption?: string; note?: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onExploreClick,
}) => {
  return (
    <section
      id="hero"
      className="hero relative w-full h-screen min-h-screen flex flex-col justify-between overflow-hidden bg-[#f9f6f0] text-[#2a2a2a] select-none"
    >
      {/* 4. Background Video Container */}
      <div className="hero-video-container absolute inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <video
          src="./images/hero_opening.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster={HOUSE_IMAGES.heroGate.url}
          className="hero-video w-full h-full object-cover"
        />
        {/* Washi tactile overlay: preserves contrast for Sumi text over moving footage */}
        <div className="hero-video-overlay absolute inset-0 bg-[#f9f6f0]/75 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f9f6f0] via-transparent to-[#f9f6f0]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03]" />
      </div>

      {/* Top Quiet Coordinates & Status (Discrete, unhurried) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 pt-28 flex items-center justify-between text-xs tracking-[0.25em] uppercase font-sans-clean text-[#2a2a2a]/60">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3E4B39]/70" />
          <span>Kyoto Machiya Restored</span>
        </div>
        <div className="hidden sm:block text-[11px] tracking-widest text-[#2a2a2a]/40 font-light">
          34°58'14.8"N 135°46'19.2"E
        </div>
      </div>

      {/* 5 & 6. Central Asymmetric Typography Container */}
      <div className="hero-content relative z-10 max-w-6xl mx-auto w-full px-6 sm:px-12 md:pl-16 lg:pl-24 my-auto py-8 flex flex-col items-start">
        <div className="hero-title-wrapper space-y-6 max-w-3xl">
          {/* 5. Central Text Identifier: "Ie HOUSE OF TEA FUSHIMI · KYOTO" */}
          <div className="hero-brand-container">
            <span className="hero-brand-text inline-block text-xs sm:text-sm tracking-[0.35em] uppercase font-sans-clean text-[#2a2a2a]/75 font-medium border-b border-[#2a2a2a]/15 pb-2">
              Ie HOUSE OF TEA FUSHIMI · KYOTO
            </span>
          </div>

          {/* 6. Asymmetric Crossfading Container (Stacked with position: absolute) */}
          <div className="hero-crossfade-stage relative w-full h-[190px] sm:h-[220px] md:h-[250px] lg:h-[270px]">
            {/* Phrase 1: "A house organised around tea." */}
            <div className="hero-phrase hero-phrase-crossfade-1 absolute inset-0 flex flex-col justify-start">
              <h1 className="hero-heading font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.98] text-[#2a2a2a]">
                A house <br />
                <span className="italic font-light">organised</span> <br />
                around tea.
              </h1>
              <p className="mt-4 text-sm sm:text-base font-sans-clean text-[#2a2a2a]/65 font-light tracking-wide max-w-xl">
                {currentLang === 'ja'
                  ? '茶を中心に息づく、京都の町家。木と畳、中庭の水と光が織りなす静寂。'
                  : currentLang === 'ko'
                  ? '차를 중심으로 고요히 피어난 교토의 집. 나무와 다다미, 중정의 물과 빛.'
                  : currentLang === 'zh'
                  ? '以茶为序，栖居静谧京都古邸。杉木、榻榻米、庭水与微光交织。'
                  : 'A contemporary sanctuary in a restored Kyoto machiya shaped by tea, timber, and daylight.'}
              </p>
            </div>

            {/* Phrase 2: "Tea. Food. Garden. Craft." */}
            <div className="hero-phrase hero-phrase-crossfade-2 absolute inset-0 flex flex-col justify-start">
              <h1 className="hero-heading font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.98] text-[#2a2a2a]">
                Tea. Food. <br />
                <span className="italic font-light">Garden.</span> <br />
                Craft.
              </h1>
              <p className="mt-4 text-sm sm:text-base font-sans-clean text-[#2a2a2a]/65 font-light tracking-wide max-w-xl">
                {currentLang === 'ja'
                  ? '茶。焼菓子。庭。工芸。一服の茶を味わい、学び、集い、心ゆくまで寛ぐための場所。'
                  : currentLang === 'ko'
                  ? '차. 음식. 정원. 공예. 차를 마시고, 배우며, 고요히 머무는 교토의 집.'
                  : currentLang === 'zh'
                  ? '茶事。茶点。庭院。工艺。一处品茗、研习、雅集与悠然安歇之所。'
                  : 'A place to drink, learn, gather, and stay awhile.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Bottom Subtle Scroll Prompt: "Enter ↓" */}
      <div className="hero-footer relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 pb-10 flex items-center justify-between border-t border-[#2a2a2a]/10 pt-5 text-xs font-sans-clean text-[#2a2a2a]/70">
        <button
          type="button"
          onClick={onExploreClick}
          aria-label="Enter the house"
          className="hero-enter-prompt group inline-flex items-center space-x-2 text-xs tracking-[0.25em] uppercase hover:text-[#2a2a2a] transition-colors focus:outline-none cursor-pointer"
        >
          <span className="font-sans-clean font-medium tracking-[0.25em] text-[#2a2a2a]/90 group-hover:text-[#2a2a2a]">
            Enter ↓
          </span>
        </button>

        <div className="text-[11px] tracking-widest uppercase text-[#2a2a2a]/45 font-sans-clean">
          {currentLang === 'ja'
            ? '伏見 · 京都'
            : currentLang === 'ko'
            ? '후시미 · 교토'
            : currentLang === 'zh'
            ? '伏见 · 京都'
            : 'Fushimi · Kyoto'}
        </div>
      </div>
    </section>
  );
};

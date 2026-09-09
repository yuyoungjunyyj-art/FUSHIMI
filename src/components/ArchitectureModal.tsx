import React from 'react';
import { X, Network, CornerDownRight, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';
import { SITE_ARCHITECTURE } from '../data/architectureData';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onNavigateTo: (sectionId: string, subItemId?: string) => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onNavigateTo,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#1C1A17]/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#1C1A17]/20 flex flex-col overflow-hidden animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-[#1C1A17]/10 bg-[#FAF8F5]">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs tracking-[0.25em] uppercase text-[#3E4B39] font-sans-clean font-medium">
              <Network className="w-3.5 h-3.5" />
              <span>IE.HOUSE ARCHITECTURE MAP</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#1C1A17] tracking-tight">
              Website Architecture IE.HOUSE
            </h2>
            <p className="text-xs text-[#1C1A17]/60 font-sans-clean">
              {currentLang === 'ja'
                ? '町家の骨格と日本茶の体験を反映した8つの主要構造と詳細階層。'
                : currentLang === 'ko'
                ? '고택의 공간 구조와 차의 여정을 담아낸 8개 핵심 축과 세부 디렉터리.'
                : 'The structural map of IE FUSHIMI — 8 primary pillars and sub-branches.'}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close architecture map"
            className="p-2 rounded-full text-[#1C1A17]/60 hover:text-[#1C1A17] hover:bg-[#1C1A17]/5 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tree Display Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans-clean">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SITE_ARCHITECTURE.map((branch, branchIndex) => (
              <div
                key={branch.id}
                className="p-5 rounded-xl border border-[#1C1A17]/15 bg-white/40 hover:border-[#1C1A17]/40 transition-all space-y-3 shadow-2xs"
              >
                {/* Branch Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] font-mono text-[#3E4B39] font-semibold">
                      0{branchIndex + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        onNavigateTo(branch.id);
                        onClose();
                      }}
                      className="font-editorial text-xl tracking-tight text-[#1C1A17] hover:text-[#3E4B39] transition-colors flex items-center space-x-1.5 text-left"
                    >
                      <span>{branch.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                    </button>
                  </div>
                  <span className="text-[11px] text-[#1C1A17]/50 font-sans-clean">
                    {branch.label[currentLang]}
                  </span>
                </div>

                {/* Sub items */}
                {branch.subItems && branch.subItems.length > 0 ? (
                  <div className="pl-4 border-l border-[#1C1A17]/15 space-y-1.5 pt-1">
                    {branch.subItems.map((sub) => (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => {
                          onNavigateTo(branch.id, sub.id);
                          onClose();
                        }}
                        className="w-full text-left flex items-center justify-between py-1 px-2 rounded-md hover:bg-[#1C1A17]/5 text-xs text-[#1C1A17]/80 hover:text-[#1C1A17] transition-colors group"
                      >
                        <div className="flex items-center space-x-2">
                          <CornerDownRight className="w-3 h-3 text-[#3E4B39]/70 group-hover:translate-x-0.5 transition-transform" />
                          <span className="font-medium">{sub.title}</span>
                        </div>
                        <span className="text-[11px] text-[#1C1A17]/50 font-light">
                          {sub.label[currentLang]}
                        </span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-[#1C1A17]/50 pl-2 italic">
                    {currentLang === 'ja'
                      ? 'メインエントランス・概要'
                      : currentLang === 'ko'
                      ? '메인 관문 및 하이라이트'
                      : 'Main Entrance & House Essence'}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* ASCII Tree Schema representation */}
          <div className="mt-8 p-5 bg-[#1C1A17] text-[#FAF8F5] rounded-xl overflow-x-auto font-mono text-[11px] leading-relaxed border border-[#1C1A17]/20">
            <div className="text-[#FAF8F5]/60 mb-2 uppercase tracking-widest text-[10px]">
              Schema Blueprint · Tree View
            </div>
            <pre className="text-emerald-300/90 font-mono">
{`Website Architecture IE.HOUSE
│
├── HOME
│
├── HOUSE
│   ├── Fushimi
│   ├── Garden
│   ├── Spaces
│   └── Our Story
│
├── TEA
│   ├── Our Approach
│   ├── Gyokuro
│   ├── Matcha
│   ├── Hojicha
│   ├── Other Teas
│   └── Sparkling Gyokuro
│
├── EXPERIENCE
│   ├── Drink Tea
│   ├── Tea Experience
│   ├── Garden
│   ├── Seasonal Programme
│   └── Private Experiences
│
├── THINGS
│   ├── Tea
│   ├── Sparkling Tea
│   ├── Financiers
│   ├── Ceramics
│   ├── Objects
│   └── Gifts
│
├── STORIES
│   ├── Tea
│   ├── People
│   ├── Making
│   ├── Places
│   └── Seasons
│
├── GATHERINGS
│   ├── What's On
│   ├── Collaborations
│   ├── Residencies
│   └── Open Call
│
└── VISIT
    ├── Hours
    ├── Directions
    ├── Reservations
    ├── Menu
    └── FAQ`}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-[#1C1A17]/10 bg-[#FAF8F5] flex items-center justify-between text-xs text-[#1C1A17]/60">
          <span>IE FUSHIMI — Kyoto Machiya Tea House</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-[#1C1A17] text-[#FAF8F5] hover:bg-[#3E4B39] transition-colors"
          >
            {currentLang === 'ja' ? '閉じる' : currentLang === 'ko' ? '닫기' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};

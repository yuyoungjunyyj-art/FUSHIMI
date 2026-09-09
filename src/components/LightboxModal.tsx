import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface LightboxModalProps {
  image: {
    title: string;
    url: string;
    caption?: string;
    note?: string;
  } | null;
  onClose: () => void;
  currentLang: Language;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  image,
  onClose,
  currentLang,
}) => {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#1C1A17]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] bg-[#FAF8F5] rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-[#1C1A17]/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="p-4 px-6 border-b border-[#1C1A17]/10 flex items-center justify-between bg-[#FAF8F5]">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#3E4B39] font-sans-clean font-medium block">
              IE FUSHIMI · ARCHITECTURAL INSPECTOR
            </span>
            <h4 className="font-editorial text-xl sm:text-2xl text-[#1C1A17] tracking-tight">
              {image.title}
            </h4>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#1C1A17]/10 text-[#1C1A17] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* High-res Image canvas */}
        <div className="relative flex-1 min-h-[45vh] max-h-[68vh] bg-[#1C1A17] overflow-hidden flex items-center justify-center">
          <img
            src={image.url}
            alt={image.title}
            referrerPolicy="no-referrer"
            className="max-w-full max-h-[68vh] object-contain"
          />
        </div>

        {/* Bottom Details & Architectural Notes */}
        <div className="p-5 px-6 bg-[#FAF8F5] border-t border-[#1C1A17]/10 font-sans-clean space-y-2">
          {image.caption && (
            <p className="text-xs sm:text-sm text-[#1C1A17] leading-relaxed">
              {image.caption}
            </p>
          )}

          {image.note && (
            <div className="flex items-start space-x-2 text-[11px] text-[#3E4B39] bg-[#3E4B39]/8 p-2.5 rounded-md">
              <Sparkles className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <p>{image.note}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

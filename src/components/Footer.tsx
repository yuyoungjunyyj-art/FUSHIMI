import React from 'react';
import { Language } from '../types';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  return (
    <footer className="bg-[#1C1A17] text-[#FAF8F5] py-20 px-6 sm:px-12 border-t border-[#FAF8F5]/10">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="font-editorial text-4xl sm:text-5xl tracking-tight block">
                Ie
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-[#FAF8F5]/60 font-sans-clean block">
                {currentLang === 'ja'
                  ? '茶の家 · 伏見 · 京都'
                  : currentLang === 'ko'
                  ? '차의 집 · 후시미 · 교토'
                  : currentLang === 'zh'
                  ? '茶之宅邸 · 伏见 · 京都'
                  : 'House of Tea · Fushimi · Kyoto'}
              </span>
            </div>

            <p className="font-editorial text-lg text-[#FAF8F5]/75 italic max-w-md font-light leading-relaxed">
              {currentLang === 'ja'
                ? '茶を中心に構成された家。茶、菓子、庭、工芸。一杯を飲み、学び、集い、穏やかに過ごすための場所。'
                : currentLang === 'ko'
                ? '차를 중심으로 빚어진 집. 차. 음식. 정원. 공예. 차를 마시고, 배우며, 고요히 머무는 교토의 안식처.'
                : currentLang === 'zh'
                ? '以茶为灵魂构筑的百年町家。茶汤、茶点、苔庭与风物工华。静心品啜、感知流光、雅集对话的清幽栖所。'
                : 'A house organised around tea. Tea. Food. Garden. Craft. A place to drink, learn, gather and stay awhile.'}
            </p>
          </div>

          {/* Quick info links */}
          <div className="md:col-span-3 space-y-3 font-sans-clean text-xs">
            <span className="text-[10px] uppercase tracking-widest text-[#FAF8F5]/40 block">
              {currentLang === 'ja'
                ? '空間と体験'
                : currentLang === 'ko'
                ? '공간 및 체험'
                : currentLang === 'zh'
                ? '空间与体验'
                : 'Spaces & Experience'}
            </span>
            <ul className="space-y-2 text-[#FAF8F5]/80">
              <li>
                <a href="#house" className="hover:text-white transition-colors">
                  {currentLang === 'ja'
                    ? '表構え・外観'
                    : currentLang === 'ko'
                    ? '외관 및 현관'
                    : currentLang === 'zh'
                    ? '町家门面·外观'
                    : 'Main Gate (01)'}
                </a>
              </li>
              <li>
                <a href="#garden" className="hover:text-white transition-colors">
                  {currentLang === 'ja'
                    ? '中庭・巨石と水路'
                    : currentLang === 'ko'
                    ? '중정 정원 및 수로'
                    : currentLang === 'zh'
                    ? '中庭·巨石与石渠'
                    : 'The Garden (02)'}
                </a>
              </li>
              <li>
                <a href="#moss-wall" className="hover:text-white transition-colors">
                  {currentLang === 'ja'
                    ? '苔壁（MOSS WALL）'
                    : currentLang === 'ko'
                    ? '모스 월 (MOSS WALL)'
                    : currentLang === 'zh'
                    ? '青苔墙 (MOSS WALL)'
                    : 'The Moss Wall (02)'}
                </a>
              </li>
              <li>
                <a href="#second-floor" className="hover:text-white transition-colors">
                  {currentLang === 'ja'
                    ? '2階茶室・静寂'
                    : currentLang === 'ko'
                    ? '2층 다실 공간'
                    : currentLang === 'zh'
                    ? '二楼茶室·静心'
                    : 'Upper House (03)'}
                </a>
              </li>
              <li>
                <a href="#tea" className="hover:text-white transition-colors">
                  {currentLang === 'ja'
                    ? '日本茶・発泡玉露'
                    : currentLang === 'ko'
                    ? '스파클링 교쿠로'
                    : currentLang === 'zh'
                    ? '日本茶·气泡玉露'
                    : 'Sparkling Gyokuro (04)'}
                </a>
              </li>
              <li>
                <a href="#kitchen" className="hover:text-white transition-colors">
                  {currentLang === 'ja'
                    ? '焼きたてフィナンシェ'
                    : currentLang === 'ko'
                    ? '키친 피낭시에'
                    : currentLang === 'zh'
                    ? '现烤出炉费南雪'
                    : 'Fresh Financiers (05)'}
                </a>
              </li>
              <li>
                <a href="#archive" className="hover:text-white transition-colors">
                  {currentLang === 'ja'
                    ? '建築参考資料'
                    : currentLang === 'ko'
                    ? '건축 레퍼런스 아카이브'
                    : currentLang === 'zh'
                    ? '建筑参考档案'
                    : 'Reference Archive (08)'}
                </a>
              </li>
            </ul>
          </div>

          {/* House Address */}
          <div className="md:col-span-3 space-y-3 font-sans-clean text-xs">
            <span className="text-[10px] uppercase tracking-widest text-[#FAF8F5]/40 block">
              {currentLang === 'ja'
                ? '所在地・開館'
                : currentLang === 'ko'
                ? '위치 및 시간'
                : currentLang === 'zh'
                ? '地址与时间'
                : 'Address & Hours'}
            </span>
            <div className="space-y-1.5 text-[#FAF8F5]/80">
              <p>
                {currentLang === 'ja'
                  ? '京都府京都市伏見区'
                  : currentLang === 'ko'
                  ? '교토부 교토시 후시미구'
                  : currentLang === 'zh'
                  ? '日本京都府京都市伏见区'
                  : 'Fushimi-ku, Kyoto'}
              </p>
              <p className="text-[#FAF8F5]/60 text-[11px]">
                {currentLang === 'ja'
                  ? '京阪本線「伏見稲荷駅」徒歩4分'
                  : currentLang === 'ko'
                  ? '게이한 본선 후시미이나리역 도보 4분'
                  : currentLang === 'zh'
                  ? '京阪本线“伏见稻荷站”步行4分钟'
                  : '4 min from Keihan Fushimi Inari Station'}
              </p>
              <p className="pt-2">
                {currentLang === 'ja'
                  ? '木曜 — 月曜 · 10:00 — 18:00'
                  : currentLang === 'ko'
                  ? '목 — 월 · 10:00 — 18:00'
                  : currentLang === 'zh'
                  ? '周四至周一 · 10:00 — 18:00'
                  : 'Thu — Mon · 10:00 — 18:00'}
              </p>
              <p className="text-[#FAF8F5]/60 text-[11px]">
                {currentLang === 'ja'
                  ? '火曜・水曜 定休'
                  : currentLang === 'ko'
                  ? '화요일 · 수요일 정기 휴무'
                  : currentLang === 'zh'
                  ? '周二、周三定休'
                  : 'Closed Tue & Wed'}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & seal */}
        <div className="pt-8 border-t border-[#FAF8F5]/10 flex flex-col sm:flex-row justify-between items-center text-[11px] font-sans-clean text-[#FAF8F5]/40 gap-4">
          <p>© {new Date().getFullYear()} IE FUSHIMI — IE.HOUSE. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span>
              {currentLang === 'ja'
                ? '京都伝統町家再生建築'
                : currentLang === 'ko'
                ? '교토 전통 고택 복원 건축'
                : currentLang === 'zh'
                ? '京都传统町家再生建筑'
                : 'Contemporary Kyoto Machiya Architecture'}
            </span>
            <span>·</span>
            <span>
              {currentLang === 'ja'
                ? '単一品種日本茶'
                : currentLang === 'ko'
                ? '싱글 오리진 일본 차'
                : currentLang === 'zh'
                ? '单一品种日本茶'
                : 'Single-Origin Japanese Tea'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { X, Calendar, Users, Clock, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { EXPERIENCES_DATA } from '../data/houseData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const [selectedExperience, setSelectedExperience] = useState('experience');
  const [partySize, setPartySize] = useState('2');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('14:00');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1C1A17]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] w-full max-w-xl max-h-[90vh] rounded-2xl border border-[#1C1A17]/15 shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-[#1C1A17]/10 flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#3E4B39] font-sans-clean font-medium block">
              UPPER HOUSE TEA TASTINGS
            </span>
            <h3 className="font-editorial text-3xl text-[#1C1A17]">
              {currentLang === 'ja'
                ? '茶室のご予約'
                : currentLang === 'ko'
                ? '티 세션 예약 신청'
                : currentLang === 'zh'
                ? '二楼茶室品鉴预约'
                : 'Guided Tea Reservation'}
            </h3>
          </div>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              onClose();
            }}
            className="p-2 rounded-full hover:bg-[#1C1A17]/5 text-[#1C1A17]/70 hover:text-[#1C1A17] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 font-sans-clean">
              <div className="w-12 h-12 bg-[#3E4B39]/10 rounded-full flex items-center justify-center text-[#3E4B39]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-editorial text-2xl text-[#1C1A17]">
                {currentLang === 'ja'
                  ? 'ご予約リクエストを承りました'
                  : currentLang === 'ko'
                  ? '예약 신청이 접수되었습니다'
                  : currentLang === 'zh'
                  ? '已收到您的预约申请'
                  : 'Reservation Request Received'}
              </h4>
              <p className="text-xs text-[#1C1A17]/70 max-w-sm leading-relaxed">
                {currentLang === 'ja'
                  ? `ありがとうございます、${name}様。ご指定の日時（${preferredDate || 'ご希望日'} ${preferredTime}）の空席状況を確認の上、24時間以内にご案内メールをお送りいたします。`
                  : currentLang === 'ko'
                  ? `감사합니다, ${name}님. 선택하신 일정(${preferredDate || '희망 일정'} ${preferredTime})을 확인하여 입력해주신 이메일(${email})로 24시간 내 확정 안내를 드립니다.`
                  : currentLang === 'zh'
                  ? `衷心感谢您，${name}阁下。我们将核对您所选的时间（${preferredDate || '所选日期'} ${preferredTime}）之席位空余情况，并在24小时内向您的邮箱发送确认信函。`
                  : `Thank you, ${name}. We have logged your request for ${preferredDate || 'your selected date'} at ${preferredTime}. We will confirm your session via email within 24 hours.`}
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2 bg-[#1C1A17] text-[#FAF8F5] text-xs rounded-full cursor-pointer"
              >
                {currentLang === 'ja'
                  ? '閉じる'
                  : currentLang === 'ko'
                  ? '확인'
                  : currentLang === 'zh'
                  ? '关闭'
                  : 'Done'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-xs font-sans-clean">
              {/* Experience selection */}
              <div className="space-y-1.5">
                <label className="text-[#1C1A17]/70 font-medium block">
                  {currentLang === 'ja'
                    ? 'プログラムの選択'
                    : currentLang === 'ko'
                    ? '프로그램 선택'
                    : currentLang === 'zh'
                    ? '选择茶会体验项目'
                    : 'Select Experience'}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {EXPERIENCES_DATA.filter((e) => e.type !== 'drink').map((exp) => (
                    <button
                      key={exp.id}
                      type="button"
                      onClick={() => setSelectedExperience(exp.id)}
                      className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                        selectedExperience === exp.id
                          ? 'border-[#1C1A17] bg-[#FAF8F5] shadow-xs'
                          : 'border-[#1C1A17]/15 bg-[#EFECE6]/40 text-[#1C1A17]/70'
                      }`}
                    >
                      <span className="font-editorial text-base block text-[#1C1A17]">
                        {currentLang === 'zh' && exp.id === 'experience'
                          ? '伏水茶席：玉露四泡感官深潜'
                          : exp.title[currentLang] || exp.title.en}
                      </span>
                      <span className="text-[11px] text-[#3E4B39]">{exp.duration} · {exp.capacity}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[#1C1A17]/70 font-medium block flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>
                      {currentLang === 'ja'
                        ? '希望日'
                        : currentLang === 'ko'
                        ? '희망 날짜'
                        : currentLang === 'zh'
                        ? '预定日期'
                        : 'Preferred Date'}
                    </span>
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#1C1A17]/20 rounded-md focus:outline-none focus:border-[#1C1A17]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#1C1A17]/70 font-medium block flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>
                      {currentLang === 'ja'
                        ? '時間帯'
                        : currentLang === 'ko'
                        ? '시간'
                        : currentLang === 'zh'
                        ? '时段'
                        : 'Session Time'}
                    </span>
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#1C1A17]/20 rounded-md focus:outline-none focus:border-[#1C1A17]"
                  >
                    <option value="11:00">11:00 — 12:15</option>
                    <option value="14:00">14:00 — 15:15</option>
                    <option value="16:00">16:00 — 17:15</option>
                  </select>
                </div>
              </div>

              {/* Guests */}
              <div className="space-y-1.5">
                <label className="text-[#1C1A17]/70 font-medium block flex items-center space-x-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>
                    {currentLang === 'ja'
                      ? '人数'
                      : currentLang === 'ko'
                      ? '인원 수'
                      : currentLang === 'zh'
                      ? '人数'
                      : 'Number of Guests'}
                  </span>
                </label>
                <div className="flex space-x-2">
                  {['1', '2', '3', '4', '5-6'].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setPartySize(num)}
                      className={`px-3 py-1.5 rounded-md border text-center transition-all cursor-pointer ${
                        partySize === num
                          ? 'border-[#1C1A17] bg-[#1C1A17] text-[#FAF8F5]'
                          : 'border-[#1C1A17]/20 bg-[#FAF8F5] text-[#1C1A17]/70'
                      }`}
                    >
                      {num} {currentLang === 'ja' ? '名' : currentLang === 'ko' ? '인' : currentLang === 'zh' ? '位' : 'ppl'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[#1C1A17]/70 font-medium block">
                    {currentLang === 'ja'
                      ? 'お名前'
                      : currentLang === 'ko'
                      ? '성함'
                      : currentLang === 'zh'
                      ? '姓名'
                      : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kenjiro / Min-jun / Alex / 李华"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#1C1A17]/20 rounded-md focus:outline-none focus:border-[#1C1A17]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#1C1A17]/70 font-medium block">
                    {currentLang === 'ja'
                      ? 'メールアドレス'
                      : currentLang === 'ko'
                      ? '이메일 주소'
                      : currentLang === 'zh'
                      ? '电子邮箱'
                      : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#1C1A17]/20 rounded-md focus:outline-none focus:border-[#1C1A17]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[#1C1A17]/70 font-medium block">
                  {currentLang === 'ja'
                    ? '特別なご要望（アレルギー等）'
                    : currentLang === 'ko'
                    ? '요청사항 및 알레르기 안내'
                    : currentLang === 'zh'
                    ? '特殊饮食忌口或说明（过敏等）'
                    : 'Notes & Dietary Inquiries'}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={
                    currentLang === 'ja'
                      ? '自由にご記入ください'
                      : currentLang === 'ko'
                      ? '알레르기나 선호하시는 차가 있다면 적어주세요'
                      : currentLang === 'zh'
                      ? '如有食物过敏或特别偏好，请在此备注'
                      : 'Any dietary restrictions or preferences'
                  }
                  className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#1C1A17]/20 rounded-md focus:outline-none focus:border-[#1C1A17]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#1C1A17] text-[#FAF8F5] hover:bg-[#3E4B39] rounded-full text-xs font-medium tracking-wider transition-colors shadow-xs cursor-pointer"
              >
                {currentLang === 'ja'
                  ? '予約リクエストを送信する'
                  : currentLang === 'ko'
                  ? '예약 신청 완료하기'
                  : currentLang === 'zh'
                  ? '提交茶室预约申请'
                  : 'Submit Reservation Request'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

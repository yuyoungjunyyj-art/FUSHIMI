import React, { useState, useEffect, useRef } from 'react';
import { Eye, CheckCircle2, Upload, Image as ImageIcon, Trash2 } from 'lucide-react';
import { Language, SpaceItem } from '../types';
import { SPACES_DATA } from '../data/houseData';
import { formatFloorHeading } from '../utils/typography';

interface SectionSecondFloorProps {
  currentLang: Language;
  onOpenImageModal: (image: { title: string; url: string; caption?: string; note?: string }) => void;
}

export const SectionSecondFloor: React.FC<SectionSecondFloorProps> = ({
  currentLang,
  onOpenImageModal,
}) => {
  const secondFloorData: SpaceItem = SPACES_DATA[4];
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // User uploaded 2nd floor photos storage
  const [uploadedPhotos, setUploadedPhotos] = useState<{ id: string; name: string; dataUrl: string }[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ie_fushimi_2f_photos');
      if (saved) {
        setUploadedPhotos(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    (Array.from(files) as File[]).forEach((file: File) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        if (dataUrl) {
          const newPhoto = {
            id: Date.now().toString() + Math.random().toString(36).substring(2, 6),
            name: file.name,
            dataUrl,
          };
          setUploadedPhotos((prev) => {
            const updated = [newPhoto, ...prev];
            try {
              localStorage.setItem('ie_fushimi_2f_photos', JSON.stringify(updated));
            } catch {
              // local storage size limit fallback
            }
            return updated;
          });
        }
      };
      reader.readAsDataURL(file);
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDeletePhoto = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setUploadedPhotos((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      try {
        localStorage.setItem('ie_fushimi_2f_photos', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  return (
    <section id="second-floor" className="py-24 px-6 sm:px-12 bg-[#FAF8F5] border-t border-[#1C1A17]/10">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs tracking-[0.25em] uppercase text-[#3E4B39] font-sans-clean font-medium">
            {currentLang === 'ja'
              ? '2階の静寂 · 03'
              : currentLang === 'ko'
              ? '2층 다실 공간 · 03'
              : currentLang === 'zh'
              ? '二楼茶寮 · 03'
              : 'UPPER HOUSE · 03'}
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1C1A17] [word-break:keep-all]">
            {currentLang === 'ja'
              ? '2階へ上がると、茶の時間がゆっくりと流れる。'
              : currentLang === 'ko'
              ? formatFloorHeading('2층, 차의 시간이 한층 더 느려지는 곳.', true)
              : currentLang === 'zh'
              ? '拾级而上，茶光渐缓。'
              : 'Upstairs, tea slows down.'}
          </h2>
          <p className="text-base sm:text-lg text-[#1C1A17]/75 font-sans-clean font-light leading-relaxed">
            {currentLang === 'ja'
              ? '2階へ上がると、外界の喧騒から隔絶された静寂が広がります。瓦屋根と中庭を見下ろしながら、より深い茶の世界へ足を踏み入れる場所。'
              : currentLang === 'ko'
              ? '계단을 올라 2층에 닿으면, 한층 더 차분하고 깊은 정적이 흐릅니다. 기와지붕과 중정을 내려다보며 오롯이 차의 세계에 몰입하는 다실입니다.'
              : currentLang === 'zh'
              ? '步入二楼，市井喧嚣悄然退散。俯瞰瓦垄鳞次与中庭绿意，沉浸于纯粹幽微的单品茶境。'
              : 'Upstairs, tea slows down. A dedicated sanctuary for guided tastings, rare single cultivars, and contemplative view over the courtyard.'}
          </p>
        </div>

        {/* 05: SECOND FLOOR VIEW — Cleaned Machiya Perspective */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-7 space-y-4">
            <div
              className="relative rounded-lg overflow-hidden bg-[#EAE6DF] aspect-[16/10] shadow-[0_16px_36px_-10px_rgba(28,26,23,0.14)] ring-1 ring-[#1C1A17]/8 cursor-pointer group"
              onClick={() =>
                onOpenImageModal({
                  title: secondFloorData.title[currentLang] || secondFloorData.title.en,
                  url: secondFloorData.imageUrl,
                  caption: secondFloorData.cleanedDescription[currentLang] || secondFloorData.cleanedDescription.en,
                  note: '5. IE FUSHIMI - IE.HOUSE View of the second floor (Cleaned Machiya Roofscape & Balustrade)',
                })
              }
            >
              <img
                src={secondFloorData.imageUrl}
                alt={secondFloorData.title[currentLang] || secondFloorData.title.en}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              {/* Subtle bottom gradient scrim / shadow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1C1A17]/65 via-[#1C1A17]/15 to-transparent" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#FAF8F5]/10" />

              {/* Clean Tag */}
              <div className="relative z-10 absolute top-4 left-4 flex items-center space-x-2">
                <span className="bg-[#FAF8F5]/95 backdrop-blur-xs text-[#1C1A17] text-[11px] font-sans-clean px-3 py-1 rounded-sm uppercase tracking-wider shadow-xs">
                  {currentLang === 'ja'
                    ? '5. 2階からの眺望（整理済み）'
                    : currentLang === 'ko'
                    ? '5. 2층 전경 (정돈본)'
                    : currentLang === 'zh'
                    ? '5. 二楼视野（纯化）'
                    : '5. Cleaned 2nd Floor View'}
                </span>
                <span className="bg-[#3E4B39] text-[#FAF8F5] text-[10px] font-sans-clean px-2 py-1 rounded-sm tracking-wider uppercase shadow-xs">
                  {currentLang === 'ja'
                    ? '鉄骨デッキ消去'
                    : currentLang === 'ko'
                    ? '좌측 데크 삭제'
                    : currentLang === 'zh'
                    ? '剥离现代钢架'
                    : 'Deck Removed'}
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
          </div>

          {/* Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs tracking-widest text-[#3E4B39] font-sans-clean uppercase font-medium">
                {secondFloorData.kicker[currentLang] || secondFloorData.kicker.en}
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#1C1A17] tracking-tight [word-break:keep-all]">
                {formatFloorHeading(
                  secondFloorData.title[currentLang] || secondFloorData.title.en,
                  currentLang === 'ko'
                )}
              </h3>
              <p className="font-editorial text-lg italic text-[#1C1A17]/70">
                {secondFloorData.subtitle[currentLang] || secondFloorData.subtitle.en}
              </p>
            </div>

            <div className="space-y-4 font-sans-clean text-sm sm:text-base text-[#1C1A17]/75 leading-relaxed font-light">
              <p>{secondFloorData.description[currentLang] || secondFloorData.description.en}</p>
              <p className="text-xs text-[#1C1A17]/60 leading-normal">
                {secondFloorData.extendedDescription?.[currentLang] || secondFloorData.extendedDescription?.en}
              </p>
            </div>

            {/* Architectural Features */}
            <div className="pt-2 border-t border-[#1C1A17]/10 space-y-2.5">
              <span className="text-[11px] uppercase tracking-wider font-sans-clean text-[#1C1A17]/50 block">
                {currentLang === 'ja'
                  ? '2階空間の特長'
                  : currentLang === 'ko'
                  ? '2층 주요 특징'
                  : currentLang === 'zh'
                  ? '二楼空间特质'
                  : 'Upper Machiya Features'}
              </span>
              <div className="space-y-2">
                {secondFloorData.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-sans-clean text-[#1C1A17]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3E4B39]" />
                    <span>{feature[currentLang] || feature.en}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated "2nd Floor Detailed Photos Update Slot" */}
        <div className="p-8 rounded-xl bg-[#EFECE6]/50 border border-[#1C1A17]/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-xs uppercase tracking-widest text-[#3E4B39] font-sans-clean font-medium">
                  {currentLang === 'ja'
                    ? '予告・2階ディテール'
                    : currentLang === 'ko'
                    ? '2층 디테일 사진 슬롯'
                    : currentLang === 'zh'
                    ? '二楼细节摄影'
                    : '2nd Floor Photography'}
                </span>
                <span className="bg-[#3E4B39]/10 text-[#3E4B39] text-[10px] px-2 py-0.5 rounded-full font-sans-clean">
                  {currentLang === 'ja'
                    ? '追って公開予定'
                    : currentLang === 'ko'
                    ? '추후 추가 예정'
                    : currentLang === 'zh'
                    ? '即将呈现'
                    : 'Coming Soon'}
                </span>
              </div>
              <h4 className="font-editorial text-2xl text-[#1C1A17]">
                {currentLang === 'ja'
                  ? '2階のディテール写真（畳の間・光の移ろい）'
                  : currentLang === 'ko'
                  ? '2층 상세 사진 업데이트 ("2층에 대한 디테일한 사진은 나중에 따로 올려줄게")'
                  : currentLang === 'zh'
                  ? '二楼茶室细节图辑（榻榻米·光影流转）'
                  : 'Detailed Second Floor Photographs & Gallery'}
              </h4>
              <p className="text-xs text-[#1C1A17]/70 font-sans-clean max-w-2xl">
                {currentLang === 'ja'
                  ? '2階の内部空間（茶室・床の間・障子越しの光）の写真は追って追加されます。事前にアップロードしてプレビューを確認することも可能です。'
                  : currentLang === 'ko'
                  ? '안내해주신 대로 2층의 세부 사진이 준비되는 대로 이 자리에 바로 채워집니다. 아래 업로드 버튼을 통해 언제든 사진을 미리 추가하거나 확인하실 수 있습니다.'
                  : currentLang === 'zh'
                  ? '二楼茶室空间细节（榻榻米、壁龛与障子纸透过的微光）照片随后上传呈现。您也可以点击下方按钮预先上传与预览。'
                  : 'As noted, detailed interior photos of the upper tea sanctuary will be uploaded soon. You can also upload test photos below.'}
              </p>
            </div>

            {/* Upload Button */}
            <div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleFileUpload}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center space-x-2 bg-[#1C1A17] text-[#FAF8F5] hover:bg-[#3E4B39] text-xs px-4 py-2 rounded-full font-sans-clean tracking-wider transition-colors shadow-xs cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>
                  {currentLang === 'ja'
                    ? '2階写真を追加する'
                    : currentLang === 'ko'
                    ? '2층 사진 추가하기'
                    : currentLang === 'zh'
                    ? '上传二楼摄影'
                    : 'Add 2nd Floor Photo'}
                </span>
              </button>
            </div>
          </div>

          {/* Uploaded or Preview Photos Grid */}
          {uploadedPhotos.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-2">
              {uploadedPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="relative group rounded-lg overflow-hidden aspect-[4/3] bg-[#FAF8F5] border border-[#1C1A17]/10 cursor-pointer shadow-[0_8px_20px_-6px_rgba(28,26,23,0.12)]"
                  onClick={() =>
                    onOpenImageModal({
                      title: photo.name,
                      url: photo.dataUrl,
                      caption: '2nd Floor Interior Detail Photo',
                      note: 'Uploaded asset for the upper tea sanctuary.',
                    })
                  }
                >
                  <img src={photo.dataUrl} alt={photo.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1C1A17]/70 via-transparent to-transparent" />
                  <button
                    type="button"
                    onClick={(e) => handleDeletePhoto(photo.id, e)}
                    className="absolute top-2 right-2 p-1.5 bg-[#1C1A17]/80 text-[#FAF8F5] rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700 cursor-pointer"
                    title="Delete photo"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                  <div className="absolute bottom-0 inset-x-0 p-2.5 text-[11px] text-[#FAF8F5] truncate font-sans-clean">
                    {photo.name}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border border-dashed border-[#1C1A17]/20 rounded-lg p-8 flex flex-col items-center justify-center space-y-2 text-center cursor-pointer hover:border-[#1C1A17]/50 transition-colors bg-[#FAF8F5]/50"
            >
              <div className="p-3 bg-[#FAF8F5] rounded-full border border-[#1C1A17]/10">
                <ImageIcon className="w-5 h-5 text-[#3E4B39]" />
              </div>
              <p className="text-xs font-sans-clean text-[#1C1A17] font-medium">
                {currentLang === 'ja'
                  ? 'クリックまたはドラッグ＆ドロップで2階写真を追加'
                  : currentLang === 'ko'
                  ? '클릭 또는 드래그하여 2층 상세 사진 추가 (나중에 올려주실 사진 지원)'
                  : currentLang === 'zh'
                  ? '点击或拖拽上传二楼详细摄影（支持预留照片槽位）'
                  : 'Click or drop 2nd floor detail photographs here'}
              </p>
              <p className="text-[11px] font-sans-clean text-[#1C1A17]/50">
                JPEG, PNG, WebP · High-resolution machiya details
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

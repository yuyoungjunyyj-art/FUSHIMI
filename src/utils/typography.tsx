import React from 'react';

/**
 * Ensures Korean numerals in headings (such as "1층 카페 공간과 티 카운터", "2층, 차의 시간이...", "2층 전경...")
 * match the optical size, weight, baseline, and font of the accompanying Hangul text,
 * preventing old-style Latin serif figures from appearing noticeably smaller.
 */
export function formatFloorHeading(text: string, isKorean: boolean): React.ReactNode {
  if (!isKorean) return text;

  // Split by number followed by 층 (e.g. "1층", "2층")
  const parts = text.split(/([0-9]+층)/g);
  if (parts.length === 1) return text;

  return (
    <>
      {parts.map((part, i) => {
        const floorMatch = part.match(/^([0-9]+)(층)$/);
        if (floorMatch) {
          return (
            <span
              key={i}
              style={{ whiteSpace: 'nowrap' }}
              className="inline-flex items-baseline"
            >
              <span className="num-heading-match">{floorMatch[1]}</span>
              <span>{floorMatch[2]}</span>
            </span>
          );
        }
        return part;
      })}
    </>
  );
}

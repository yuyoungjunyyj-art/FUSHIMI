// Curated architectural and Kyoto material imagery matching the uploaded references with pristine art direction

// 1 to 7: Key House and Experience regenerated images
import heroGateImg from '../assets/images/regenerated_image_1788926233645.jpg';
import houseGateImg from '../assets/images/regenerated_image_1788926235603.jpg';
import firstFloorCafeImg from '../assets/images/regenerated_image_1788926237721.jpg';
import theGardenImg from '../assets/images/regenerated_image_1788926239372.jpg';
import mossWallImg from '../assets/images/regenerated_image_1788926242106.jpg';
import secondFloorViewImg from '../assets/images/regenerated_image_1788926243784.jpg';
import financiersImg from '../assets/images/regenerated_image_1788926245493.jpg';

// 8 to 21: The 14 Reference Archive regenerated images
import ref01Img from '../assets/images/regenerated_image_1788926246611.jpg';
import ref02Img from '../assets/images/regenerated_image_1788926248380.jpg';
import ref03Img from '../assets/images/regenerated_image_1788926250404.jpg';
import ref04Img from '../assets/images/regenerated_image_1788926252128.jpg';
import ref05Img from '../assets/images/regenerated_image_1788926253742.jpg';
import ref06Img from '../assets/images/regenerated_image_1788926255632.jpg';
import ref07Img from '../assets/images/regenerated_image_1788926257099.jpg';
import ref08Img from '../assets/images/regenerated_image_1788926258123.jpg';
import ref09Img from '../assets/images/regenerated_image_1788926259071.jpg';
import ref10Img from '../assets/images/regenerated_image_1788926260036.jpg';
import ref11Img from '../assets/images/regenerated_image_1788926260981.jpg';
import ref12Img from '../assets/images/regenerated_image_1788926261725.jpg';
import ref13Img from '../assets/images/regenerated_image_1788926262767.jpg';
import ref14Img from '../assets/images/regenerated_image_1788926264049.jpg';

export interface ImageAsset {
  id: string;
  name: string;
  category: 'gate' | 'cafe' | 'garden' | 'mosswall' | 'secondfloor' | 'tea' | 'financier' | 'reference';
  url: string;
  alt: string;
  caption: string;
  cleanEditNotes?: string;
  referenceIndex?: number;
}

export const HOUSE_IMAGES = {
  // Hero Main Gate
  heroGate: {
    id: 'hero-gate',
    title: 'IE FUSHIMI — Main Gate (Kyoto Machiya)',
    url: heroGateImg,
    cleanEditNotes: 'Telephone pole, overhead cables, pavement stickers, and side distractions digitally cleared to highlight pure machiya timber louvers, traditional tile roof, and the warm threshold.',
  },

  // 1. Cleaned Main Gate - Restored Kyoto Machiya Facade (Wires, pole, and clutter eliminated)
  mainGateClean: {
    id: 'main-gate-clean',
    title: 'IE FUSHIMI — Main Gate (Restored Machiya Facade)',
    url: houseGateImg,
    cleanEditNotes: 'Telephone pole, overhead cables, pavement stickers, and side distractions digitally cleared to highlight pure machiya timber louvers, traditional tile roof, and the warm threshold.',
  },

  // 2. 1st Floor Cafe Area - Tatami stone benches, round Akari lantern, Bonsai, warm timber counter
  firstFloorCafe: {
    id: 'first-floor-cafe',
    title: '1st Floor Cafe Area & Tea Counter',
    url: firstFloorCafeImg,
    cleanEditNotes: 'Interior composition emphasizing low tatami stone bench blocks with floor underglow, miniature bonsai, spherical paper lantern, and aged wood tea counter.',
  },

  // 3. THE Garden - Central courtyard with monumental stone, blossoming tree, water rill, and engawa
  theGarden: {
    id: 'the-garden',
    title: 'THE Garden — A Room Without a Roof',
    url: theGardenImg,
    cleanEditNotes: 'Enclosed machiya courtyard centering the natural boulder tree anchor, flowing stone water channel, timber engawa daybed, and living moss wall backdrop.',
  },

  // 4. MOSS WALL - Architectural living moss wall with ferns and moisture
  mossWall: {
    id: 'moss-wall',
    title: 'THE MOSS WALL — Living Architectural Texture',
    url: mossWallImg,
    cleanEditNotes: 'Vertical relief of dense cushion moss, delicate wild ferns, gnarled timber, illuminated by warm recessed architectural grazing light.',
  },

  // 5. 2nd Floor View - Upper perspective over courtyard & tile roofs (left rusty deck removed)
  secondFloorView: {
    id: 'second-floor-view',
    title: 'View of the Second Floor & Tiled Courtyard',
    url: secondFloorViewImg,
    cleanEditNotes: 'Framed architectural perspective overlooking traditional kawara roof tiles and inner courtyard lantern. The distracting steel walkway on the left has been excised.',
  },

  // Signature: Sparkling Gyokuro
  sparklingGyokuro: {
    id: 'sparkling-gyokuro',
    title: 'Signature Sparkling Gyokuro',
    url: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=85',
    caption: 'Gyokuro with fine effervescence. Cold carbonated umami.',
  },

  // Financiers in wooden cone
  financiers: {
    id: 'financiers-cone',
    title: 'Warm Brown Butter Financiers',
    url: financiersImg,
    caption: 'Baked fresh throughout the day, served in folded wood veneer cone with green maple leaves.',
  },

  // Tea craft & brewing
  teaRitual: {
    id: 'tea-ritual',
    title: 'Tea Brewing & Ceramics',
    url: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1600&q=85',
    caption: 'Leaf, water, temperature, time. Pure Japanese tea craft.',
  },

  // Water falling & dew
  waterStone: {
    id: 'water-stone',
    title: 'Fushimi Groundwater & Stone',
    url: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1600&q=85',
    caption: 'The celebrated soft mineral water of Fushimi basin.',
  },
};

// The 14 Reference Photo Material Archive
export const REFERENCE_ARCHIVE: {
  number: string;
  titleEn: string;
  titleJa: string;
  titleKo: string;
  category: string;
  descriptionEn: string;
  descriptionKo: string;
  detail: string;
  imageUrl: string;
}[] = [
  {
    number: 'REF 01',
    titleEn: 'Main Gate & Machiya Facade',
    titleJa: '町家表構え・主門',
    titleKo: '마치야 전면 게이트',
    category: 'Exterior',
    descriptionEn: 'The traditional two-story Kyoto machiya street frontage, featuring vertical timber louvers and pitched kawara tile eaves.',
    descriptionKo: '전통 교토 마치야의 목재 루버와 기와 처마가 주는 차분하고 단정한 거리 풍경.',
    detail: 'Restored cedar louvers, deep eaves, welcoming earthen entryway.',
    imageUrl: ref01Img,
  },
  {
    number: 'REF 02',
    titleEn: '1st Floor Cafe Area & Tatami Plinths',
    titleJa: '1階 カフェ空間と畳石台',
    titleKo: '1층 카페 공간과 다다미 석재 좌석',
    category: 'Interior',
    descriptionEn: 'Warm timber tiles, floating tatami plinths with subtle ground glow, bonsai, and large Akari paper sphere.',
    descriptionKo: '은은한 하부 간접 조명의 다다미 석재 좌대와 분재, 한지 조명이 빚어내는 아늑한 공간감.',
    detail: 'Akari paper lighting, honed stone, igusa tatami, acoustic wood slat walls.',
    imageUrl: ref02Img,
  },
  {
    number: 'REF 03',
    titleEn: 'THE Garden — Courtyard Boulder & Rill',
    titleJa: '中庭・巨石と水路',
    titleKo: '중정 정원 — 거석과 수로',
    category: 'Garden',
    descriptionEn: 'A room without a roof centering a natural monumental boulder with a budding tree and shallow stone water rill.',
    descriptionKo: '지붕 없는 방 — 거대한 자연석에 뿌리내린 나무와 잔잔하게 흐르는 석조 수로.',
    detail: 'Monolithic granite stone, cherry blossom tree, linear water trough, engawa deck.',
    imageUrl: ref03Img,
  },
  {
    number: 'REF 04',
    titleEn: 'The Living Moss Wall',
    titleJa: '苔壁（モスウォール）',
    titleKo: '이끼 벽 (MOSS WALL)',
    category: 'Garden',
    descriptionEn: 'Vertical living tapestry of lush Kyoto moss varieties and ferns, thriving in the courtyard moisture and architectural light.',
    descriptionKo: '중정의 자연 습도와 섬세한 건축 조명 속에서 숨 쉬는 교토의 천연 이끼 벽.',
    detail: 'Kyoto velvet cushion moss, mountain ferns, weathered branch, linear drip system.',
    imageUrl: ref04Img,
  },
  {
    number: 'REF 05',
    titleEn: 'Second Floor Roofscape & Courtyard View',
    titleJa: '2階からの眺望と瓦屋根',
    titleKo: '2층 전경과 기와지붕 풍경',
    category: 'Architecture',
    descriptionEn: 'High-angle perspective looking down into the courtyard garden past traditional tiled roofs and timber balustrades.',
    descriptionKo: '기와지붕 너머 고즈넉한 중정 석등과 나무를 내려다보는 2층의 시선 (외부 철제 데크 정돈).',
    detail: 'Kawara tile ridges, wooden railings, courtyard stone lantern, quiet contemplative view.',
    imageUrl: ref05Img,
  },
  {
    number: 'REF 06',
    titleEn: 'Ancient Earthen Cellar Stairs',
    titleJa: '土間と地下室への石段',
    titleKo: '지하 저장고로 이어지는 옛 돌계단',
    category: 'Archive',
    descriptionEn: 'Centuries-old stone staircase cut into the foundation, historically tapping the cool underground water level of Fushimi.',
    descriptionKo: '후시미 지하수의 냉기와 역사를 간직한 채 토마 바닥 아래로 이어지는 석조 계단.',
    detail: 'Honed stone risers, earthen wall foundation, cool underground thermal storage.',
    imageUrl: ref06Img,
  },
  {
    number: 'REF 07',
    titleEn: 'Machiya Ridge Beam & Calligraphy Plaque',
    titleJa: '梁組と棟札（むなふだ）',
    titleKo: '상량 명판(棟札)과 대들보',
    category: 'Craft',
    descriptionEn: 'Massive weathered pine roof beam bearing the original house dedication plaque hand-inked in sumi calligraphy.',
    descriptionKo: '집이 지어진 날짜와 축복을 묵서로 기록한 옛 상량 목판과 거대한 소나무 보.',
    detail: 'Aged pine trunk, hand-sawn joinery, sumi ink calligraphy, structural memory.',
    imageUrl: ref07Img,
  },
  {
    number: 'REF 08',
    titleEn: 'Ground Floor Plaster Wall & Vintage Ladder',
    titleJa: '土壁と木製梯子',
    titleKo: '흙벽과 다락 사다리',
    category: 'Archive',
    descriptionEn: 'Raw clay plaster walls with organic straw binders, paired with an antique wooden tansu chest and loft ladder.',
    descriptionKo: '볏짚이 섞인 전통 황토벽과 세월의 손때가 묻은 목재 수납장, 다락 사다리.',
    detail: 'Kyoto juraku clay plaster, cedar frame, patinaed furniture joinery.',
    imageUrl: ref08Img,
  },
  {
    number: 'REF 09',
    titleEn: 'Raking Sunlight on Textured Clay',
    titleJa: '土壁に射す朝の光',
    titleKo: '흙벽에 비치는 아침 햇살',
    category: 'Atmosphere',
    descriptionEn: 'Low morning Kyoto sun casting diagonal geometric shadows from lattice screens across tactile clay and bamboo.',
    descriptionKo: '격자창을 통과한 아침 햇살이 질감 있는 흙벽과 대나무 의자에 드리우는 서정적인 음영.',
    detail: 'Earthen wall with lime wash, woven rattan chair, ambient daylight study.',
    imageUrl: ref09Img,
  },
  {
    number: 'REF 10',
    titleEn: 'Quiet Tatami Room & Tokonoma Alcove',
    titleJa: '静謐な和室と床の間',
    titleKo: '정갈한 다다미방과 토코노마',
    category: 'Interior',
    descriptionEn: 'Harmonious proportioned tatami matting with subtle wood sliding fusuma doors, cedar ceilings, and soft shoji light.',
    descriptionKo: '자연 채광을 부드럽게 걸러내는 창호지와 다다미, 목재 미닫이문이 이루는 고요한 다실.',
    detail: 'Natural rush tatami borders, cedar ceiling boards, recessed display tokonoma.',
    imageUrl: ref10Img,
  },
  {
    number: 'REF 11',
    titleEn: 'Vintage Ceramic Rotary Switches',
    titleJa: 'アンティーク磁器タンブラースイッチ',
    titleKo: '빈티지 도자기 로터리 스위치',
    category: 'Detail',
    descriptionEn: 'Three historic porcelain-and-brass rotary light switches preserved intact upon the warm earthen plaster surface.',
    descriptionKo: '오랜 세월의 손길이 닿은 3개의 도자기 및 황동 회전식 전등 스위치.',
    detail: 'Glazed white ceramic bases, patinated brass knurled toggles, tactile click.',
    imageUrl: ref11Img,
  },
  {
    number: 'REF 12',
    titleEn: 'Autumn Grasses in Woven Baskets',
    titleJa: '通り庭の野花と竹籠',
    titleKo: '복도 끝 바구니의 들풀과 억새',
    category: 'Seasonal',
    descriptionEn: 'Pampas plumes and seasonal field flora arranged in hand-woven rush baskets resting on the cool stone floor.',
    descriptionKo: '어두운 복도 끝에 무심한 듯 놓인 바구니 속 계절의 들풀과 황금빛 억새.',
    detail: 'Hand-split bamboo baskets, dried pampas plume, goldenrod, filtered passage light.',
    imageUrl: ref12Img,
  },
  {
    number: 'REF 13',
    titleEn: 'Macro Study of Kyoto Moss & Ferns',
    titleJa: '庭石に息づく苔と羊歯',
    titleKo: '정원 석재 틈새의 이끼와 양치식물',
    category: 'Material',
    descriptionEn: 'Lush velvet moss carpets meeting weathered garden stones with young lime-green fern fronds drinking moisture.',
    descriptionKo: '정원 바위 틈에서 물기를 머금고 싱그럽게 자라나는 연둣빛 양치식물과 이끼 군락.',
    detail: 'Hypnum plumaeforme moss, tender fern pinnules, moist Kyoto volcanic rock.',
    imageUrl: ref13Img,
  },
  {
    number: 'REF 14',
    titleEn: 'Warm Financiers in Wooden Cone',
    titleJa: '焦がしバターの小さなフィナンシェ',
    titleKo: '우드 콘에 담긴 따뜻한 피낭시에',
    category: 'Kitchen',
    descriptionEn: 'Golden, crisp-edged financiers baked with brown butter, nestled in a branded wood-veneer cone with fresh maple leaf.',
    descriptionKo: '매일 갓 구워낸 버터 풍미 가득한 피낭시에, 도장 찍힌 우드 콘에 단풍잎과 함께 제공.',
    detail: 'Beurre noisette, almond flour, steamed cedar veneer cone, red cinnabar seal.',
    imageUrl: ref14Img,
  },
];

import tokyoBg from "../../img/TOKYO/TOKYO-BG.png";
import tokyoBuilding from "../../img/TOKYO/TOKYO-TEMPLE.png";
import osakaBg from "../../img/OSAKA/Osaka-bg.png";
import osakaBuilding from "../../img/OSAKA/Osaka-temple-cutout.png";
import kyotoBg from "../../img/KYOTO/Kyoto-bg.png";
import kyotoBuilding from "../../img/KYOTO/Kyoto-building-cutout.png";
import hokkaidoBg from "../../img/HOKKAIDO/Hokkaido-bg.png";
import hokkaidoBuilding from "../../img/HOKKAIDO/Hokkaido-building-cutout.png";
import sensoji from "../assets/places/tokyo/sensoji-temple.jpg";
import meijiJingu from "../assets/places/tokyo/meiji-jingu-shrine.jpg";
import shibuyaCrossing from "../assets/places/tokyo/shibuya-scramble-crossing.jpg";
import osakaCastle from "../assets/places/osaka/osaka-castle.jpg";
import dotonbori from "../assets/places/osaka/dotonbori.jpg";
import umedaSky from "../assets/places/osaka/umeda-sky-building.jpg";
import kiyomizudera from "../assets/places/kyoto/kiyomizudera-temple.jpg";
import fushimiInari from "../assets/places/kyoto/fushimi-inari-taisha.jpg";
import arashiyama from "../assets/places/kyoto/arashiyama-bamboo-grove.jpg";
import bluePond from "../assets/places/hokkaido/shirogane-blue-pond.jpg";
import farmTomita from "../assets/places/hokkaido/farm-tomita.jpg";
import jigokudani from "../assets/places/hokkaido/noboribetsu-jigokudani.jpg";

export const destinations = {
  tokyo: {
    index: "01",
    slug: "tokyo",
    name: "Tokyo",
    displayName: "TOKYO",
    jp: "東京",
    region: "Urban Rituals",
    bg: tokyoBg,
    building: tokyoBuilding,
    accent: "#D92D2D",
    deep: "#070707",
    title: "Neon, temples and metropolitan rhythm.",
    description:
      "A private route through quiet mornings, electric nights, hidden food streets and old rituals inside the modern city.",
    sceneCopy:
      "Where the city moves fast, silence still has its own architecture.",
    philosophy:
      "Tokyo works best when it is composed by contrast: a tea room before the first train rush, a gallery corridor after lunch, a counter seat at midnight, a shrine path that somehow stays quiet while towers flicker above it.",
    mood:
      "Precise, electric, private. The city is treated as a sequence of rooms, not a checklist.",
    facts: ["3-5 curated days", "Private transfers", "Counter dining", "Quiet morning access"],
    notes: [
      {
        title: "Morning Temples",
        text: "Begin early, when incense hangs low and the city has not yet turned loud.",
      },
      {
        title: "Night Streets",
        text: "Small alleys, warm signs, chefs who work by memory and repetition.",
      },
      {
        title: "Design Stores",
        text: "Objects, paper, ceramics and fashion selected for texture rather than volume.",
      },
    ],
    sequence: [
      "Arrive through a calm transfer and a low-friction check-in.",
      "Move from shrine paths to contemporary galleries and hidden retail.",
      "Close with private dining, listening bars and a city-light drive.",
    ],
    attractions: [
      {
        title: "Senso-ji Temple, Asakusa",
        image: sensoji,
        text: "Tokyo's oldest Buddhist temple, Senso-ji captures the timeless spirit of old Edo with its grand red gate, incense-filled courtyard, and atmospheric approach through Nakamise Street.",
      },
      {
        title: "Meiji Jingu Shrine, Harajuku",
        image: meijiJingu,
        text: "Hidden within a vast sacred forest, Meiji Jingu offers a rare moment of calm in central Tokyo - a refined encounter with Shinto tradition, nature, and understated Japanese elegance.",
      },
      {
        title: "Shibuya Scramble Crossing",
        image: shibuyaCrossing,
        text: "A cinematic symbol of modern Tokyo, Shibuya Crossing transforms the city's rhythm into pure motion - neon, architecture, and thousands of people moving in perfect urban choreography.",
      },
    ],
    cta: "Design my Tokyo route",
  },
  osaka: {
    index: "02",
    slug: "osaka",
    name: "Osaka",
    displayName: "OSAKA",
    jp: "大阪",
    region: "Food Current",
    bg: osakaBg,
    building: osakaBuilding,
    bgScaleStart: 1.08,
    bgScaleEnd: 1.15,
    accent: "#17345A",
    deep: "#071222",
    title: "A city of appetite, water and after-dark energy.",
    description:
      "Osaka is shaped around taste: market mornings, river reflections, castle silhouettes and private tables where the night feels generous.",
    sceneCopy:
      "The city opens through food first, then through water, craft and conversation.",
    philosophy:
      "We build Osaka as a warm, kinetic chapter. It is less about standing still and more about following a pulse: steam from a stall, a private counter, a river taxi, a late walk where blue signs dissolve into the water.",
    mood:
      "Generous, vivid, nocturnal. Osaka gives the route texture and appetite.",
    facts: ["2-3 vivid days", "Food-led routing", "River movement", "Private counter seats"],
    notes: [
      {
        title: "Market Mornings",
        text: "Start with produce, knives, steam and the practical beauty of a city that cooks.",
      },
      {
        title: "Castle Light",
        text: "Historic forms framed by modern movement, best seen in soft afternoon contrast.",
      },
      {
        title: "After Dark",
        text: "The strongest Osaka moments often happen when the route loosens after dinner.",
      },
    ],
    sequence: [
      "Open with markets and a slow lunch built around local taste.",
      "Shift to water, architecture and a private cultural stop.",
      "End with an intimate food street and a reserved counter experience.",
    ],
    attractions: [
      {
        title: "Osaka Castle",
        image: osakaCastle,
        text: "A timeless symbol of Osaka, this grand castle blends samurai-era history with serene gardens, stone walls, and elegant views over the modern city.",
      },
      {
        title: "Dotonbori",
        image: dotonbori,
        text: "The vibrant soul of Osaka, Dotonbori comes alive with neon lights, riverside energy, iconic signs, and the city's legendary culinary atmosphere.",
      },
      {
        title: "Umeda Sky Building",
        image: umedaSky,
        text: "A striking architectural landmark above Osaka's skyline, Umeda Sky Building offers sweeping panoramic views and a refined perspective on the city's modern spirit.",
      },
    ],
    cta: "Design my Osaka route",
  },
  kyoto: {
    index: "03",
    slug: "kyoto",
    name: "Kyoto",
    displayName: "KYOTO",
    jp: "京都",
    region: "Quiet Forms",
    bg: kyotoBg,
    building: kyotoBuilding,
    accent: "#24583B",
    deep: "#07150D",
    title: "Gardens, craft houses and the discipline of stillness.",
    description:
      "Kyoto is planned as a quieter chapter: early paths, old timber, private craft visits and meals that feel closer to ceremony than schedule.",
    sceneCopy:
      "Silence is not empty here. It is a material the route is built from.",
    philosophy:
      "The best Kyoto itinerary protects space. We avoid the obvious rush, place visits early or late, and let texture lead: moss, paper, lacquer, stone, water and the small pause before a door slides open.",
    mood:
      "Restrained, tactile, slow. Kyoto gives the journey gravity.",
    facts: ["3-4 quiet days", "Craft appointments", "Garden timing", "Ryokan pacing"],
    notes: [
      {
        title: "Garden Hours",
        text: "Soft light, minimal crowds and time to read the composition of stone and moss.",
      },
      {
        title: "Craft Rooms",
        text: "Private visits with makers where technique becomes part of the travel memory.",
      },
      {
        title: "Old Streets",
        text: "Walks that are planned for silence, not distance.",
      },
    ],
    sequence: [
      "Begin before the city fills, with gardens and timber streets.",
      "Visit craft rooms, tea spaces and small cultural appointments.",
      "Leave open time for a ryokan evening and a slower second morning.",
    ],
    attractions: [
      {
        title: "Kiyomizu-dera Temple",
        image: kiyomizudera,
        text: "Set above Kyoto's historic hillsides, Kiyomizu-dera offers a graceful encounter with ancient Japan - wooden architecture, panoramic city views, and a timeless atmosphere of quiet devotion.",
      },
      {
        title: "Fushimi Inari Taisha",
        image: fushimiInari,
        text: "Famous for its endless path of vermilion torii gates, Fushimi Inari Taisha creates one of Kyoto's most iconic and immersive spiritual journeys.",
      },
      {
        title: "Arashiyama Bamboo Grove",
        image: arashiyama,
        text: "A serene escape on the western edge of Kyoto, Arashiyama surrounds visitors with towering bamboo, soft natural light, and the refined stillness of old Japan.",
      },
    ],
    cta: "Design my Kyoto route",
  },
  hokkaido: {
    index: "04",
    slug: "hokkaido",
    name: "Hokkaido",
    displayName: "HOKKAIDO",
    jp: "北海道",
    region: "Northern Silence",
    bg: hokkaidoBg,
    building: hokkaidoBuilding,
    accent: "#5B4A86",
    deep: "#161024",
    title: "Wide skies, snow fields and northern calm.",
    description:
      "Hokkaido is the spacious counterpoint: clean air, long roads, quiet design hotels, winter texture and food shaped by the north.",
    sceneCopy:
      "The north gives the journey room to breathe.",
    philosophy:
      "We use Hokkaido as an exhale. The route stretches out: a slow transfer, a landscape hotel, seafood near the source, white mornings and evenings built around warmth, wood and weather.",
    mood:
      "Open, cool, restorative. Hokkaido makes the entire journey feel larger.",
    facts: ["3-5 spacious days", "Landscape hotels", "Seasonal food", "Slow transfers"],
    notes: [
      {
        title: "Snow Light",
        text: "A visual reset: pale mornings, quiet roads and the softness of winter air.",
      },
      {
        title: "Northern Tables",
        text: "Seafood, dairy, vegetables and meals that feel close to the land.",
      },
      {
        title: "Open Roads",
        text: "Private movement between fields, towns and viewpoints with room to stop.",
      },
    ],
    sequence: [
      "Arrive gently and move toward a landscape-led stay.",
      "Build the day around food, air, weather and a private drive.",
      "Keep one stretch intentionally unscheduled for snow, light or rest.",
    ],
    attractions: [
      {
        title: "Shirogane Blue Pond, Biei",
        image: bluePond,
        text: "A dreamlike natural landmark in Biei, Shirogane Blue Pond is known for its vivid blue waters, silent standing trees, and an almost surreal sense of northern stillness.",
      },
      {
        title: "Farm Tomita, Furano",
        image: farmTomita,
        text: "One of Hokkaido's most iconic summer landscapes, Farm Tomita unfolds in elegant fields of lavender and seasonal flowers against the soft hills of Furano.",
      },
      {
        title: "Noboribetsu Jigokudani",
        image: jigokudani,
        text: "A dramatic volcanic valley shaped by steam, sulfur, and rugged terrain, Noboribetsu Jigokudani reveals Hokkaido's raw geothermal power and refined onsen culture.",
      },
    ],
    cta: "Design my Hokkaido route",
  },
};

export const destinationList = Object.values(destinations);

export interface Dealership {
  name: string;
  slug: string;
  location: string;
  state: string;
  brands: string[];
  status: "operational";
  description: string;
  heroImage: string | null;
  gallery: string[];
  website?: string;
  video?: {
    type: "cloudflare";
    id: string;
  };
}

export const dealerships: Dealership[] = [
  {
    name: "Nissan Warsaw",
    slug: "nissan-warsaw",
    location: "Warsaw, IN",
    state: "IN",
    brands: ["Nissan"],
    status: "operational",
    description:
      "A high-performing Nissan franchise in northern Indiana, serving the Warsaw and surrounding communities with new and pre-owned vehicles, parts, and service.",
    website: "https://www.nissanofwarsaw.com/",
    heroImage: "/assets/NissanWarsaw/FrontofStoreNissanWarsaw.webp",
    gallery: [
      "/assets/NissanWarsaw/FrontofStoreNissanWarsaw.webp",
      "/assets/NissanWarsaw/NissanWarsawMainSignwithTruck.webp",
      "/assets/NissanWarsaw/NissanSunSign.webp",
      "/assets/NissanWarsaw/NissanWarsawCarsinShowroom.webp",
      "/assets/NissanWarsaw/NissanWarsawSticker.webp",
    ],
    video: {
      type: "cloudflare",
      id: "700297c313e97262173f0c2107f3b8db",
    },
  },
  {
    name: "Spirit Lake Ford CDJR",
    slug: "spirit-lake-ford-cdjr",
    location: "Spirit Lake, IA",
    state: "IA",
    brands: ["Ford", "Chrysler", "Dodge", "Jeep", "Ram"],
    status: "operational",
    description:
      "A multi-brand powerhouse in northwest Iowa's lake country, offering Ford and CDJR lineups. Strong community presence with a loyal customer base across the Iowa Great Lakes region.",
    website: "https://www.spiritlakefordcdjr.com/",
    heroImage: "/assets/SpirirtLake/dronespiritlakestorefront.png",
    gallery: [
      "/assets/SpirirtLake/dronespiritlakestorefront.png",
      "/assets/SpirirtLake/spiritlakestorefront.webp",
      "/assets/SpirirtLake/spiritlakeamericanflags.webp",
      "/assets/SpirirtLake/spiritlakefulllotview.webp",
      "/assets/SpirirtLake/spiritlakesideview.webp",
      "/assets/SpirirtLake/broncospiritlake.webp",
      "/assets/SpirirtLake/mustangcolemanspiritlake.webp",
      "/assets/SpirirtLake/colemanplatebronco.webp",
      "/assets/SpirirtLake/fordsignwateroncars.webp",
      "/assets/SpirirtLake/colemancarparts.webp",
      "/assets/SpirirtLake/spiritlakedron1.png",
    ],
  },
  {
    name: "Mt. Pleasant Chevy GMC CDJR",
    slug: "mt-pleasant-chevy-gmc-cdjr",
    location: "Mt. Pleasant, IA",
    state: "IA",
    brands: ["Chevrolet", "GMC", "Chrysler", "Dodge", "Jeep", "Ram"],
    status: "operational",
    description:
      "A dominant multi-franchise dealership in southeast Iowa carrying Chevrolet, GMC, and the full CDJR lineup. One of the region's top-performing stores with a broad vehicle mix.",
    website: "https://www.mountpleasantchevygmc.com/",
    heroImage: "/assets/MtPleasent/mtpleasantdrone.png",
    gallery: [
      "/assets/MtPleasent/mtpleasantdrone.png",
      "/assets/MtPleasent/MtPleasantFront.webp",
      "/assets/MtPleasent/GMCTrucksandSign.webp",
      "/assets/MtPleasent/CDJRsign.webp",
      "/assets/MtPleasent/MtPleasentGMCSign.webp",
      "/assets/MtPleasent/ChargerOutFront.webp",
      "/assets/MtPleasent/MtPleasentTruck.webp",
      "/assets/MtPleasent/MTPleasentVette.webp",
      "/assets/MtPleasent/MtPleasentVetterInterrior.webp",
      "/assets/MtPleasent/TraverseoutFront.webp",
    ],
  },
  {
    name: "Estherville Chevy GMC",
    slug: "estherville-chevy-gmc",
    location: "Estherville, IA",
    state: "IA",
    brands: ["Chevrolet", "GMC"],
    status: "operational",
    description:
      "A Chevrolet and GMC franchise serving the Estherville community and surrounding northwest Iowa market with sales, service, and parts.",
    website: "https://www.esthervillechevygmc.com/",
    heroImage: "/assets/Estherville/frontofstore.webp",
    gallery: [
      "/assets/Estherville/frontofstore.webp",
      "/assets/Estherville/esthervillesign.webp",
      "/assets/Estherville/servicebays.webp",
      "/assets/Estherville/serviceoutside.webp",
      "/assets/Estherville/carinside.webp",
      "/assets/Estherville/carinside2.webp",
    ],
  },
  {
    name: "Le Mars Chevy GMC CDJR",
    slug: "le-mars-chevy-gmc-cdjr",
    location: "Le Mars, IA",
    state: "IA",
    brands: ["Chevrolet", "GMC", "Chrysler", "Dodge", "Jeep", "Ram"],
    status: "operational",
    description:
      "A multi-brand franchise in Le Mars, Iowa — the Ice Cream Capital of the World — offering a full GM and CDJR vehicle selection to northwest Iowa customers.",
    website: "https://www.lemarschevygmc.com/",
    heroImage: "/assets/LEmars/frontofstore.webp",
    gallery: [
      "/assets/LEmars/frontofstore.webp",
      "/assets/LEmars/teamatlemars.webp",
    ],
  },
  {
    name: "Nissan Streetsboro",
    slug: "nissan-streetsboro",
    location: "Streetsboro, OH",
    state: "OH",
    brands: ["Nissan"],
    status: "operational",
    description:
      "A Nissan franchise positioned in northeast Ohio's high-traffic Streetsboro corridor, serving the greater Akron-Cleveland metro area.",
    website: "https://www.nissanstreetsboro.com/",
    heroImage: "/assets/Streetsboro/streetsborofrontofstore.webp",
    gallery: [
      "/assets/Streetsboro/streetsborofrontofstore.webp",
      "/assets/Streetsboro/streetsboroteamphoto.webp",
    ],
  },
];

export function getDealershipBySlug(slug: string): Dealership | undefined {
  return dealerships.find((d) => d.slug === slug);
}

/** Curated set of best photos across all dealerships for the homepage gallery */
export const galleryHighlights = [
  "/assets/SpirirtLake/dronespiritlakestorefront.png",
  "/assets/MtPleasent/mtpleasantdrone.png",
  "/assets/NissanWarsaw/FrontofStoreNissanWarsaw.webp",
  "/assets/SpirirtLake/spiritlakeamericanflags.webp",
  "/assets/MtPleasent/MtPleasantFront.webp",
  "/assets/NissanWarsaw/NissanWarsawMainSignwithTruck.webp",
  "/assets/SpirirtLake/broncospiritlake.webp",
  "/assets/MtPleasent/MTPleasentVette.webp",
];

export const stateLocations: Record<string, { x: string; y: string }> = {
  IA: { x: "44%", y: "38%" },
  IN: { x: "56%", y: "42%" },
  OH: { x: "62%", y: "40%" },
};

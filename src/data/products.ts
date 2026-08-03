export type Product = {
  family: string;
  color: string;
  dimension: string;
  surface: string;
  category: string;
  image: string;
};

export type Family = {
  name: string;
  slug: string;
  spec: string;
  detail: string;
  surfaces: string[];
  image: string;
};

const root = '/images/products';
const make = (family: string, folder: string, rows: string[][]): Product[] =>
  rows.map(([color, dimension, surface, category, file]) => ({
    family, color, dimension, surface, category, image: `${root}/${folder}/${file}`,
  }));

export const families: Family[] = [
  { name: 'Halfmoon Peel', slug: 'halfmoon-peel', spec: '6-12 mm', detail: 'Width 6-12 mm / thickness 1.2-1.5 mm', surfaces: ['RR','FR','TX','SM'], image: `${root}/HM Peel/DSC_9698 HMP 6MM RR - DARK HONEY WICKER.JPG` },
  { name: 'Flat Oval', slug: 'flat-oval', spec: '6-7 mm', detail: 'Width 6-7 mm / thickness 1.2-1.5 mm', surfaces: ['IRR','FR','TX','SM'], image: `${root}/Flat Oval/DSC_9455 FO 7MM IRR - BAVARIAN.JPG` },
  { name: 'Flat Flat', slug: 'flat-flat', spec: '7-50 mm', detail: 'Width 7-50 mm / thickness 1.2-1.7 mm', surfaces: ['FR','TX','SM','HL','EBS'], image: `${root}/Flat Flat/DSC_9694 FF 15MM HL - WHISKY BROWN.JPG` },
  { name: 'Hollow', slug: 'hollow', spec: '3-13 mm', detail: 'Diameter 3-13 mm', surfaces: ['TX','SM','HL'], image: `${root}/Hollow/DSC_9687 HL 10MM SM - NATURAL KUBU.JPG` },
  { name: 'Round Core', slug: 'round-core', spec: '2-50 mm', detail: 'Diameter 2-50 mm', surfaces: ['FR','TX','SM','HL'], image: `${root}/Round core/DSC_9614 RC 3MM TX - NATURAL.JPG` },
  { name: 'U-Profile', slug: 'u-profile', spec: '2.5-14.5 mm', detail: 'Diameter 2.5-14.5 mm', surfaces: ['TX','SM','HL'], image: `${root}/U-Profile/DSC_9451 UPROFILE 6MM TX - CHAI.JPG` },
  { name: 'Twisted Hyacinth', slug: 'twisted-hyacinth', spec: '4.8-5.4 mm', detail: 'Diameter 4.8-5.4 mm', surfaces: ['Twisted'], image: `${root}/Hyacinth/banana leaf1.jpg` },
];

export const familyPath = (lang: 'en' | 'id', slug: string) => `${lang === 'id' ? '/id' : ''}/products/${slug}`;

export const products: Product[] = [
  ...make('Halfmoon Peel', 'HM Peel', [
    ['Light Brown','6 mm','RR','Multi Color','DSC_9476 HMP 6MM RR - LIGHT BROWN.JPG'],
    ['Honey TT','6 mm','RR','Multi Color','DSC_9659 HMP 6MM RR - HONEY TT.JPG'],
    ['Silver','6 mm','RR','Uni Color','DSC_9552 HMP 6MM RR - SILVER.JPG'],
    ['Honey Streaky','6 mm','RR','Uni Color','DSC_9497 HMP 6MM RR - HONEY STREAKY.JPG'],
    ['Silky White','6 mm','RR','Uni Color','DSC_9474 HMP 6MM RR - SILKY WHITE.JPG'],
    ['Silver Stone','6 mm','RR','Uni Color','DSC_9486 HMP 6MM RR - SILVER STONE.JPG'],
    ['Stone Black','6 mm','RR','Uni Color','DSC_9566 HMP 6MM RR - STONE BLACK.JPG'],
    ['Red','6 mm','RR','Uni Color','DSC_9621 HMP 6MM RR - RED.JPG'],
    ['Burgundy','6 mm','RR','Uni Color','DSC_9651 HMP 6MM RR - BURGUNDY.JPG'],
    ['Dark Brown TT','6 mm','RR','Multi Color','DSC_9623 HMP 6MM RR - DARK BROWN TT.JPG'],
    ['Slimit','6 mm','RR','Multi Color','DSC_9570 HMP 6MM RR - SLIMIT.JPG'],
    ['Palm Sugar','6 mm','RR','Multi Color','DSC_9596 HMP 6MM RR - PALM SUGAR.JPG'],
    ['Dark Honey Wicker','6 mm','RR','Multi Color','DSC_9698 HMP 6MM RR - DARK HONEY WICKER.JPG'],
    ['Kubu Grey','6 mm','SM','Uni Color','DSC_9700 HMP 6MM SM - KUBU GREY 8016.JPG'],
    ['Old Java','12 mm','FR','Multi Color','DSC_9598 HMP 12MM FR - OLD JAVA.JPG'],
    ['Arabica','7 mm','TX','Multi Color','DSC_9459 HMP 6MM TX - ARABICA.JPG'],
    ['Sea Shell','7 mm','TX','Multi Color','DSC_9653 HMP 7MM TX - WHITE SHELL.JPG'],
  ]),
  ...make('Flat Oval', 'Flat Oval', [
    ['Bavarian','7 mm','IRR','Multi Color','DSC_9455 FO 7MM IRR - BAVARIAN.JPG'],['Moccacino','7 mm','IRR','Multi Color','DSC_9501 FO 7MM IRR - MOCCACHINO.JPG'],['Cheznut','6 mm','IRR','Multi Color','DSC_9641 FO 6MM IRR - CHEZNUT.JPG'],['Kubu Grey','7 mm','TX','Multi Color','DSC_9461 FO 7MM TX - KUBU GREY.JPG'],['Brown Kubu','6 mm','TX','Multi Color','DSC_9499 FO 6MM TX - BROWN KUBU.JPG'],['Natural','7 mm','TX','Multi Color','DSC_9661 FO 7MM TX - NATURAL.JPG'],['Ivory Washed','7 mm','TX','Multi Color','DSC_9633 FO 7MM TX - IVORY WASHED.JPG'],['Star Grey','6 mm','SM','Multi Color','DSC_9472 FO 6MM SM - STAR GREY.JPG'],['Lime Green','7 mm','FR','Uni Color','DSC_9684 FO 7MM FR - LIME GREEN.JPG'],
  ]),
  ...make('Flat Flat', 'Flat Flat', [
    ['Silky White','6 mm','FR','Multi Color','DSC_9480 FF 6MM FR - SILKY WHITE.JPG'],['Shimmer Nickel','7 mm','FR','Uni Color','DSC_9604 FF 7MM FR - SHIMMER NICKEL.JPG'],['Black','7 mm','FR','Uni Color','DSC_9520 FF 7MM FR - BLACK.JPG'],['Kubu','7 mm','SM','Uni Color','DSC_9689 FF 7MM SM - KUBU.JPG'],['Red Pine','7 mm','TX','Multi Color','DSC_9691 FF 7MM TX - RED PINE.JPG'],['Java Brown','7 mm','SM','Uni Color','DSC_9465 FF 7MM SM - JAVA BROWN.JPG'],['Machiatto','12 mm','SM','Uni Color','DSC_9439 FF 12MM SM - MACHIATO.JPG'],['Natural','12 mm','TX','Multi Color','DSC_9518 FF 12MM TX - NATURAL.JPG'],['Red Pine','12 mm','SM','Multi Color','DSC_9550 FF 12MM SM - RED PINE.JPG'],['White Shell','12 mm','HL','Multi Color','DSC_9457 FF 12MM HL - WHITE SHELL.JPG'],['Whisky Brown','12 mm','HL','Uni Color','DSC_9694 FF 15MM HL - WHISKY BROWN.JPG'],['Cappuccino','12 mm','EBS','Multi Color','DSC_9522 FF 10MM EBS - CAPPUCINO.JPG'],['Grey','18 mm','EBS','Multi Color','DSC_9463 FF 18MM EBS - GREY.JPG'],['Beige','18 mm','EBS','Multi Color','DSC_9545 FF 18MM EBS - BEIGE.JPG'],['Onix','18 mm','EBS','Multi Color','DSC_9467 FF 18MM EBS - ONIX.JPG'],['Harkers Duo','18 mm','HL','Multi Color','DSC_9527 FF 20MM HL - HARKERS DUO.JPG'],['Sea Shell','18 mm','HL','Multi Color','DSC_9516 FF 15MM HL - SEA SHELL.JPG'],['Signature Latte','18 mm','TX','Multi Color','DSC_9453 FF 18MM TX - SIGNATURE LATTE.JPG'],['White Shell','30 mm','TX','Multi Color','DSC_9637 FF 30MM TX - WHITE SHELL.JPG'],['Kubu Grey Natural','30 mm','EBS','Multi Color','DSC_9635 FF 30MM EBS - KUBU GREY NATURAL.JPG'],['Camel','40 mm','SM','Multi Color','DSC_9618 FF 40MM SM - CAMEL.JPG'],['Silver Walnut','50 mm','SM','Multi Color','DSC_9511 FF 50MM SM - SILVER WALNUT.JPG'],
  ]),
  ...make('Hollow', 'Hollow', [
    ['Red Pine','3 mm','SM','Multi Color','DSC_9478 HL 3M SM - RED PINE.JPG'],['Signal White','4 mm','SM','Multi Color','DSC_9655 HL 4MM SM - SIGNAL WHITE.JPG'],['Pearl Shell','5 mm','TX','Multi Color','DSC_9435 HL 5MM TX - PEARL SHELL.JPG'],['Silver Metallic','8 mm','SM','Multi Color','DSC_9437 HL 8MM SM- SILVER METALIC.JPG'],['Brown Kubu','9 mm','TX','Multi Color','DSC_9449 HL 9MM TX - BROWN KUBU.JPG'],['Natural Kubu','10 mm','SM','Multi Color','DSC_9687 HL 10MM SM - NATURAL KUBU.JPG'],
  ]),
  ...make('Round Core', 'Round core', [
    ['White Kubu','2 mm','TX','Multi Color','DSC_9515 RC 2MM TX - WHITE KUBU.JPG'],['Pebble Grey','2.5 mm','FR','Multi Color','DSC_9536 RC 2,5MM TX - PEBBLE GREY.JPG'],['Chalk','2.5 mm','FR','Multi Color','DSC_9541 RC 2,5MM TX - CHALK.JPG'],['Green Grass','2.5 mm','TX','Multi Color','DSC_9594 RC 2,5MM TX - GREEN GRASS.JPG'],['Grey Rod','3 mm','TX','Multi Color','DSC_9509 RC 3MM TX - GREY ROD.JPG'],['Natural','3 mm','TX','Multi Color','DSC_9614 RC 3MM TX - NATURAL.JPG'],['Dark Brown TT','3 mm','FR','Multi Color','DSC_9488 RC 3MM FR - DARK BROWN TT.JPG'],['Brown Pulut','3 mm','TX','Multi Color','DSC_9568 RC 3MM TX - BROWN PULUT.JPG'],['Signal White','3 mm','FR','Uni Color','DSC_9445 RC 3MM FR - SIGNAL WHITE.JPG'],['Pure White','3 mm','FR','Uni Color','DSC_9491 RC 3MM FR - PURE WHITE.JPG'],['Green','3 mm','FR','Uni Color','DSC_9503 RC 3MM FR - GREEN.JPG'],['Red','3 mm','FR','Uni Color','DSC_9495 RC 3MM FR - RED.JPG'],['Dark Brown','5 mm','TX','Multi Color','DSC_9554 RC 5MM TX - DARK BROWN.JPG'],['Kubu Grey Natural','8 mm','TX','Multi Color','DSC_9574 RC 8MM TX - KUBU GREY NATURAL.JPG'],['Black','3 mm','HL','Uni Color','DSC_9609 RC 3MM HL - BLACK.JPG'],
  ]),
  ...make('U-Profile', 'U-Profile', [
    ['Sempulut','6 mm','TX','Multi Color','DSC_9441 UPROFILE 6MM TX - SEMPULUT.JPG'],['Chai','6 mm','TX','Multi Color','DSC_9451 UPROFILE 6MM TX - CHAI.JPG'],['Kubu Grey','6 mm','TX','Multi Color','DSC_9484 UPROFILE 6MM TX - KUBU GREY.JPG'],['White Kubu','6 mm','TX','Multi Color','DSC_9505 UPROFILE 6MM TX - WHITE KUBU.JPG'],['Banana','6 mm','TX','Multi Color','DSC_9531 UPROFILE 6MM TX - BANANA.JPG'],['White Washed','6 mm','TX','Multi Color','DSC_9533 UPROFILE 6MM TX - WHITE WASHED.JPG'],['Brown Kubu','6 mm','TX','Multi Color','DSC_9646 UPROFILE 6MM TX - BROWN KUBU.JPG'],['Kubu Grey','6 mm','SM','Multi Color','DSC_9525 UPROFILE 6MM SM - KUBU GREY 8016.JPG'],['Green Kubu','8 mm','SM','Multi Color','DSC_9629 UPROFILE 8MM SM - GREEN KUBU.JPG'],['Brown Kubu','10 mm','TX','Multi Color','DSC_9681 UPROFILE 10MM TX - BROWN KUBU.JPG'],['Signal White','12 mm','TX','Uni Color','DSC_9539 UPROFILE 8MM TX - SIGNAL WHITE.JPG'],
  ]),
  ...make('Twisted Hyacinth', 'Hyacinth', [
    ['Banana Leaf','4.8-5.4 mm','Twisted','Multi Color','banana leaf1.jpg'],['Abacca','4.8-5.4 mm','Twisted','Multi Color','abacca1.jpg'],['Maccaron','4.8-5.4 mm','Twisted','Multi Color','maccaron1.jpg'],['Off White','4.8-5.4 mm','Twisted','Uni Color','off white1.jpg'],['Ash Grey','4.8-5.4 mm','Twisted','Multi Color','ash grey1.jpg'],['Deep Brown','4.8-5.4 mm','Twisted','Multi Color','deep brown1.jpg'],['Stone Black','4.8-5.4 mm','Twisted','Multi Color','stone black1.jpg'],['Solid Black','4.8-5.4 mm','Twisted','Uni Color','solid black1.jpg'],
  ]),
];

// Purpose: Maps zodiac sign names to icons.
import {
  TbZodiacAquarius,
  TbZodiacAries,
  TbZodiacCancer,
  TbZodiacCapricorn,
  TbZodiacGemini,
  TbZodiacLeo,
  TbZodiacLibra,
  TbZodiacPisces,
  TbZodiacSagittarius,
  TbZodiacScorpio,
  TbZodiacTaurus,
  TbZodiacVirgo,
} from 'react-icons/tb';

export default function getZodiacIcon(sign: string) {
  switch (sign) {
    case 'Aries':
      return TbZodiacAries;
    case 'Taurus':
      return TbZodiacTaurus;
    case 'Gemini':
      return TbZodiacGemini;
    case 'Cancer':
      return TbZodiacCancer;
    case 'Leo':
      return TbZodiacLeo;
    case 'Virgo':
      return TbZodiacVirgo;
    case 'Libra':
      return TbZodiacLibra;
    case 'Scorpio':
      return TbZodiacScorpio;
    case 'Sagittarius':
      return TbZodiacSagittarius;
    case 'Capricorn':
      return TbZodiacCapricorn;
    case 'Aquarius':
      return TbZodiacAquarius;
    case 'Pisces':
      return TbZodiacPisces;
    default:
      return null;
  }
}

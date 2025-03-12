import { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { PlanetaryPositionData } from '../../../../types';

interface PlanetaryChartProps {
  planets: PlanetaryPositionData[];
  zodiacSigns: string[];
  hoveredPlanet: string;
  setHoveredPlanet: Dispatch<SetStateAction<string>>;
}

export default function PlanetaryChart({ ...props }: PlanetaryChartProps): JSX.Element {
  const { planets, zodiacSigns, hoveredPlanet, setHoveredPlanet } = props;
  const CENTER_X: number = 70;
  const CENTER_Y: number = 70;
  const RADIUS: number = 60;

  // Calculate position on the circle based on zodiac sign and degree
  function getPlanetPosition(sign: string, degree: number): { x: number; y: number } {
    if (!sign || degree === undefined) {
      return { x: CENTER_X, y: CENTER_Y };
    }

    const signIndex: number = zodiacSigns.indexOf(sign);
    const totalDegrees: number = signIndex * 30 + degree;
    const radian: number = (totalDegrees - 90) * (Math.PI / 180);

    return {
      x: CENTER_X + (RADIUS - 40) * Math.cos(radian),
      y: CENTER_Y + (RADIUS - 40) * Math.sin(radian),
    };
  }

  // Get text position for zodiac sign
  function getZodiacTextPosition(index: number) {
    // Calculate the middle angle of the sign's sector
    const middleAngle: number = index * 30 + 15; // 30 degrees per sign, +15 for middle
    const angleInRad: number = (middleAngle - 90) * (Math.PI / 180);

    // Position text slightly outside the circle
    const labelRadius: number = RADIUS + 6;

    return {
      x: CENTER_X + labelRadius * Math.cos(angleInRad),
      y: CENTER_Y + labelRadius * Math.sin(angleInRad),
      angle: middleAngle,
      shouldFlip: middleAngle > 90 && middleAngle < 270,
    };
  }

  // Size planet based on magnitude (brightness)
  function getPlanetSize(magnitude: number): number {
    if (!magnitude) return 3;
    // In astronomy, magnitude is a reverse scale (more negative = brighter)
    // e.g., Sun: -26.77 (very bright), Saturn: 0.51 (much dimmer)

    // Convert magnitude to a positive number (invert the scale)
    // Then cap between 0 and 15 to avoid extreme sizes
    const adjustedMag: number = Math.min(Math.max(-magnitude, 0), 15);

    // Apply a moderate multiplier (0.3) to create noticeable but not extreme differences
    // Ensures minimum size of 3 pixels for visibility
    return Math.max(adjustedMag * 0.2, 2);
  }

  return (
    <div className="mx-auto max-w-68">
      <svg viewBox="0 0 140 140" className="h-full w-full">
        {/* Base circle with animation */}
        <motion.circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          cx={CENTER_X}
          cy={CENTER_Y}
          r={RADIUS}
          fill="#F1F5F9"
          stroke="#E2E8F0"
          strokeWidth="1"
        />

        {/* Zodiac segments with staggered animation */}
        {zodiacSigns.map((sign, i) => {
          const segmentAngle = i * 30;
          const startAngle = segmentAngle - 90;

          // Calculate start and end points of the segment
          const startRad = startAngle * (Math.PI / 180);
          const lineEndX = CENTER_X + RADIUS * Math.cos(startRad);
          const lineEndY = CENTER_Y + RADIUS * Math.sin(startRad);

          // Text positioning
          const textPos = getZodiacTextPosition(i);

          return (
            <motion.g key={sign} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}>
              {/* Segment line */}
              <motion.line
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                x1={CENTER_X}
                y1={CENTER_Y}
                x2={lineEndX}
                y2={lineEndY}
                stroke="#E2E8F0"
                strokeWidth="1"
              />

              {/* Zodiac label */}
              <motion.text
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 + 0.3 }}
                x={textPos.x}
                y={textPos.y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="6"
                fill="#64748B"
                transform={
                  textPos.shouldFlip
                    ? `rotate(${textPos.angle + 180}, ${textPos.x}, ${textPos.y})`
                    : `rotate(${textPos.angle}, ${textPos.x}, ${textPos.y})`
                }
              >
                {sign}
              </motion.text>
            </motion.g>
          );
        })}

        {/* Center dot */}
        <motion.circle
          cx={CENTER_X}
          cy={CENTER_Y}
          r={2}
          fill="#CBD5E1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Planets with pop animation */}
        {planets.map((planet: PlanetaryPositionData, index: number) => {
          const pos = getPlanetPosition(planet.sign, planet.degree);
          const isHovered = hoveredPlanet === planet.name;
          const size = getPlanetSize(planet.magnitude);

          return (
            <motion.g
              key={planet.name}
              onHoverStart={() => setHoveredPlanet(planet.name)}
              onHoverEnd={() => setHoveredPlanet('')}
              onTouchStart={() => setHoveredPlanet(planet.name)}
              onTouchEnd={() => setHoveredPlanet('')}
            >
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r={size || 2.5}
                fill={planet.color || '#CBD5E1'}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  scale: isHovered ? 1.3 : 1,
                  opacity: isHovered ? 1 : 0.8,
                }}
                transition={{
                  scale: {
                    delay: isHovered ? 0 : 1 + index * 0.1,
                    duration: 0.5,
                    ease: 'easeOut',
                  },
                  opacity: { duration: 0.2 },
                }}
                style={{
                  transformOrigin: `${pos.x}px ${pos.y}px`,
                }}
              />

              {isHovered && (
                <motion.text
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  x={pos.x}
                  y={pos.y - 5}
                  textAnchor="middle"
                  fill={planet.color}
                  fontSize="7"
                  fontWeight="bold"
                >
                  {`${planet.name} ${planet.degree}°`}
                </motion.text>
              )}
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}

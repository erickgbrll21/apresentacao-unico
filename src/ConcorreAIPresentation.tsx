import React from "react";
import {
  TransitionSeries,
  linearTiming,
  springTiming,
  type TransitionPresentation,
  type TransitionTiming,
} from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { AbsoluteFill } from "remotion";
import { theme } from "./theme";
import { SlideInstitutionalHeader } from "./components/ui/SlideInstitutionalHeader";
import { Slide01Hero } from "./slides/Slide01Hero";
import { Slide02MarketIntro } from "./slides/Slide02MarketIntro";
import { Slide02MarketSize } from "./slides/Slide02MarketSize";
import { Slide03Purchasing } from "./slides/Slide03Purchasing";
import { Slide04CompetitorsHigh } from "./slides/Slide04CompetitorsHigh";
import { Slide05CompetitorsRegional } from "./slides/Slide05CompetitorsRegional";
import { Slide06Matrix } from "./slides/Slide06Matrix";
import { Slide07Licitacoes } from "./slides/Slide07Licitacoes";
import { Slide08ContratosPublicos } from "./slides/Slide08ContratosPublicos";
import { Slide08TopContratos } from "./slides/Slide08TopContratos";
import { Slide09Requisitos } from "./slides/Slide09Requisitos";
import { Slide10Orgaos } from "./slides/Slide10Orgaos";
import { Slide11Compradores } from "./slides/Slide11Compradores";
import { Slide12Oportunidades } from "./slides/Slide12Oportunidades";
import { Slide13Alertas } from "./slides/Slide13Alertas";
import { Slide15Radar } from "./slides/Slide15Radar";
import { Slide17TamRegional } from "./slides/Slide17TamRegional";
import { Slide18AnaliseFinanceira } from "./slides/Slide18AnaliseFinanceira";
import { Slide19PrecificacaoSegmento } from "./slides/Slide19PrecificacaoSegmento";
import { Slide20EfeitoMultiplicadorARP } from "./slides/Slide20EfeitoMultiplicadorARP";
import { Slide21RoadmapExecutivo } from "./slides/Slide21RoadmapExecutivo";
import { Slide22InvestimentoRetorno } from "./slides/Slide22InvestimentoRetorno";
import { Slide24Obrigado } from "./slides/Slide24Obrigado";

const SLIDE_DURATION = 180;
const TRANSITION_DURATION = 20;
const HERO_TRANSITION_DURATION = 36;

const getTransition = (
  index: number
): { presentation: TransitionPresentation<Record<string, unknown>>; timing: TransitionTiming } => {
  if (index === 0) {
    return {
      presentation: wipe({ direction: "from-left" }),
      timing: springTiming({
        durationInFrames: HERO_TRANSITION_DURATION,
        config: { damping: 200, stiffness: 70 },
      }),
    };
  }
  return {
    presentation: index % 2 === 0 ? fade() : slide({ direction: "from-right" }),
    timing: linearTiming({ durationInFrames: TRANSITION_DURATION }),
  };
};

const getTransitionDuration = (index: number) =>
  index === 0 ? HERO_TRANSITION_DURATION : TRANSITION_DURATION;

const slides = [
  Slide01Hero,
  Slide02MarketIntro,
  Slide02MarketSize,
  Slide03Purchasing,
  Slide04CompetitorsHigh,
  Slide05CompetitorsRegional,
  Slide07Licitacoes,
  Slide08ContratosPublicos,
  Slide09Requisitos,
  Slide11Compradores,
  Slide10Orgaos,
  Slide12Oportunidades,
  Slide13Alertas,
  Slide06Matrix,
  Slide15Radar,
  Slide08TopContratos,
  Slide17TamRegional,
  Slide18AnaliseFinanceira,
  Slide19PrecificacaoSegmento,
  Slide20EfeitoMultiplicadorARP,
  Slide21RoadmapExecutivo,
  Slide22InvestimentoRetorno,
  Slide24Obrigado,
];

export const FPS = 30;
export const TOTAL_SLIDES = slides.length;
export const DURATION_IN_FRAMES =
  TOTAL_SLIDES * SLIDE_DURATION -
  Array.from({ length: TOTAL_SLIDES - 1 }, (_, i) => getTransitionDuration(i)).reduce(
    (sum, d) => sum + d,
    0
  );

export const ConcorreAIPresentation: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: theme.bg }}>
    <TransitionSeries>
      {slides.map((SlideComponent, index) => {
        const transition = index < slides.length - 1 ? getTransition(index) : null;
        return (
          <React.Fragment key={index}>
            <TransitionSeries.Sequence durationInFrames={SLIDE_DURATION}>
              <AbsoluteFill style={{ display: "flex", flexDirection: "column", backgroundColor: theme.bg }}>
                {index > 0 && <SlideInstitutionalHeader slideNumber={index + 1} />}
                <div style={{ flex: 1, position: "relative", minHeight: 0 }}>
                  <SlideComponent />
                </div>
              </AbsoluteFill>
            </TransitionSeries.Sequence>
            {transition && (
              <TransitionSeries.Transition
                presentation={transition.presentation}
                timing={transition.timing}
              />
            )}
          </React.Fragment>
        );
      })}
    </TransitionSeries>
  </AbsoluteFill>
);

import { classifyThreat } from './threat-classifier';

export function analyzeSecurityEvent(event: string) {
  return {
    event,
    level: classifyThreat(event),
    timestamp: new Date(),
  };
}
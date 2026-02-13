export type ThreatLevel = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export function classifyThreat(event: string): ThreatLevel {
  if (event.includes('BRUTE_FORCE')) return 'CRITICAL';
  if (event.includes('SESSION_HIJACK')) return 'HIGH';
  if (event.includes('RATE_LIMIT')) return 'MEDIUM';
  return 'LOW';
}

export enum ThreatLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
}

export function classifyThreat(event: string): ThreatLevel {
  if (event.includes('HIJACK')) return ThreatLevel.CRITICAL;
  if (event.includes('BRUTE')) return ThreatLevel.HIGH;
  return ThreatLevel.LOW;
}
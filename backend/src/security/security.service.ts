export function analyzeSecurityEvent(event: any) {
  return {
    level: 'info',
    event,
    timestamp: new Date()
  };
}
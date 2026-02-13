export class GeoService {
  async locate(ip: string) {
    // Placeholder (MaxMind / ipinfo / ipapi)
    return {
      country: 'EG',
      city: 'Cairo',
      risk: 'low',
    };
  }
}

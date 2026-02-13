class AuditStream {
  private clients: any[] = [];

  addClient(res: any) {
    this.clients.push(res);
  }

  removeClient(res: any) {
    this.clients = this.clients.filter(c => c !== res);
  }

  send(event: any) {
    this.clients.forEach(c =>
      c.write(`data: ${JSON.stringify(event)}\n\n`)
    );
  }
}

export const auditStream = new AuditStream();
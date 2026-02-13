import { BaseRepository } from '../../core/database/base.repository';

export class ProjectRepository extends BaseRepository {
  async findAll() {
    return this.query('SELECT * FROM projects');
  }
}
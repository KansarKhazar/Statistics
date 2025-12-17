import { ObjectLiteral, Repository } from 'typeorm';

export const chunkInsertOrUpdate = async <T extends ObjectLiteral>(
  repository: Repository<T>,
  entities: T[],
  safeChunkSize = 100,
  keys: string[] = ['id']
) => {
  for (let i = 0; i < entities.length; i += safeChunkSize) {
    const part = entities.slice(i, i + safeChunkSize);
    await repository.upsert(part, keys);
  }
};

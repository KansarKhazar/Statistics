import { ObjectLiteral, Repository } from 'typeorm';

export const chunkInsertOrIgnore = async <T extends ObjectLiteral>(
  repository: Repository<T>,
  entities: T[],
  safeChunkSize = 100
) => {
  for (let i = 0; i < entities.length; i += safeChunkSize) {
    const part = entities.slice(i, i + safeChunkSize);

    await repository
      .createQueryBuilder()
      .insert()
      .values(part)
      .orIgnore()
      .execute();
  }
};

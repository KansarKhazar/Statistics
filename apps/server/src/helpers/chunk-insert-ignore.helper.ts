import { ObjectLiteral, Repository } from 'typeorm';

/**
 * Performs upsert (insert or update) operations in batches to avoid oversized queries.
 * Splits the provided entities into chunks of a specified size and calls repository.upsert on each batch.
 *
 * @template T - Entity type extending ObjectLiteral.
 * @param repository - TypeORM repository instance for the target entity.
 * @param entities - Array of entity objects to be upserted.
 * @param safeChunkSize - Maximum number of entities to include in a single batch (default: 100).
 * @param keys - List of column names used to determine conflicts for upsert (default: ['id']).
 * @returns Promise<void> Resolves when all batches have been processed.
 */
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

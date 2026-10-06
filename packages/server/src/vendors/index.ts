import type { PlatformId } from '@mkt/shared';
import type { ServerVendor } from './types.ts';
import { nativeVendor } from './native.ts';

const registry: Partial<Record<PlatformId, ServerVendor>> = {
  native: nativeVendor,
};

export function vendor(platform: PlatformId): ServerVendor | undefined {
  return registry[platform];
}

export function allVendors(): ServerVendor[] {
  return Object.values(registry);
}

export function register(v: ServerVendor): void {
  registry[v.platform] = v;
}

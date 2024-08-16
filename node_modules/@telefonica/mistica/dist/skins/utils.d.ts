import * as React from 'react';
import type { SkinVariant, KnownSkin, KnownSkinName } from './types';
export declare const getSkinByName: (name: KnownSkinName, variant?: SkinVariant) => KnownSkin;
export declare const flattenChildren: (children: React.ReactNode) => Array<React.ReactNode>;

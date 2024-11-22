// '@/context/DuaContext.tsx'
'use client';

import { IDuasByCatAndSubcat } from '@/types';
import { createContext } from 'react';

export interface IDuaContext {
    allDuasByCatid: IDuasByCatAndSubcat[];
    setAllDuasByCatid: React.Dispatch<React.SetStateAction<IDuasByCatAndSubcat[]>>;
    isFetchingDuas: boolean;
    setIsFetchingDuas: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DuaContext = createContext<IDuaContext | undefined>(undefined);

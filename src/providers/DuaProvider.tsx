// '@/context/DuaProvider.tsx'
'use client';

import { DuaContext } from '@/context/DuaContext';
import { IDuasByCatAndSubcat } from '@/types';
import React, { useState } from 'react';

const DuaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [allDuasByCatid, setAllDuasByCatid] = useState<IDuasByCatAndSubcat[]>([]);
    const [isFetchingDuas, setIsFetchingDuas] = useState<boolean>(false);

    console.log(isFetchingDuas);

    return (
        <DuaContext.Provider value={{ allDuasByCatid, setAllDuasByCatid, isFetchingDuas, setIsFetchingDuas }}>
            {children}
        </DuaContext.Provider>
    );
};

export default DuaProvider;

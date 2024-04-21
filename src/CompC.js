import React from 'react';
import { useContext } from 'react';
import { NameContext, ChannelContext } from './App';
function CompC() {
    const myName = useContext(NameContext)
    const myChannelName = useContext(ChannelContext)
    return (
        <>
            <h1>This is Comp C</h1>
            <h1>{myName}</h1>
            <h1>{myChannelName}</h1>
        </>
    )

}
export default CompC;
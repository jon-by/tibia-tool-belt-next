import React, { useState, useEffect } from "react";
import CopyToClipboard from "../copy-to-clipboard/CopyToClipboard";
import { filteredOnlinePlayers, onlinePlayerType } from "./@types/partyFinder";
import {
  Wrapper,
  ShareItemWrapper,
  ShareItem,
  ScrollContent,
} from "./shareablePlayers.styled";

type shareablePlayersProps = {
  onlinePlayers: onlinePlayerType[];
  levelToShare: {min:number, max:number};
};
const ShareablePlayers = ({
  onlinePlayers,
  levelToShare,
}: shareablePlayersProps) => {
  const [filteredPlayers, setFilteredPlayers] =
    useState<filteredOnlinePlayers>(); 
  useEffect(() => {
    if (onlinePlayers.length === 0) return;
    const tempObj = { ms: [], ed: [], ek: [], rp: [] } as filteredOnlinePlayers;

    onlinePlayers.forEach((onlinePlayer) => {
      if (
        onlinePlayer.level >= levelToShare.min &&
        onlinePlayer.level <= levelToShare.max
      ) {
        if (onlinePlayer.vocation === "Elder Druid") {
          tempObj.ed.push(onlinePlayer);
        }
        if (onlinePlayer.vocation === "Elite Knight") {
          tempObj.ek.push(onlinePlayer);
        }
        if (onlinePlayer.vocation === "Master Sorcerer") {
          tempObj.ms.push(onlinePlayer);
        }
        if (onlinePlayer.vocation === "Royal Paladin") {
          tempObj.rp.push(onlinePlayer);
        }
      }
    });

    setFilteredPlayers(tempObj);
  }, [onlinePlayers]);

  return (
    <Wrapper>
      {!!filteredPlayers?.ed.length  && (
        <ScrollContent>
          <h2>Elder Druid</h2>
          <ShareItemWrapper>
            <ShareItem>
              {filteredPlayers.ed.map((ed) => (
                <CopyToClipboard
                  title={`${ed.name} - ${ed.level}`}
                  
                >
                  {ed.name}
                </CopyToClipboard>
              ))}
            </ShareItem>
          </ShareItemWrapper>
        </ScrollContent>
      )}
      {!!filteredPlayers?.ek.length && (
        <ScrollContent>
          <h2>Elite Knight</h2>
          <ShareItemWrapper>
            <ShareItem>
              {filteredPlayers.ek.map((ek) => (
                <CopyToClipboard
                  title={`${ek.name} - ${ek.level}`}
                  
                >
                  {ek.name}
                </CopyToClipboard>
              ))}
            </ShareItem>
          </ShareItemWrapper>
        </ScrollContent>
      )}
      {!!filteredPlayers?.ms.length && (
        <ScrollContent>
          <h2>Master Sorcerer</h2>
          <ShareItemWrapper>
            <ShareItem>
              {filteredPlayers.ms.map((ms) => (
                <CopyToClipboard
                  title={`${ms.name} - ${ms.level}`}
                  
                >
                  {ms.name}
                </CopyToClipboard>
              ))}
            </ShareItem>
          </ShareItemWrapper>
        </ScrollContent>
      )}
      {!!filteredPlayers?.ms.length && (
        <ScrollContent>
          <h2>Royal Paladin</h2>
          <ShareItemWrapper>
            <ShareItem>
              {filteredPlayers.rp.map((rp) => (
                <CopyToClipboard
                  title={`${rp.name} - ${rp.level}`}
                  
                >
                  {rp.name}
                </CopyToClipboard>
              ))}
            </ShareItem>
          </ShareItemWrapper>
        </ScrollContent>
      )}
    </Wrapper>
  );
};

export default ShareablePlayers;

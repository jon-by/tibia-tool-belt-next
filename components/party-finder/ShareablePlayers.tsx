import React, { useState, useEffect } from "react";
import CopyToClipboard from "../copy-to-clipboard/CopyToClipboard";
import { filteredOnlinePlayers, onlinePlayerType } from "./@types/partyFinder";
import {
  Wrapper,
  ShareItemWrapper,
  ShareItem,
  ScrollContent,
} from "./shareablePlayers.styled";
import { COLORS } from "@/constants/global";
import Skeleton from "react-loading-skeleton";

const SKELETON_QTTY = [8, 12, 11, 5];

type shareablePlayersProps = {
  onlinePlayers: onlinePlayerType[];
  levelToShare: { min: number; max: number };
  isLoading: boolean;
};
const ShareablePlayers = ({
  onlinePlayers,
  levelToShare,
  isLoading,
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
      {isLoading ? (
        <>
          {SKELETON_QTTY.map((qtty, index) => {
            return (
              <Skeleton
                key={`${qtty}-${index}`}
                baseColor={COLORS["body-bg"]}
                highlightColor="rgba(255,255,255,.1)"
                count={qtty}
                height={34}
                width={234}
                style={{ margin: ".2rem 0" }}
              />
            );
          })}
        </>
      ) : (
        <>
          {!!filteredPlayers?.ed.length && (
            <ScrollContent>
              <h2>Elder Druid</h2>
              <ShareItemWrapper>
                <ShareItem>
                  {filteredPlayers.ed.map((ed) => (
                    <CopyToClipboard
                      key={ed.name}
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
                      key={ek.level}
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
                      key={ms.name}
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
                      key={rp.name}
                      title={`${rp.name} - ${rp.level}`}
                    >
                      {rp.name}
                    </CopyToClipboard>
                  ))}
                </ShareItem>
              </ShareItemWrapper>
            </ScrollContent>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default ShareablePlayers;

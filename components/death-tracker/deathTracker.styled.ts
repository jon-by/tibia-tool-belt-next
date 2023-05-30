import { COLORS } from "@/constants/global";
import styled from "styled-components";

export const DeathTrackerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem;

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
  }
  input {
    width: 80px;
    background-color: transparent;
    color: ${COLORS.white};
    text-align: center;
    border: 0.5px solid ${COLORS.white};
    padding: 0.2rem;
  }

  select {
    width: 100px;
    background-color: transparent;
    color: ${COLORS.white};
    padding: 0.2rem;
    border: 0.5px solid ${COLORS.white};
    &::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    option {
      margin: 40px;
      background: ${COLORS["body-bg"]};
      color: #fff;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
    }
  }
`;

export const ScrolbleContent = styled.div`
  height: 500px;
  overflow: auto;
  padding: 1rem;
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(0, 0, 0, 0.3309698879551821) 100%
  );
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const DeathItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

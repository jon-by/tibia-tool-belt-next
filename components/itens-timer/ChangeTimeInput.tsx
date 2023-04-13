import React from 'react'
import { TimerInput } from './changeTimeInput.styled';

type changeTimeInputProps = {   
    dataType:string;
    defaultValue: number;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void ;
}

const ChangeTimeInput = ({dataType, defaultValue, onChange }: changeTimeInputProps) => {
  return (
    <TimerInput
    type="number"
    max={dataType === "hours"? 6:60}
    min={0}
    data-type={dataType}
    defaultValue={defaultValue}
    onChange={(event) => onChange(event)}
  />
  )
}

export default ChangeTimeInput
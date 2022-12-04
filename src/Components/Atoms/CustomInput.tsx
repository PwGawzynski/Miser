import { TextInput } from 'react-native';
import React, { useState } from 'react';

export interface Props {
  value: string;
  setter:
  | React.Dispatch<React.SetStateAction<string>>
  | ((text: string) => void);
  customStyles?: string;
  defaultValue: string;
}

export const CustomInput = ({
  setter,
  value,
  defaultValue,
  customStyles,
}: Props) => {
  const [focus, setFocus] = useState(false);

  return (
    <>
      {!focus && value === '' ? (
        <TextInput
          className={
            'w-10/12 border-b-2 border-[#848484] pb-2 text-xl font-medium text-white ' +
            (customStyles ?? '')
          }
          value={defaultValue}
          onChangeText={setter}
          onFocus={() => setFocus(true)}
        />
      ) : (
        <TextInput
          font-medium
          className={
            'w-10/12 border-b-2 border-white pb-2 text-xl font-medium text-white ' +
            (customStyles ?? '')
          }
          value={value}
          onChangeText={setter}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      )}
    </>
  );
};

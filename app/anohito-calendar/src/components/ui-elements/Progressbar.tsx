import { FC } from "react";
import { ProgressBar } from 'react-loader-spinner';

type progressbarType = {
  width?: number;
  height?: number;
  borderColor?: string;
  barColor?: string;
}

export const Progressbar: FC<progressbarType> = (props) => {
  const { width = 100, height = 100, borderColor = '#FF6070', barColor = "#FF6070" } = props;

  return (
    <ProgressBar
      width={String(width)}
      height={String(height)}
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor='#FF6070'
      barColor='#FF6070'
    />
  );
};
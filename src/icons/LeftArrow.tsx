import type { IconProps } from './types';

export const LeftArrow = ({ width = 18, height = 34, color = 'white', className }: IconProps) => (
  <svg width={width} height={height} viewBox="0 0 18 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.189 1.3787C18.2703 2.55026 18.2703 4.44978 17.189 5.62134L6.6855 17L17.189 28.3788C18.2703 29.5503 18.2703 31.4499 17.189 32.6214C16.1076 33.7929 14.3541 33.7929 13.2727 32.6214L0.811082 19.1213C0.291738 18.5585 0 17.7956 0 17C0 16.2041 0.291768 15.4412 0.811111 14.8787L13.2727 1.37867C14.3541 0.207105 16.1076 0.207106 17.189 1.3787Z"
      fill={color}
    />
  </svg>
);

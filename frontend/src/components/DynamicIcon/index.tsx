import React from 'react';
import { Flex, Icon } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
interface AppIconProps {
  icon?: string;
  color?: string;
  size?: number;
  w?: string;
  h?: string;
  isOpen?: boolean;
}
const ImportSvg = (icon: string) =>
  dynamic(() => import(`../../../public/icons/${icon}.svg`));

export const DynamicIcon = ({
  icon,
  size,
  w,
  h,
  isOpen,
  ...otherProps
}: AppIconProps) => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Icon
        // boxSize="100%"
        // viewBox="0 0 12px 12px"
        width={w ? w : 6}
        height={h ? h : 6}
        as={icon ? ImportSvg(icon) : (fallback as any)}
        {...otherProps}
      />
    </Flex>
  );
};

const fallback = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.15327 2.33781L10.3266 4.68448C10.4866 5.01115 10.9133 5.32448 11.2733 5.38448L13.3999 5.73781C14.7599 5.96448 15.0799 6.95115 14.0999 7.92448L12.4466 9.57781C12.1666 9.85781 12.0133 10.3978 12.0999 10.7845L12.5733 12.8311C12.9466 14.4511 12.0866 15.0778 10.6533 14.2311L8.65994 13.0511C8.29994 12.8378 7.70661 12.8378 7.33994 13.0511L5.34661 14.2311C3.91994 15.0778 3.05327 14.4445 3.42661 12.8311L3.89994 10.7845C3.98661 10.3978 3.83327 9.85781 3.55327 9.57781L1.89994 7.92448C0.926606 6.95115 1.23994 5.96448 2.59994 5.73781L4.72661 5.38448C5.07994 5.32448 5.50661 5.01115 5.66661 4.68448L6.83994 2.33781C7.47994 1.06448 8.51994 1.06448 9.15327 2.33781Z"
      stroke="#002C72"
      // stroke-linecap="round"
      // stroke-linejoin="round"
    />
  </svg>
);

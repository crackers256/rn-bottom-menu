import React from 'react';
import { StyleProp } from 'react-native';
import { WithSpringConfig } from 'react-native-reanimated';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
export declare const defaultSpringConfig: {
    damping: number;
    mass: number;
    stiffness: number;
};
type CustomProps = {
    mode: 'default';
    springConfig?: Omit<WithSpringConfig, 'toValue'>;
    bottomBarContainerStyle?: StyleProp<any>;
    focusedButtonStyle?: StyleProp<any>;
    isRtl?: boolean;
};
export declare const BottomMenuBar: React.FC<BottomTabBarProps & CustomProps>;
export {};

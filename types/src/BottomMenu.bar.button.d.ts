import React from 'react';
import { StyleProp } from 'react-native';
import { WithSpringConfig } from 'react-native-reanimated';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
interface Props {
    mode: 'default';
    index: number;
    isFocused: boolean;
    onPress: () => void;
    onLongPress: () => void;
    options: BottomTabNavigationOptions;
    inactiveTintColor?: string;
    activeTintColor?: string;
    springConfig?: WithSpringConfig;
    focusedButtonStyle?: StyleProp<any>;
}
export declare const defaultSpringConfig: WithSpringConfig;
export declare const BottomBarButton: React.FC<Props>;
export declare const BottomTabBarButton: React.FC<Props>;
export default BottomTabBarButton;

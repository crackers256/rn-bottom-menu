import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Route } from '@react-navigation/native';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { WithSpringConfig } from 'react-native-reanimated';
import { BottomBarButton } from './src/BottomMenu.bar.button';

declare module 'rn-bottom-menu' {
    export interface CustomProps {
        mode: 'default';
        springConfig?: Omit<WithSpringConfig, 'toValue'>;
        bottomBarContainerStyle?: StyleProp<ViewStyle>;
        focusedButtonStyle?: StyleProp<ViewStyle>;
        isRtl?: boolean;
    }

    export interface BottomMenuBarProps extends BottomTabBarProps, CustomProps {}
    const BottomNavigation: React.FC<BottomMenuBarProps>;

    export { BottomNavigation };
}

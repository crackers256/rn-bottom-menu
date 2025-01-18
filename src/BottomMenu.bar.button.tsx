import React, {memo, useEffect} from 'react';
import {StyleProp, TouchableOpacity, View} from 'react-native';

import RNReanimated, {
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    WithSpringConfig,
} from 'react-native-reanimated';

import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

import {style} from './BottomMenu.styles';

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

export const defaultSpringConfig: WithSpringConfig = {
    damping: 30,
    mass: 0.7,
    stiffness: 250,
};

export const BottomBarButton: React.FC<Props> = memo(
    ({
         isFocused,
         options,
         onPress,
         onLongPress,
         inactiveTintColor,
         focusedButtonStyle,
         springConfig,
     }) => {
        const animationValueThreshold = useSharedValue(0);

        useEffect(() => {
            if (isFocused) {
                animationValueThreshold.value = withSpring(
                    0,
                    springConfig || defaultSpringConfig
                );
            } else {
                animationValueThreshold.value = withSpring(
                    1,
                    springConfig || defaultSpringConfig
                );
            }
        }, [isFocused, animationValueThreshold, springConfig]);

        const animatedStyles = useAnimatedStyle(() => {
            return {
                opacity: animationValueThreshold.value,
                transform: [
                    {
                        scale: animationValueThreshold.value,
                    },
                ],
            };
        });

        const textAnimatedStyle = useAnimatedStyle(() => {
            return {
                opacity: interpolate(animationValueThreshold.value, [0.5, 1], [0, 1]),
            };
        });

        const textAnimatedStyleNew = useAnimatedStyle(() => {
            return {
                opacity: interpolate(animationValueThreshold.value, [1, 1], [1, 0]),
            };
        });

        return (
            <View style={style.wrapper}>
                <RNReanimated.View style={animatedStyles}>
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        // @ts-ignore
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        style={[style.unfocusedButton, isFocused ? focusedButtonStyle : {}]}
                        onLongPress={onLongPress}>
                        <View style={style.tabBarLabelWrapper}>
                            {options.tabBarIcon && !isFocused ? (
                                options.tabBarIcon({
                                    focused: isFocused,
                                    color: inactiveTintColor || 'white',
                                    size: 28,
                                })
                            ) : (
                                <View/>
                            )}
                            {options.tabBarLabel && (
                                <RNReanimated.Text
                                    style={[
                                        {
                                            marginTop: 2,
                                            color: inactiveTintColor,
                                        },
                                        isFocused ? textAnimatedStyleNew : textAnimatedStyle,
                                        options.tabBarLabelStyle,
                                    ]}>

                                    {typeof options.tabBarLabel === 'function'
                                        ? options.tabBarLabel({
                                            color: options.tabBarActiveTintColor || '', // pass the required properties
                                            children: options.tabBarLabel ? options.tabBarLabel.toString() : '',
                                            focused: false,
                                            position: 'beside-icon'
                                        })
                                        : options.tabBarLabel}
                                </RNReanimated.Text>
                            )}
                        </View>
                    </TouchableOpacity>
                </RNReanimated.View>
            </View>
        );
    }
);

export const BottomTabBarButton: React.FC<Props> = memo(
    ({
         isFocused,
         options,
         onPress,
         onLongPress,
         activeTintColor,
         springConfig,
         focusedButtonStyle,
     }) => {
        const animationValueThreshold = useSharedValue(0);

        useEffect(() => {
            if (isFocused) {
                animationValueThreshold.value = withSpring(
                    0,
                    springConfig || defaultSpringConfig
                );
            } else {
                animationValueThreshold.value = withSpring(
                    1,
                    springConfig || defaultSpringConfig
                );
            }
        }, [isFocused, animationValueThreshold, springConfig]);

        // [-18, 100]
        const animatedStyles = useAnimatedStyle(() => {
            return {
                transform: [
                    {
                        translateY: interpolate(
                            animationValueThreshold.value,
                            [0, 1],
                            [-35, 100]
                        ),
                    },
                ],
            };
        });

        const animatedTextStyles = useAnimatedStyle(() => {
            return {
                transform: [
                    {
                        translateY: interpolate(
                            animationValueThreshold.value,
                            [0, 1],
                            [55, 0]
                        ),
                    },
                ],
                opacity: interpolate(animationValueThreshold.value, [0, 1], [1, 0]),
                color: isFocused ? '#F78E11' : 'white',
                zIndex: 10,
            };
        });

        return (
            <View style={style.wrapper}>
                <RNReanimated.View style={[animatedStyles, style.focusedButton]}>
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        // @ts-ignore
                        testID={options?.tabBarTestID}
                        onPress={onPress}
                        style={[
                            {
                                ...style.focusedButton,
                                backgroundColor: activeTintColor || 'white',
                            },
                            isFocused ? focusedButtonStyle : {},
                        ]}
                        onLongPress={onLongPress}>
                        {options.tabBarIcon
                            ? options.tabBarIcon({
                                focused: isFocused,
                                color: 'white',
                                size: 28,
                            })
                            : null}
                    </TouchableOpacity>
                    {options.tabBarLabel && (
                        <RNReanimated.Text
                            style={[animatedTextStyles, options.tabBarLabelStyle]}>
                            {typeof options.tabBarLabel === 'function'
                                ? options.tabBarLabel({
                                    color: options.tabBarActiveTintColor || '', // pass the required properties
                                    children: options.tabBarLabel ? options.tabBarLabel.toString() : '',
                                    focused: false,
                                    position: 'beside-icon'
                                })
                                : options.tabBarLabel}
                        </RNReanimated.Text>
                    )}
                </RNReanimated.View>
            </View>
        );
    }
);

export default BottomTabBarButton;

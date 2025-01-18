import { StyleSheet } from 'react-native';

export const TAB_BAR_HEIGHT = 80;
export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: TAB_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  bottomFill: {
    width: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
  },
  fabButtonsContainer: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    // zIndex: -1,
    height: TAB_BAR_HEIGHT,
  },

  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    zIndex: 9,
    elevation: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  tabBarLabelWrapper: {
    zIndex: 12,
    alignItems: 'center',
  },
  focusedButton: {
    position: 'absolute',
    height: 60,
    width: 60,
    zIndex: -1,
    borderRadius: 32,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unfocusedButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    zIndex: 12,
  },
  barShapeWrapper: { elevation: 11, zIndex: 0, backgroundColor: 'transparent' },
});
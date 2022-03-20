import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Input({
  underlined,
  underlinedColor,
  underlinedHeight,
  bordered,
  borderColor,
  borderWidth,
  borderRadius,
  placeHolderPosition,
  renderIconLeft,
  renderIconRight,
  stacked,
  placeholder,
  style,
  wrapperStyle,
  IconWrapperStyle,
  ...rest
}) {
  return (
    <View
      style={[
        bordered && {
          borderWidth: borderWidth || 1,
          borderColor: borderColor || '#bbb',
          borderRadius: borderRadius || 5,
          padding: 5,
        },
        wrapperStyle,
      ]}
    >
      {stacked && <Text style={{ color: '#bbb' }}>{placeholder}</Text>}
      <View style={{ flexDirection: 'row' }}>
        {renderIconLeft && (
          <View style={[styles.iconWrapper, IconWrapperStyle]}>
            {renderIconLeft()}
          </View>
        )}
        <TextInput
          {...rest}
          placeholder={stacked ? '' : placeholder}
          style={[
            { flex: 1, padding: 0, textAlign: placeHolderPosition || 'left' },
            style,
          ]}
        />
        {renderIconRight && (
          <View style={styles.iconWrapper}>{renderIconRight()}</View>
        )}
      </View>
      {(underlined || stacked) && (
        <View
          style={{
            height: underlinedHeight || 1,
            backgroundColor: underlinedColor || '#bbbbbb80',
          }}
        />
      )}
    </View>
  );
}

export default Input;


import React from 'react';
import { View, Text, StyleSheet, Pressable, Linking } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { IconSymbol } from './IconSymbol';
import Animated, { FadeInUp } from 'react-native-reanimated';

export const ChannelInfo: React.FC = () => {
  const { isDark } = useTheme();

  const openTelegram = (username: string) => {
    Linking.openURL(`https://t.me/${username}`);
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: isDark ? '#1E1E2E' : '#FFFFFF',
      borderRadius: 16,
      padding: 16,
      marginHorizontal: 16,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: isDark ? '#313244' : '#E5E7EB',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    title: {
      fontSize: 18,
      fontWeight: '700',
      color: isDark ? '#CDD6F4' : '#1F2937',
      textAlign: 'center',
      marginBottom: 12,
    },
    linkContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    linkButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#A855F7',
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 12,
      flex: 0.45,
      justifyContent: 'center',
    },
    supportButton: {
      backgroundColor: '#3B82F6',
    },
    linkText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: '600',
      marginLeft: 8,
    },
  });

  return (
    <Animated.View entering={FadeInUp.delay(200)}>
      <View style={styles.container}>
        <Text style={styles.title}>🔗 ارتباط با ما</Text>
        <View style={styles.linkContainer}>
          <Pressable 
            style={styles.linkButton} 
            onPress={() => openTelegram('Academi_vpn')}
          >
            <IconSymbol name="paperplane.fill" size={16} color="#FFFFFF" />
            <Text style={styles.linkText}>کانال</Text>
          </Pressable>
          
          <Pressable 
            style={[styles.linkButton, styles.supportButton]} 
            onPress={() => openTelegram('MahdiAGM0')}
          >
            <IconSymbol name="person.fill" size={16} color="#FFFFFF" />
            <Text style={styles.linkText}>پشتیبانی</Text>
          </Pressable>
        </View>
      </View>
    </Animated.View>
  );
};

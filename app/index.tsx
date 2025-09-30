
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { ChannelInfo } from '../../components/ChannelInfo';
import { IconSymbol } from '../../components/IconSymbol';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { router } from 'expo-router';

export default function HomeScreen() {
  const { isDark, toggleTheme } = useTheme();

  const features = [
    {
      id: 'gaming',
      title: 'DNS گیمینگ',
      description: 'بهترین DNS های مخصوص بازی برای کاهش پینگ و بهبود تجربه گیمینگ',
      icon: 'gamecontroller.fill',
      color: '#A855F7',
      route: '/gaming'
    },
    {
      id: 'download',
      title: 'DNS دانلود',
      description: 'DNS های مخصوص دانلود برای رفع تحریم و افزایش سرعت دانلود',
      icon: 'arrow.down.circle.fill',
      color: '#3B82F6',
      route: '/download'
    },
    {
      id: 'ping',
      title: 'پینگ تست DNS',
      description: 'بررسی و تست بهترین DNS های جهانی بر اساس اینترنت شما',
      icon: 'wifi',
      color: '#10B981',
      route: '/ping'
    },
    {
      id: 'connection',
      title: 'مدیریت اتصال',
      description: 'مدیریت اتصالات DNS و تاریخچه اتصالات قبلی',
      icon: 'link',
      color: '#F59E0B',
      route: '/connection'
    }
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? '#11111B' : '#F9FAFB',
    },
    header: {
      padding: 20,
      paddingTop: 60,
      alignItems: 'center',
    },
    logo: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: isDark ? '#A855F7' : '#8B5CF6',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
      shadowColor: '#A855F7',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 12,
      elevation: 8,
    },
    title: {
      fontSize: 28,
      fontWeight: '800',
      color: isDark ? '#CDD6F4' : '#1F2937',
      textAlign: 'center',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: isDark ? '#A6ADC8' : '#6B7280',
      textAlign: 'center',
      marginBottom: 16,
    },
    themeButton: {
      position: 'absolute',
      top: 60,
      right: 20,
      backgroundColor: isDark ? '#313244' : '#E5E7EB',
      width: 44,
      height: 44,
      borderRadius: 22,
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      flex: 1,
      paddingHorizontal: 16,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: isDark ? '#CDD6F4' : '#1F2937',
      marginBottom: 16,
      textAlign: 'center',
    },
    featureCard: {
      backgroundColor: isDark ? '#1E1E2E' : '#FFFFFF',
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: isDark ? '#313244' : '#E5E7EB',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    featureHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    featureIcon: {
      width: 48,
      height: 48,
      borderRadius: 24,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 16,
    },
    featureTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: isDark ? '#CDD6F4' : '#1F2937',
      flex: 1,
    },
    featureDescription: {
      fontSize: 14,
      color: isDark ? '#A6ADC8' : '#6B7280',
      lineHeight: 20,
      marginBottom: 12,
    },
    tryButton: {
      backgroundColor: '#A855F7',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 8,
      alignSelf: 'flex-start',
    },
    tryButtonText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: '600',
    },
    instructionsCard: {
      backgroundColor: isDark ? '#1E1E2E' : '#FFFFFF',
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: isDark ? '#313244' : '#E5E7EB',
    },
    instructionsTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: isDark ? '#CDD6F4' : '#1F2937',
      marginBottom: 12,
      textAlign: 'center',
    },
    instructionItem: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 8,
    },
    instructionNumber: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: '#A855F7',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12,
    },
    instructionNumberText: {
      color: '#FFFFFF',
      fontSize: 12,
      fontWeight: '600',
    },
    instructionText: {
      flex: 1,
      fontSize: 14,
      color: isDark ? '#A6ADC8' : '#6B7280',
      lineHeight: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Pressable style={styles.themeButton} onPress={toggleTheme}>
        <IconSymbol 
          name={isDark ? 'sun.max.fill' : 'moon.fill'} 
          size={24} 
          color={isDark ? '#CDD6F4' : '#1F2937'} 
        />
      </Pressable>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeInUp.delay(100)} style={styles.header}>
          <View style={styles.logo}>
            <Text style={{ fontSize: 32 }}>🌐</Text>
          </View>
          <Text style={styles.title}>Academi DNS Manager</Text>
          <Text style={styles.subtitle}>مدیریت حرفه‌ای DNS برای بهترین تجربه اینترنت</Text>
        </Animated.View>

        <View style={styles.content}>
          <ChannelInfo />

          <Animated.View entering={FadeInDown.delay(300)}>
            <Text style={styles.sectionTitle}>✨ امکانات برنامه</Text>
          </Animated.View>

          {features.map((feature, index) => (
            <Animated.View key={feature.id} entering={FadeInDown.delay(400 + index * 100)}>
              <Pressable 
                style={styles.featureCard}
                onPress={() => router.push(feature.route as any)}
              >
                <View style={styles.featureHeader}>
                  <View style={[styles.featureIcon, { backgroundColor: feature.color }]}>
                    <IconSymbol name={feature.icon as any} size={24} color="#FFFFFF" />
                  </View>
                  <Text style={styles.featureTitle}>{feature.title}</Text>
                </View>
                <Text style={styles.featureDescription}>{feature.description}</Text>
                <Pressable style={styles.tryButton}>
                  <Text style={styles.tryButtonText}>امتحان کنید</Text>
                </Pressable>
              </Pressable>
            </Animated.View>
          ))}

          <Animated.View entering={FadeInDown.delay(800)} style={styles.instructionsCard}>
            <Text style={styles.instructionsTitle}>📖 راهنمای استفاده</Text>
            
            <View style={styles.instructionItem}>
              <View style={styles.instructionNumber}>
                <Text style={styles.instructionNumberText}>1</Text>
              </View>
              <Text style={styles.instructionText}>
                برای گیمینگ: دستگاه و بازی مورد نظر خود را انتخاب کنید
              </Text>
            </View>

            <View style={styles.instructionItem}>
              <View style={styles.instructionNumber}>
                <Text style={styles.instructionNumberText}>2</Text>
              </View>
              <Text style={styles.instructionText}>
                نوع IP (IPv4 یا IPv6) و تعداد DNS مورد نیاز را مشخص کنید
              </Text>
            </View>

            <View style={styles.instructionItem}>
              <View style={styles.instructionNumber}>
                <Text style={styles.instructionNumberText}>3</Text>
              </View>
              <Text style={styles.instructionText}>
                پینگ DNS ها را بررسی کرده و بهترین گزینه را انتخاب کنید
              </Text>
            </View>

            <View style={styles.instructionItem}>
              <View style={styles.instructionNumber}>
                <Text style={styles.instructionNumberText}>4</Text>
              </View>
              <Text style={styles.instructionText}>
                روی دکمه اتصال کلیک کرده و از اینترنت بهتر لذت ببرید
              </Text>
            </View>
          </Animated.View>
        </View>
      </ScrollView>
    </View>
  );
}

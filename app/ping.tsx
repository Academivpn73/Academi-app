
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { ChannelInfo } from '../../components/ChannelInfo';
import { DNSCard } from '../../components/DNSCard';
import { IconSymbol } from '../../components/IconSymbol';
import { generateDNSServers, DNSServer, measurePing } from '../../data/dnsData';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { router } from 'expo-router';

export default function PingScreen() {
  const { isDark } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [testedDNS, setTestedDNS] = useState<DNSServer[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handlePingTest = async () => {
    setIsLoading(true);
    setShowResults(false);
    
    try {
      // Generate new DNS servers for testing
      const dnsServers = generateDNSServers('general', 'ipv4', 20); // Get more servers to test
      
      // Test all DNS servers and measure ping
      const dnsWithPing = await Promise.all(
        dnsServers.map(async (dns) => {
          const ping = await measurePing(dns.primary);
          return { ...dns, ping };
        })
      );

      // Sort by ping and take best 8
      const sortedDNS = dnsWithPing
        .sort((a, b) => (a.ping || 999) - (b.ping || 999))
        .slice(0, 8);

      setTestedDNS(sortedDNS);
      setShowResults(true);
    } catch (error) {
      console.log('Error testing DNS:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConnect = (dns: DNSServer) => {
    router.push({
      pathname: '/connection',
      params: { 
        dns: JSON.stringify(dns),
        type: 'ping-test'
      }
    });
  };

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
    title: {
      fontSize: 24,
      fontWeight: '800',
      color: isDark ? '#CDD6F4' : '#1F2937',
      textAlign: 'center',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: isDark ? '#A6ADC8' : '#6B7280',
      textAlign: 'center',
    },
    content: {
      flex: 1,
      paddingHorizontal: 16,
    },
    testCard: {
      backgroundColor: isDark ? '#1E1E2E' : '#FFFFFF',
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: isDark ? '#313244' : '#E5E7EB',
      alignItems: 'center',
    },
    testIcon: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: '#10B981',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
    },
    testTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: isDark ? '#CDD6F4' : '#1F2937',
      marginBottom: 8,
      textAlign: 'center',
    },
    testDescription: {
      fontSize: 14,
      color: isDark ? '#A6ADC8' : '#6B7280',
      textAlign: 'center',
      marginBottom: 20,
      lineHeight: 20,
    },
    testButton: {
      backgroundColor: '#10B981',
      borderRadius: 12,
      paddingHorizontal: 24,
      paddingVertical: 12,
      flexDirection: 'row',
      alignItems: 'center',
    },
    testButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '700',
      marginLeft: 8,
    },
    loadingContainer: {
      backgroundColor: isDark ? '#1E1E2E' : '#FFFFFF',
      borderRadius: 16,
      padding: 40,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: isDark ? '#313244' : '#E5E7EB',
      alignItems: 'center',
    },
    loadingText: {
      fontSize: 16,
      color: isDark ? '#CDD6F4' : '#1F2937',
      marginTop: 16,
      textAlign: 'center',
    },
    loadingSubtext: {
      fontSize: 14,
      color: isDark ? '#A6ADC8' : '#6B7280',
      marginTop: 8,
      textAlign: 'center',
    },
    infoCard: {
      backgroundColor: isDark ? '#1E1E2E' : '#FFFFFF',
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: isDark ? '#313244' : '#E5E7EB',
      borderLeftWidth: 4,
      borderLeftColor: '#10B981',
    },
    infoTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: isDark ? '#CDD6F4' : '#1F2937',
      marginBottom: 8,
    },
    infoText: {
      fontSize: 14,
      color: isDark ? '#A6ADC8' : '#6B7280',
      lineHeight: 20,
    },
    resultsTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: isDark ? '#CDD6F4' : '#1F2937',
      textAlign: 'center',
      marginBottom: 16,
    },
    refreshButton: {
      backgroundColor: isDark ? '#313244' : '#F3F4F6',
      borderRadius: 8,
      padding: 12,
      alignItems: 'center',
      marginBottom: 16,
    },
    refreshButtonText: {
      color: isDark ? '#CDD6F4' : '#1F2937',
      fontSize: 14,
      fontWeight: '600',
    },
    statsCard: {
      backgroundColor: isDark ? '#1E1E2E' : '#FFFFFF',
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: isDark ? '#313244' : '#E5E7EB',
    },
    statsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    statItem: {
      alignItems: 'center',
      flex: 1,
    },
    statNumber: {
      fontSize: 24,
      fontWeight: '800',
      color: '#10B981',
      marginBottom: 4,
    },
    statLabel: {
      fontSize: 12,
      color: isDark ? '#A6ADC8' : '#6B7280',
      textAlign: 'center',
    },
    featureList: {
      marginTop: 12,
    },
    featureItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 6,
    },
    featureText: {
      fontSize: 14,
      color: isDark ? '#A6ADC8' : '#6B7280',
      marginLeft: 8,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeInUp.delay(100)} style={styles.header}>
          <Text style={styles.title}>📊 پینگ تست DNS</Text>
          <Text style={styles.subtitle}>بررسی بهترین DNS ها برای شما</Text>
        </Animated.View>

        <View style={styles.content}>
          <ChannelInfo />

          <Animated.View entering={FadeInDown.delay(200)} style={styles.statsCard}>
            <Text style={styles.infoTitle}>📊 آمار تست DNS</Text>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>30+</Text>
                <Text style={styles.statLabel}>سرور جهانی</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>8</Text>
                <Text style={styles.statLabel}>بهترین انتخاب</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>20+</Text>
                <Text style={styles.statLabel}>کشور مختلف</Text>
              </View>
            </View>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(250)} style={styles.infoCard}>
            <Text style={styles.infoTitle}>🔍 چگونه کار می‌کند؟</Text>
            <Text style={styles.infoText}>
              این ابزار DNS های جدید تولید می‌کند و آن‌ها را بر اساس اینترنت شما تست می‌کند و 8 تای بهترین را با کمترین پینگ به شما نشان می‌دهد.
            </Text>
            <View style={styles.featureList}>
              <View style={styles.featureItem}>
                <IconSymbol name="checkmark.circle.fill" size={16} color="#10B981" />
                <Text style={styles.featureText}>تست پینگ دقیق و واقعی</Text>
              </View>
              <View style={styles.featureItem}>
                <IconSymbol name="checkmark.circle.fill" size={16} color="#10B981" />
                <Text style={styles.featureText}>انتخاب بهترین DNS ها</Text>
              </View>
              <View style={styles.featureItem}>
                <IconSymbol name="checkmark.circle.fill" size={16} color="#10B981" />
                <Text style={styles.featureText}>DNS های جدید در هر تست</Text>
              </View>
              <View style={styles.featureItem}>
                <IconSymbol name="checkmark.circle.fill" size={16} color="#10B981" />
                <Text style={styles.featureText}>مرتب‌سازی بر اساس عملکرد</Text>
              </View>
            </View>
          </Animated.View>

          {!isLoading && !showResults && (
            <Animated.View entering={FadeInDown.delay(300)} style={styles.testCard}>
              <View style={styles.testIcon}>
                <IconSymbol name="wifi" size={40} color="#FFFFFF" />
              </View>
              <Text style={styles.testTitle}>تست پینگ DNS جدید</Text>
              <Text style={styles.testDescription}>
                برای تولید و تست DNS های جدید و یافتن بهترین‌ها بر اساس اینترنت شما، روی دکمه زیر کلیک کنید.
              </Text>
              <Pressable style={styles.testButton} onPress={handlePingTest}>
                <IconSymbol name="play.fill" size={16} color="#FFFFFF" />
                <Text style={styles.testButtonText}>شروع تست جدید</Text>
              </Pressable>
            </Animated.View>
          )}

          {isLoading && (
            <Animated.View entering={FadeInDown.delay(300)} style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#10B981" />
              <Text style={styles.loadingText}>در حال تولید و تست DNS های جدید...</Text>
              <Text style={styles.loadingSubtext}>
                لطفاً صبر کنید، این فرآیند چند ثانیه طول می‌کشد
              </Text>
            </Animated.View>
          )}

          {showResults && (
            <Animated.View entering={FadeInDown.delay(400)}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <Text style={[styles.resultsTitle, { marginBottom: 0 }]}>🏆 بهترین DNS های جدید</Text>
                <Pressable style={styles.refreshButton} onPress={handlePingTest}>
                  <Text style={styles.refreshButtonText}>تست مجدد</Text>
                </Pressable>
              </View>
              
              {testedDNS.map((dns, index) => (
                <DNSCard 
                  key={dns.id} 
                  dns={dns} 
                  index={index}
                  onConnect={handleConnect}
                />
              ))}
            </Animated.View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}


import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { ChannelInfo } from '../../components/ChannelInfo';
import { DNSCard } from '../../components/DNSCard';
import { IconSymbol } from '../../components/IconSymbol';
import { generateDNSServers, DNSServer } from '../../data/dnsData';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { router } from 'expo-router';

export default function DownloadScreen() {
  const { isDark } = useTheme();
  const [ipVersion, setIpVersion] = useState<'ipv4' | 'ipv6'>('ipv4');
  const [dnsCount, setDnsCount] = useState(4);
  const [showResults, setShowResults] = useState(false);
  const [currentDNSServers, setCurrentDNSServers] = useState<DNSServer[]>([]);

  const handleSearch = () => {
    // Generate new DNS servers on each search
    const newDNSServers = generateDNSServers('download', ipVersion, dnsCount);
    setCurrentDNSServers(newDNSServers);
    setShowResults(true);
  };

  const handleConnect = (dns: DNSServer) => {
    router.push({
      pathname: '/connection',
      params: { 
        dns: JSON.stringify(dns),
        type: 'download'
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
    selectionCard: {
      backgroundColor: isDark ? '#1E1E2E' : '#FFFFFF',
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: isDark ? '#313244' : '#E5E7EB',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: isDark ? '#CDD6F4' : '#1F2937',
      marginBottom: 16,
    },
    optionsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    optionButton: {
      backgroundColor: isDark ? '#313244' : '#F3F4F6',
      borderRadius: 8,
      padding: 12,
      flex: 0.48,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: isDark ? '#45475A' : '#D1D5DB',
    },
    selectedOption: {
      backgroundColor: '#3B82F6',
      borderColor: '#3B82F6',
    },
    optionText: {
      fontSize: 14,
      fontWeight: '600',
      color: isDark ? '#CDD6F4' : '#1F2937',
    },
    selectedText: {
      color: '#FFFFFF',
    },
    countSelector: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
    },
    countButton: {
      backgroundColor: isDark ? '#313244' : '#F3F4F6',
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 8,
    },
    countText: {
      fontSize: 18,
      fontWeight: '700',
      color: isDark ? '#CDD6F4' : '#1F2937',
      marginHorizontal: 16,
    },
    searchButton: {
      backgroundColor: '#3B82F6',
      borderRadius: 12,
      padding: 16,
      alignItems: 'center',
    },
    searchButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '700',
    },
    infoCard: {
      backgroundColor: isDark ? '#1E1E2E' : '#FFFFFF',
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: isDark ? '#313244' : '#E5E7EB',
      borderLeftWidth: 4,
      borderLeftColor: '#3B82F6',
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
      color: '#3B82F6',
      marginBottom: 4,
    },
    statLabel: {
      fontSize: 12,
      color: isDark ? '#A6ADC8' : '#6B7280',
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeInUp.delay(100)} style={styles.header}>
          <Text style={styles.title}>📥 DNS دانلود</Text>
          <Text style={styles.subtitle}>رفع تحریم و افزایش سرعت دانلود</Text>
        </Animated.View>

        <View style={styles.content}>
          <ChannelInfo />

          <Animated.View entering={FadeInDown.delay(200)} style={styles.statsCard}>
            <Text style={styles.infoTitle}>📊 آمار DNS های دانلود</Text>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>25+</Text>
                <Text style={styles.statLabel}>سرور IPv4</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>12+</Text>
                <Text style={styles.statLabel}>سرور IPv6</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>15+</Text>
                <Text style={styles.statLabel}>کشور مختلف</Text>
              </View>
            </View>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(250)} style={styles.infoCard}>
            <Text style={styles.infoTitle}>💡 ویژگی‌های DNS دانلود</Text>
            <Text style={styles.infoText}>
              DNS های این بخش به طور خاص برای بهبود دانلود و رفع تحریم‌ها بهینه شده‌اند.
            </Text>
            <View style={styles.featureList}>
              <View style={styles.featureItem}>
                <IconSymbol name="checkmark.circle.fill" size={16} color="#10B981" />
                <Text style={styles.featureText}>رفع تحریم سایت‌های دانلود</Text>
              </View>
              <View style={styles.featureItem}>
                <IconSymbol name="checkmark.circle.fill" size={16} color="#10B981" />
                <Text style={styles.featureText}>افزایش سرعت دانلود</Text>
              </View>
              <View style={styles.featureItem}>
                <IconSymbol name="checkmark.circle.fill" size={16} color="#10B981" />
                <Text style={styles.featureText}>دسترسی به محتوای محدود شده</Text>
              </View>
              <View style={styles.featureItem}>
                <IconSymbol name="checkmark.circle.fill" size={16} color="#10B981" />
                <Text style={styles.featureText}>بهبود اتصال به CDN ها</Text>
              </View>
              <View style={styles.featureItem}>
                <IconSymbol name="checkmark.circle.fill" size={16} color="#10B981" />
                <Text style={styles.featureText}>DNS جدید در هر جستجو</Text>
              </View>
            </View>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(300)} style={styles.selectionCard}>
            <Text style={styles.sectionTitle}>نوع IP</Text>
            <View style={styles.optionsRow}>
              <Pressable 
                style={[styles.optionButton, ipVersion === 'ipv4' && styles.selectedOption]}
                onPress={() => setIpVersion('ipv4')}
              >
                <Text style={[styles.optionText, ipVersion === 'ipv4' && styles.selectedText]}>
                  IPv4
                </Text>
              </Pressable>
              <Pressable 
                style={[styles.optionButton, ipVersion === 'ipv6' && styles.selectedOption]}
                onPress={() => setIpVersion('ipv6')}
              >
                <Text style={[styles.optionText, ipVersion === 'ipv6' && styles.selectedText]}>
                  IPv6
                </Text>
              </Pressable>
            </View>

            <Text style={styles.sectionTitle}>تعداد DNS</Text>
            <View style={styles.countSelector}>
              <Pressable 
                style={styles.countButton}
                onPress={() => setDnsCount(Math.max(1, dnsCount - 1))}
              >
                <IconSymbol name="minus" size={20} color={isDark ? '#CDD6F4' : '#1F2937'} />
              </Pressable>
              <Text style={styles.countText}>{dnsCount}</Text>
              <Pressable 
                style={styles.countButton}
                onPress={() => setDnsCount(Math.min(12, dnsCount + 1))}
              >
                <IconSymbol name="plus" size={20} color={isDark ? '#CDD6F4' : '#1F2937'} />
              </Pressable>
            </View>

            <Pressable 
              style={styles.searchButton}
              onPress={handleSearch}
            >
              <Text style={styles.searchButtonText}>تولید DNS های جدید</Text>
            </Pressable>
          </Animated.View>

          {showResults && (
            <Animated.View entering={FadeInDown.delay(400)}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <Text style={[styles.sectionTitle, { textAlign: 'center', marginBottom: 0 }]}>
                  🚀 DNS های دانلود جدید
                </Text>
                <Pressable style={styles.refreshButton} onPress={handleSearch}>
                  <Text style={styles.refreshButtonText}>تولید مجدد</Text>
                </Pressable>
              </View>
              {currentDNSServers.map((dns, index) => (
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

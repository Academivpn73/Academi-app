
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Modal } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { ChannelInfo } from '../../components/ChannelInfo';
import { DNSCard } from '../../components/DNSCard';
import { IconSymbol } from '../../components/IconSymbol';
import { devices, generateDNSServers, DNSServer } from '../../data/dnsData';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { router } from 'expo-router';

export default function GamingScreen() {
  const { isDark } = useTheme();
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);
  const [ipVersion, setIpVersion] = useState<'ipv4' | 'ipv6'>('ipv4');
  const [dnsCount, setDnsCount] = useState(4);
  const [showDeviceModal, setShowDeviceModal] = useState(false);
  const [showGameModal, setShowGameModal] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [currentDNSServers, setCurrentDNSServers] = useState<DNSServer[]>([]);

  const handleDeviceSelect = (device: any) => {
    setSelectedDevice(device);
    setSelectedGame(null);
    setShowDeviceModal(false);
    setShowResults(false);
    setCurrentDNSServers([]);
  };

  const handleGameSelect = (game: any) => {
    setSelectedGame(game);
    setShowGameModal(false);
  };

  const handleSearch = () => {
    if (selectedDevice && selectedGame) {
      // Generate new DNS servers on each search
      const newDNSServers = generateDNSServers('gaming', ipVersion, dnsCount);
      setCurrentDNSServers(newDNSServers);
      setShowResults(true);
    }
  };

  const handleConnect = (dns: DNSServer) => {
    router.push({
      pathname: '/connection',
      params: { 
        dns: JSON.stringify(dns),
        device: selectedDevice?.name,
        game: selectedGame?.name
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
    selectionButton: {
      backgroundColor: isDark ? '#313244' : '#F3F4F6',
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: isDark ? '#45475A' : '#D1D5DB',
    },
    selectedButton: {
      backgroundColor: '#A855F7',
      borderColor: '#A855F7',
    },
    selectionText: {
      fontSize: 16,
      fontWeight: '600',
      color: isDark ? '#CDD6F4' : '#1F2937',
      textAlign: 'center',
    },
    selectedText: {
      color: '#FFFFFF',
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
      backgroundColor: '#A855F7',
      borderColor: '#A855F7',
    },
    optionText: {
      fontSize: 14,
      fontWeight: '600',
      color: isDark ? '#CDD6F4' : '#1F2937',
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
      backgroundColor: '#A855F7',
      borderRadius: 12,
      padding: 16,
      alignItems: 'center',
    },
    searchButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '700',
    },
    disabledButton: {
      backgroundColor: isDark ? '#45475A' : '#D1D5DB',
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: isDark ? '#1E1E2E' : '#FFFFFF',
      borderRadius: 16,
      padding: 20,
      width: '90%',
      maxHeight: '80%',
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: isDark ? '#CDD6F4' : '#1F2937',
      textAlign: 'center',
      marginBottom: 20,
    },
    modalItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderRadius: 12,
      marginBottom: 8,
      backgroundColor: isDark ? '#313244' : '#F3F4F6',
    },
    modalItemText: {
      fontSize: 16,
      fontWeight: '600',
      color: isDark ? '#CDD6F4' : '#1F2937',
      marginLeft: 12,
    },
    closeButton: {
      backgroundColor: '#6B7280',
      borderRadius: 8,
      padding: 12,
      alignItems: 'center',
      marginTop: 16,
    },
    closeButtonText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: '600',
    },
    gameCount: {
      fontSize: 12,
      color: isDark ? '#A6ADC8' : '#6B7280',
      marginTop: 4,
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
  });

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeInUp.delay(100)} style={styles.header}>
          <Text style={styles.title}>🎮 DNS گیمینگ</Text>
          <Text style={styles.subtitle}>بهترین DNS برای تجربه گیمینگ بی‌نظیر</Text>
        </Animated.View>

        <View style={styles.content}>
          <ChannelInfo />

          <Animated.View entering={FadeInDown.delay(200)} style={styles.selectionCard}>
            <Text style={styles.sectionTitle}>انتخاب دستگاه</Text>
            <Pressable 
              style={[styles.selectionButton, selectedDevice && styles.selectedButton]}
              onPress={() => setShowDeviceModal(true)}
            >
              <Text style={[styles.selectionText, selectedDevice && styles.selectedText]}>
                {selectedDevice ? `${selectedDevice.icon} ${selectedDevice.name}` : 'انتخاب دستگاه'}
              </Text>
              {selectedDevice && (
                <Text style={[styles.gameCount, selectedDevice && { color: '#FFFFFF' }]}>
                  {selectedDevice.games.length} بازی موجود
                </Text>
              )}
            </Pressable>

            {selectedDevice && (
              <>
                <Text style={styles.sectionTitle}>انتخاب بازی</Text>
                <Pressable 
                  style={[styles.selectionButton, selectedGame && styles.selectedButton]}
                  onPress={() => setShowGameModal(true)}
                >
                  <Text style={[styles.selectionText, selectedGame && styles.selectedText]}>
                    {selectedGame ? `${selectedGame.icon} ${selectedGame.name}` : 'انتخاب بازی'}
                  </Text>
                  {selectedGame && (
                    <Text style={[styles.gameCount, selectedGame && { color: '#FFFFFF' }]}>
                      دسته‌بندی: {selectedGame.category}
                    </Text>
                  )}
                </Pressable>
              </>
            )}

            {selectedGame && (
              <>
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
                  style={[styles.searchButton, (!selectedDevice || !selectedGame) && styles.disabledButton]}
                  onPress={handleSearch}
                  disabled={!selectedDevice || !selectedGame}
                >
                  <Text style={styles.searchButtonText}>جستجوی DNS جدید</Text>
                </Pressable>
              </>
            )}
          </Animated.View>

          {showResults && (
            <Animated.View entering={FadeInDown.delay(300)}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <Text style={[styles.sectionTitle, { textAlign: 'center', marginBottom: 0 }]}>
                  🎯 DNS های گیمینگ جدید
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

      {/* Device Selection Modal */}
      <Modal visible={showDeviceModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>انتخاب دستگاه</Text>
            <ScrollView>
              {devices.map(device => (
                <Pressable 
                  key={device.id}
                  style={styles.modalItem}
                  onPress={() => handleDeviceSelect(device)}
                >
                  <Text style={{ fontSize: 24 }}>{device.icon}</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.modalItemText}>{device.name}</Text>
                    <Text style={styles.gameCount}>{device.games.length} بازی</Text>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
            <Pressable style={styles.closeButton} onPress={() => setShowDeviceModal(false)}>
              <Text style={styles.closeButtonText}>بستن</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Game Selection Modal */}
      <Modal visible={showGameModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>انتخاب بازی</Text>
            <ScrollView>
              {selectedDevice?.games.map(game => (
                <Pressable 
                  key={game.id}
                  style={styles.modalItem}
                  onPress={() => handleGameSelect(game)}
                >
                  <Text style={{ fontSize: 24 }}>{game.icon}</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.modalItemText}>{game.name}</Text>
                    <Text style={styles.gameCount}>{game.category}</Text>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
            <Pressable style={styles.closeButton} onPress={() => setShowGameModal(false)}>
              <Text style={styles.closeButtonText}>بستن</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

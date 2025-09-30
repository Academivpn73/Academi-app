
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TextInput, Modal, Alert } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { ChannelInfo } from '../../components/ChannelInfo';
import { IconSymbol } from '../../components/IconSymbol';
import { DNSServer, measurePing } from '../../data/dnsData';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ConnectionHistory {
  id: string;
  dns: DNSServer;
  connectedAt: string;
  device?: string;
  game?: string;
  type?: string;
}

export default function ConnectionScreen() {
  const { isDark } = useTheme();
  const params = useLocalSearchParams();
  const [isConnected, setIsConnected] = useState(false);
  const [currentDNS, setCurrentDNS] = useState<DNSServer | null>(null);
  const [connectionHistory, setConnectionHistory] = useState<ConnectionHistory[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [customDNS, setCustomDNS] = useState({
    name: '',
    primary: '',
    secondary: '',
    ipVersion: 'ipv4' as 'ipv4' | 'ipv6'
  });
  const [currentPing, setCurrentPing] = useState<number | null>(null);

  useEffect(() => {
    loadConnectionHistory();
    
    // If DNS passed from other screen, set it as current
    if (params.dns) {
      try {
        const dns = JSON.parse(params.dns as string);
        setCurrentDNS(dns);
      } catch (error) {
        console.log('Error parsing DNS:', error);
      }
    }
  }, [params]);

  useEffect(() => {
    let pingInterval: NodeJS.Timeout;
    
    if (isConnected && currentDNS) {
      // Start ping monitoring
      const updatePing = async () => {
        try {
          const ping = await measurePing(currentDNS.primary);
          setCurrentPing(ping);
        } catch (error) {
          console.log('Error measuring ping:', error);
        }
      };
      
      updatePing();
      pingInterval = setInterval(updatePing, 3000); // Update every 3 seconds
    }

    return () => {
      if (pingInterval) {
        clearInterval(pingInterval);
      }
    };
  }, [isConnected, currentDNS]);

  const loadConnectionHistory = async () => {
    try {
      const history = await AsyncStorage.getItem('dnsConnectionHistory');
      if (history) {
        setConnectionHistory(JSON.parse(history));
      }
    } catch (error) {
      console.log('Error loading history:', error);
    }
  };

  const saveConnectionHistory = async (newConnection: ConnectionHistory) => {
    try {
      const updatedHistory = [newConnection, ...connectionHistory.slice(0, 9)]; // Keep last 10
      setConnectionHistory(updatedHistory);
      await AsyncStorage.setItem('dnsConnectionHistory', JSON.stringify(updatedHistory));
    } catch (error) {
      console.log('Error saving history:', error);
    }
  };

  const handleConnect = async (dns: DNSServer) => {
    setCurrentDNS(dns);
    setIsConnected(true);
    
    // Save to history
    const connection: ConnectionHistory = {
      id: Date.now().toString(),
      dns,
      connectedAt: new Date().toISOString(),
      device: params.device as string,
      game: params.game as string,
      type: params.type as string
    };
    
    await saveConnectionHistory(connection);
    
    Alert.alert(
      'اتصال برقرار شد',
      `با موفقیت به ${dns.name} متصل شدید`,
      [{ text: 'باشه', style: 'default' }]
    );
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setCurrentDNS(null);
    setCurrentPing(null);
    
    Alert.alert(
      'اتصال قطع شد',
      'اتصال DNS با موفقیت قطع شد',
      [{ text: 'باشه', style: 'default' }]
    );
  };

  const handleAddCustomDNS = async () => {
    if (!customDNS.name || !customDNS.primary || !customDNS.secondary) {
      Alert.alert('خطا', 'لطفاً تمام فیلدها را پر کنید');
      return;
    }

    const dns: DNSServer = {
      id: `custom_${Date.now()}`,
      name: customDNS.name,
      primary: customDNS.primary,
      secondary: customDNS.secondary,
      type: 'general',
      ipVersion: customDNS.ipVersion,
      location: 'Custom'
    };

    await handleConnect(dns);
    setShowAddModal(false);
    setCustomDNS({ name: '', primary: '', secondary: '', ipVersion: 'ipv4' });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fa-IR') + ' ' + date.toLocaleTimeString('fa-IR', { 
      hour: '2-digit', 
      minute: '2-digit' 
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
    statusCard: {
      backgroundColor: isDark ? '#1E1E2E' : '#FFFFFF',
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: isDark ? '#313244' : '#E5E7EB',
      alignItems: 'center',
    },
    statusIcon: {
      width: 80,
      height: 80,
      borderRadius: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
    },
    connectedIcon: {
      backgroundColor: '#10B981',
    },
    disconnectedIcon: {
      backgroundColor: '#6B7280',
    },
    statusTitle: {
      fontSize: 20,
      fontWeight: '700',
      marginBottom: 8,
      textAlign: 'center',
    },
    connectedTitle: {
      color: '#10B981',
    },
    disconnectedTitle: {
      color: isDark ? '#A6ADC8' : '#6B7280',
    },
    dnsInfo: {
      backgroundColor: isDark ? '#313244' : '#F3F4F6',
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      width: '100%',
    },
    dnsName: {
      fontSize: 18,
      fontWeight: '700',
      color: isDark ? '#CDD6F4' : '#1F2937',
      textAlign: 'center',
      marginBottom: 8,
    },
    dnsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 4,
    },
    dnsLabel: {
      fontSize: 14,
      color: isDark ? '#A6ADC8' : '#6B7280',
      fontWeight: '500',
    },
    dnsValue: {
      fontSize: 14,
      color: isDark ? '#CDD6F4' : '#1F2937',
      fontWeight: '600',
      fontFamily: 'monospace',
    },
    pingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 8,
    },
    pingDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginRight: 8,
    },
    pingText: {
      fontSize: 16,
      fontWeight: '600',
    },
    actionButton: {
      borderRadius: 12,
      paddingHorizontal: 24,
      paddingVertical: 12,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 16,
    },
    connectButton: {
      backgroundColor: '#10B981',
    },
    disconnectButton: {
      backgroundColor: '#F44336',
    },
    actionButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '700',
      marginLeft: 8,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: isDark ? '#CDD6F4' : '#1F2937',
      marginBottom: 16,
    },
    addButton: {
      backgroundColor: '#A855F7',
      borderRadius: 12,
      padding: 16,
      alignItems: 'center',
      marginBottom: 16,
    },
    addButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '700',
    },
    historyItem: {
      backgroundColor: isDark ? '#1E1E2E' : '#FFFFFF',
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: isDark ? '#313244' : '#E5E7EB',
    },
    historyHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    historyName: {
      fontSize: 16,
      fontWeight: '700',
      color: isDark ? '#CDD6F4' : '#1F2937',
      flex: 1,
    },
    historyDate: {
      fontSize: 12,
      color: isDark ? '#A6ADC8' : '#6B7280',
    },
    historyDetails: {
      fontSize: 14,
      color: isDark ? '#A6ADC8' : '#6B7280',
      marginBottom: 8,
    },
    historyDNS: {
      fontSize: 12,
      color: isDark ? '#A6ADC8' : '#6B7280',
      fontFamily: 'monospace',
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
    input: {
      backgroundColor: isDark ? '#313244' : '#F3F4F6',
      borderRadius: 8,
      padding: 12,
      marginBottom: 16,
      fontSize: 16,
      color: isDark ? '#CDD6F4' : '#1F2937',
      borderWidth: 1,
      borderColor: isDark ? '#45475A' : '#D1D5DB',
    },
    inputLabel: {
      fontSize: 14,
      fontWeight: '600',
      color: isDark ? '#CDD6F4' : '#1F2937',
      marginBottom: 8,
    },
    ipVersionSelector: {
      flexDirection: 'row',
      marginBottom: 16,
    },
    ipVersionButton: {
      flex: 1,
      backgroundColor: isDark ? '#313244' : '#F3F4F6',
      borderRadius: 8,
      padding: 12,
      alignItems: 'center',
      marginHorizontal: 4,
      borderWidth: 1,
      borderColor: isDark ? '#45475A' : '#D1D5DB',
    },
    selectedIpVersion: {
      backgroundColor: '#A855F7',
      borderColor: '#A855F7',
    },
    ipVersionText: {
      fontSize: 14,
      fontWeight: '600',
      color: isDark ? '#CDD6F4' : '#1F2937',
    },
    selectedIpVersionText: {
      color: '#FFFFFF',
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    modalButton: {
      flex: 0.48,
      borderRadius: 8,
      padding: 12,
      alignItems: 'center',
    },
    cancelButton: {
      backgroundColor: '#6B7280',
    },
    confirmButton: {
      backgroundColor: '#A855F7',
    },
    modalButtonText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: '600',
    },
  });

  const getPingColor = (ping: number) => {
    if (ping < 30) return '#10B981';
    if (ping < 60) return '#F59E0B';
    return '#F44336';
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeInUp.delay(100)} style={styles.header}>
          <Text style={styles.title}>🔗 مدیریت اتصال</Text>
          <Text style={styles.subtitle}>اتصال و مدیریت DNS های شما</Text>
        </Animated.View>

        <View style={styles.content}>
          <ChannelInfo />

          {/* Connection Status */}
          <Animated.View entering={FadeInDown.delay(200)} style={styles.statusCard}>
            <View style={[styles.statusIcon, isConnected ? styles.connectedIcon : styles.disconnectedIcon]}>
              <IconSymbol 
                name={isConnected ? 'wifi' : 'wifi.slash'} 
                size={40} 
                color="#FFFFFF" 
              />
            </View>
            
            <Text style={[styles.statusTitle, isConnected ? styles.connectedTitle : styles.disconnectedTitle]}>
              {isConnected ? 'متصل' : 'قطع'}
            </Text>

            {isConnected && currentDNS && (
              <View style={styles.dnsInfo}>
                <Text style={styles.dnsName}>{currentDNS.name}</Text>
                <View style={styles.dnsRow}>
                  <Text style={styles.dnsLabel}>Primary:</Text>
                  <Text style={styles.dnsValue}>{currentDNS.primary}</Text>
                </View>
                <View style={styles.dnsRow}>
                  <Text style={styles.dnsLabel}>Secondary:</Text>
                  <Text style={styles.dnsValue}>{currentDNS.secondary}</Text>
                </View>
                
                {currentPing && (
                  <View style={styles.pingContainer}>
                    <View style={[styles.pingDot, { backgroundColor: getPingColor(currentPing) }]} />
                    <Text style={[styles.pingText, { color: getPingColor(currentPing) }]}>
                      {currentPing}ms
                    </Text>
                  </View>
                )}
              </View>
            )}

            {currentDNS && (
              <Pressable 
                style={[styles.actionButton, isConnected ? styles.disconnectButton : styles.connectButton]}
                onPress={isConnected ? handleDisconnect : () => handleConnect(currentDNS)}
              >
                <IconSymbol 
                  name={isConnected ? 'xmark' : 'checkmark'} 
                  size={16} 
                  color="#FFFFFF" 
                />
                <Text style={styles.actionButtonText}>
                  {isConnected ? 'قطع اتصال' : 'اتصال'}
                </Text>
              </Pressable>
            )}
          </Animated.View>

          {/* Add Custom DNS */}
          <Animated.View entering={FadeInDown.delay(300)}>
            <Text style={styles.sectionTitle}>➕ افزودن DNS دستی</Text>
            <Pressable style={styles.addButton} onPress={() => setShowAddModal(true)}>
              <Text style={styles.addButtonText}>افزودن DNS جدید</Text>
            </Pressable>
          </Animated.View>

          {/* Connection History */}
          <Animated.View entering={FadeInDown.delay(400)}>
            <Text style={styles.sectionTitle}>📋 تاریخچه اتصالات</Text>
            {connectionHistory.length === 0 ? (
              <View style={styles.historyItem}>
                <Text style={[styles.historyDetails, { textAlign: 'center' }]}>
                  هنوز اتصالی برقرار نکرده‌اید
                </Text>
              </View>
            ) : (
              connectionHistory.map((connection, index) => (
                <Pressable 
                  key={connection.id}
                  style={styles.historyItem}
                  onPress={() => handleConnect(connection.dns)}
                >
                  <View style={styles.historyHeader}>
                    <Text style={styles.historyName}>{connection.dns.name}</Text>
                    <Text style={styles.historyDate}>{formatDate(connection.connectedAt)}</Text>
                  </View>
                  
                  {(connection.device || connection.game) && (
                    <Text style={styles.historyDetails}>
                      {connection.device && `دستگاه: ${connection.device}`}
                      {connection.device && connection.game && ' • '}
                      {connection.game && `بازی: ${connection.game}`}
                    </Text>
                  )}
                  
                  <Text style={styles.historyDNS}>
                    {connection.dns.primary} • {connection.dns.secondary}
                  </Text>
                </Pressable>
              ))
            )}
          </Animated.View>
        </View>
      </ScrollView>

      {/* Add Custom DNS Modal */}
      <Modal visible={showAddModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>افزودن DNS دستی</Text>
            
            <Text style={styles.inputLabel}>نام DNS</Text>
            <TextInput
              style={styles.input}
              value={customDNS.name}
              onChangeText={(text) => setCustomDNS(prev => ({ ...prev, name: text }))}
              placeholder="مثال: DNS سفارشی من"
              placeholderTextColor={isDark ? '#6B7280' : '#9CA3AF'}
            />

            <Text style={styles.inputLabel}>DNS اولیه</Text>
            <TextInput
              style={styles.input}
              value={customDNS.primary}
              onChangeText={(text) => setCustomDNS(prev => ({ ...prev, primary: text }))}
              placeholder="مثال: 8.8.8.8"
              placeholderTextColor={isDark ? '#6B7280' : '#9CA3AF'}
            />

            <Text style={styles.inputLabel}>DNS ثانویه</Text>
            <TextInput
              style={styles.input}
              value={customDNS.secondary}
              onChangeText={(text) => setCustomDNS(prev => ({ ...prev, secondary: text }))}
              placeholder="مثال: 8.8.4.4"
              placeholderTextColor={isDark ? '#6B7280' : '#9CA3AF'}
            />

            <Text style={styles.inputLabel}>نوع IP</Text>
            <View style={styles.ipVersionSelector}>
              <Pressable 
                style={[styles.ipVersionButton, customDNS.ipVersion === 'ipv4' && styles.selectedIpVersion]}
                onPress={() => setCustomDNS(prev => ({ ...prev, ipVersion: 'ipv4' }))}
              >
                <Text style={[styles.ipVersionText, customDNS.ipVersion === 'ipv4' && styles.selectedIpVersionText]}>
                  IPv4
                </Text>
              </Pressable>
              <Pressable 
                style={[styles.ipVersionButton, customDNS.ipVersion === 'ipv6' && styles.selectedIpVersion]}
                onPress={() => setCustomDNS(prev => ({ ...prev, ipVersion: 'ipv6' }))}
              >
                <Text style={[styles.ipVersionText, customDNS.ipVersion === 'ipv6' && styles.selectedIpVersionText]}>
                  IPv6
                </Text>
              </Pressable>
            </View>

            <View style={styles.modalButtons}>
              <Pressable 
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setShowAddModal(false)}
              >
                <Text style={styles.modalButtonText}>لغو</Text>
              </Pressable>
              <Pressable 
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleAddCustomDNS}
              >
                <Text style={styles.modalButtonText}>افزودن</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

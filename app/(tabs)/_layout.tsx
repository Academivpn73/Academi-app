
import React from 'react';
import { Tabs } from 'expo-router';
import { useTheme } from '../../contexts/ThemeContext';
import { IconSymbol } from '../../components/IconSymbol';

export default function TabLayout() {
  const { isDark } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#A855F7',
        tabBarInactiveTintColor: isDark ? '#6B7280' : '#9CA3AF',
        tabBarStyle: {
          backgroundColor: isDark ? '#1E1E2E' : '#FFFFFF',
          borderTopColor: isDark ? '#313244' : '#E5E7EB',
          borderTopWidth: 1,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerStyle: {
          backgroundColor: isDark ? '#1E1E2E' : '#FFFFFF',
        },
        headerTintColor: isDark ? '#CDD6F4' : '#1F2937',
        headerTitleStyle: {
          fontWeight: '700',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'خانه',
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="house.fill" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="gaming"
        options={{
          title: 'گیمینگ',
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="gamecontroller.fill" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="download"
        options={{
          title: 'دانلود',
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="arrow.down.circle.fill" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ping"
        options={{
          title: 'پینگ تست',
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="wifi" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="connection"
        options={{
          title: 'اتصال',
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="link" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

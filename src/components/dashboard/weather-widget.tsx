'use client';

import { motion } from 'framer-motion';
import { 
  Cloud, 
  Droplets, 
  Wind, 
  Sun, 
  CloudRain, 
  Thermometer,
  Sunrise,
  Sunset
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface WeatherWidgetProps {
  className?: string;
}

const weatherData = {
  current: {
    temp: 24,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    uvIndex: 6,
    feelsLike: 26,
  },
  forecast: [
    { day: 'Mon', temp: 25, icon: 'sun', condition: 'Sunny' },
    { day: 'Tue', temp: 23, icon: 'cloud', condition: 'Cloudy' },
    { day: 'Wed', temp: 21, icon: 'rain', condition: 'Rainy' },
    { day: 'Thu', temp: 22, icon: 'sun', condition: 'Sunny' },
    { day: 'Fri', temp: 24, icon: 'sun', condition: 'Sunny' },
  ],
  alerts: [
    { type: 'info', message: 'Light rain expected Wednesday' },
  ],
};

export function WeatherWidget({ className }: WeatherWidgetProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        'liquid-morph p-6 relative overflow-hidden',
        className
      )}
    >
      {/* Background glow effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F59E0B]/20 to-transparent rounded-full blur-2xl" />
      
      {/* Current Weather */}
      <div className="relative">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-[12px] font-medium text-[rgba(255,255,255,0.5)] mb-1">Current Weather</p>
            <div className="flex items-baseline gap-2">
              <span className="text-[40px] font-bold text-white leading-none">{weatherData.current.temp}°</span>
              <span className="text-[14px] text-[rgba(255,255,255,0.6)]">C</span>
            </div>
            <p className="text-[13px] text-[rgba(255,255,255,0.7)] mt-1">{weatherData.current.condition}</p>
          </div>
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F59E0B]/30 to-[#F59E0B]/10 flex items-center justify-center">
              <Sun className="w-8 h-8 text-[#F59E0B]" />
            </div>
          </motion.div>
        </div>

        {/* Weather Details */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <WeatherDetail
            icon={Droplets}
            label="Humidity"
            value={`${weatherData.current.humidity}%`}
          />
          <WeatherDetail
            icon={Wind}
            label="Wind"
            value={`${weatherData.current.windSpeed} km/h`}
          />
          <WeatherDetail
            icon={Thermometer}
            label="Feels Like"
            value={`${weatherData.current.feelsLike}°`}
          />
        </div>

        {/* 5-Day Forecast */}
        <div className="border-t border-[rgba(255,255,255,0.08)] pt-4">
          <p className="text-[11px] font-medium text-[rgba(255,255,255,0.5)] uppercase tracking-wider mb-3">
            5-Day Forecast
          </p>
          <div className="flex justify-between">
            {weatherData.forecast.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-[11px] text-[rgba(255,255,255,0.5)] mb-1">{day.day}</p>
                <div className="w-8 h-8 rounded-lg bg-[rgba(255,255,255,0.05)] flex items-center justify-center mx-auto mb-1">
                  {day.icon === 'sun' && <Sun className="w-4 h-4 text-[#F59E0B]" />}
                  {day.icon === 'cloud' && <Cloud className="w-4 h-4 text-[rgba(255,255,255,0.7)]" />}
                  {day.icon === 'rain' && <CloudRain className="w-4 h-4 text-[#3B82F6]" />}
                </div>
                <p className="text-[13px] font-medium text-white">{day.temp}°</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Alert */}
        {weatherData.alerts.length > 0 && (
          <div className="mt-4 p-3 rounded-xl bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)]">
            <p className="text-[12px] text-[#3B82F6] flex items-center gap-2">
              <Cloud className="w-3 h-3" />
              {weatherData.alerts[0].message}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function WeatherDetail({ 
  icon: Icon, 
  label, 
  value 
}: { 
  icon: React.ElementType; 
  label: string; 
  value: string;
}) {
  return (
    <div className="text-center p-2 rounded-xl bg-[rgba(255,255,255,0.03)]">
      <Icon className="w-4 h-4 text-[rgba(255,255,255,0.5)] mx-auto mb-1" />
      <p className="text-[10px] text-[rgba(255,255,255,0.4)]">{label}</p>
      <p className="text-[13px] font-medium text-white">{value}</p>
    </div>
  );
}

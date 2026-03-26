'use client';

import { motion } from 'framer-motion';
import { 
  Sun, 
  Cloud, 
  CloudRain, 
  Wind, 
  Droplets, 
  Thermometer,
  Eye,
  Gauge,
  Sunrise,
  Sunset,
  AlertTriangle,
  Calendar
} from 'lucide-react';

const currentWeather = {
  temp: 24,
  feelsLike: 26,
  condition: 'Partly Cloudy',
  humidity: 65,
  windSpeed: 12,
  windDirection: 'NE',
  pressure: 1013,
  visibility: 10,
  uvIndex: 6,
  dewPoint: 16,
  sunrise: '05:42',
  sunset: '20:15',
};

const hourlyForecast = [
  { time: 'Now', temp: 24, icon: 'sun', condition: 'Sunny' },
  { time: '14:00', temp: 26, icon: 'sun', condition: 'Sunny' },
  { time: '15:00', temp: 27, icon: 'cloud', condition: 'Partly Cloudy' },
  { time: '16:00', temp: 26, icon: 'cloud', condition: 'Cloudy' },
  { time: '17:00', temp: 25, icon: 'rain', condition: 'Light Rain' },
  { time: '18:00', temp: 23, icon: 'cloud', condition: 'Cloudy' },
];

const weeklyForecast = [
  { day: 'Monday', date: 'Jul 15', high: 27, low: 18, icon: 'sun', condition: 'Sunny', rainChance: 0 },
  { day: 'Tuesday', date: 'Jul 16', high: 25, low: 17, icon: 'cloud', condition: 'Partly Cloudy', rainChance: 20 },
  { day: 'Wednesday', date: 'Jul 17', high: 22, low: 16, icon: 'rain', condition: 'Rainy', rainChance: 80 },
  { day: 'Thursday', date: 'Jul 18', high: 24, low: 17, icon: 'cloud', condition: 'Cloudy', rainChance: 30 },
  { day: 'Friday', date: 'Jul 19', high: 26, low: 18, icon: 'sun', condition: 'Sunny', rainChance: 5 },
  { day: 'Saturday', date: 'Jul 20', high: 28, low: 19, icon: 'sun', condition: 'Sunny', rainChance: 0 },
  { day: 'Sunday', date: 'Jul 21', high: 27, low: 18, icon: 'sun', condition: 'Sunny', rainChance: 10 },
];

const weatherAlerts = [
  { id: 1, type: 'warning', title: 'Heavy Rain Expected', description: 'Wednesday expected to have heavy rainfall. Consider postponing outdoor activities.', time: 'In 2 days' },
  { id: 2, type: 'info', title: 'Ideal Planting Window', description: 'Next weekend shows optimal conditions for planting activities.', time: 'This weekend' },
];

function getWeatherIcon(icon: string) {
  switch (icon) {
    case 'sun':
      return <Sun className="w-5 h-5 text-[#F59E0B]" />;
    case 'cloud':
      return <Cloud className="w-5 h-5 text-[rgba(255,255,255,0.7)]" />;
    case 'rain':
      return <CloudRain className="w-5 h-5 text-[#3B82F6]" />;
    default:
      return <Sun className="w-5 h-5 text-[#F59E0B]" />;
  }
}

export function WeatherPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-[18px] font-bold text-white">Weather Center</h1>
          <p className="text-[13px] text-[rgba(255,255,255,0.5)] mt-1">Monitor weather conditions and forecasts</p>
        </div>
      </div>

      {/* Current Weather Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="liquid-morph p-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#F59E0B]/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#3B82F6]/20 to-transparent rounded-full blur-2xl" />
        
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#F59E0B]/40 to-[#F59E0B]/20 flex items-center justify-center"
            >
              <Sun className="w-12 h-12 text-[#F59E0B]" />
            </motion.div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-[56px] font-bold text-white leading-none">{currentWeather.temp}°</span>
                <span className="text-[16px] text-[rgba(255,255,255,0.5)]">C</span>
              </div>
              <p className="text-[16px] text-white font-medium mt-1">{currentWeather.condition}</p>
              <p className="text-[13px] text-[rgba(255,255,255,0.5)]">Feels like {currentWeather.feelsLike}°C</p>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            <WeatherDetail icon={Droplets} label="Humidity" value={`${currentWeather.humidity}%`} />
            <WeatherDetail icon={Wind} label="Wind" value={`${currentWeather.windSpeed} km/h ${currentWeather.windDirection}`} />
            <WeatherDetail icon={Gauge} label="Pressure" value={`${currentWeather.pressure} hPa`} />
            <WeatherDetail icon={Eye} label="Visibility" value={`${currentWeather.visibility} km`} />
          </div>
        </div>

        {/* Sunrise/Sunset */}
        <div className="flex items-center gap-8 mt-6 pt-6 border-t border-[rgba(255,255,255,0.1)]">
          <div className="flex items-center gap-3">
            <Sunrise className="w-5 h-5 text-[#F59E0B]" />
            <div>
              <p className="text-[11px] text-[rgba(255,255,255,0.4)]">Sunrise</p>
              <p className="text-[14px] font-medium text-white">{currentWeather.sunrise}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Sunset className="w-5 h-5 text-[#EC4899]" />
            <div>
              <p className="text-[11px] text-[rgba(255,255,255,0.4)]">Sunset</p>
              <p className="text-[14px] font-medium text-white">{currentWeather.sunset}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Thermometer className="w-5 h-5 text-[#EF4444]" />
            <div>
              <p className="text-[11px] text-[rgba(255,255,255,0.4)]">Dew Point</p>
              <p className="text-[14px] font-medium text-white">{currentWeather.dewPoint}°C</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hourly Forecast */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-5"
      >
        <h3 className="text-[14px] font-semibold text-white mb-4">Hourly Forecast</h3>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {hourlyForecast.map((hour, index) => (
            <motion.div
              key={hour.time}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 text-center p-4 rounded-2xl bg-[rgba(255,255,255,0.03)] min-w-[80px]"
            >
              <p className="text-[12px] text-[rgba(255,255,255,0.5)]">{hour.time}</p>
              <div className="w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.05)] flex items-center justify-center mx-auto my-2">
                {getWeatherIcon(hour.icon)}
              </div>
              <p className="text-[14px] font-semibold text-white">{hour.temp}°</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Forecast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 glass-card p-5"
        >
          <h3 className="text-[14px] font-semibold text-white mb-4">7-Day Forecast</h3>
          <div className="space-y-3">
            {weeklyForecast.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 rounded-xl bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.04)] transition-colors"
              >
                <div className="flex items-center gap-3 w-32">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.05)] flex items-center justify-center">
                    {getWeatherIcon(day.icon)}
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-white">{day.day}</p>
                    <p className="text-[11px] text-[rgba(255,255,255,0.4)]">{day.date}</p>
                  </div>
                </div>
                <p className="text-[12px] text-[rgba(255,255,255,0.6)]">{day.condition}</p>
                <div className="flex items-center gap-2">
                  {day.rainChance > 0 && (
                    <span className="text-[11px] text-[#3B82F6]">{day.rainChance}%</span>
                  )}
                  <span className="text-[14px] font-semibold text-white">{day.high}°</span>
                  <span className="text-[13px] text-[rgba(255,255,255,0.4)]">{day.low}°</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-5"
        >
          <h3 className="text-[14px] font-semibold text-white mb-4">Weather Alerts</h3>
          <div className="space-y-3">
            {weatherAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-4 rounded-xl ${
                  alert.type === 'warning' 
                    ? 'bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.2)]' 
                    : 'bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)]'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {alert.type === 'warning' ? (
                    <AlertTriangle className="w-4 h-4 text-[#F59E0B]" />
                  ) : (
                    <Calendar className="w-4 h-4 text-[#3B82F6]" />
                  )}
                  <span className={`text-[13px] font-medium ${
                    alert.type === 'warning' ? 'text-[#F59E0B]' : 'text-[#3B82F6]'
                  }`}>
                    {alert.title}
                  </span>
                </div>
                <p className="text-[12px] text-[rgba(255,255,255,0.6)]">{alert.description}</p>
                <p className="text-[11px] text-[rgba(255,255,255,0.4)] mt-2">{alert.time}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function WeatherDetail({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="text-center">
      <Icon className="w-4 h-4 text-[rgba(255,255,255,0.5)] mx-auto mb-1" />
      <p className="text-[10px] text-[rgba(255,255,255,0.4)]">{label}</p>
      <p className="text-[12px] font-medium text-white">{value}</p>
    </div>
  );
}

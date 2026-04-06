/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Youtube, 
  Facebook, 
  Music2, 
  Settings, 
  Gamepad2, 
  CheckCircle2, 
  ArrowLeft,
  ShieldCheck,
  ExternalLink,
  Target,
  Zap,
  MousePointer2
} from 'lucide-react';

// Social Media Links
const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=61578232448886",
  tiktok: "https://www.tiktok.com/@rahixgaming1?_r=1&_t=ZS-95Ic9UIcY0S",
  youtube: "https://youtube.com/@rahixgaming1?si=zQb29VrdCipGXqNq"
};

type Screen = 'permission' | 'main' | 'setup' | 'success';

export default function App() {
  const [screen, setScreen] = useState<Screen>('permission');
  const [permissionsGranted, setPermissionsGranted] = useState(false);
  const [customSettings, setCustomSettings] = useState({
    headshotRate: 85,
    sensitivity: 90,
    aimAssist: true,
    recoilControl: 75
  });

  const handleGrantPermission = () => {
    setPermissionsGranted(true);
    setScreen('main');
  };

  const goToGame = () => {
    // In a real app, this might use a deep link or intent
    // For this web app, we'll simulate it or provide a message
    window.open('https://play.google.com/store/apps/details?id=com.dts.freefireth', '_blank');
  };

  const renderPermissionScreen = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-screen bg-neutral-950 text-white p-6 text-center"
    >
      <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(220,38,38,0.5)]">
        <ShieldCheck size={48} />
      </div>
      <h1 className="text-3xl font-black mb-4 tracking-tighter italic">FF PANEL PRO</h1>
      <p className="text-neutral-400 mb-8 max-w-xs">
        To provide the best experience, we need your permission to optimize your device settings.
      </p>
      
      <div className="space-y-4 w-full max-w-xs mb-10">
        <div className="bg-neutral-900 p-4 rounded-xl flex items-center gap-4 border border-neutral-800">
          <div className="text-red-500"><Youtube size={24} /></div>
          <div className="text-left">
            <p className="text-sm font-bold">Subscribe YouTube</p>
            <p className="text-xs text-neutral-500">Support Rahix Gaming</p>
          </div>
          <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="ml-auto text-neutral-400 hover:text-white">
            <ExternalLink size={18} />
          </a>
        </div>
        <div className="bg-neutral-900 p-4 rounded-xl flex items-center gap-4 border border-neutral-800">
          <div className="text-blue-500"><Facebook size={24} /></div>
          <div className="text-left">
            <p className="text-sm font-bold">Follow Facebook</p>
            <p className="text-xs text-neutral-500">Join our community</p>
          </div>
          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="ml-auto text-neutral-400 hover:text-white">
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <button 
        onClick={handleGrantPermission}
        className="w-full max-w-xs bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-red-900/20"
      >
        GRANT PERMISSIONS
      </button>
    </motion.div>
  );

  const renderMainMenu = () => (
    <motion.div 
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="flex flex-col min-h-screen bg-neutral-950 text-white p-6"
    >
      <header className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-2xl font-black italic text-red-600">DASHBOARD</h2>
          <p className="text-xs text-neutral-500">Welcome back, Gamer</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center">
          <Settings size={20} className="text-neutral-400" />
        </div>
      </header>

      <div className="grid gap-4">
        <button 
          onClick={() => setScreen('setup')}
          className="flex items-center gap-4 bg-gradient-to-r from-red-600 to-red-800 p-6 rounded-2xl shadow-xl shadow-red-900/20 active:scale-[0.98] transition-transform"
        >
          <div className="bg-white/20 p-3 rounded-xl"><Settings size={28} /></div>
          <div className="text-left">
            <p className="text-lg font-black italic">PANEL SETUP</p>
            <p className="text-xs text-white/70">Configure your hacks & settings</p>
          </div>
        </button>

        <button 
          onClick={goToGame}
          className="flex items-center gap-4 bg-neutral-900 p-6 rounded-2xl border border-neutral-800 active:scale-[0.98] transition-transform"
        >
          <div className="bg-red-600/20 p-3 rounded-xl text-red-500"><Gamepad2 size={28} /></div>
          <div className="text-left">
            <p className="text-lg font-black italic">GO TO GAME</p>
            <p className="text-xs text-neutral-500">Launch Free Fire directly</p>
          </div>
        </button>

        <div className="mt-4 grid grid-cols-1 gap-3">
          <a 
            href={SOCIAL_LINKS.youtube} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-neutral-900/50 p-4 rounded-xl border border-neutral-800/50 hover:bg-neutral-800 transition-colors"
          >
            <Youtube className="text-red-500" size={24} />
            <span className="font-bold">YouTube Channel</span>
          </a>
          <a 
            href={SOCIAL_LINKS.tiktok} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-neutral-900/50 p-4 rounded-xl border border-neutral-800/50 hover:bg-neutral-800 transition-colors"
          >
            <Music2 className="text-pink-500" size={24} />
            <span className="font-bold">TikTok Profile</span>
          </a>
          <a 
            href={SOCIAL_LINKS.facebook} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-neutral-900/50 p-4 rounded-xl border border-neutral-800/50 hover:bg-neutral-800 transition-colors"
          >
            <Facebook className="text-blue-500" size={24} />
            <span className="font-bold">Facebook Page</span>
          </a>
        </div>
      </div>
    </motion.div>
  );

  const renderSetupScreen = () => (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex flex-col min-h-screen bg-neutral-950 text-white p-6"
    >
      <button 
        onClick={() => setScreen('main')}
        className="flex items-center gap-2 text-neutral-400 mb-6 hover:text-white transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back to Dashboard</span>
      </button>

      <h2 className="text-3xl font-black italic mb-8 tracking-tighter">CUSTOMIZE <span className="text-red-600">PANEL</span></h2>

      <div className="space-y-8 flex-1">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Target size={18} className="text-red-500" />
              <span className="font-bold">Headshot Rate</span>
            </div>
            <span className="text-red-500 font-mono font-bold">{customSettings.headshotRate}%</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={customSettings.headshotRate}
            onChange={(e) => setCustomSettings({...customSettings, headshotRate: parseInt(e.target.value)})}
            className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-600"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Zap size={18} className="text-yellow-500" />
              <span className="font-bold">Sensitivity</span>
            </div>
            <span className="text-yellow-500 font-mono font-bold">{customSettings.sensitivity}x</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="200" 
            value={customSettings.sensitivity}
            onChange={(e) => setCustomSettings({...customSettings, sensitivity: parseInt(e.target.value)})}
            className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"
          />
        </div>

        <div className="flex items-center justify-between bg-neutral-900 p-4 rounded-xl border border-neutral-800">
          <div className="flex items-center gap-3">
            <MousePointer2 size={20} className="text-blue-500" />
            <span className="font-bold">Auto Aim Assist</span>
          </div>
          <button 
            onClick={() => setCustomSettings({...customSettings, aimAssist: !customSettings.aimAssist})}
            className={`w-12 h-6 rounded-full transition-colors relative ${customSettings.aimAssist ? 'bg-red-600' : 'bg-neutral-700'}`}
          >
            <motion.div 
              animate={{ x: customSettings.aimAssist ? 24 : 4 }}
              className="absolute top-1 w-4 h-4 bg-white rounded-full"
            />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-green-500" />
              <span className="font-bold">Recoil Control</span>
            </div>
            <span className="text-green-500 font-mono font-bold">{customSettings.recoilControl}%</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={customSettings.recoilControl}
            onChange={(e) => setCustomSettings({...customSettings, recoilControl: parseInt(e.target.value)})}
            className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-green-500"
          />
        </div>
      </div>

      <button 
        onClick={() => setScreen('success')}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-black italic py-5 rounded-2xl transition-all active:scale-95 shadow-xl shadow-red-900/40 mt-8 text-xl"
      >
        APPLY SETUP
      </button>
    </motion.div>
  );

  const renderSuccessScreen = () => (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-screen bg-neutral-950 text-white p-6 text-center"
    >
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-32 h-32 bg-red-600 rounded-3xl flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(220,38,38,0.6)]"
      >
        {/* Simulated FF Logo Style */}
        <div className="relative">
          <Target size={64} className="text-white" />
          <div className="absolute -top-2 -right-2 bg-white text-red-600 rounded-full p-1">
            <CheckCircle2 size={24} />
          </div>
        </div>
      </motion.div>
      
      <h2 className="text-4xl font-black italic mb-4 tracking-tighter">SETUP <span className="text-red-600">SUCCESS!</span></h2>
      <p className="text-neutral-400 mb-10">Your panel settings have been injected into the game engine.</p>
      
      <button 
        onClick={goToGame}
        className="w-full max-w-xs bg-white text-black font-black italic py-4 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-3"
      >
        <Gamepad2 size={24} />
        LAUNCH FREE FIRE
      </button>
      
      <button 
        onClick={() => setScreen('main')}
        className="mt-6 text-neutral-500 hover:text-white transition-colors underline underline-offset-4"
      >
        Back to Dashboard
      </button>
    </motion.div>
  );

  return (
    <div className="max-w-md mx-auto min-h-screen shadow-2xl relative overflow-hidden font-sans">
      <AnimatePresence mode="wait">
        {screen === 'permission' && renderPermissionScreen()}
        {screen === 'main' && renderMainMenu()}
        {screen === 'setup' && renderSetupScreen()}
        {screen === 'success' && renderSuccessScreen()}
      </AnimatePresence>
      
      {/* Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-900/20 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none z-0" />
    </div>
  );
}

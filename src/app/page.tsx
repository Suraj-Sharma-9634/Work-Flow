"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Moon, Sun, Mail, Zap, Briefcase, Crown } from "lucide-react"
import Image from "next/image"

export default function Component() {
  const [isDark, setIsDark] = useState(true)
  const [email, setEmail] = useState("")

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "FAQ's", href: "#faqs" },
  ]

  const footerLinks = [
    { name: "Privacy", href: "#privacy" },
    { name: "Terms", href: "#terms" },
    { name: "Contact Us", href: "#contact" },
  ]

  return (
    <div
      className={`min-h-screen font-['Poppins'] transition-all duration-500 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-black via-gray-900 to-blue-900"
          : "bg-gradient-to-b from-gray-50 via-blue-50 to-blue-200"
      }`}
    >
      {/* 3D Animated Universe Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Small 3D twinkling stars */}
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-twinkle-3d ${
              isDark ? "bg-white shadow-white/50" : "bg-blue-300 shadow-blue-300/60"
            }`}
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`,
            }}
          />
        ))}

        {/* Floating 3D particles with depth */}
        {[...Array(40)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className={`absolute rounded-full animate-float-3d ${
              isDark
                ? "bg-gradient-to-br from-blue-400 to-purple-500 shadow-lg shadow-blue-400/30"
                : "bg-gradient-to-br from-blue-200 to-purple-300 shadow-lg shadow-blue-200/40"
            }`}
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${12 + Math.random() * 6}s`,
            }}
          />
        ))}

        {/* Large glowing 3D orbs */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className={`absolute rounded-full blur-sm animate-drift-3d ${
              isDark
                ? "bg-gradient-radial from-blue-400/40 via-purple-400/30 to-transparent"
                : "bg-gradient-radial from-blue-300/50 via-purple-300/40 to-transparent"
            }`}
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              filter: `blur(${Math.random() * 2 + 1}px)`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-4 md:px-6 py-4 md:py-6 relative z-10">
        <div className="flex items-center gap-2 px-[120px]">
          {isDark ? (
            <Image src="/workflow-logo-dark.jpg" alt="Work-Flow Logo" width={120} height={40} className="h-8 w-auto" />
          ) : (
            <Image src="/workflow-logo.png" alt="Work-Flow Logo" width={120} height={40} className="h-8 w-auto" />
          )}
        </div>

        {/* Navigation Menu */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isDark ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Theme Toggle Buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDark(true)}
              className={`gap-2 text-xs px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-md ${
                isDark
                  ? "text-white bg-gray-800/60 shadow-gray-800/50 border border-gray-700/50"
                  : "text-gray-600 hover:text-gray-900 bg-white/60 shadow-gray-200/50 border border-gray-200/50"
              }`}
            >
              <Moon className="w-3 h-3 shadow-none" />
              Dark
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDark(false)}
              className={`gap-2 text-xs px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-md ${
                !isDark
                  ? "text-gray-900 bg-white/80 shadow-gray-200/60 border border-gray-300/50"
                  : "text-gray-400 hover:text-white bg-gray-700/60 shadow-gray-700/50 border border-gray-600/50"
              }`}
            >
              <Sun className="w-3 h-3" />
              Light
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-6 pb-12 relative z-10 md:pl-40">
        {/* Funky Join WORK-FLOW Text */}
        <div className="max-w-7xl pt-4 mb-8 md:pt-0.5 font-sans">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-5 mt-9">
            <span
              className={`font-['Kanit'] tracking-wider bg-transparent font-normal ${isDark ? "text-white" : "text-black"}`}
            >
              Join
            </span>{" "}
            <span className="font-black font-sans opacity-100 tracking-[0.001em]">WORK-FLOW</span>
          </h2>
        </div>

        {/* Hero Section - Slightly Centered */}
        <div className="max-w-7xl pt-4 md:pt-0">
          <h1
            className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-[35px] mt-11 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Unlock Your Business Potential with the Power of AI
          </h1>

          <p
            className={`leading-relaxed max-w-2xl font-bold font-mono text-lg mt-3.5 mb-[42px] ${
              isDark ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Work-Flow equips fractional executives, consultants, and elite freelancers with AI-powered insights to
            optimize cash flow, streamline deal flow, and unlock growth opportunities—all in one intuitive platform
          </p>

          {/* Email Signup */}
          <div className="max-w-sm space-y-3 mb-12">
            <div className="relative">
              <Mail
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`pl-12 h-10 text-sm rounded-full transition-all duration-300 hover:scale-[1.02] focus:scale-[1.02] shadow-xl ${
                  isDark
                    ? "bg-gray-800/60 border-gray-700/50 text-white placeholder:text-gray-400 focus:bg-gray-800/80 shadow-gray-800/30"
                    : "bg-white/90 border-gray-300/50 text-gray-900 placeholder:text-gray-500 focus:bg-white shadow-gray-200/40"
                }`}
              />
            </div>
            <Button
              className={`w-full h-10 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl my-5 ${
                isDark
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-blue-600/30"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-blue-600/30"
              }`}
              onClick={() => console.log("Email signup:", email)}
            >
              <span className="relative z-10">Get Early Access Now</span>
            </Button>
          </div>

          {/* Enhanced Social Proof Section */}
          <div className="flex items-center gap-6 mb-16">
            <div className="flex -space-x-2">
              {[
                { initials: "JD", bg: "bg-gradient-to-br from-purple-500 to-purple-600" },
                { initials: "AS", bg: "bg-gradient-to-br from-blue-500 to-blue-600" },
                { initials: "MK", bg: "bg-gradient-to-br from-purple-600 to-pink-600" },
                { initials: "SL", bg: "bg-gradient-to-br from-indigo-500 to-purple-600" },
                { initials: "+26", bg: "bg-gradient-to-br from-gray-600 to-gray-700" },
              ].map((avatar, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 rounded-full ${avatar.bg} flex items-center justify-center text-white text-sm font-bold border-2 ${
                    isDark ? "border-gray-800" : "border-white"
                  } shadow-lg`}
                >
                  {avatar.initials}
                </div>
              ))}
            </div>
            <div>
              <p className={`text-base md:text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                Join 30+ ecommerce founders and marketers
              </p>
              <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>already on the list</p>
            </div>
          </div>
        </div>

        {/* Feature Cards Section - Centered */}
        <div className="max-w-5xl -ml-5">
          <div className="grid md:grid-cols-3 gap-4 tracking-widest border-0 font-medium px-0 py-3.5 shadow-none">
            {/* Card 1 */}
            <div
              className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 w-full mx-5 shadow-lg ${
                isDark
                  ? "bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 shadow-xl shadow-gray-900/20"
                  : "bg-gradient-to-br from-white/80 to-gray-50/80 border border-gray-200/50 shadow-xl shadow-gray-200/20"
              } backdrop-blur-sm`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  isDark ? "bg-purple-600/20" : "bg-purple-100"
                }`}
              >
                <Zap className={`w-6 h-6 ${isDark ? "text-purple-400" : "text-purple-600"}`} />
              </div>
              <h3 className={`text-lg font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                Get early access to Workflow
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Be among the first to experience our revolutionary platform before anyone else
              </p>
            </div>

            {/* Card 2 */}
            <div
              className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 w-full shadow-lg mx-[70px] ${
                isDark
                  ? "bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 shadow-xl shadow-gray-900/20"
                  : "bg-gradient-to-br from-white/80 to-gray-50/80 border border-gray-200/50 shadow-xl shadow-gray-200/20"
              } backdrop-blur-sm`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  isDark ? "bg-blue-600/20" : "bg-blue-100"
                }`}
              >
                <Briefcase className={`w-6 h-6 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
              </div>
              <h3 className={`text-lg font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                Automate conversations, boost sales
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Save hours with intelligent automation that actually converts visitors into customers
              </p>
            </div>

            {/* Card 3 */}
            <div
              className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 w-full px-6 shadow-lg mx-[114px] ${
                isDark
                  ? "bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 shadow-xl shadow-gray-900/20"
                  : "bg-gradient-to-br from-white/80 to-gray-50/80 border border-gray-200/50 shadow-xl shadow-gray-200/20"
              } backdrop-blur-sm`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  isDark ? "bg-purple-600/20" : "bg-purple-100"
                }`}
              >
                <Crown className={`w-6 h-6 ${isDark ? "text-purple-400" : "text-purple-600"}`} />
              </div>
              <h3 className={`text-lg font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                Exclusive perks for early adopters
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Special pricing, premium features, and VIP support just for our founding users
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-4 md:px-6 pb-6 pt-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className={`text-sm font-bold ${isDark ? "text-gray-200" : "text-gray-800"}`}>Follow us</span>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {/* X (Twitter) */}
              <a href="https://x.com/workflow_in" target="_blank" rel="noopener noreferrer">
                <svg
                  className={`w-5 h-5 transition-all duration-300 hover:scale-110 cursor-pointer ${
                    isDark ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Discord */}
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg
                  className={`w-5 h-5 transition-all duration-300 hover:scale-110 cursor-pointer ${
                    isDark ? "text-gray-300 hover:text-indigo-400" : "text-gray-700 hover:text-indigo-600"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/workflow-in" target="_blank" rel="noopener noreferrer">
                <svg
                  className={`w-5 h-5 transition-all duration-300 hover:scale-110 cursor-pointer ${
                    isDark ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg
                  className={`w-5 h-5 transition-all duration-300 hover:scale-110 cursor-pointer ${
                    isDark ? "text-gray-300 hover:text-pink-400" : "text-gray-700 hover:text-pink-600"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg
                  className={`w-5 h-5 transition-all duration-300 hover:scale-110 cursor-pointer ${
                    isDark ? "text-gray-300 hover:text-blue-500" : "text-gray-700 hover:text-blue-700"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex items-center justify-center gap-6 mb-4">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isDark ? "text-gray-400 hover:text-gray-200" : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <p className={`text-sm font-bold ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            © 2024 Work-Flow. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@900&display=swap');
        
        @keyframes twinkle-3d {
          0%, 100% { 
            opacity: 0.4; 
            transform: scale(1) translateZ(0px); 
          }
          50% { 
            opacity: 0.9; 
            transform: scale(1.15) translateZ(3px); 
          }
        }
        
        @keyframes float-3d {
          0% { 
            transform: translateY(0px) translateX(0px) translateZ(0px) rotateY(0deg); 
          }
          25% { 
            transform: translateY(-8px) translateX(5px) translateZ(2px) rotateY(20deg); 
          }
          50% { 
            transform: translateY(-5px) translateX(-5px) translateZ(3px) rotateY(40deg); 
          }
          75% { 
            transform: translateY(-10px) translateX(3px) translateZ(2px) rotateY(60deg); 
          }
          100% { 
            transform: translateY(0px) translateX(0px) translateZ(0px) rotateY(80deg); 
          }
        }
        
        @keyframes drift-3d {
          0% { 
            transform: translateY(0px) translateX(0px) translateZ(0px) rotate(0deg) scale(1); 
          }
          33% { 
            transform: translateY(-12px) translateX(8px) translateZ(2px) rotate(30deg) scale(1.05); 
          }
          66% { 
            transform: translateY(-8px) translateX(-10px) translateZ(3px) rotate(60deg) scale(0.95); 
          }
          100% { 
            transform: translateY(0px) translateX(0px) translateZ(0px) rotate(90deg) scale(1); 
          }
        }
        
        .animate-twinkle-3d {
          animation: twinkle-3d 3s ease-in-out infinite;
        }
        
        .animate-float-3d {
          animation: float-3d 15s ease-in-out infinite;
        }
        
        .animate-drift-3d {
          animation: drift-3d 18s linear infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  )
}

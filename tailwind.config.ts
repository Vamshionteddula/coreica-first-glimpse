import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'display': ['Orbitron', 'monospace'],
        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom Futuristic Colors
        'neon-cyan': 'hsl(var(--neon-cyan))',
        'neon-purple': 'hsl(var(--neon-purple))',
        'deep-space': 'hsl(var(--deep-space))',
        'silver': 'hsl(var(--silver))',
        'electric-blue': 'hsl(var(--electric-blue))',
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-neon': 'var(--gradient-neon)',
        'gradient-hero': 'var(--gradient-hero)',
      },
      boxShadow: {
        'neon': 'var(--shadow-neon)',
        'deep': 'var(--shadow-deep)',
        'glow-primary': 'var(--glow-primary)',
        'glow-accent': 'var(--glow-accent)',
        'card': 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%": { 
            boxShadow: "0 0 20px hsl(var(--accent) / 0.2)",
            transform: "scale(1)"
          },
          "100%": { 
            boxShadow: "0 0 40px hsl(var(--accent) / 0.4)",
            transform: "scale(1.02)"
          },
        },
        "slide-up": {
          "from": {
            opacity: "0",
            transform: "translateY(30px)"
          },
          "to": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-in": {
          "from": { opacity: "0" },
          "to": { opacity: "1" }
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        },
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 20px hsl(var(--accent) / 0.3)",
            transform: "scale(1)"
          },
          "50%": { 
            boxShadow: "0 0 60px hsl(var(--accent) / 0.6), 0 0 100px hsl(var(--primary) / 0.3)",
            transform: "scale(1.05)"
          }
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite alternate",
        "slide-up": "slide-up 0.8s ease-out forwards",
        "fade-in": "fade-in 1s ease-out forwards",
        "shimmer": "shimmer 2s infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

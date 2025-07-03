
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// Primary Brand Colors
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--foreground))',
					50: 'hsl(var(--primary-50))',
					100: 'hsl(var(--primary-100))',
					200: 'hsl(var(--primary-200))',
					300: 'hsl(var(--primary-300))',
					400: 'hsl(var(--primary-400))',
					500: 'hsl(var(--primary-500))',
					600: 'hsl(var(--primary-600))',
					700: 'hsl(var(--primary-700))',
					800: 'hsl(var(--primary-800))',
					900: 'hsl(var(--primary-900))',
					950: 'hsl(var(--primary-950))',
				},

				// Core Brand Colors
				midnight: {
					DEFAULT: 'hsl(var(--midnight))',
					50: 'hsl(var(--midnight-50))',
					100: 'hsl(var(--midnight-100))',
					200: 'hsl(var(--midnight-200))',
					300: 'hsl(var(--midnight-300))',
					400: 'hsl(var(--midnight-400))',
					500: 'hsl(var(--midnight-500))',
					600: 'hsl(var(--midnight-600))',
					700: 'hsl(var(--midnight-700))',
					800: 'hsl(var(--midnight-800))',
					900: 'hsl(var(--midnight-900))',
				},

				gold: {
					DEFAULT: 'hsl(var(--gold))',
					50: 'hsl(var(--gold-50))',
					100: 'hsl(var(--gold-100))',
					200: 'hsl(var(--gold-200))',
					300: 'hsl(var(--gold-300))',
					400: 'hsl(var(--gold-400))',
					500: 'hsl(var(--gold-500))',
					600: 'hsl(var(--gold-600))',
					700: 'hsl(var(--gold-700))',
					800: 'hsl(var(--gold-800))',
					900: 'hsl(var(--gold-900))',
				},

				charcoal: {
					DEFAULT: 'hsl(var(--charcoal))',
					50: 'hsl(var(--charcoal-50))',
					100: 'hsl(var(--charcoal-100))',
					200: 'hsl(var(--charcoal-200))',
					300: 'hsl(var(--charcoal-300))',
					400: 'hsl(var(--charcoal-400))',
					500: 'hsl(var(--charcoal-500))',
					600: 'hsl(var(--charcoal-600))',
					700: 'hsl(var(--charcoal-700))',
					800: 'hsl(var(--charcoal-800))',
					900: 'hsl(var(--charcoal-900))',
				},

				platinum: {
					DEFAULT: 'hsl(var(--platinum))',
					50: 'hsl(var(--platinum-50))',
					100: 'hsl(var(--platinum-100))',
					200: 'hsl(var(--platinum-200))',
					300: 'hsl(var(--platinum-300))',
					400: 'hsl(var(--platinum-400))',
					500: 'hsl(var(--platinum-500))',
					600: 'hsl(var(--platinum-600))',
					700: 'hsl(var(--platinum-700))',
					800: 'hsl(var(--platinum-800))',
					900: 'hsl(var(--platinum-900))',
				},

				sandstone: {
					DEFAULT: 'hsl(var(--sandstone))',
					50: 'hsl(var(--sandstone-50))',
					100: 'hsl(var(--sandstone-100))',
					200: 'hsl(var(--sandstone-200))',
					300: 'hsl(var(--sandstone-300))',
					400: 'hsl(var(--sandstone-400))',
					500: 'hsl(var(--sandstone-500))',
					600: 'hsl(var(--sandstone-600))',
					700: 'hsl(var(--sandstone-700))',
					800: 'hsl(var(--sandstone-800))',
					900: 'hsl(var(--sandstone-900))',
				},

				maroon: {
					DEFAULT: 'hsl(var(--maroon))',
					50: 'hsl(var(--maroon-50))',
					100: 'hsl(var(--maroon-100))',
					200: 'hsl(var(--maroon-200))',
					300: 'hsl(var(--maroon-300))',
					400: 'hsl(var(--maroon-400))',
					500: 'hsl(var(--maroon-500))',
					600: 'hsl(var(--maroon-600))',
					700: 'hsl(var(--maroon-700))',
					800: 'hsl(var(--maroon-800))',
					900: 'hsl(var(--maroon-900))',
				},

				slate: {
					DEFAULT: 'hsl(var(--slate))',
					50: 'hsl(var(--slate-50))',
					100: 'hsl(var(--slate-100))',
					200: 'hsl(var(--slate-200))',
					300: 'hsl(var(--slate-300))',
					400: 'hsl(var(--slate-400))',
					500: 'hsl(var(--slate-500))',
					600: 'hsl(var(--slate-600))',
					700: 'hsl(var(--slate-700))',
					800: 'hsl(var(--slate-800))',
					900: 'hsl(var(--slate-900))',
				},

				// Semantic Colors
				success: {
					DEFAULT: 'hsl(var(--success))',
					light: 'hsl(var(--success-light))',
					dark: 'hsl(var(--success-dark))',
				},

				warning: {
					DEFAULT: 'hsl(var(--warning))',
					light: 'hsl(var(--warning-light))',
					dark: 'hsl(var(--warning-dark))',
				},

				error: {
					DEFAULT: 'hsl(var(--error))',
					light: 'hsl(var(--error-light))',
					dark: 'hsl(var(--error-dark))',
				},

				info: {
					DEFAULT: 'hsl(var(--info))',
					light: 'hsl(var(--info-light))',
					dark: 'hsl(var(--info-dark))',
				},

				// Shadcn/UI Compatible Colors
				secondary: {
					DEFAULT: 'hsl(var(--charcoal))',
					foreground: 'hsl(var(--platinum))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				display: ['Inter Display', 'Inter', 'system-ui', 'sans-serif'],
				body: ['Inter', 'system-ui', 'sans-serif'],
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 0.6s ease-out',
				'slide-up': 'slideUp 0.8s ease-out',
				'scale-in': 'scaleIn 0.5s ease-out',
				'glow': 'glow 2s ease-in-out infinite alternate',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fadeIn': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'slideUp': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scaleIn': {
					'0%': { opacity: '0', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'glow': {
					'0%': { boxShadow: '0 0 20px hsl(var(--gold) / 0.3)' },
					'100%': { boxShadow: '0 0 40px hsl(var(--gold) / 0.6)' }
				}
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--midnight)) 100%)',
				'gradient-gold': 'linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--sandstone)) 100%)',
				'gradient-hero': 'linear-gradient(135deg, hsl(var(--midnight)) 0%, hsl(var(--primary)) 50%, hsl(var(--charcoal)) 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
